// ==================== LEXIQUE ====================
const LEXICON = {
    lieux: [
        {term: "Porta San Gallo", def: "L'une des principales portes de la cité, au nord. Les voyageurs y payaient une taxe pour entrer."},
        {term: "Piazza del Duomo", def: "La place de la cathédrale, cœur religieux de Florence où se dresse Santa Maria del Fiore."},
        {term: "Piazza della Signoria", def: "Place principale de Florence, lieu de pouvoir politique. C'est là que Savonarole sera brûlé en 1498."},
        {term: "Palazzo Medici", def: "Résidence de la famille Médicis, construite par Michelozzo vers 1444. Chef-d'œuvre de l'architecture Renaissance."},
        {term: "San Marco", def: "Couvent dominicain célèbre pour ses fresques de Fra Angelico et pour avoir abrité Savonarole."},
        {term: "Santa Croce", def: "Quartier des tanneurs et basilique franciscaine où reposent Michel-Ange, Galilée et Machiavel."},
        {term: "Oltrarno", def: "\"Au-delà de l'Arno\". Quartier populaire des artisans, sur la rive sud du fleuve."},
        {term: "Ponte Vecchio", def: "Le plus vieux pont de Florence, bordé de boutiques d'orfèvres."},
        {term: "Baptistère", def: "Édifice roman octogonal célèbre pour ses portes de bronze, dont les \"Portes du Paradis\" de Ghiberti."}
    ],
    personnes: [
        {term: "Médicis", def: "Famille de banquiers qui domine Florence depuis 1434. Grands mécènes des arts et des lettres."},
        {term: "Laurent le Magnifique", def: "Lorenzo de' Medici (1449-1492), dirigeant de Florence et l'un des plus grands mécènes de l'histoire."},
        {term: "Piero de' Medici", def: "Fils de Laurent le Magnifique, il dirige Florence depuis 1492 mais manque du charisme de son père."},
        {term: "Savonarole", def: "Frère dominicain (1452-1498) qui prêche contre la corruption de l'Église et des Médicis."},
        {term: "Léonard de Vinci", def: "Génie universel (1452-1519) : peintre, sculpteur, architecte, ingénieur, anatomiste, musicien."},
        {term: "Michel-Ange", def: "Sculpteur et peintre (1475-1564). Son David et le plafond de la Sixtine sont des chefs-d'œuvre absolus."},
        {term: "Botticelli", def: "Peintre (1445-1510) célèbre pour \"La Naissance de Vénus\". Influencé par Savonarole, il brûla certaines œuvres."},
        {term: "Ghirlandaio", def: "Domenico Ghirlandaio (1449-1494), peintre florentin renommé, maître de Michel-Ange."},
        {term: "Fra Angelico", def: "Peintre dominicain (1395-1455) qui a décoré San Marco de fresques mystiques extraordinaires."},
        {term: "Machiavel", def: "Penseur politique (1469-1527), auteur du \"Prince\", fondateur de la science politique moderne."},
        {term: "Marsile Ficin", def: "Philosophe (1433-1499), traducteur de Platon et fondateur du néoplatonisme florentin."},
        {term: "Poliziano", def: "Poète et humaniste (1454-1494), précepteur des enfants de Laurent le Magnifique."}
    ],
    concepts: [
        {term: "Humanisme", def: "Mouvement intellectuel qui replace l'homme au centre et redécouvre les textes antiques."},
        {term: "Renaissance", def: "Période de renouveau artistique et intellectuel (XIVe-XVIe s.) née en Italie."},
        {term: "Bottega", def: "Atelier d'artiste où le maître forme ses apprentis. Lieu de transmission du savoir."},
        {term: "Mécénat", def: "Soutien financier accordé par les riches aux artistes et savants."},
        {term: "Néoplatonisme", def: "Philosophie qui cherche à concilier la pensée de Platon avec le christianisme."},
        {term: "Bûcher des Vanités", def: "Autodafé organisé par Savonarole (1497) où furent brûlés œuvres d'art, livres et objets de luxe."},
        {term: "Piagnoni", def: "\"Pleurnicheurs\". Surnom des partisans de Savonarole, fervents défenseurs de sa réforme morale."},
        {term: "Arrabbiati", def: "\"Les Enragés\". Faction hostile à Savonarole, composée de nobles et riches marchands."},
        {term: "Condottieri", def: "Chefs mercenaires qui louent leurs armées aux cités-États italiennes."}
    ],
    techniques: [
        {term: "Perspective", def: "Technique permettant de représenter la profondeur sur une surface plane, codifiée par Brunelleschi."},
        {term: "Sfumato", def: "Technique de Léonard consistant à estomper les contours pour créer des transitions douces."},
        {term: "Fresque", def: "Peinture murale réalisée sur un enduit frais, technique majeure de la Renaissance."},
        {term: "Dissection", def: "Étude du corps humain par ouverture des cadavres, interdite mais pratiquée en secret."}
    ],
    religion: [
        {term: "Dominicains", def: "Ordre religieux fondé au XIIIe siècle, voué à la prédication. Savonarole en était membre."},
        {term: "Franciscains", def: "Ordre religieux fondé par saint François, prônant la pauvreté et la charité."},
        {term: "Inquisition", def: "Tribunal ecclésiastique chargé de traquer l'hérésie."},
        {term: "Excommunication", def: "Exclusion de l'Église catholique, punition suprême pour un chrétien."}
    ]
};

// ==================== ÉTAT DU JEU ====================
let gameState = {
    playerName: '',
    archetype: null,
    gauges: {humanism:50, prudence:50, princes:30, clergy:30},
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
    initializeLexicon();
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
        artisan: {humanism:15, princes:5},
        scholar: {humanism:20, clergy:-5},
        merchant: {prudence:10, princes:10},
        servant: {princes:20, clergy:-10},
        novice: {clergy:20, princes:-10}
    };
    const names = {artisan:'Apprenti artisan', scholar:'Jeune lettré', merchant:'Fils de marchand', servant:'Serviteur des Médicis', novice:'Novice dominicain'};
    const icons = {artisan:'🎨', scholar:'📚', merchant:'💰', servant:'🏛️', novice:'✝️'};

    const bonus = bonuses[gameState.archetype];
    for (let stat in bonus) {
        gameState.gauges[stat] = Math.max(0, Math.min(100, gameState.gauges[stat] + bonus[stat]));
    }

    document.getElementById('gameHeader').style.display = 'block';
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
    if (!scene) { 
        console.error('Scene not found:', sceneId); 
        document.getElementById('sceneContent').innerHTML = `<div class="scene"><p>Erreur: Scène "${sceneId}" non trouvée.</p></div>`;
        return; 
    }

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

    let html = `<div class="scene">
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
            const statNames = {humanism:'Humanisme', prudence:'Prudence', princes:'Princes', clergy:'Clergé'};
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
    document.getElementById('endingText').innerHTML = `<p>Votre imprudence vous a perdu. Dans les ruelles sombres de Florence, un coup de dague met fin à votre aventure.</p><p>Les intrigues de la Renaissance ne pardonnent pas aux imprudents. Peut-être qu'avec plus de prudence, vous auriez découvert les secrets de cette époque extraordinaire...</p>`;
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

// ==================== CARTES ====================
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
    const names = {art:'Art', science:'Science', politics:'Politique', religion:'Religion', person:'Personnage'};
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
            <div class="card-image" style="height:60px;font-size:2rem;">${card.icon}</div>
            <p class="card-description" style="font-size:0.8rem;">${card.description}</p>`;
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

// ==================== LEXIQUE ====================
function initializeLexicon() {
    const content = document.getElementById('lexiconContent');
    const categories = {
        lieux: '📍 Lieux de Florence',
        personnes: '👤 Personnages historiques',
        concepts: '💡 Concepts et mouvements',
        techniques: '🎨 Techniques artistiques',
        religion: '⛪ Religion et institutions'
    };
    
    let html = '';
    for (let cat in categories) {
        html += `<div class="lexicon-category">
            <h3 class="lexicon-category-title">${categories[cat]}</h3>
            <div class="lexicon-grid">`;
        
        LEXICON[cat].forEach(item => {
            html += `<div class="lexicon-item">
                <div class="lexicon-term">${item.term}</div>
                <div class="lexicon-definition">${item.def}</div>
            </div>`;
        });
        
        html += `</div></div>`;
    }
    content.innerHTML = html;
}

function showLexicon() {
    document.getElementById('lexiconPanel').style.display = 'block';
}

function hideLexicon() {
    document.getElementById('lexiconPanel').style.display = 'none';
}

// ==================== RESTART ====================
function restartGame() {
    gameState = {playerName:'', archetype:null, gauges:{humanism:50, prudence:50, princes:30, clergy:30}, cards:[], currentScene:null, visitedScenes:[]};

    document.getElementById('endingScreen').style.display = 'none';
    document.getElementById('sceneContainer').style.display = 'none';
    document.getElementById('gameHeader').style.display = 'none';
    document.getElementById('characterCreation').style.display = 'block';
    document.getElementById('characterName').value = '';
    document.querySelectorAll('.archetype-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('btnBegin').disabled = true;
    initializeCollection();
}
