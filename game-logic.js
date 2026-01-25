// ==================== ÉTAT DU JEU ====================
let gameState = {
    playerName: '',
    archetype: null,
    gauges: {humanism:50,prudence:50,princes:30,clergy:30},
    cards: [],
    currentScene: null,
    visitedScenes: []
};

// ==================== FONCTIONS DU JEU ====================
function startGame() {
    document.getElementById('titleScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('characterCreation').style.display = 'block';
    initializeCollection();
}

function selectArchetype(el, type) {
    document.querySelectorAll('.archetype-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    gameState.archetype = type;
    checkCanBegin();
}

function checkCanBegin() {
    const name = document.getElementById('characterName').value.trim();
    document.getElementById('btnBegin').disabled = !(name && gameState.archetype);
}

function beginAdventure() {
    gameState.playerName = document.getElementById('characterName').value.trim();
    
    const bonuses = {
        artisan:{humanism:15,princes:5},
        scholar:{humanism:20,clergy:-5},
        merchant:{prudence:10,princes:10},
        servant:{princes:20,clergy:-10},
        novice:{clergy:20,princes:-10}
    };
    const names = {artisan:'Apprenti artisan',scholar:'Jeune lettré',merchant:'Fils de marchand',servant:'Serviteur des Médicis',novice:'Novice dominicain'};
    const icons = {artisan:'🎨',scholar:'📚',merchant:'💰',servant:'🏛️',novice:'✝️'};

    const bonus = bonuses[gameState.archetype];
    for (let stat in bonus) {
        gameState.gauges[stat] = Math.max(0, Math.min(100, gameState.gauges[stat] + bonus[stat]));
    }

    document.getElementById('gameHeader').style.display = 'block';
    document.getElementById('btnCollection').style.display = 'block';
    document.getElementById('playerName').textContent = gameState.playerName;
    document.getElementById('playerArchetype').textContent = names[gameState.archetype];
    document.getElementById('playerAvatar').textContent = icons[gameState.archetype];

    document.getElementById('characterCreation').style.display = 'none';
    document.getElementById('sceneContainer').style.display = 'block';

    updateGauges();
    showScene('intro');
}

function showScene(sceneId) {
    const scene = SCENES[sceneId];
    if (!scene) { console.error('Scene not found:', sceneId); return; }

    gameState.currentScene = sceneId;
    if (!gameState.visitedScenes.includes(sceneId)) gameState.visitedScenes.push(sceneId);

    if (scene.ending) { showEnding(scene); return; }

    if (scene.cards) {
        scene.cards.forEach(cardId => {
            if (!gameState.cards.includes(cardId)) {
                gameState.cards.push(cardId);
                showCardEarned(cardId);
            }
        });
    }

    let html = `<div class="scene active">
        <div class="scene-location">${scene.location}</div>
        <h2 class="scene-title">${scene.title}</h2>
        <div class="scene-illustration">${scene.icon}</div>
        ${scene.text}
        <div class="choices-container">
            <div class="choices-title">Que faites-vous ?</div>`;

    scene.choices.forEach((choice, i) => {
        let effectText = '';
        if (choice.effects) {
            const effects = [];
            const statNames = {humanism:'Humanisme',prudence:'Prudence',princes:'Princes',clergy:'Clergé'};
            for (let stat in choice.effects) {
                const val = choice.effects[stat];
                if (val > 0) effects.push(`+${val} ${statNames[stat]}`);
                else if (val < 0) effects.push(`${val} ${statNames[stat]}`);
            }
            if (effects.length > 0) effectText = `<span class="choice-effect">${effects.join(' | ')}</span>`;
        }
        html += `<button class="choice-btn" onclick="makeChoice(${i})">${choice.text}${effectText}</button>`;
    });

    html += `</div></div>`;
    document.getElementById('sceneContent').innerHTML = html;
    updateCardsCount();
}

function makeChoice(choiceIndex) {
    const scene = SCENES[gameState.currentScene];
    const choice = scene.choices[choiceIndex];

    if (choice.effects) {
        for (let stat in choice.effects) {
            gameState.gauges[stat] = Math.max(0, Math.min(100, gameState.gauges[stat] + choice.effects[stat]));
        }
        updateGauges();
    }

    if (gameState.gauges.prudence <= 0) { showDeathByImprudence(); return; }

    showScene(choice.target);
}

function showDeathByImprudence() {
    document.getElementById('sceneContainer').style.display = 'none';
    document.getElementById('endingScreen').style.display = 'block';
    document.getElementById('endingTitle').textContent = 'Fin Tragique';
    document.getElementById('endingTitle').className = 'ending-title death';
    document.getElementById('endingText').innerHTML = `<p>Votre imprudence vous a perdu. Dans les ruelles sombres de Florence, un coup de dague met fin à votre aventure. Les intrigues de la Renaissance ne pardonnent pas aux imprudents.</p><p>Peut-être qu'avec plus de prudence, vous auriez découvert les secrets de cette époque extraordinaire...</p>`;
    document.getElementById('finalCards').textContent = gameState.cards.length;
    document.getElementById('finalHumanism').textContent = gameState.gauges.humanism;
    document.getElementById('finalPrinces').textContent = gameState.gauges.princes;
    document.getElementById('finalClergy').textContent = gameState.gauges.clergy;
}

function showEnding(scene) {
    document.getElementById('sceneContainer').style.display = 'none';
    document.getElementById('endingScreen').style.display = 'block';
    
    if (scene.cards) {
        scene.cards.forEach(cardId => {
            if (!gameState.cards.includes(cardId)) gameState.cards.push(cardId);
        });
    }

    document.getElementById('endingTitle').textContent = scene.endTitle;
    document.getElementById('endingTitle').className = 'ending-title ' + scene.ending;
    
    let endingHtml = scene.text + `<p style="margin-top:2rem;font-weight:600;">${scene.endText}</p>`;
    document.getElementById('endingText').innerHTML = endingHtml;
    
    document.getElementById('finalCards').textContent = gameState.cards.length;
    document.getElementById('finalHumanism').textContent = gameState.gauges.humanism;
    document.getElementById('finalPrinces').textContent = gameState.gauges.princes;
    document.getElementById('finalClergy').textContent = gameState.gauges.clergy;
    
    updateCardsCount();
    updateCollectionDisplay();
}

function updateGauges() {
    document.getElementById('gaugeHumanism').style.width = gameState.gauges.humanism + '%';
    document.getElementById('gaugePrudence').style.width = gameState.gauges.prudence + '%';
    document.getElementById('gaugePrinces').style.width = gameState.gauges.princes + '%';
    document.getElementById('gaugeClergy').style.width = gameState.gauges.clergy + '%';
}

function updateCardsCount() {
    document.getElementById('cardsCount').textContent = gameState.cards.length;
}

function showCardEarned(cardId) {
    const card = CARDS[cardId];
    if (!card) return;

    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';
    overlay.onclick = closeCardEarned;

    const cardElement = document.createElement('div');
    cardElement.className = 'card-earned';
    cardElement.innerHTML = `<div class="renaissance-card">
        <span class="card-category ${card.category}">${getCategoryName(card.category)}</span>
        <h3 class="card-title">${card.title}</h3>
        <div class="card-image">${card.icon}</div>
        <p class="card-description">${card.description}</p>
        <p class="card-fact">💡 ${card.fact}</p>
        <button class="card-close" onclick="closeCardEarned()">Continuer</button>
    </div>`;

    document.body.appendChild(overlay);
    document.body.appendChild(cardElement);
    updateCardsCount();
    updateCollectionDisplay();
}

function closeCardEarned() {
    const overlay = document.querySelector('.card-overlay');
    const card = document.querySelector('.card-earned');
    if (overlay) overlay.remove();
    if (card) card.remove();
}

function getCategoryName(category) {
    const names = {art:'Art',science:'Science',politics:'Politique',religion:'Religion',person:'Personnage'};
    return names[category] || category;
}

function initializeCollection() {
    const grid = document.getElementById('collectionGrid');
    grid.innerHTML = '';

    for (let cardId in CARDS) {
        const card = CARDS[cardId];
        const cardElement = document.createElement('div');
        cardElement.className = 'collection-card';
        cardElement.id = 'collection-' + cardId;
        cardElement.innerHTML = `<span class="card-category ${card.category}">${getCategoryName(card.category)}</span>
            <h3 class="card-title">${card.title}</h3>
            <div class="card-image" style="height:80px;font-size:2rem;">${card.icon}</div>
            <p class="card-description" style="font-size:0.85rem;">${card.description}</p>`;
        grid.appendChild(cardElement);
    }
}

function updateCollectionDisplay() {
    gameState.cards.forEach(cardId => {
        const cardElement = document.getElementById('collection-' + cardId);
        if (cardElement) cardElement.classList.add('owned');
    });
}

function showCollection() {
    updateCollectionDisplay();
    document.getElementById('cardsCollection').style.display = 'block';
}

function hideCollection() {
    document.getElementById('cardsCollection').style.display = 'none';
}

function restartGame() {
    gameState = {playerName:'',archetype:null,gauges:{humanism:50,prudence:50,princes:30,clergy:30},cards:[],currentScene:null,visitedScenes:[]};

    document.getElementById('endingScreen').style.display = 'none';
    document.getElementById('sceneContainer').style.display = 'none';
    document.getElementById('gameHeader').style.display = 'none';
    document.getElementById('btnCollection').style.display = 'none';
    document.getElementById('characterCreation').style.display = 'block';
    document.getElementById('characterName').value = '';
    document.querySelectorAll('.archetype-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('btnBegin').disabled = true;
    initializeCollection();
}
