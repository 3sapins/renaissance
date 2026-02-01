// ==================== CARTES RENAISSANCE ====================
const CARDS = {
    perspective: {id:'perspective',category:'art',title:'La Perspective',icon:'📐',description:'Technique permettant de représenter la profondeur.',fact:'Alberti écrit le premier traité en 1435.'},
    sfumato: {id:'sfumato',category:'art',title:'Le Sfumato',icon:'🌫️',description:'Technique de Léonard pour estomper les contours.',fact:'La Joconde en est l\'exemple célèbre.'},
    anatomie: {id:'anatomie',category:'science',title:'L\'Anatomie',icon:'💀',description:'Étude du corps humain par dissection.',fact:'Léonard aurait disséqué plus de 30 cadavres.'},
    medicis: {id:'medicis',category:'person',title:'Les Médicis',icon:'👑',description:'Famille de banquiers, grands mécènes des arts.',fact:'Laurent le Magnifique transforme Florence en capitale artistique.'},
    savonarole: {id:'savonarole',category:'religion',title:'Savonarole',icon:'🔥',description:'Moine qui prêche contre la corruption.',fact:'Il sera brûlé en 1498.'},
    machiavel: {id:'machiavel',category:'politics',title:'Machiavel',icon:'📜',description:'Auteur du Prince, fondateur de la science politique.',fact:'La fin justifie les moyens lui est attribuée à tort.'},
    condottiere: {id:'condottiere',category:'politics',title:'Les Condottieri',icon:'⚔️',description:'Chefs mercenaires des cités italiennes.',fact:'Certains fondent leurs propres dynasties.'},
    humanisme: {id:'humanisme',category:'science',title:'L\'Humanisme',icon:'🏛️',description:'Mouvement qui replace l\'homme au centre.',fact:'L\'homme est la mesure de toutes choses.'},
    imprimerie: {id:'imprimerie',category:'science',title:'L\'Imprimerie',icon:'📖',description:'Inventée par Gutenberg vers 1450.',fact:'En 1500, 20 millions de livres imprimés.'},
    bottega: {id:'bottega',category:'art',title:'La Bottega',icon:'🖼️',description:'Atelier où le maître forme ses apprentis.',fact:'Léonard fut apprenti chez Verrocchio.'},
    heliocentrisme: {id:'heliocentrisme',category:'science',title:'L\'Héliocentrisme',icon:'☀️',description:'Théorie que la Terre tourne autour du Soleil.',fact:'Galilée sera condamné en 1633.'},
    bancaire: {id:'bancaire',category:'politics',title:'Le Système Bancaire',icon:'🏦',description:'Les banquiers inventent la lettre de change.',fact:'Banque vient de l\'italien banca.'},
    diplomatie: {id:'diplomatie',category:'politics',title:'La Diplomatie',icon:'🤝',description:'Les cités inventent l\'ambassade permanente.',fact:'Venise a le meilleur service diplomatique.'},
    neoplatonisme: {id:'neoplatonisme',category:'science',title:'Le Néoplatonisme',icon:'💫',description:'Philosophie conciliant Platon et christianisme.',fact:'Ficin traduit Platon pour les Médicis.'},
    botticelli: {id:'botticelli',category:'person',title:'Botticelli',icon:'🌸',description:'Peintre de La Naissance de Vénus.',fact:'Il brûla certaines œuvres sous l\'influence de Savonarole.'},
    leonard: {id:'leonard',category:'person',title:'Léonard de Vinci',icon:'🎨',description:'Génie universel de la Renaissance.',fact:'Ses carnets contiennent des plans de machines volantes.'},
    michelange: {id:'michelange',category:'person',title:'Michel-Ange',icon:'🗿',description:'Sculpteur du David et peintre de la Sixtine.',fact:'Il considérait la sculpture comme l\'art suprême.'},
    guerresitalie: {id:'guerresitalie',category:'politics',title:'Guerres d\'Italie',icon:'🏰',description:'Conflits pour le contrôle de l\'Italie.',fact:'Charles VIII envahit en 1494.'},
    alchimie: {id:'alchimie',category:'science',title:'L\'Alchimie',icon:'⚗️',description:'Art cherchant à transformer le plomb en or.',fact:'Les alchimistes découvrent l\'acide sulfurique.'},
    inquisition: {id:'inquisition',category:'religion',title:'L\'Inquisition',icon:'⛓️',description:'Tribunal chargé de traquer l\'hérésie.',fact:'Giordano Bruno sera brûlé en 1600.'}
};

// ==================== SCÈNES ====================
const SCENES = {
    intro: {
        location:'Porta San Gallo',title:'L\'Arrivée à Florence',icon:'🏛️',
        text:'<p class="scene-text">Le soleil de septembre baigne les murailles ocre de Florence. Vous franchissez la <span class="term">Porta San Gallo<span class="tooltip">L\'une des principales portes de la cité.</span></span>, le cœur battant.</p><p class="scene-text">La cité des <span class="term">Médicis<span class="tooltip">Famille de banquiers qui domine Florence.</span></span> s\'étend devant vous, dominée par le dôme de <span class="term">Brunelleschi<span class="tooltip">Architecte du dôme révolutionnaire.</span></span>.</p><p class="scene-text">Les rues grouillent de marchands, artisans, moines. Vous devez d\'abord vous orienter.</p>',
        learnMore: {
            title:'Florence en septembre 1494',
            content:'<p>Vous arrivez à un moment charnière. Florence est la ville la plus riche et la plus cultivée d\'Europe. Mais elle est aussi au bord du chaos.</p><p>Laurent le Magnifique est mort il y a deux ans. Son fils Piero gouverne sans génie. Le moine Savonarole prêche contre la corruption. Et le roi de France Charles VIII s\'apprête à envahir l\'Italie.</p><p>Trois forces s\'affrontent : les <strong>Médicis</strong> (pouvoir, argent, art), le <strong>clergé réformateur</strong> (Savonarole, pureté, foi), et les <strong>humanistes</strong> (savoir, beauté, liberté).</p>',
            hint:'Votre premier choix détermine votre point d\'entrée dans la société florentine. Le Duomo vous place au centre, les artisans offrent un départ modeste, les Médicis un pari ambitieux.'
        },
        choices:[
            {text:'Chercher une auberge près du Duomo',target:'first_night',effects:{humanism:5}},
            {text:'Trouver un logement chez les artisans',target:'first_night',effects:{humanism:5,prudence:5}},
            {text:'Tenter votre chance au Palazzo Medici',target:'medici_approach',effects:{princes:10,prudence:-5}}
        ]
    },
    first_night: {
        location:'Auberge du Duomo',title:'Première Nuit',icon:'🌙',
        text:'<p class="scene-text">L\'aubergiste vous informe : « Les temps sont troublés. <span class="term">Savonarole<span class="tooltip">Moine qui prêche contre la corruption.</span></span> annonce la fin du monde, les Français menacent... »</p><p class="scene-text">Le lendemain, que faites-vous ?</p>',
        choices:[
            {text:'Écouter le prêche de Savonarole',target:'savonarole_preach',effects:{clergy:10}},
            {text:'Explorer les ateliers d\'artistes',target:'bottega_district',effects:{humanism:10}},
            {text:'Se renseigner sur les Médicis',target:'medici_approach',effects:{princes:10}},
            {text:'Flâner sur les marchés',target:'market_life',effects:{humanism:5,prudence:5}}
        ]
    },
    market_life: {
        location:'Mercato Centrale',title:'Le Cœur de Florence',icon:'🏪',cards:['bancaire'],
        text:'<p class="scene-text">Le marché est étourdissant. Soieries, épices, fruits. Les <span class="term">changeurs<span class="tooltip">Banquiers primitifs.</span></span> comptent leurs florins.</p><p class="scene-text">Une clameur s\'élève de la <span class="term">Piazza del Duomo<span class="tooltip">La place de la cathédrale.</span></span>...</p>',
        choices:[
            {text:'Aller voir',target:'savonarole_preach',effects:{clergy:5,humanism:5}},
            {text:'Aborder les étudiants',target:'student_encounter',effects:{humanism:15}},
            {text:'Observer l\'artiste de rue',target:'bottega_district',effects:{humanism:10}}
        ]
    },
    savonarole_preach: {
        location:'Piazza del Duomo',title:'Le Prêche du Prophète',icon:'🔥',cards:['savonarole'],
        text:'<p class="scene-text">Un moine au visage émacié harangue la foule. « Repentez-vous ! Florence est devenue Babylone ! »</p><p class="scene-text">Un homme riche murmure : « Ce fou va nous perdre... »</p>',
        learnMore: {
            title:'Savonarole et la crise florentine',
            content:'<p>En 1494, Florence traverse une crise profonde. Laurent le Magnifique est mort en 1492, laissant son fils Piero, moins charismatique. Le moine Girolamo Savonarole prêche depuis 1490 contre la corruption de l\'Église et des élites.</p><p>Ses partisans, les <em>Piagnoni</em> (« pleurnicheurs »), sont nombreux parmi le peuple. Ses ennemis, les <em>Arrabbiati</em> (« enragés »), comptent des marchands et des humanistes.</p><p>Le roi de France Charles VIII menace d\'envahir l\'Italie — Savonarole y voit un châtiment divin annoncé.</p>',
            hint:'Chaque camp offre protection et dangers. Les Piagnoni sont puissants mais exigeants. Les riches opposants ont des ressources mais sont surveillés.'
        },
        choices:[
            {text:'Écouter la suite',target:'savonarole_continue',effects:{clergy:15,humanism:-5}},
            {text:'Aborder l\'homme riche',target:'rich_critic',effects:{princes:10,clergy:-5}},
            {text:'S\'approcher des fidèles',target:'piagnoni_contact',effects:{clergy:15,prudence:-5}},
            {text:'Quitter la place',target:'bottega_district',effects:{humanism:5,prudence:10}}
        ]
    },
    savonarole_continue: {
        location:'Piazza del Duomo',title:'Les Visions',icon:'👁️',cards:['inquisition'],
        text:'<p class="scene-text">« Le <span class="term">Bûcher des Vanités<span class="tooltip">Autodafé où seront brûlés œuvres d\'art et livres.</span></span> purifiera Florence ! »</p>',
        choices:[
            {text:'Suivre vers San Marco',target:'san_marco_visit',effects:{clergy:20,humanism:-10}},
            {text:'Fuir',target:'bottega_district',effects:{humanism:10,clergy:-5}}
        ]
    },
    piagnoni_contact: {
        location:'Piazza del Duomo',title:'Les Fidèles',icon:'🕯️',
        text:'<p class="scene-text">Un homme en noir : « Es-tu un homme de bien ? Viens ce soir à San Marco. »</p>',
        choices:[
            {text:'Accepter',target:'san_marco_visit',effects:{clergy:20,princes:-10}},
            {text:'Refuser',target:'bottega_district',effects:{clergy:-10,prudence:5}}
        ]
    },
    san_marco_visit: {
        location:'San Marco',title:'Le Couvent',icon:'🏛️',cards:['neoplatonisme'],
        text:'<p class="scene-text">Des fresques sublimes de <span class="term">Fra Angelico<span class="tooltip">Peintre aux fresques mystiques.</span></span>. Savonarole : « Que cherches-tu à Florence ? »</p>',
        learnMore: {
            title:'San Marco : entre art et austérité',
            content:'<p>Le couvent de San Marco est un lieu paradoxal. Ses murs abritent les fresques sublimes de Fra Angelico (1395-1455), chef-d\'œuvre de spiritualité peinte. Mais depuis 1491, c\'est aussi le quartier général de Savonarole.</p><p>Pour le moine, l\'art de Fra Angelico est acceptable car il sert la foi. Mais l\'art « païen » — mythologies, nus, portraits de riches — corrompt les âmes.</p><p>Savonarole teste ses visiteurs. Sa question « Que cherches-tu ? » n\'est pas anodine — il jauge votre sincérité.</p>',
            hint:'La vérité peut signifier différentes choses. Une réponse spirituelle plaira au moine. Une réponse intellectuelle peut l\'irriter... ou lui montrer que vous êtes récupérable.'
        },
        choices:[
            {text:'« La vérité »',target:'savonarole_truth',effects:{clergy:15,humanism:5}},
            {text:'« Comprendre le monde »',target:'savonarole_challenge',effects:{humanism:15,clergy:-5}},
            {text:'Voir les fresques',target:'fra_angelico_art',effects:{humanism:10,clergy:5}}
        ]
    },
    savonarole_truth: {
        location:'San Marco',title:'L\'Épreuve de Foi',icon:'📿',
        text:'<p class="scene-text">« Veux-tu nous aider à purifier Florence ? »</p>',
        choices:[
            {text:'Rejoindre les Piagnoni',target:'piagnoni_mission',effects:{clergy:25,princes:-15,humanism:-10}},
            {text:'Demander du temps',target:'reflection_walk',effects:{prudence:10,clergy:5}},
            {text:'Décliner',target:'bottega_district',effects:{clergy:-5,humanism:5}}
        ]
    },
    savonarole_challenge: {
        location:'San Marco',title:'Le Défi',icon:'🤔',
        text:'<p class="scene-text">« Les Grecs ont essayé. Où sont-ils ? Va explorer Florence. Tu reviendras. »</p>',
        choices:[
            {text:'Explorer les ateliers',target:'bottega_district',effects:{humanism:15,clergy:-10}},
            {text:'Voir les Médicis',target:'medici_approach',effects:{princes:10,clergy:-5}}
        ]
    },
    fra_angelico_art: {
        location:'San Marco',title:'Les Fresques',icon:'😇',cards:['botticelli'],
        text:'<p class="scene-text">Fresques sublimes. En sortant, un jeune homme dessine en cachette et vous fait signe...</p>',
        choices:[
            {text:'Le suivre',target:'secret_artist',effects:{humanism:15,prudence:-10,clergy:-5}},
            {text:'Retourner vers Savonarole',target:'savonarole_truth',effects:{clergy:10}},
            {text:'Sortir réfléchir',target:'reflection_walk',effects:{humanism:5,prudence:5}}
        ]
    },
    piagnoni_mission: {
        location:'San Marco',title:'Au Service du Prophète',icon:'✝️',
        text:'<p class="scene-text">Savonarole vous convoque. « Un marchand cache des peintures impies. Tu iras demain. »</p>',
        learnMore: {
            title:'Le Bûcher des Vanités',
            content:'<p>En 1497, Savonarole organisera le célèbre « Bûcher des Vanités » : sur la Piazza della Signoria, des milliers d\'objets seront brûlés — miroirs, cosmétiques, cartes à jouer, mais aussi tableaux, livres, instruments de musique.</p><p>Botticelli lui-même aurait jeté certaines de ses œuvres au feu. Des trésors irremplaçables ont disparu.</p><p>Pour Savonarole, c\'est une purification. Pour ses ennemis, c\'est de la barbarie. L\'histoire retiendra les deux.</p>',
            hint:'Servir Savonarole avec zèle vous protège mais vous rend complice. Le prévenir est dangereux mais préserve des œuvres. Refuser, c\'est rompre avec le mouvement.'
        },
        choices:[
            {text:'Accepter avec zèle',target:'vanity_hunt',effects:{clergy:20,humanism:-20}},
            {text:'Prévenir le marchand',target:'double_agent',effects:{prudence:-10,humanism:10}},
            {text:'Refuser et fuir',target:'escape_piagnoni',effects:{clergy:-25,prudence:10}}
        ]
    },
    bottega_district: {
        location:'Via dei Servi',title:'La Rue des Artistes',icon:'🎨',cards:['bottega'],
        text:'<p class="scene-text">Plusieurs <span class="term">botteghe<span class="tooltip">Ateliers d\'artistes.</span></span> retiennent votre attention. Un vieil homme : « À Florence, il faut choisir son camp. »</p>',
        learnMore: {
            title:'Les ateliers de la Renaissance',
            content:'<p>La <em>bottega</em> est le cœur de la création artistique. Le maître y forme ses apprentis pendant des années : broyage des pigments, préparation des panneaux, copie des maîtres anciens, puis enfin création personnelle.</p><p>Certains ateliers sont liés aux Médicis (commandes prestigieuses, protection). D\'autres restent indépendants mais plus précaires. Quelques-uns, comme celui de Léonard, explorent des territoires interdits.</p>',
            hint:'Un atelier prestigieux offre sécurité et formation classique. Un atelier mystérieux peut mener à des découvertes extraordinaires — ou à des ennuis.'
        },
        choices:[
            {text:'L\'atelier prestigieux',target:'ghirlandaio_workshop',effects:{princes:10,humanism:5}},
            {text:'L\'atelier mystérieux',target:'leonardo_workshop',effects:{humanism:15,prudence:-5}},
            {text:'Parler au vieil homme',target:'old_artist',effects:{humanism:10,prudence:5}}
        ]
    },
    ghirlandaio_workshop: {
        location:'Atelier de Ghirlandaio',title:'L\'Atelier du Maître',icon:'🖼️',cards:['perspective','michelange'],
        text:'<p class="scene-text">L\'atelier de <span class="term">Ghirlandaio<span class="tooltip">Maître de Michel-Ange.</span></span>. Un jeune intense vous observe — <span class="term">Michelangelo<span class="tooltip">Futur génie.</span></span>.</p>',
        choices:[
            {text:'Parler à Michelangelo',target:'michelangelo_encounter',effects:{humanism:15}},
            {text:'Proposer vos services',target:'apprentice_start',effects:{princes:10,humanism:5}},
            {text:'Observer la fresque',target:'fresco_observation',effects:{humanism:10}}
        ]
    },
    leonardo_workshop: {
        location:'Atelier de Léonard',title:'L\'Antre du Génie',icon:'🔮',cards:['leonard'],
        text:'<p class="scene-text">Machines, dessins, crânes. « Je suis <span class="term">Leonardo<span class="tooltip">Léonard de Vinci.</span></span>. Que cherches-tu ? »</p>',
        choices:[
            {text:'« Comprendre le monde »',target:'leonardo_philosophy',effects:{humanism:20}},
            {text:'« Ces machines m\'intriguent »',target:'leonardo_machines',effects:{humanism:15}},
            {text:'Voir les dessins anatomiques',target:'leonardo_anatomy',effects:{humanism:20,clergy:-10,prudence:-10}}
        ]
    },
    leonardo_philosophy: {
        location:'Atelier de Léonard',title:'Les Leçons',icon:'📐',cards:['humanisme'],
        text:'<p class="scene-text">« La nature est le maître des maîtres. Dessine tout. » Il hésite. « Ce que je fais... l\'Église n\'approuve pas. Tu veux ce chemin ? »</p>',
        learnMore: {
            title:'Léonard et les savoirs interdits',
            content:'<p>Léonard de Vinci (1452-1519) incarne la curiosité universelle de la Renaissance. Peintre, sculpteur, ingénieur, anatomiste — il refuse les frontières entre les disciplines.</p><p>Mais certaines de ses recherches sont dangereuses. La dissection de cadavres est interdite par l\'Église. Ses études sur le vol des oiseaux ou les machines de guerre intéressent les princes mais effraient les religieux.</p><p>Léonard écrit ses notes en miroir — peut-être pour les protéger des regards indiscrets.</p>',
            hint:'Suivre Léonard ouvre des horizons immenses mais expose à des risques réels. L\'Inquisition veille. La prudence a aussi sa valeur.'
        },
        choices:[
            {text:'Oui, quels que soient les risques',target:'leonardo_path',effects:{humanism:25,clergy:-15,prudence:-10}},
            {text:'Rester prudent',target:'leonardo_cautious',effects:{humanism:15,prudence:10}},
            {text:'C\'est trop dangereux',target:'retreat_safety',effects:{prudence:15,humanism:-5}}
        ]
    },
    leonardo_anatomy: {
        location:'Atelier de Léonard',title:'Les Secrets du Corps',icon:'💀',cards:['anatomie'],
        text:'<p class="scene-text">Des dessins anatomiques stupéfiants. « J\'ai disséqué des corps. Comment peindre la vie sans connaître la mort ? »</p>',
        choices:[
            {text:'Participer à une dissection',target:'anatomy_secret',effects:{humanism:25,clergy:-20,prudence:-15}},
            {text:'Promettre le secret',target:'leonardo_path',effects:{humanism:20,prudence:5}},
            {text:'Trop risqué',target:'retreat_safety',effects:{prudence:15,clergy:5}}
        ]
    },
    leonardo_machines: {
        location:'Atelier de Léonard',title:'Les Machines',icon:'⚙️',cards:['imprimerie'],
        text:'<p class="scene-text">« Machines volantes, sous-marins... Personne ne veut les construire. C\'est le dilemme de l\'artiste. »</p>',
        choices:[
            {text:'Proposer d\'aider',target:'leonardo_path',effects:{humanism:20,prudence:-5}},
            {text:'Demander une introduction aux Médicis',target:'medici_approach',effects:{princes:15,humanism:5}}
        ]
    },
    michelangelo_encounter: {
        location:'Atelier',title:'Le Jeune Sculpteur',icon:'🗿',
        text:'<p class="scene-text">« Moi, c\'est la sculpture. Si tu veux apprendre, va au jardin de San Marco. »</p>',
        choices:[
            {text:'L\'accompagner',target:'medici_garden',effects:{humanism:15,princes:5}},
            {text:'Rester à l\'atelier',target:'apprentice_start',effects:{humanism:5,prudence:5}}
        ]
    },
    medici_approach: {
        location:'Palazzo Medici',title:'À l\'Ombre du Palais',icon:'🏛️',cards:['medicis'],
        text:'<p class="scene-text">Le <span class="term">Palazzo Medici<span class="tooltip">Résidence des Médicis.</span></span>. Un homme élégant : « Tu as du talent ou des informations ? »</p>',
        learnMore: {
            title:'Les Médicis en 1494',
            content:'<p>Les Médicis dominent Florence depuis 1434. Banquiers richissimes, ils ont fait de la cité la capitale des arts. Laurent le Magnifique (mort en 1492) protégeait Botticelli, Léonard, le jeune Michel-Ange.</p><p>Mais son fils Piero manque de charisme. Face à l\'invasion française de Charles VIII, il cédera tout sans combattre, provoquant sa chute en novembre 1494.</p><p>Servir les Médicis offre protection et ressources, mais leur étoile pâlit. Leurs ennemis — dont Savonarole — gagnent en puissance.</p>',
            hint:'Les Médicis ont des ressources immenses mais sont en déclin. Prétendre avoir des informations peut ouvrir des portes... ou vous transformer en pion d\'un jeu dangereux.'
        },
        choices:[
            {text:'Prétendre avoir des informations',target:'medici_spy',effects:{princes:15,prudence:-10}},
            {text:'Dire être artiste',target:'medici_garden',effects:{princes:10,humanism:5}},
            {text:'Simple voyageur',target:'medici_garden',effects:{princes:5,humanism:5}}
        ]
    },
    medici_garden: {
        location:'Jardin de San Marco',title:'Le Jardin des Antiques',icon:'🗿',cards:['humanisme'],
        text:'<p class="scene-text">Statues antiques. <span class="term">Bertoldo<span class="tooltip">Gardien du jardin.</span></span> : « Le Magnifique aimait venir ici. Savonarole veut brûler tout cela. »</p>',
        learnMore: {
            title:'Le Jardin des Médicis',
            content:'<p>Laurent le Magnifique a créé ce jardin comme une « école » informelle. Des statues antiques — torses, têtes, fragments de reliefs — permettent aux jeunes artistes d\'étudier l\'art grec et romain.</p><p>C\'est ici que Michel-Ange, à 15 ans, a été remarqué par Laurent. Le vieux sculpteur Bertoldo, ancien élève de Donatello, transmet le savoir des maîtres.</p><p>Mais Savonarole considère ces statues païennes comme des idoles. Si son mouvement triomphe, ce jardin sera menacé.</p>',
            hint:'Le jardin est un lieu de formation et de débat. Dessiner développe les compétences artistiques. Écouter les débats ouvre l\'esprit aux idées humanistes.'
        },
        choices:[
            {text:'Dessiner avec Michel-Ange',target:'drawing_session',effects:{humanism:15}},
            {text:'Écouter les débats',target:'garden_debate',effects:{humanism:15,princes:5}},
            {text:'Parler à Bertoldo',target:'bertoldo_talk',effects:{princes:10,humanism:5}}
        ]
    },
    reflection_walk: {
        location:'Rives de l\'Arno',title:'Méditation',icon:'🌊',
        text:'<p class="scene-text">Florence est pleine de contradictions. Où est votre place ?</p>',
        choices:[
            {text:'Les artistes',target:'bottega_district',effects:{humanism:10}},
            {text:'Les religieux',target:'savonarole_preach',effects:{clergy:10}},
            {text:'Les princes',target:'medici_approach',effects:{princes:10}},
            {text:'Juste survivre',target:'tavern_refuge',effects:{prudence:15}}
        ]
    },
    student_encounter: {
        location:'Mercato',title:'Les Étudiants',icon:'📚',cards:['neoplatonisme'],
        text:'<p class="scene-text">Ils débattent de <span class="term">Platon<span class="tooltip">Philosophe inspirant les humanistes.</span></span>. « Ficin dit que Platon et le Christ peuvent se réconcilier. »</p>',
        choices:[
            {text:'Aller à l\'Académie',target:'academy_visit',effects:{humanism:20,clergy:-5}},
            {text:'Voir les artistes',target:'bottega_district',effects:{humanism:10}}
        ]
    },
    rich_critic: {
        location:'Près du Duomo',title:'Le Marchand Inquiet',icon:'💼',cards:['diplomatie'],
        text:'<p class="scene-text">Bernardo Rucellai : « Savonarole est un danger. Viens dîner ce soir. »</p>',
        choices:[
            {text:'Accepter',target:'rucellai_dinner',effects:{princes:15,clergy:-10}},
            {text:'Refuser',target:'reflection_walk',effects:{prudence:15}}
        ]
    },
    tavern_refuge: {
        location:'Taverne',title:'Le Refuge',icon:'🍷',
        text:'<p class="scene-text">Un homme s\'assied. « J\'ai du travail pour toi. »</p>',
        choices:[
            {text:'Écouter',target:'shady_offer',effects:{prudence:-10,princes:5}},
            {text:'Refuser',target:'reflection_walk',effects:{prudence:10}}
        ]
    },
    academy_visit: {
        location:'Académie Platonicienne',title:'Les Philosophes',icon:'🏛️',
        text:'<p class="scene-text"><span class="term">Marsile Ficin<span class="tooltip">Fondateur du néoplatonisme florentin.</span></span> : « L\'âme aspire au Beau absolu. L\'art est une échelle vers le divin. »</p>',
        choices:[
            {text:'Approfondir',target:'synthesis_path',effects:{humanism:20}},
            {text:'Retourner aux artistes',target:'bottega_district',effects:{humanism:15}}
        ]
    },
    drawing_session: {
        location:'Jardin',title:'Leçon de Dessin',icon:'✏️',
        text:'<p class="scene-text">Michel-Ange : « J\'ai étudié des corps à l\'hôpital. La nuit. Tu veux venir ? »</p>',
        choices:[
            {text:'Accepter le risque',target:'anatomy_secret',effects:{humanism:25,clergy:-15,prudence:-15}},
            {text:'Continuer prudemment',target:'apprentice_progress',effects:{humanism:15,prudence:5}}
        ]
    },
    anatomy_secret: {
        location:'Hôpital Santo Spirito',title:'Les Secrets du Corps',icon:'💀',cards:['anatomie','alchimie'],
        text:'<p class="scene-text">La nuit, vous disséquez un cadavre. Révélations stupéfiantes. Soudain — des bruits de pas !</p>',
        learnMore: {
            title:'L\'anatomie interdite',
            content:'<p>La dissection de cadavres humains est officiellement interdite par l\'Église, qui considère le corps comme sacré. Pourtant, médecins et artistes la pratiquent en secret pour comprendre la mécanique du corps.</p><p>Léonard dissèque à l\'hôpital Santa Maria Nuova. Michel-Ange étudie des corps au couvent de Santo Spirito en échange d\'un crucifix sculpté. Leurs découvertes révolutionnent l\'art et la médecine.</p><p>Mais se faire prendre signifie l\'accusation de profanation — un crime grave devant l\'Inquisition.</p>',
            hint:'Face au danger, la fuite est souvent la meilleure option. Se cacher peut fonctionner si les poursuivants ne sont pas déterminés. Faire face est héroïque mais potentiellement fatal.'
        },
        choices:[
            {text:'Se cacher',target:'anatomy_escape',effects:{prudence:10}},
            {text:'Fuir',target:'night_escape',effects:{prudence:5}},
            {text:'Faire face',target:'caught_anatomy',effects:{prudence:-20,clergy:-20}}
        ]
    },
    rucellai_dinner: {
        location:'Palazzo Rucellai',title:'Dîner des Opposants',icon:'🍽️',cards:['machiavel'],
        text:'<p class="scene-text"><span class="term">Niccolò Machiavelli<span class="tooltip">Futur auteur du Prince.</span></span> est présent. « Savonarole tombera. Qui le remplacera ? »</p>',
        learnMore: {
            title:'Les Orti Oricellari',
            content:'<p>Les jardins Rucellai (Orti Oricellari) sont un lieu de rencontre pour les opposants à Savonarole et, plus tard, un cercle de réflexion politique. C\'est ici que le jeune Machiavel forgera certaines de ses idées.</p><p>Les participants — marchands, humanistes, nobles — rêvent d\'une Florence républicaine mais gouvernée par les « meilleurs », pas par un moine fanatique.</p><p>Machiavel (1469-1527) deviendra le théoricien du pouvoir. Son <em>Prince</em> analysera comment conquérir et garder le pouvoir — sans illusions morales.</p>',
            hint:'Ces hommes ont du pouvoir et de l\'ambition. Les rejoindre, c\'est entrer dans le jeu politique. Observer permet d\'apprendre sans s\'engager.'
        },
        choices:[
            {text:'Rejoindre le complot',target:'conspiracy',effects:{princes:20,clergy:-20}},
            {text:'Parler avec Machiavelli',target:'machiavelli_talk',effects:{humanism:15}},
            {text:'Observer',target:'dinner_observer',effects:{prudence:15,princes:5}}
        ]
    },
    vanity_hunt: {
        location:'Santa Croce',title:'La Chasse aux Vanités',icon:'🔍',
        text:'<p class="scene-text">Vous trouvez les tableaux. Le marchand pleure. Savonarole : « J\'ai une autre mission... »</p>',
        choices:[
            {text:'Continuer avec zèle',target:'inquisitor_path',effects:{clergy:25,humanism:-25}},
            {text:'Commencer à douter',target:'doubt_growing',effects:{clergy:10,humanism:-10}},
            {text:'Refuser',target:'break_savonarole',effects:{clergy:-20,humanism:10}}
        ]
    },
    double_agent: {
        location:'Santa Croce',title:'Le Double Jeu',icon:'🎭',
        text:'<p class="scene-text">Vous prévenez le marchand. Les Piagnoni trouvent des caisses vides. Un message : « Des amis veulent vous remercier. »</p>',
        choices:[
            {text:'Aller au rendez-vous',target:'anti_savonarole',effects:{princes:15,clergy:-15}},
            {text:'C\'est un piège',target:'hiding',effects:{prudence:15}},
            {text:'Fuir Florence',target:'escape_florence',effects:{prudence:10}}
        ]
    },
    secret_artist: {
        location:'Ruelle',title:'L\'Artiste Clandestin',icon:'✏️',
        text:'<p class="scene-text">« Il y a une cave où on étudie le corps humain en secret... »</p>',
        choices:[
            {text:'Y aller',target:'anatomy_secret',effects:{humanism:20,prudence:-15,clergy:-10}},
            {text:'Refuser',target:'bottega_district',effects:{prudence:15}}
        ]
    },
    old_artist: {
        location:'Via dei Servi',title:'La Sagesse',icon:'👴',
        text:'<p class="scene-text">« Savonarole veut détruire la beauté. Les Médicis la mettent en cage. Les jeunes doivent trouver une autre voie. »</p>',
        choices:[
            {text:'Demander conseil',target:'bottega_district',effects:{humanism:15,prudence:5}},
            {text:'Aller aux ateliers',target:'ghirlandaio_workshop',effects:{humanism:5}}
        ]
    },
    fresco_observation: {
        location:'Atelier',title:'Observer',icon:'👁️',
        text:'<p class="scene-text">Chaque coup de pinceau est calculé.</p>',
        choices:[
            {text:'Demander à participer',target:'apprentice_start',effects:{humanism:10}},
            {text:'Chercher ailleurs',target:'leonardo_workshop',effects:{humanism:15}}
        ]
    },
    apprentice_start: {
        location:'Atelier',title:'Les Premiers Pas',icon:'👶',
        text:'<p class="scene-text">Balayer, puis les vrais apprentissages commencent.</p>',
        choices:[
            {text:'Persévérer',target:'apprentice_progress',effects:{humanism:10,prudence:5}},
            {text:'Chercher plus avancé',target:'leonardo_workshop',effects:{humanism:15,prudence:-5}}
        ]
    },
    apprentice_progress: {
        location:'Atelier',title:'L\'Apprentissage',icon:'📚',
        text:'<p class="scene-text">Les mois passent. Vos compétences grandissent.</p>',
        choices:[
            {text:'Continuer classiquement',target:'classical_ending',effects:{humanism:10,prudence:5}},
            {text:'Chercher plus avancé',target:'leonardo_workshop',effects:{humanism:15,prudence:-5}}
        ]
    },
    garden_debate: {
        location:'Jardin',title:'Débat Humaniste',icon:'📚',
        text:'<p class="scene-text">Les étudiants débattent de Platon, d\'Aristote, de l\'âme.</p>',
        choices:[
            {text:'Rejoindre l\'Académie',target:'academy_visit',effects:{humanism:20}},
            {text:'Continuer à dessiner',target:'drawing_session',effects:{humanism:15}}
        ]
    },
    bertoldo_talk: {
        location:'Jardin',title:'Le Gardien',icon:'👴',
        text:'<p class="scene-text">« Sans Laurent, tout s\'effondre. Piero n\'a pas son génie. »</p>',
        choices:[
            {text:'Proposer d\'aider',target:'medici_garden',effects:{princes:10,humanism:10}},
            {text:'Explorer ailleurs',target:'bottega_district',effects:{humanism:5}}
        ]
    },
    leonardo_path: {
        location:'Atelier de Léonard',title:'Le Chemin',icon:'📚',
        text:'<p class="scene-text">Les mois passent auprès de Léonard. Il annonce son départ pour Milan. « Viens avec moi. Ou reste défendre l\'humanisme. »</p>',
        learnMore: {
            title:'Léonard quitte Florence',
            content:'<p>Léonard a un rapport compliqué avec Florence. Né à Vinci, formé chez Verrocchio, il n\'a jamais eu la reconnaissance qu\'il méritait dans sa ville. Les commandes vont à d\'autres.</p><p>En 1482, il part pour Milan servir Ludovic Sforza. Il y restera 17 ans, créant la Cène, des machines de guerre, des études anatomiques révolutionnaires.</p><p>Suivre Léonard, c\'est choisir l\'exil mais aussi la liberté intellectuelle. Rester à Florence, c\'est défendre l\'humanisme sur place — mais dans une ville de plus en plus hostile aux idées nouvelles.</p>',
            hint:'Milan offre la protection d\'un prince éclairé. Florence reste le cœur de la Renaissance mais traverse une crise. Voyager seul, c\'est répandre le savoir mais perdre un mentor.'
        },
        choices:[
            {text:'Suivre à Milan',target:'milan_ending',effects:{humanism:20}},
            {text:'Rester à Florence',target:'florence_defender',effects:{humanism:15,prudence:-10}},
            {text:'Partir répandre le savoir',target:'wanderer_ending',effects:{humanism:20}}
        ]
    },
    leonardo_cautious: {
        location:'Atelier de Léonard',title:'L\'Apprenti Prudent',icon:'📚',
        text:'<p class="scene-text">Vous continuez à apprendre avec prudence.</p>',
        choices:[
            {text:'Approfondir',target:'leonardo_path',effects:{humanism:15}},
            {text:'Explorer d\'autres voies',target:'reflection_walk',effects:{humanism:5,prudence:5}}
        ]
    },
    retreat_safety: {
        location:'Florence',title:'Le Retrait',icon:'🏠',
        text:'<p class="scene-text">Vous décidez de prendre du recul.</p>',
        choices:[
            {text:'Travail stable',target:'artisan_ending',effects:{prudence:15}},
            {text:'Quitter Florence',target:'escape_florence',effects:{prudence:10}}
        ]
    },
    medici_spy: {
        location:'Palazzo Medici',title:'L\'Espion',icon:'🕵️',
        text:'<p class="scene-text">On vous propose de devenir informateur.</p>',
        choices:[
            {text:'Accepter',target:'medici_inner',effects:{princes:25,prudence:-10}},
            {text:'Refuser',target:'market_life',effects:{prudence:10}}
        ]
    },
    medici_inner: {
        location:'Palazzo Medici',title:'Dans le Cercle',icon:'👑',cards:['condottiere','guerresitalie'],
        text:'<p class="scene-text">Vous devenez l\'ombre des Médicis. Puis Charles VIII arrive. Piero cède tout. Les Médicis fuient.</p>',
        choices:[
            {text:'Fuir avec eux',target:'exile_ending',effects:{princes:15}},
            {text:'Changer de camp',target:'savonarole_preach',effects:{princes:-20,clergy:10}},
            {text:'Disparaître',target:'new_life_ending',effects:{prudence:15}}
        ]
    },
    shady_offer: {
        location:'Taverne',title:'L\'Offre Louche',icon:'💰',
        text:'<p class="scene-text">« La guerre approche. Les soldats seront bien payés. »</p>',
        choices:[
            {text:'Accepter',target:'mercenary_ending',effects:{princes:10,prudence:-15,humanism:-10}},
            {text:'Refuser',target:'reflection_walk',effects:{prudence:10}}
        ]
    },
    escape_piagnoni: {
        location:'Florence',title:'La Fuite Nocturne',icon:'🌙',
        text:'<p class="scene-text">Vous fuyez San Marco dans la nuit.</p>',
        choices:[
            {text:'Chercher les artistes',target:'bottega_district',effects:{humanism:10}},
            {text:'Quitter Florence',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    inquisitor_path: {
        location:'San Marco',title:'Le Bras de Dieu',icon:'⚔️',
        text:'<p class="scene-text">Vous devenez l\'un des plus zélés. Mais vous entendez : Rome prépare la chute de Savonarole.</p>',
        learnMore: {
            title:'La chute annoncée',
            content:'<p>En 1497, le pape Alexandre VI excommunie Savonarole. Le moine continue à prêcher, défiant Rome. Mais ses soutiens s\'effritent.</p><p>En avril 1498, Savonarole propose une « ordalie par le feu » pour prouver sa sainteté. Une pluie providentielle annule l\'épreuve. La foule, déçue, se retourne contre lui.</p><p>San Marco est pris d\'assaut. Savonarole est arrêté, torturé, et brûlé le 23 mai 1498 — sur la même place où il organisait les Bûchers des Vanités.</p>',
            hint:'L\'histoire est en marche. Rester fidèle jusqu\'au bout mène à la catastrophe. Trahir sauve la peau mais souille l\'âme. Douter ouvre une autre voie.'
        },
        choices:[
            {text:'Rester fidèle',target:'fanatic_ending',effects:{clergy:20,humanism:-20}},
            {text:'Commencer à douter',target:'doubt_growing',effects:{humanism:10,clergy:-10}},
            {text:'Trahir Savonarole',target:'traitor_ending',effects:{princes:10,clergy:-25}}
        ]
    },
    doubt_growing: {
        location:'San Marco',title:'Le Doute',icon:'🤔',
        text:'<p class="scene-text">Le malaise grandit. Chaque mission pèse plus lourd.</p>',
        choices:[
            {text:'Continuer',target:'inquisitor_path',effects:{clergy:10,humanism:-15}},
            {text:'Douter ouvertement',target:'doubt_conversion',effects:{humanism:10,clergy:-10}}
        ]
    },
    doubt_conversion: {
        location:'Florence',title:'La Conversion',icon:'💫',
        text:'<p class="scene-text">Le doute vous libère. Vous quittez les Piagnoni.</p>',
        choices:[
            {text:'Rejoindre les humanistes',target:'academy_visit',effects:{humanism:20,clergy:-15}},
            {text:'Fuir Florence',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    break_savonarole: {
        location:'Florence',title:'La Rupture',icon:'💔',
        text:'<p class="scene-text">« Ceux qui ne sont pas avec nous sont contre nous. »</p>',
        choices:[
            {text:'Rejoindre les opposants',target:'anti_savonarole',effects:{princes:15,clergy:-20}},
            {text:'Fuir Florence',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    anti_savonarole: {
        location:'Loggia dei Lanzi',title:'La Résistance',icon:'🗡️',cards:['machiavel'],
        text:'<p class="scene-text">« Nous sommes les <span class="term">Arrabbiati<span class="tooltip">Les Enragés, opposants à Savonarole.</span></span>. »</p>',
        choices:[
            {text:'Les rejoindre',target:'spy_mission',effects:{princes:20,clergy:-15}},
            {text:'Rester prudent',target:'reflection_walk',effects:{prudence:15}}
        ]
    },
    spy_mission: {
        location:'Florence',title:'L\'Espion',icon:'🕵️',
        text:'<p class="scene-text">Piagnone le jour, informateur la nuit. Savonarole annonce une ordalie. La pluie annule l\'épreuve. La foule doute...</p>',
        choices:[
            {text:'Profiter du chaos',target:'savonarole_fall',effects:{princes:15,prudence:-10}},
            {text:'Observer',target:'savonarole_fall',effects:{prudence:15}}
        ]
    },
    savonarole_fall: {
        location:'Piazza della Signoria',title:'La Chute',icon:'⚖️',
        text:'<p class="scene-text">Avril 1498. Savonarole est arrêté, torturé, brûlé. Machiavelli : « Tu as bien manœuvré. »</p>',
        choices:[
            {text:'Apprendre de Machiavelli',target:'diplomat_ending',effects:{princes:15,humanism:5}},
            {text:'Se détourner vers l\'art',target:'florence_defender',effects:{humanism:15,princes:-5}}
        ]
    },
    conspiracy: {
        location:'Palazzo Rucellai',title:'Le Complot',icon:'🗡️',
        text:'<p class="scene-text">« Le pape l\'a excommunié. Le peuple se retournera. »</p>',
        choices:[
            {text:'Rejoindre activement',target:'spy_mission',effects:{princes:20,clergy:-20}},
            {text:'Rester en retrait',target:'dinner_observer',effects:{prudence:15}}
        ]
    },
    machiavelli_talk: {
        location:'Palazzo Rucellai',title:'Conversation',icon:'📜',
        text:'<p class="scene-text">« Un prince doit être aimé, mais surtout craint. »</p>',
        choices:[
            {text:'Approfondir',target:'diplomat_ending',effects:{princes:15,humanism:10}},
            {text:'Retourner aux artistes',target:'bottega_district',effects:{humanism:15}}
        ]
    },
    dinner_observer: {
        location:'Palazzo Rucellai',title:'L\'Observateur',icon:'👁️',
        text:'<p class="scene-text">Vous écoutez sans trop vous engager.</p>',
        choices:[
            {text:'Continuer à observer',target:'spy_mission',effects:{princes:10,prudence:5}},
            {text:'Prendre du recul',target:'reflection_walk',effects:{prudence:15}}
        ]
    },
    hiding: {
        location:'Florence',title:'La Peur',icon:'😰',
        text:'<p class="scene-text">Vous restez caché. La paranoïa vous ronge.</p>',
        choices:[
            {text:'Sortir prudemment',target:'reflection_walk',effects:{prudence:10}},
            {text:'Fuir Florence',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    anatomy_escape: {
        location:'Hôpital',title:'L\'Évasion',icon:'🏃',
        text:'<p class="scene-text">Vous vous cachez. Les pas s\'éloignent.</p>',
        choices:[
            {text:'Continuer les recherches',target:'leonardo_path',effects:{humanism:15,prudence:5}},
            {text:'Fuir',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    night_escape: {
        location:'Arno',title:'La Fuite',icon:'🌊',
        text:'<p class="scene-text">Vous émergez au bord du fleuve.</p>',
        choices:[
            {text:'Retourner',target:'reflection_walk',effects:{humanism:10,prudence:-5}},
            {text:'Quitter',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    synthesis_path: {
        location:'Florence',title:'La Synthèse',icon:'🌟',ending:'victory',
        text:'<p class="scene-text">Vous trouvez votre voie : concilier l\'art et la foi. Votre travail survit car il touche à l\'universel.</p>',
        endTitle:'Fin Harmonieuse : Le Conciliateur',
        endText:'Vous avez trouvé la voie du milieu.'
    },
    milan_ending: {
        location:'Milan',title:'L\'Héritier',icon:'🌟',ending:'victory',
        text:'<p class="scene-text">À Milan, vous assistez à la création de la Cène. Vous avez choisi la connaissance.</p>',
        endTitle:'Fin Lumineuse : L\'Héritier de la Renaissance',
        endText:'Vous avez embrassé l\'esprit de la Renaissance.'
    },
    florence_defender: {
        location:'Florence',title:'Le Gardien',icon:'🏛️',ending:'victory',
        text:'<p class="scene-text">Vous restez, cachez des livres, protégez des artistes. Votre héritage vit dans chaque jeune qui apprend.</p>',
        endTitle:'Fin Noble : Le Gardien Silencieux',
        endText:'Vous avez défendu l\'humanisme.'
    },
    wanderer_ending: {
        location:'Routes d\'Europe',title:'Le Messager',icon:'🌍',ending:'victory',
        text:'<p class="scene-text">Vous quittez Florence avec vos carnets. Chaque ville reçoit ce que vous avez appris.</p>',
        endTitle:'Fin Universelle : Le Passeur de Lumières',
        endText:'La connaissance n\'a de valeur que partagée.'
    },
    diplomat_ending: {
        location:'Cours d\'Europe',title:'Le Diplomate',icon:'🤝',ending:'victory',
        text:'<p class="scene-text">Machiavelli : « Le monde n\'est pas tel qu\'il devrait être. Ceux qui l\'acceptent peuvent le changer. »</p>',
        endTitle:'Fin Pragmatique : Le Maître du Jeu',
        endText:'Vous avez appris à naviguer dans le pouvoir.'
    },
    classical_ending: {
        location:'Atelier',title:'L\'Artiste Classique',icon:'🎨',ending:'victory',
        text:'<p class="scene-text">Vous ne serez jamais Michel-Ange, mais vous contribuez à perpétuer la beauté.</p>',
        endTitle:'Fin Honorable : L\'Artiste Classique',
        endText:'La Renaissance continue grâce à vous.'
    },
    fanatic_ending: {
        location:'Piazza della Signoria',title:'Le Bûcher Final',icon:'🔥',ending:'dark',
        text:'<p class="scene-text">Vous êtes aux côtés de Savonarole quand les flammes le consument. Quelque chose meurt en vous.</p>',
        endTitle:'Fin Tragique : Les Cendres de la Foi',
        endText:'Vous avez sacrifié l\'humanisme.'
    },
    traitor_ending: {
        location:'Florence',title:'Le Prix de la Trahison',icon:'💀',ending:'dark',
        text:'<p class="scene-text">Vous trahissez Savonarole. Mais vous vivez dans l\'ombre, méprisé.</p>',
        endTitle:'Fin Amère : Le Traître',
        endText:'Vous avez survécu, mais à quel prix ?'
    },
    caught_anatomy: {
        location:'Cachots',title:'Dans les Fers',icon:'⛓️',ending:'dark',
        text:'<p class="scene-text">Profanation de corps, hérésie. La curiosité est-elle un péché ?</p>',
        endTitle:'Fin Tragique : Le Martyr de la Science',
        endText:'Votre quête s\'est heurtée à l\'obscurantisme.'
    },
    escape_florence: {
        location:'Routes de Toscane',title:'Le Départ',icon:'🛤️',ending:'neutral',
        text:'<p class="scene-text">Vous quittez Florence. Parfois, vous vous demandez ce que vous auriez pu devenir.</p>',
        endTitle:'Fin Prudente : Le Voyageur',
        endText:'Florence gardera ses mystères.'
    },
    exile_ending: {
        location:'Routes d\'Italie',title:'L\'Exil',icon:'🛤️',ending:'neutral',
        text:'<p class="scene-text">Vous fuyez avec les Médicis. Vous avez survécu mais jamais retrouvé l\'excitation.</p>',
        endTitle:'Fin Mélancolique : Le Compagnon d\'Exil',
        endText:'Vous avez lié votre sort aux puissants.'
    },
    new_life_ending: {
        location:'Quelque part',title:'L\'Homme Sans Passé',icon:'🎭',ending:'neutral',
        text:'<p class="scene-text">Vous changez de nom, de ville. Florence n\'est plus qu\'un souvenir.</p>',
        endTitle:'Fin Prudente : Le Survivant',
        endText:'Vous avez choisi de vivre plutôt que de briller.'
    },
    artisan_ending: {
        location:'Santa Croce',title:'L\'Artisan',icon:'🧤',ending:'neutral',
        text:'<p class="scene-text">Le travail est dur mais honnête. Vous avez survécu.</p>',
        endTitle:'Fin Simple : L\'Artisan',
        endText:'La Renaissance a aussi eu besoin de gens ordinaires.'
    },
    mercenary_ending: {
        location:'Champs de bataille',title:'Le Soldat',icon:'🗡️',ending:'neutral',
        text:'<p class="scene-text">Marches, sièges, batailles. Florence n\'est plus qu\'un souvenir.</p>',
        endTitle:'Fin Rude : Le Survivant',
        endText:'La Renaissance a aussi été une époque de guerres.'
    }
};
