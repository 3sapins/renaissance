à la réponse la plus sage. Je suis Poliziano, professeur au Studio de Florence. Si tu veux apprendre, viens demain à ma leçon. »</p><p class="scene-text"><span class="term">Angelo Poliziano<span class="tooltip">Poète et humaniste (1454-1494), précepteur des enfants de Laurent le Magnifique et l'un des plus grands hellénistes de son temps.</span></span> — vous avez entendu ce nom ! Le poète le plus célèbre de Florence, ami de Laurent le Magnifique.</p>`,
        choices:[
            {text:'Vous rendre à la leçon de Poliziano',target:'poliziano_lesson',effects:{humanism:15,curiosity:10}},
            {text:'Explorer d\'abord d\'autres aspects de Florence',target:'bottega_entrance',effects:{curiosity:10,adaptability:5}}
        ]
    },
    poliziano_lesson: {
        location:'Studio Fiorentino',title:'La Sagesse des Anciens',icon:'🏛️',cards:['botticelli'],ending:'victory',
        text:`<p class="scene-text">Les mois suivants, vous plongez dans l'étude des classiques. Grec, latin, philosophie, poésie — tout un monde s'ouvre à vous. Poliziano vous apprend à lire Homère dans le texte, à comprendre Cicéron, à apprécier Virgile.</p><p class="scene-text">« L'humanisme », dit-il un jour, « c'est croire que l'homme peut se perfectionner par l'étude. Que la connaissance des anciens nous rend meilleurs. Que la beauté élève l'âme. »</p><p class="scene-text">Vous quittez Florence transformé. Non pas artiste ni politique, mais lettré, porteur de la sagesse antique vers un monde nouveau.</p>`,
        endTitle:'Fin Érudite : L\'Humaniste',
        endText:'Vous avez choisi la voie de la connaissance pure. Comme Pétrarque et Erasme, vous croyez que les lettres civilisent l\'homme. La Renaissance vous a donné les outils pour penser.'
    },
    streets_escape: {
        location:'Rues de Florence',title:'Les Rues de la Cité',icon:'🏘️',
        text:`<p class="scene-text">Vous vous enfoncez dans le dédale des rues florentines. Chaque quartier a sa personnalité : <span class="term">Santa Croce<span class="tooltip">Quartier des tanneurs et des teinturiers, autour de la basilique franciscaine où reposent Michel-Ange et Galilée.</span></span> sent le cuir, <span class="term">Oltrarno<span class="tooltip">"Au-delà de l'Arno". Quartier des artisans, sur la rive sud du fleuve.</span></span> résonne du bruit des marteaux.</p><p class="scene-text">La vie florentine continue, indifférente aux drames politiques et religieux. Des enfants jouent, des marchands crient leurs prix, des servantes portent des cruches d'eau. Florence vit.</p>`,
        choices:[
            {text:'Chercher un atelier d\'artiste',target:'bottega_entrance',effects:{curiosity:5}},
            {text:'Vous rendre au Palazzo Medici',target:'medici_palace',effects:{adaptability:5}},
            {text:'Chercher une taverne pour vous reposer',target:'tavern',effects:{prudence:5}}
        ]
    },
    streets_return: {
        location:'Florence',title:'Le Retour du Chercheur',icon:'🌙',
        text:`<p class="scene-text">Vous décidez de rester. Florence est dangereuse, mais c'est ici que bat le cœur de la connaissance. Les risques valent la récompense.</p><p class="scene-text">La nuit tombe sur la cité. Les étoiles apparaissent au-dessus du dôme de Brunelleschi. Quelque part, des savants étudient ces mêmes étoiles, cherchant à comprendre l'univers.</p>`,
        choices:[
            {text:'Chercher un observatoire astronomique',target:'astronomy_tower',effects:{curiosity:15,humanism:10}},
            {text:'Retourner à la cave anatomique avec prudence',target:'anatomy_return',effects:{curiosity:10,prudence:-5}}
        ]
    },
    astronomy_tower: {
        location:'Tour d\'Observation',title:'Les Mystères du Ciel',icon:'🌟',cards:['heliocentrisme'],
        text:`<p class="scene-text">Vous trouvez un astronome solitaire sur une tour. Il observe le ciel avec des instruments de cuivre. « Tu t'intéresses aux étoiles ? » demande-t-il sans se retourner.</p><p class="scene-text">« Les anciens croyaient que la Terre était au centre de tout. Mais regarde Mars — son mouvement est étrange. <span class="term">Ptolémée<span class="tooltip">Astronome grec (v.100-168), son système géocentrique dominait la science médiévale mais était de plus en plus contesté.</span></span> avait tort, je le sens. Un jour, nous comprendrons. »</p>`,
        choices:[
            {text:'Passer la nuit à observer les étoiles',target:'stargazer_ending',effects:{curiosity:20,humanism:15}},
            {text:'Redescendre pour explorer d\'autres mystères',target:'streets_escape',effects:{adaptability:5}}
        ]
    },
    stargazer_ending: {
        location:'Sous les étoiles de Florence',title:'L\'Observateur du Cosmos',icon:'✨',cards:['alchimie'],ending:'victory',
        text:`<p class="scene-text">Vous passez la nuit à contempler l'univers. L'astronome vous enseigne à reconnaître les planètes, à comprendre les phases de la Lune, à rêver d'autres mondes.</p><p class="scene-text">« Un jour », dit-il, « nous aurons des instruments assez puissants pour voir ce que l'œil ne peut voir. Et alors, tout changera. »</p><p class="scene-text">Ce jour viendra : Galilée, un siècle plus tard, pointera son télescope vers Jupiter. Mais cette nuit, à Florence, vous avez entrevu l'infini.</p>`,
        endTitle:'Fin Cosmique : Le Rêveur d\'Étoiles',
        endText:'Vous avez choisi de lever les yeux vers le ciel. La Renaissance n\'est pas seulement art et politique — c\'est aussi le début d\'une nouvelle vision de l\'univers.'
    },
    classical_path: {
        location:'Jardin de San Marco',title:'La Voie Classique',icon:'🏛️',ending:'victory',
        text:`<p class="scene-text">Vous choisissez la voie sûre de l'art classique. Sous la direction de Bertoldo, vous devenez un sculpteur accompli, maîtrisant les formes antiques sans jamais les trahir.</p><p class="scene-text">Votre carrière sera honorable, vos œuvres décoreront des églises et des palais. Vous n'aurez pas l'audace de Michel-Ange ni le génie de Léonard, mais vous aurez contribué à perpétuer la beauté.</p>`,
        endTitle:'Fin Honorable : L\'Artiste Classique',
        endText:'Vous avez choisi la tradition plutôt que la révolution. Vos œuvres sont belles, vos mécènes satisfaits. La Renaissance continue grâce à des artisans comme vous.'
    },
    anatomy_return: {
        location:'Sous-sols de Santa Maria Nuova',title:'Le Retour aux Sources',icon:'🔬',
        text:`<p class="scene-text">Vous retrouvez la cave anatomique, plus prudent cette fois. Les recherches continuent dans le secret. Vous apprenez la structure des muscles, le trajet des veines, l'architecture des os.</p><p class="scene-text">Un soir, un médecin vous dit : « Bientôt, nous pourrons publier ces découvertes. Le monde changera. Mais pour l'instant, il faut patience et prudence. »</p>`,
        choices:[
            {text:'Continuer les recherches en secret',target:'scientist_ending',effects:{curiosity:15,prudence:5,humanism:10}},
            {text:'Quitter Florence pour diffuser ce savoir ailleurs',target:'knowledge_spreader',effects:{adaptability:10,humanism:15}}
        ]
    },
    scientist_ending: {
        location:'Florence',title:'Le Chercheur de Vérité',icon:'🔬',ending:'victory',
        text:`<p class="scene-text">Les années passent. Vous devenez l'un des pionniers de l'anatomie moderne, travaillant dans l'ombre mais préparant l'avenir. Vos notes circulent sous le manteau, inspirant de futurs <span class="term">Vésale<span class="tooltip">André Vésale (1514-1564), médecin flamand, père de l'anatomie moderne.</span></span> et <span class="term">Harvey<span class="tooltip">William Harvey (1578-1657), médecin anglais qui découvre la circulation sanguine.</span></span>.</p><p class="scene-text">La Renaissance, c'est aussi cela : des hommes et des femmes qui, dans l'obscurité des caves, préparent la lumière de la science moderne.</p>`,
        endTitle:'Fin Scientifique : Le Pionnier de l\'Ombre',
        endText:'Vous avez choisi la vérité plutôt que la gloire. Vos découvertes seront attribuées à d\'autres, mais sans vous, elles n\'auraient pas existé.'
    },
    knowledge_spreader: {
        location:'Routes d\'Europe',title:'Le Passeur de Savoir',icon:'🌍',ending:'victory',
        text:`<p class="scene-text">Vous quittez Florence, emportant dans votre mémoire et vos carnets les secrets de la Renaissance. Vous voyagez de cour en université, semant les graines du savoir partout où vous passez.</p><p class="scene-text">Padoue, Paris, Louvain, Salamanque — chaque ville reçoit un peu de ce que Florence vous a donné. La Renaissance n'est plus italienne, elle devient européenne.</p><p class="scene-text">Vous n'êtes ni artiste ni savant, mais quelque chose de peut-être plus précieux : un pont entre les mondes.</p>`,
        endTitle:'Fin Universelle : Le Messager de la Renaissance',
        endText:'Vous avez compris que la connaissance n\'a de valeur que partagée. Comme les humanistes avant vous, vous avez fait circuler les idées qui changeront le monde.'
    },
    lorenzo_audience: {
        location:'Palazzo Medici',title:'L\'Audience du Magnifique',icon:'👑',
        text:`<p class="scene-text">Hélas, on vous apprend une nouvelle terrible : Laurent le Magnifique est mort il y a deux ans. Son fils Piero dirige maintenant Florence, mais sans le génie de son père.</p><p class="scene-text">Le page soupire. « Monseigneur Laurent aurait aimé vous rencontrer. Il accueillait tous les talents. Maintenant... » Il hausse les épaules. « Les temps ont changé. »</p>`,
        choices:[
            {text:'Tenter quand même de rencontrer Piero',target:'medici_palace',effects:{adaptability:5}},
            {text:'Rester dans le jardin pour étudier',target:'michelangelo_drawing',effects:{curiosity:10,humanism:5}}
        ]
    },
    rich_merchant: {
        location:'Piazza del Duomo',title:'Le Marchand Inquiet',icon:'💼',cards:['bancaire'],
        text:`<p class="scene-text">L'homme riche se présente : c'est un membre de la <span class="term">guilde de la Lana<span class="tooltip">Corporation des marchands de laine, l'une des plus puissantes de Florence.</span></span>. « Savonarole menace nos affaires », dit-il. « S'il continue, les artistes fuiront, le commerce souffrira. Florence perdra tout ce qui fait sa grandeur. »</p><p class="scene-text">Il vous examine. « Tu as l'air étranger. Veux-tu gagner quelques florins ? J'ai besoin de quelqu'un pour... surveiller certaines choses. »</p>`,
        choices:[
            {text:'Accepter la proposition du marchand',target:'anti_savonarole',effects:{adaptability:10,prudence:-5}},
            {text:'Refuser et explorer la ville seul',target:'streets_escape',effects:{prudence:10}}
        ]
    },
    escape_san_marco: {
        location:'Extérieur de San Marco',title:'La Fuite Nocturne',icon:'🌙',
        text:`<p class="scene-text">Vous vous enfuyez du couvent à la faveur de la nuit. Florence s'étend devant vous, pleine de promesses et de dangers. Qu'allez-vous faire de votre liberté ?</p>`,
        choices:[
            {text:'Chercher un atelier d\'artiste',target:'bottega_entrance',effects:{curiosity:10}},
            {text:'Quitter Florence pour une autre ville',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    escape_florence: {
        location:'Routes de Toscane',title:'Le Départ',icon:'🛤️',ending:'neutral',
        text:`<p class="scene-text">Vous quittez Florence par la Porta Romana, au petit matin. La cité s'éloigne dans la brume matinale. Vous n'avez pas percé tous ses secrets, mais vous emportez des souvenirs inoubliables.</p><p class="scene-text">D'autres villes vous attendent : Venise la somptueuse, Rome l'éternelle, Milan la puissante. La Renaissance ne s'arrête pas aux murs de Florence.</p>`,
        endTitle:'Fin Prudente : Le Voyageur',
        endText:'Vous avez choisi la prudence plutôt que le risque. Florence gardera ses mystères, mais vous êtes sauf. Peut-être reviendrez-vous un jour...'
    },
    pisa_escape: {
        location:'Pise',title:'La Cité de la Tour',icon:'🏗️',ending:'neutral',
        text:`<p class="scene-text">Pise vous accueille avec sa célèbre tour penchée et son université prestigieuse. Vous êtes loin des intrigues florentines, mais aussi de son bouillonnement créatif.</p><p class="scene-text">Un siècle plus tard, un certain <span class="term">Galileo Galilei<span class="tooltip">Physicien et astronome (1564-1642), né à Pise. Il révolutionnera la science.</span></span> étudiera dans cette même université. Mais pour l'instant, vous profitez de la tranquillité.</p>`,
        endTitle:'Fin Tranquille : L\'Exilé de Pise',
        endText:'Vous avez échappé aux dangers de Florence pour la sécurité de Pise. Une vie paisible vous attend.'
    },
    merchant_news: {
        location:'Taverne du Lion d\'Or',title:'Les Nouvelles du Monde',icon:'📰',cards:['bancaire'],
        text:`<p class="scene-text">Les marchands partagent des nouvelles de toute l'Europe. Les Espagnols ont découvert de nouvelles terres à l'ouest. Les Portugais contournent l'Afrique. Le monde s'agrandit chaque jour.</p><p class="scene-text">« Florence n'est plus le centre du monde », soupire l'un d'eux. « Bientôt, ce seront Lisbonne, Séville, Amsterdam qui domineront le commerce. »</p>`,
        choices:[
            {text:'Demander à les accompagner dans un voyage commercial',target:'merchant_journey',effects:{adaptability:15,curiosity:10}},
            {text:'Rester à Florence pour explorer ses mystères',target:'bottega_entrance',effects:{curiosity:10}}
        ]
    },
    merchant_journey: {
        location:'Routes commerciales',title:'Le Voyage du Marchand',icon:'🚢',ending:'victory',
        text:`<p class="scene-text">Vous rejoignez une caravane marchande. Venise, Constantinople, Alexandrie — vous découvrez que la Renaissance est un phénomène mondial. Les idées circulent avec les marchandises.</p><p class="scene-text">Vous revenez à Florence des années plus tard, riche d'expériences. La ville a changé : Savonarole est mort, les Médicis sont revenus. Mais l'esprit de curiosité perdure.</p>`,
        endTitle:'Fin Cosmopolite : Le Marchand des Idées',
        endText:'Vous avez compris que la Renaissance dépasse les frontières. En voyageant, vous avez relié les cultures.'
    },
    tavern_continue: {
        location:'Taverne du Lion d\'Or',title:'La Nuit à la Taverne',icon:'🌙',
        text:`<p class="scene-text">Vous passez la soirée à écouter les conversations. Florence est un carrefour où se croisent marchands, artistes, soldats, prêtres. Chacun a une histoire.</p><p class="scene-text">L'aubergiste vous offre un lit pour la nuit. Demain, l'aventure recommencera.</p>`,
        choices:[
            {text:'Le lendemain, chercher un atelier',target:'bottega_entrance',effects:{curiosity:5}},
            {text:'Le lendemain, aller écouter un prêche',target:'savonarole_preach',effects:{curiosity:5,humanism:5}}
        ]
    },
    empiricist_path: {
        location:'Florence',title:'La Voie de l\'Observation',icon:'🔭',
        text:`<p class="scene-text">Les étudiants applaudissent votre réponse. « Voilà un esprit moderne ! » s'exclame l'un d'eux. « Viens avec nous demain, nous allons observer une éclipse depuis les collines. »</p><p class="scene-text">Vous avez trouvé votre tribu : des jeunes gens passionnés par l'observation du monde, précurseurs de la méthode scientifique.</p>`,
        choices:[
            {text:'Les accompagner observer l\'éclipse',target:'astronomy_tower',effects:{curiosity:15,humanism:10}},
            {text:'Leur demander de vous présenter à leurs maîtres',target:'secret_workshop',effects:{curiosity:10,adaptability:5}}
        ]
    },
    aesthetic_path: {
        location:'Florence',title:'La Voie de la Beauté',icon:'🌹',cards:['botticelli'],
        text:`<p class="scene-text">« La beauté comme chemin vers le divin », murmure le vieil homme avec approbation. « C'est l'enseignement de Ficin et de l'Académie. Viens, je vais te présenter à des gens qui pensent comme toi. »</p>`,
        choices:[
            {text:'Suivre le vieil homme vers l\'Académie',target:'poliziano_lesson',effects:{humanism:15,curiosity:5}},
            {text:'Chercher plutôt un atelier d\'artiste',target:'bottega_entrance',effects:{curiosity:10}}
        ]
    },
    workshop_tour: {
        location:'Atelier de Ghirlandaio',title:'Les Œuvres en Cours',icon:'🎨',cards:['perspective'],
        text:`<p class="scene-text">Le maître vous montre les commandes en cours : une fresque pour Santa Maria Novella, des portraits de notables, des retables pour des chapelles privées.</p><p class="scene-text">« L'art, c'est du travail », dit-il. « Du génie, oui, mais surtout du travail. Dix heures par jour, tous les jours. Es-tu prêt pour ça ? »</p>`,
        choices:[
            {text:'Accepter le dur apprentissage',target:'apprentice_colors',effects:{humanism:5,prudence:5}},
            {text:'Chercher un chemin moins austère',target:'secret_workshop',effects:{curiosity:10,adaptability:5}}
        ]
    },
    drawing_test: {
        location:'Atelier de Ghirlandaio',title:'L\'Épreuve du Dessin',icon:'✏️',
        text:`<p class="scene-text">Vous prenez un fusain et esquissez un portrait. Le maître observe en silence. Quand vous terminez, il hoche la tête.</p><p class="scene-text">« Pas mal. Pas mal du tout. Tu as l'œil. Mais la main a besoin de travail. » Il sourit. « Je peux t'apprendre, si tu es patient. »</p>`,
        choices:[
            {text:'Accepter son enseignement',target:'apprentice_colors',effects:{curiosity:5,humanism:5}},
            {text:'Demander s\'il connaît Léonard de Vinci',target:'secret_workshop',effects:{curiosity:15}}
        ]
    },
    workshop_mastery: {
        location:'Atelier de Ghirlandaio',title:'La Maîtrise du Métier',icon:'🏆',ending:'victory',
        text:`<p class="scene-text">Les années passent. Vous gravissez les échelons de l'atelier : broyeur de couleurs, préparateur de panneaux, peintre de fonds, et enfin, assistant du maître.</p><p class="scene-text">Vous n'atteindrez jamais la gloire de Michel-Ange ou de Raphaël, mais vous êtes devenu un artisan accompli. La Renaissance a besoin de génies, mais aussi de maîtres solides qui transmettent le savoir.</p>`,
        endTitle:'Fin Artisanale : Le Maître de la Bottega',
        endText:'Vous avez choisi la voie de l\'artisanat patient. Sans vous et vos semblables, les chefs-d\'œuvre de la Renaissance n\'auraient jamais vu le jour.'
    },
    portrait_workshop: {
        location:'Atelier de Portraits',title:'L\'Art du Portrait',icon:'🖼️',cards:['sfumato'],
        text:`<p class="scene-text">Le portraitiste vous accueille chaleureusement. « Les portraits, c'est l'avenir », dit-il. « Les marchands veulent immortaliser leurs visages. C'est moins glorieux que les fresques, mais ça paie bien. »</p><p class="scene-text">Sur un chevalet, un portrait en cours montre une femme au sourire énigmatique. « Le secret », explique-t-il, « c'est de capturer l'âme, pas juste les traits. »</p>`,
        choices:[
            {text:'Devenir apprenti portraitiste',target:'workshop_mastery',effects:{adaptability:10,prudence:5}},
            {text:'Demander qui a peint ce portrait mystérieux',target:'secret_workshop',effects:{curiosity:15}}
        ]
    },
    leonardo_employ: {
        location:'Atelier de Léonard',title:'Au Service du Génie',icon:'⚙️',
        text:`<p class="scene-text">Léonard rit. « Un emploi ? Je ne suis pas un patron ordinaire. Je commence dix projets et n'en finis aucun. Je disparais pendant des jours pour observer des oiseaux ou disséquer des cadavres. »</p><p class="scene-text">Il réfléchit. « Mais si tu veux apprendre... vraiment apprendre, pas juste gagner ta vie, reste. Je ne peux pas te payer, mais je peux t'ouvrir les yeux. »</p>`,
        choices:[
            {text:'Accepter cette offre extraordinaire',target:'leonardo_teaching',effects:{curiosity:15,prudence:-10}},
            {text:'Chercher un emploi plus stable',target:'official_workshop',effects:{prudence:10,adaptability:5}}
        ]
    },
    milan_journey: {
        location:'Route de Milan',title:'Vers la Cour des Sforza',icon:'🏰',ending:'victory',
        text:`<p class="scene-text">Léonard vous donne une lettre pour <span class="term">Ludovic le More<span class="tooltip">Ludovic Sforza (1452-1508), duc de Milan. Grand mécène, il accueille Léonard de Vinci à sa cour.</span></span>, duc de Milan. « Dis-lui que je viendrai bientôt. En attendant, sers-le bien. »</p><p class="scene-text">À Milan, vous découvrez une cour somptueuse où Léonard peindra la Cène et concevra des machines extraordinaires. Vous êtes devenu l'assistant d'un génie.</p>`,
        endTitle:'Fin Prestigieuse : L\'Assistant du Génie',
        endText:'Vous avez lié votre destin à celui de Léonard. Votre nom ne sera pas dans les livres d\'histoire, mais vous aurez vécu aux côtés de l\'homme le plus extraordinaire de son temps.'
    },
    medici_honest: {
        location:'Palazzo Medici',title:'L\'Honnêteté Récompensée',icon:'🤝',
        text:`<p class="scene-text">Le majordome sourit. « L'honnêteté est rare en ces temps troublés. » Il vous conduit vers les jardins intérieurs. « Vous ne verrez pas Monseigneur, mais vous pouvez visiter le palais. C'est un musée vivant. »</p><p class="scene-text">Vous découvrez des merveilles : fresques de Gozzoli, sculptures antiques, manuscrits enluminés. La collection des Médicis résume à elle seule la Renaissance.</p>`,
        choices:[
            {text:'Demander à visiter le jardin des sculptures',target:'medici_garden',effects:{curiosity:10,humanism:10}},
            {text:'Sortir et explorer d\'autres quartiers',target:'bottega_entrance',effects:{adaptability:5}}
        ]
    },
    medici_messenger: {
        location:'Palazzo Medici',title:'Le Faux Messager',icon:'📨',
        text:`<p class="scene-text">Votre bluff est risqué. On vous fouille, on vous interroge. Vous improvisez un message d'un prince imaginaire. Les gardes se consultent du regard.</p><p class="scene-text">Finalement, on vous conduit dans une antichambre. Mais l'atmosphère est tendue. Si votre mensonge est découvert...</p>`,
        choices:[
            {text:'Maintenir votre histoire',target:'medici_interrogation',effects:{adaptability:10,prudence:-15}},
            {text:'Avouer et demander pardon',target:'medici_honest',effects:{humanism:10,prudence:5}}
        ]
    },
    medici_interrogation: {
        location:'Palazzo Medici',title:'L\'Interrogatoire',icon:'⚠️',
        text:`<p class="scene-text">Un homme aux yeux froids vous interroge. Vos mensonges s'accumulent et se contredisent. Finalement, il sourit froidement.</p><p class="scene-text">« Tu mens mal, étranger. Mais tu as du courage. » Il fait signe aux gardes. « Jetez-le dehors. S'il revient, jetez-le dans l'Arno. »</p>`,
        choices:[{text:'Partir et chercher fortune ailleurs',target:'streets_escape',effects:{prudence:15}}]
    },
    medici_fresco: {
        location:'Palazzo Medici',title:'Le Projet Ambitieux',icon:'🖼️',
        text:`<p class="scene-text">Vous décrivez une fresque allégorique célébrant la gloire des Médicis. Piero semble indifférent, mais un conseiller prend des notes.</p><p class="scene-text">« Intéressant », dit-il. « Nous avons déjà nos artistes attitrés, mais si vous voulez assister à leur travail... » Il vous donne une lettre d'introduction pour l'atelier de Ghirlandaio.</p>`,
        choices:[
            {text:'Se rendre à l\'atelier de Ghirlandaio',target:'official_workshop',effects:{curiosity:5,adaptability:5}},
            {text:'Chercher un atelier plus original',target:'secret_workshop',effects:{curiosity:10}}
        ]
    },
    medici_truth: {
        location:'Palazzo Medici',title:'L\'Aveu Charmant',icon:'😅',
        text:`<p class="scene-text">Vous avouez votre imposture avec un sourire désarmant. Alfonsina éclate de rire. « Voilà un jeune homme honnête ! C'est rafraîchissant. »</p><p class="scene-text">« Va », dit Alfonsina. « Explore Florence, apprends, et reviens quand tu auras quelque chose de vrai à offrir. La porte te sera ouverte. »</p>`,
        choices:[{text:'Remercier et partir explorer la ville',target:'streets_escape',effects:{humanism:10,adaptability:5}}]
    },
    republic_service: {
        location:'Florence',title:'Au Service de la République',icon:'🏛️',ending:'victory',
        text:`<p class="scene-text">Vous revenez à Florence pour servir la nouvelle République. Machiavel vous recommande auprès du <span class="term">Gonfalonier<span class="tooltip">Chef du gouvernement florentin, élu par les représentants des guildes.</span></span>. Vous devenez un modeste fonctionnaire, mais vous contribuez à préserver les institutions démocratiques.</p><p class="scene-text">Les Médicis reviendront, la République tombera, mais l'idéal républicain survivra dans les écrits et les mémoires. Vous avez servi une cause plus grande que vous.</p>`,
        endTitle:'Fin Civique : Le Serviteur de la République',
        endText:'Vous avez choisi de servir la collectivité plutôt que les puissants. La République florentine était imparfaite, mais elle portait l\'idéal d\'un gouvernement par les citoyens.'
    },
    anatomy_drawings: {
        location:'Cave anatomique',title:'Les Dessins Secrets',icon:'📝',cards:['anatomie'],
        text:`<p class="scene-text">Vous passez des heures à copier les extraordinaires dessins anatomiques. Chaque muscle, chaque os est représenté avec une précision inégalée. C'est un trésor de connaissance.</p><p class="scene-text">Un médecin vous observe. « Ces dessins voyageront un jour dans toutes les universités d'Europe. Pour l'instant, garde-les secrets. »</p>`,
        choices:[
            {text:'Continuer à apprendre l\'anatomie',target:'dissection',effects:{curiosity:10,prudence:-5}},
            {text:'Partir avec vos copies pour les étudier',target:'streets_escape',effects:{prudence:10,curiosity:5}}
        ]
    },
    savonarole_test: {
        location:'San Marco',title:'L\'Épreuve',icon:'⚖️',
        text:`<p class="scene-text">Savonarole vous soumet à un interrogatoire serré sur votre foi. Il perçoit votre intérêt pour l'art et les idées nouvelles.</p><p class="scene-text">« L'art peut servir Dieu ou le démon », dit-il. « Fra Angelico a peint pour la gloire divine. Mais ces humanistes qui redécouvrent les païens... ils ouvrent une porte aux ténèbres. »</p>`,
        choices:[
            {text:'Feindre l\'accord avec Savonarole',target:'savonarole_follower',effects:{adaptability:10,humanism:-10}},
            {text:'Exprimer respectueusement votre désaccord',target:'escape_san_marco',effects:{humanism:15,prudence:-10}}
        ]
    }
};
 qui changeront le monde.'
    },
    lorenzo_audience: {
        location:'Palazzo Medici',title:'L\'Audience du Magnifique',icon:'👑',
        text:`<p class="scene-text">Hélas, on vous apprend une nouvelle terrible : Laurent le Magnifique est mort il y a deux ans. Son fils Piero dirige maintenant Florence, mais sans le génie de son père.</p><p class="scene-text">Le page soupire. « Monseigneur Laurent aurait aimé vous rencontrer. Il accueillait tous les talents. Maintenant... » Il hausse les épaules. « Les temps ont changé. »</p>`,
        choices:[
            {text:'Tenter quand même de rencontrer Piero',target:'medici_palace',effects:{princes:5}},
            {text:'Rester dans le jardin pour étudier',target:'michelangelo_drawing',effects:{humanism:10}}
        ]
    },
    rich_merchant: {
        location:'Piazza del Duomo',title:'Le Marchand Inquiet',icon:'💼',cards:['bancaire'],
        text:`<p class="scene-text">L'homme riche se présente : c'est un membre de la <span class="term">guilde de la Lana<span class="tooltip">Corporation des marchands de laine, l'une des plus puissantes de Florence.</span></span>. « Savonarole menace nos affaires », dit-il. « S'il continue, les artistes fuiront, le commerce souffrira. Florence perdra tout ce qui fait sa grandeur. »</p><p class="scene-text">Il vous examine. « Tu as l'air étranger. Veux-tu gagner quelques florins ? J'ai besoin de quelqu'un pour... surveiller certaines choses. »</p>`,
        choices:[
            {text:'Accepter la proposition du marchand',target:'anti_savonarole',effects:{princes:15,clergy:-10}},
            {text:'Refuser et explorer la ville seul',target:'streets_escape',effects:{prudence:10}}
        ]
    },
    escape_san_marco: {
        location:'Extérieur de San Marco',title:'La Fuite Nocturne',icon:'🌙',
        text:`<p class="scene-text">Vous vous enfuyez du couvent à la faveur de la nuit. Florence s'étend devant vous, pleine de promesses et de dangers. Qu'allez-vous faire de votre liberté ?</p>`,
        choices:[
            {text:'Chercher un atelier d\'artiste',target:'bottega_entrance',effects:{humanism:10}},
            {text:'Quitter Florence pour une autre ville',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    escape_florence: {
        location:'Routes de Toscane',title:'Le Départ',icon:'🛤️',ending:'neutral',
        text:`<p class="scene-text">Vous quittez Florence par la Porta Romana, au petit matin. La cité s'éloigne dans la brume matinale. Vous n'avez pas percé tous ses secrets, mais vous emportez des souvenirs inoubliables.</p><p class="scene-text">D'autres villes vous attendent : Venise la somptueuse, Rome l'éternelle, Milan la puissante. La Renaissance ne s'arrête pas aux murs de Florence.</p>`,
        endTitle:'Fin Prudente : Le Voyageur',
        endText:'Vous avez choisi la prudence plutôt que le risque. Florence gardera ses mystères, mais vous êtes sauf. Peut-être reviendrez-vous un jour...'
    },
    pisa_escape: {
        location:'Pise',title:'La Cité de la Tour',icon:'🏗️',ending:'neutral',
        text:`<p class="scene-text">Pise vous accueille avec sa célèbre tour penchée et son université prestigieuse. Vous êtes loin des intrigues florentines, mais aussi de son bouillonnement créatif.</p><p class="scene-text">Un siècle plus tard, un certain <span class="term">Galileo Galilei<span class="tooltip">Physicien et astronome (1564-1642), né à Pise. Il révolutionnera la science.</span></span> étudiera dans cette même université. Mais pour l'instant, vous profitez de la tranquillité.</p>`,
        endTitle:'Fin Tranquille : L\'Exilé de Pise',
        endText:'Vous avez échappé aux dangers de Florence pour la sécurité de Pise. Une vie paisible vous attend.'
    },
    merchant_news: {
        location:'Taverne du Lion d\'Or',title:'Les Nouvelles du Monde',icon:'📰',cards:['bancaire'],
        text:`<p class="scene-text">Les marchands partagent des nouvelles de toute l'Europe. Les Espagnols ont découvert de nouvelles terres à l'ouest. Les Portugais contournent l'Afrique. Le monde s'agrandit chaque jour.</p><p class="scene-text">« Florence n'est plus le centre du monde », soupire l'un d'eux. « Bientôt, ce seront Lisbonne, Séville, Amsterdam qui domineront le commerce. »</p>`,
        choices:[
            {text:'Demander à les accompagner dans un voyage commercial',target:'merchant_journey',effects:{princes:10,humanism:10}},
            {text:'Rester à Florence pour explorer ses mystères',target:'bottega_entrance',effects:{humanism:10}}
        ]
    },
    merchant_journey: {
        location:'Routes commerciales',title:'Le Voyage du Marchand',icon:'🚢',ending:'victory',
        text:`<p class="scene-text">Vous rejoignez une caravane marchande. Venise, Constantinople, Alexandrie — vous découvrez que la Renaissance est un phénomène mondial. Les idées circulent avec les marchandises.</p><p class="scene-text">Vous revenez à Florence des années plus tard, riche d'expériences. La ville a changé : Savonarole est mort, les Médicis sont revenus. Mais l'esprit de curiosité perdure.</p>`,
        endTitle:'Fin Cosmopolite : Le Marchand des Idées',
        endText:'Vous avez compris que la Renaissance dépasse les frontières. En voyageant, vous avez relié les cultures.'
    },
    tavern_continue: {
        location:'Taverne du Lion d\'Or',title:'La Nuit à la Taverne',icon:'🌙',
        text:`<p class="scene-text">Vous passez la soirée à écouter les conversations. Florence est un carrefour où se croisent marchands, artistes, soldats, prêtres. Chacun a une histoire.</p><p class="scene-text">L'aubergiste vous offre un lit pour la nuit. Demain, l'aventure recommencera.</p>`,
        choices:[
            {text:'Le lendemain, chercher un atelier',target:'bottega_entrance',effects:{humanism:5}},
            {text:'Le lendemain, aller écouter un prêche',target:'savonarole_preach',effects:{clergy:5}}
        ]
    },
    empiricist_path: {
        location:'Florence',title:'La Voie de l\'Observation',icon:'🔭',
        text:`<p class="scene-text">Les étudiants applaudissent votre réponse. « Voilà un esprit moderne ! » s'écrie l'un d'eux. « Viens avec nous demain, nous allons observer une éclipse depuis les collines. »</p><p class="scene-text">Vous avez trouvé votre tribu : des jeunes gens passionnés par l'observation du monde, précurseurs de la méthode scientifique.</p>`,
        choices:[
            {text:'Les accompagner observer l\'éclipse',target:'astronomy_tower',effects:{humanism:15,clergy:-5}},
            {text:'Leur demander de vous présenter à leurs maîtres',target:'secret_workshop',effects:{humanism:10}}
        ]
    },
    aesthetic_path: {
        location:'Florence',title:'La Voie de la Beauté',icon:'🌹',cards:['botticelli'],
        text:`<p class="scene-text">« La beauté comme chemin vers le divin », murmure le vieil homme avec approbation. « C'est l'enseignement de Ficin et de l'Académie. Viens, je vais te présenter à des gens qui pensent comme toi. »</p>`,
        choices:[
            {text:'Suivre le vieil homme vers l\'Académie',target:'poliziano_lesson',effects:{humanism:15,clergy:5}},
            {text:'Chercher plutôt un atelier d\'artiste',target:'bottega_entrance',effects:{humanism:10}}
        ]
    },
    workshop_tour: {
        location:'Atelier de Ghirlandaio',title:'Les Œuvres en Cours',icon:'🎨',cards:['perspective'],
        text:`<p class="scene-text">Le maître vous montre les commandes en cours : une fresque pour Santa Maria Novella, des portraits de notables, des retables pour des chapelles privées.</p><p class="scene-text">« L'art, c'est du travail », dit-il. « Du génie, oui, mais surtout du travail. Dix heures par jour, tous les jours. Es-tu prêt pour ça ? »</p>`,
        choices:[
            {text:'Accepter le dur apprentissage',target:'apprentice_colors',effects:{humanism:10,prudence:5}},
            {text:'Chercher un chemin moins austère',target:'secret_workshop',effects:{humanism:10}}
        ]
    },
    drawing_test: {
        location:'Atelier de Ghirlandaio',title:'L\'Épreuve du Dessin',icon:'✏️',
        text:`<p class="scene-text">Vous prenez un fusain et esquissez un portrait. Le maître observe en silence. Quand vous terminez, il hoche la tête.</p><p class="scene-text">« Pas mal. Pas mal du tout. Tu as l'œil. Mais la main a besoin de travail. » Il sourit. « Je peux t'apprendre, si tu es patient. »</p>`,
        choices:[
            {text:'Accepter son enseignement',target:'apprentice_colors',effects:{humanism:10}},
            {text:'Demander s\'il connaît Léonard de Vinci',target:'secret_workshop',effects:{humanism:15}}
        ]
    },
    workshop_mastery: {
        location:'Atelier de Ghirlandaio',title:'La Maîtrise du Métier',icon:'🏆',ending:'victory',
        text:`<p class="scene-text">Les années passent. Vous gravissez les échelons de l'atelier : broyeur de couleurs, préparateur de panneaux, peintre de fonds, et enfin, assistant du maître.</p><p class="scene-text">Vous n'atteindrez jamais la gloire de Michel-Ange ou de Raphaël, mais vous êtes devenu un artisan accompli. La Renaissance a besoin de génies, mais aussi de maîtres solides qui transmettent le savoir.</p>`,
        endTitle:'Fin Artisanale : Le Maître de la Bottega',
        endText:'Vous avez choisi la voie de l\'artisanat patient. Sans vous et vos semblables, les chefs-d\'œuvre de la Renaissance n\'auraient jamais vu le jour.'
    },
    portrait_workshop: {
        location:'Atelier de Portraits',title:'L\'Art du Portrait',icon:'🖼️',cards:['sfumato'],
        text:`<p class="scene-text">Le portraitiste vous accueille chaleureusement. « Les portraits, c'est l'avenir », dit-il. « Les marchands veulent immortaliser leurs visages. C'est moins glorieux que les fresques, mais ça paie bien. »</p><p class="scene-text">Sur un chevalet, un portrait en cours montre une femme au sourire énigmatique. « Le secret », explique-t-il, « c'est de capturer l'âme, pas juste les traits. »</p>`,
        choices:[
            {text:'Devenir apprenti portraitiste',target:'workshop_mastery',effects:{princes:10,prudence:5}},
            {text:'Demander qui a peint ce portrait mystérieux',target:'secret_workshop',effects:{humanism:15}}
        ]
    },
    leonardo_employ: {
        location:'Atelier de Léonard',title:'Au Service du Génie',icon:'⚙️',
        text:`<p class="scene-text">Léonard rit. « Un emploi ? Je ne suis pas un patron ordinaire. Je commence dix projets et n'en finis aucun. Je disparais pendant des jours pour observer des oiseaux ou disséquer des cadavres. »</p><p class="scene-text">Il réfléchit. « Mais si tu veux apprendre... vraiment apprendre, pas juste gagner ta vie, reste. Je ne peux pas te payer, mais je peux t'ouvrir les yeux. »</p>`,
        choices:[
            {text:'Accepter cette offre extraordinaire',target:'leonardo_teaching',effects:{humanism:15}},
            {text:'Chercher un emploi plus stable',target:'official_workshop',effects:{prudence:10,princes:5}}
        ]
    },
    milan_journey: {
        location:'Route de Milan',title:'Vers la Cour des Sforza',icon:'🏰',ending:'victory',
        text:`<p class="scene-text">Léonard vous donne une lettre pour <span class="term">Ludovic le More<span class="tooltip">Ludovic Sforza (1452-1508), duc de Milan. Grand mécène, il accueille Léonard de Vinci à sa cour.</span></span>, duc de Milan. « Dis-lui que je viendrai bientôt. En attendant, sers-le bien. »</p><p class="scene-text">À Milan, vous découvrez une cour somptueuse où Léonard peindra la Cène et concevra des machines extraordinaires. Vous êtes devenu l'assistant d'un génie.</p>`,
        endTitle:'Fin Prestigieuse : L\'Assistant du Génie',
        endText:'Vous avez lié votre destin à celui de Léonard. Votre nom ne sera pas dans les livres d\'histoire, mais vous aurez vécu aux côtés de l\'homme le plus extraordinaire de son temps.'
    },
    medici_honest: {
        location:'Palazzo Medici',title:'L\'Honnêteté Récompensée',icon:'🤝',
        text:`<p class="scene-text">Le majordome sourit. « L'honnêteté est rare en ces temps troublés. » Il vous conduit vers les jardins intérieurs. « Vous ne verrez pas Monseigneur, mais vous pouvez visiter le palais. C'est un musée vivant. »</p><p class="scene-text">Vous découvrez des merveilles : fresques de Gozzoli, sculptures antiques, manuscrits enluminés. La collection des Médicis résume à elle seule la Renaissance.</p>`,
        choices:[
            {text:'Demander à visiter le jardin des sculptures',target:'medici_garden',effects:{humanism:10,princes:5}},
            {text:'Sortir et explorer d\'autres quartiers',target:'bottega_entrance',effects:{humanism:5}}
        ]
    },
    medici_messenger: {
        location:'Palazzo Medici',title:'Le Faux Messager',icon:'📨',
        text:`<p class="scene-text">Votre bluff est risqué. On vous fouille, on vous interroge. Vous improvisez un message d'un prince imaginaire. Les gardes se consultent du regard.</p><p class="scene-text">Finalement, on vous conduit dans une antichambre. Mais l'atmosphère est tendue. Si votre mensonge est découvert...</p>`,
        choices:[
            {text:'Maintenir votre histoire',target:'medici_interrogation',effects:{princes:10,prudence:-15}},
            {text:'Avouer et demander pardon',target:'medici_honest',effects:{humanism:10,prudence:5}}
        ]
    },
    medici_interrogation: {
        location:'Palazzo Medici',title:'L\'Interrogatoire',icon:'⚠️',
        text:`<p class="scene-text">Un homme aux yeux froids vous interroge. Vos mensonges s'accumulent et se contredisent. Finalement, il sourit froidement.</p><p class="scene-text">« Tu mens mal, étranger. Mais tu as du courage. » Il fait signe aux gardes. « Jetez-le dehors. S'il revient, jetez-le dans l'Arno. »</p>`,
        choices:[{text:'Partir et chercher fortune ailleurs',target:'streets_escape',effects:{prudence:15,princes:-10}}]
    },
    medici_fresco: {
        location:'Palazzo Medici',title:'Le Projet Ambitieux',icon:'🖼️',
        text:`<p class="scene-text">Vous décrivez une fresque allégorique célébrant la gloire des Médicis. Piero semble indifférent, mais un conseiller prend des notes.</p><p class="scene-text">« Intéressant », dit-il. « Nous avons déjà nos artistes attitrés, mais si vous voulez assister à leur travail... » Il vous donne une lettre d'introduction pour l'atelier de Ghirlandaio.</p>`,
        choices:[
            {text:'Se rendre à l\'atelier de Ghirlandaio',target:'official_workshop',effects:{princes:5,humanism:5}},
            {text:'Chercher un atelier plus original',target:'secret_workshop',effects:{humanism:10}}
        ]
    },
    medici_truth: {
        location:'Palazzo Medici',title:'L\'Aveu Charmant',icon:'😅',
        text:`<p class="scene-text">Vous avouez votre imposture avec un sourire désarmant. Alfonsina éclate de rire. « Voilà un jeune homme honnête ! C'est rafraîchissant. »</p><p class="scene-text">« Va », dit Alfonsina. « Explore Florence, apprends, et reviens quand tu auras quelque chose de vrai à offrir. La porte te sera ouverte. »</p>`,
        choices:[{text:'Remercier et partir explorer la ville',target:'streets_escape',effects:{humanism:10,princes:5}}]
    },
    republic_service: {
        location:'Florence',title:'Au Service de la République',icon:'🏛️',ending:'victory',
        text:`<p class="scene-text">Vous revenez à Florence pour servir la nouvelle République. Machiavel vous recommande auprès du <span class="term">Gonfalonier<span class="tooltip">Chef du gouvernement florentin, élu par les représentants des guildes.</span></span>. Vous devenez un modeste fonctionnaire, mais vous contribuez à préserver les institutions démocratiques.</p><p class="scene-text">Les Médicis reviendront, la République tombera, mais l'idéal républicain survivra dans les écrits et les mémoires. Vous avez servi une cause plus grande que vous.</p>`,
        endTitle:'Fin Civique : Le Serviteur de la République',
        endText:'Vous avez choisi de servir la collectivité plutôt que les puissants. La République florentine était imparfaite, mais elle portait l\'idéal d\'un gouvernement par les citoyens.'
    },
    anatomy_drawings: {
        location:'Cave anatomique',title:'Les Dessins Secrets',icon:'📝',cards:['anatomie'],
        text:`<p class="scene-text">Vous passez des heures à copier les extraordinaires dessins anatomiques. Chaque muscle, chaque os est représenté avec une précision inégalée. C'est un trésor de connaissance.</p><p class="scene-text">Un médecin vous observe. « Ces dessins voyageront un jour dans toutes les universités d'Europe. Pour l'instant, garde-les secrets. »</p>`,
        choices:[
            {text:'Continuer à apprendre l\'anatomie',target:'dissection',effects:{humanism:15,prudence:-5,clergy:-10}},
            {text:'Partir avec vos copies pour les étudier',target:'streets_escape',effects:{prudence:10,humanism:10}}
        ]
    },
    savonarole_test: {
        location:'San Marco',title:'L\'Épreuve',icon:'⚖️',
        text:`<p class="scene-text">Savonarole vous soumet à un interrogatoire serré sur votre foi. Il perçoit votre intérêt pour l'art et les idées nouvelles.</p><p class="scene-text">« L'art peut servir Dieu ou le démon », dit-il. « Fra Angelico a peint pour la gloire divine. Mais ces humanistes qui redécouvrent les païens... ils ouvrent une porte aux ténèbres. »</p>`,
        choices:[
            {text:'Feindre l\'accord avec Savonarole',target:'savonarole_follower',effects:{clergy:15,humanism:-10}},
            {text:'Exprimer respectueusement votre désaccord',target:'escape_san_marco',effects:{humanism:15,clergy:-15,prudence:-10}}
        ]
    }
};
 qui changeront le monde.'
    },
    lorenzo_audience: {
        location:'Palazzo Medici',title:'L\'Audience du Magnifique',icon:'👑',
        text:`<p class="scene-text">Hélas, on vous apprend une nouvelle terrible : Laurent le Magnifique est mort il y a deux ans. Son fils Piero dirige maintenant Florence, mais sans le génie de son père.</p><p class="scene-text">Le page soupire. « Monseigneur Laurent aurait aimé vous rencontrer. Il accueillait tous les talents. Maintenant... » Il hausse les épaules. « Les temps ont changé. »</p>`,
        choices:[
            {text:'Tenter quand même de rencontrer Piero',target:'medici_palace',effects:{princes:5}},
            {text:'Rester dans le jardin pour étudier',target:'michelangelo_drawing',effects:{humanism:10}}
        ]
    },
    rich_merchant: {
        location:'Piazza del Duomo',title:'Le Marchand Inquiet',icon:'💼',cards:['bancaire'],
        text:`<p class="scene-text">L'homme riche se présente : c'est un membre de la <span class="term">guilde de la Lana<span class="tooltip">Corporation des marchands de laine, l'une des plus puissantes de Florence.</span></span>. « Savonarole menace nos affaires », dit-il. « S'il continue, les artistes fuiront, le commerce souffrira. Florence perdra tout ce qui fait sa grandeur. »</p><p class="scene-text">Il vous examine. « Tu as l'air étranger. Veux-tu gagner quelques florins ? J'ai besoin de quelqu'un pour... surveiller certaines choses. »</p>`,
        choices:[
            {text:'Accepter la proposition du marchand',target:'anti_savonarole',effects:{princes:15,clergy:-10}},
            {text:'Refuser et explorer la ville seul',target:'streets_escape',effects:{prudence:10}}
        ]
    },
    escape_san_marco: {
        location:'Extérieur de San Marco',title:'La Fuite Nocturne',icon:'🌙',
        text:`<p class="scene-text">Vous vous enfuyez du couvent à la faveur de la nuit. Florence s'étend devant vous, pleine de promesses et de dangers. Qu'allez-vous faire de votre liberté ?</p>`,
        choices:[
            {text:'Chercher un atelier d\'artiste',target:'bottega_entrance',effects:{humanism:10}},
            {text:'Quitter Florence pour une autre ville',target:'escape_florence',effects:{prudence:15}}
        ]
    },
    escape_florence: {
        location:'Routes de Toscane',title:'Le Départ',icon:'🛤️',ending:'neutral',
        text:`<p class="scene-text">Vous quittez Florence par la Porta Romana, au petit matin. La cité s'éloigne dans la brume matinale. Vous n'avez pas percé tous ses secrets, mais vous emportez des souvenirs inoubliables.</p><p class="scene-text">D'autres villes vous attendent : Venise la somptueuse, Rome l'éternelle, Milan la puissante. La Renaissance ne s'arrête pas aux murs de Florence.</p>`,
        endTitle:'Fin Prudente : Le Voyageur',
        endText:'Vous avez choisi la prudence plutôt que le risque. Florence gardera ses mystères, mais vous êtes sauf. Peut-être reviendrez-vous un jour...'
    },
    pisa_escape: {
        location:'Pise',title:'La Cité de la Tour',icon:'🏗️',ending:'neutral',
        text:`<p class="scene-text">Pise vous accueille avec sa célèbre tour penchée et son université prestigieuse. Vous êtes loin des intrigues florentines, mais aussi de son bouillonnement créatif.</p><p class="scene-text">Un siècle plus tard, un certain <span class="term">Galileo Galilei<span class="tooltip">Physicien et astronome (1564-1642), né à Pise. Il révolutionnera la science.</span></span> étudiera dans cette même université. Mais pour l'instant, vous profitez de la tranquillité.</p>`,
        endTitle:'Fin Tranquille : L\'Exilé de Pise',
        endText:'Vous avez échappé aux dangers de Florence pour la sécurité de Pise. Une vie paisible vous attend.'
    },
    merchant_news: {
        location:'Taverne du Lion d\'Or',title:'Les Nouvelles du Monde',icon:'📰',cards:['bancaire'],
        text:`<p class="scene-text">Les marchands partagent des nouvelles de toute l'Europe. Les Espagnols ont découvert de nouvelles terres à l'ouest. Les Portugais contournent l'Afrique. Le monde s'agrandit chaque jour.</p><p class="scene-text">« Florence n'est plus le centre du monde », soupire l'un d'eux. « Bientôt, ce seront Lisbonne, Séville, Amsterdam qui domineront le commerce. »</p>`,
        choices:[
            {text:'Demander à les accompagner dans un voyage commercial',target:'merchant_journey',effects:{humanism:10,princes:10}},
            {text:'Rester à Florence pour explorer ses mystères',target:'bottega_entrance',effects:{humanism:10}}
        ]
    },
    merchant_journey: {
        location:'Routes commerciales',title:'Le Voyage du Marchand',icon:'🚢',ending:'victory',
        text:`<p class="scene-text">Vous rejoignez une caravane marchande. Venise, Constantinople, Alexandrie — vous découvrez que la Renaissance est un phénomène mondial. Les idées circulent avec les marchandises.</p><p class="scene-text">Vous revenez à Florence des années plus tard, riche d'expériences. La ville a changé : Savonarole est mort, les Médicis sont revenus. Mais l'esprit de curiosité perdure.</p>`,
        endTitle:'Fin Cosmopolite : Le Marchand des Idées',
        endText:'Vous avez compris que la Renaissance dépasse les frontières. En voyageant, vous avez relié les cultures.'
    },
    tavern_continue: {
        location:'Taverne du Lion d\'Or',title:'La Nuit à la Taverne',icon:'🌙',
        text:`<p class="scene-text">Vous passez la soirée à écouter les conversations. Florence est un carrefour où se croisent marchands, artistes, soldats, prêtres. Chacun a une histoire.</p><p class="scene-text">L'aubergiste vous offre un lit pour la nuit. Demain, l'aventure recommencera.</p>`,
        choices:[
            {text:'Le lendemain, chercher un atelier',target:'bottega_entrance',effects:{humanism:5}},
            {text:'Le lendemain, aller écouter un prêche',target:'savonarole_preach',effects:{clergy:5}}
        ]
    },
    empiricist_path: {
        location:'Florence',title:'La Voie de l\'Observation',icon:'🔭',
        text:`<p class="scene-text">Les étudiants applaudissent votre réponse. « Voilà un esprit moderne ! » s'exclame l'un d'eux. « Viens avec nous demain, nous allons observer une éclipse depuis les collines. »</p><p class="scene-text">Vous avez trouvé votre tribu : des jeunes gens passionnés par l'observation du monde, précurseurs de la méthode scientifique.</p>`,
        choices:[
            {text:'Les accompagner observer l\'éclipse',target:'astronomy_tower',effects:{humanism:15,clergy:-5}},
            {text:'Leur demander de vous présenter à leurs maîtres',target:'secret_workshop',effects:{humanism:10}}
        ]
    },
    aesthetic_path: {
        location:'Florence',title:'La Voie de la Beauté',icon:'🌹',cards:['botticelli'],
        text:`<p class="scene-text">« La beauté comme chemin vers le divin », murmure le vieil homme avec approbation. « C'est l'enseignement de Ficin et de l'Académie. Viens, je vais te présenter à des gens qui pensent comme toi. »</p>`,
        choices:[
            {text:'Suivre le vieil homme vers l\'Académie',target:'poliziano_lesson',effects:{humanism:15,clergy:5}},
            {text:'Chercher plutôt un atelier d\'artiste',target:'bottega_entrance',effects:{humanism:10}}
        ]
    },
    workshop_tour: {
        location:'Atelier de Ghirlandaio',title:'Les Œuvres en Cours',icon:'🎨',cards:['perspective'],
        text:`<p class="scene-text">Le maître vous montre les commandes en cours : une fresque pour Santa Maria Novella, des portraits de notables, des retables pour des chapelles privées.</p><p class="scene-text">« L'art, c'est du travail », dit-il. « Du génie, oui, mais surtout du travail. Dix heures par jour, tous les jours. Es-tu prêt pour ça ? »</p>`,
        choices:[
            {text:'Accepter le dur apprentissage',target:'apprentice_colors',effects:{humanism:10,prudence:5}},
            {text:'Chercher un chemin moins austère',target:'secret_workshop',effects:{humanism:10,prudence:-5}}
        ]
    },
    drawing_test: {
        location:'Atelier de Ghirlandaio',title:'L\'Épreuve du Dessin',icon:'✏️',
        text:`<p class="scene-text">Vous prenez un fusain et esquissez un portrait. Le maître observe en silence. Quand vous terminez, il hoche la tête.</p><p class="scene-text">« Pas mal. Pas mal du tout. Tu as l'œil. Mais la main a besoin de travail. » Il sourit. « Je peux t'apprendre, si tu es patient. »</p>`,
        choices:[
            {text:'Accepter son enseignement',target:'apprentice_colors',effects:{humanism:10}},
            {text:'Demander s\'il connaît Léonard de Vinci',target:'secret_workshop',effects:{humanism:15}}
        ]
    },
    workshop_mastery: {
        location:'Atelier de Ghirlandaio',title:'La Maîtrise du Métier',icon:'🏆',ending:'victory',
        text:`<p class="scene-text">Les années passent. Vous gravissez les échelons de l'atelier : broyeur de couleurs, préparateur de panneaux, peintre de fonds, et enfin, assistant du maître.</p><p class="scene-text">Vous n'atteindrez jamais la gloire de Michel-Ange ou de Raphaël, mais vous êtes devenu un artisan accompli. La Renaissance a besoin de génies, mais aussi de maîtres solides qui transmettent le savoir.</p>`,
        endTitle:'Fin Artisanale : Le Maître de la Bottega',
        endText:'Vous avez choisi la voie de l\'artisanat patient. Sans vous et vos semblables, les chefs-d\'œuvre de la Renaissance n\'auraient jamais vu le jour.'
    },
    portrait_workshop: {
        location:'Atelier de Portraits',title:'L\'Art du Portrait',icon:'🖼️',cards:['sfumato'],
        text:`<p class="scene-text">Le portraitiste vous accueille chaleureusement. « Les portraits, c'est l'avenir », dit-il. « Les marchands veulent immortaliser leurs visages. C'est moins glorieux que les fresques, mais ça paie bien. »</p><p class="scene-text">Sur un chevalet, un portrait en cours montre une femme au sourire énigmatique. « Le secret », explique-t-il, « c'est de capturer l'âme, pas juste les traits. »</p>`,
        choices:[
            {text:'Devenir apprenti portraitiste',target:'workshop_mastery',effects:{princes:10,prudence:5}},
            {text:'Demander qui a peint ce portrait mystérieux',target:'secret_workshop',effects:{humanism:15}}
        ]
    },
    leonardo_employ: {
        location:'Atelier de Léonard',title:'Au Service du Génie',icon:'⚙️',
        text:`<p class="scene-text">Léonard rit. « Un emploi ? Je ne suis pas un patron ordinaire. Je commence dix projets et n'en finis aucun. Je disparais pendant des jours pour observer des oiseaux ou disséquer des cadavres. »</p><p class="scene-text">Il réfléchit. « Mais si tu veux apprendre... vraiment apprendre, pas juste gagner ta vie, reste. Je ne peux pas te payer, mais je peux t'ouvrir les yeux. »</p>`,
        choices:[
            {text:'Accepter cette offre extraordinaire',target:'leonardo_teaching',effects:{humanism:15,prudence:-10}},
            {text:'Chercher un emploi plus stable',target:'official_workshop',effects:{prudence:10,princes:5}}
        ]
    },
    milan_journey: {
        location:'Route de Milan',title:'Vers la Cour des Sforza',icon:'🏰',ending:'victory',
        text:`<p class="scene-text">Léonard vous donne une lettre pour <span class="term">Ludovic le More<span class="tooltip">Ludovic Sforza (1452-1508), duc de Milan. Grand mécène, il accueille Léonard de Vinci à sa cour.</span></span>, duc de Milan. « Dis-lui que je viendrai bientôt. En attendant, sers-le bien. »</p><p class="scene-text">À Milan, vous découvrez une cour somptueuse où Léonard peindra la Cène et concevra des machines extraordinaires. Vous êtes devenu l'assistant d'un génie.</p>`,
        endTitle:'Fin Prestigieuse : L\'Assistant du Génie',
        endText:'Vous avez lié votre destin à celui de Léonard. Votre nom ne sera pas dans les livres d\'histoire, mais vous aurez vécu aux côtés de l\'homme le plus extraordinaire de son temps.'
    },
    medici_honest: {
        location:'Palazzo Medici',title:'L\'Honnêteté Récompensée',icon:'🤝',
        text:`<p class="scene-text">Le majordome sourit. « L'honnêteté est rare en ces temps troublés. » Il vous conduit vers les jardins intérieurs. « Vous ne verrez pas Monseigneur, mais vous pouvez visiter le palais. C'est un musée vivant. »</p><p class="scene-text">Vous découvrez des merveilles : fresques de Gozzoli, sculptures antiques, manuscrits enluminés. La collection des Médicis résume à elle seule la Renaissance.</p>`,
        choices:[
            {text:'Demander à visiter le jardin des sculptures',target:'medici_garden',effects:{humanism:10,princes:10}},
            {text:'Sortir et explorer d\'autres quartiers',target:'bottega_entrance',effects:{humanism:5}}
        ]
    },
    medici_messenger: {
        location:'Palazzo Medici',title:'Le Faux Messager',icon:'📨',
        text:`<p class="scene-text">Votre bluff est risqué. On vous fouille, on vous interroge. Vous improvisez un message d'un prince imaginaire. Les gardes se consultent du regard.</p><p class="scene-text">Finalement, on vous conduit dans une antichambre. Mais l'atmosphère est tendue. Si votre mensonge est découvert...</p>`,
        choices:[
            {text:'Maintenir votre histoire',target:'medici_interrogation',effects:{princes:10,prudence:-20}},
            {text:'Avouer et demander pardon',target:'medici_honest',effects:{humanism:10,prudence:5}}
        ]
    },
    medici_interrogation: {
        location:'Palazzo Medici',title:'L\'Interrogatoire',icon:'⚠️',
        text:`<p class="scene-text">Un homme aux yeux froids vous interroge. Vos mensonges s'accumulent et se contredisent. Finalement, il sourit froidement.</p><p class="scene-text">« Tu mens mal, étranger. Mais tu as du courage. » Il fait signe aux gardes. « Jetez-le dehors. S'il revient, jetez-le dans l'Arno. »</p>`,
        choices:[{text:'Partir et chercher fortune ailleurs',target:'streets_escape',effects:{prudence:10,princes:-15}}]
    },
    medici_fresco: {
        location:'Palazzo Medici',title:'Le Projet Ambitieux',icon:'🖼️',
        text:`<p class="scene-text">Vous décrivez une fresque allégorique célébrant la gloire des Médicis. Piero semble indifférent, mais un conseiller prend des notes.</p><p class="scene-text">« Intéressant », dit-il. « Nous avons déjà nos artistes attitrés, mais si vous voulez assister à leur travail... » Il vous donne une lettre d'introduction pour l'atelier de Ghirlandaio.</p>`,
        choices:[
            {text:'Se rendre à l\'atelier de Ghirlandaio',target:'official_workshop',effects:{princes:5,humanism:5}},
            {text:'Chercher un atelier plus original',target:'secret_workshop',effects:{humanism:10}}
        ]
    },
    medici_truth: {
        location:'Palazzo Medici',title:'L\'Aveu Charmant',icon:'😅',
        text:`<p class="scene-text">Vous avouez votre imposture avec un sourire désarmant. Alfonsina éclate de rire. « Voilà un jeune homme honnête ! C'est rafraîchissant. »</p><p class="scene-text">« Va », dit Alfonsina. « Explore Florence, apprends, et reviens quand tu auras quelque chose de vrai à offrir. La porte te sera ouverte. »</p>`,
        choices:[{text:'Remercier et partir explorer la ville',target:'streets_escape',effects:{humanism:10,princes:5}}]
    },
    republic_service: {
        location:'Florence',title:'Au Service de la République',icon:'🏛️',ending:'victory',
        text:`<p class="scene-text">Vous revenez à Florence pour servir la nouvelle République. Machiavel vous recommande auprès du <span class="term">Gonfalonier<span class="tooltip">Chef du gouvernement florentin, élu par les représentants des guildes.</span></span>. Vous devenez un modeste fonctionnaire, mais vous contribuez à préserver les institutions démocratiques.</p><p class="scene-text">Les Médicis reviendront, la République tombera, mais l'idéal républicain survivra dans les écrits et les mémoires. Vous avez servi une cause plus grande que vous.</p>`,
        endTitle:'Fin Civique : Le Serviteur de la République',
        endText:'Vous avez choisi de servir la collectivité plutôt que les puissants. La République florentine était imparfaite, mais elle portait l\'idéal d\'un gouvernement par les citoyens.'
    },
    anatomy_drawings: {
        location:'Cave anatomique',title:'Les Dessins Secrets',icon:'📝',cards:['anatomie'],
        text:`<p class="scene-text">Vous passez des heures à copier les extraordinaires dessins anatomiques. Chaque muscle, chaque os est représenté avec une précision inégalée. C'est un trésor de connaissance.</p><p class="scene-text">Un médecin vous observe. « Ces dessins voyageront un jour dans toutes les universités d'Europe. Pour l'instant, garde-les secrets. »</p>`,
        choices:[
            {text:'Continuer à apprendre l\'anatomie',target:'dissection',effects:{humanism:15,prudence:-5,clergy:-10}},
            {text:'Partir avec vos copies pour les étudier',target:'streets_escape',effects:{prudence:10,humanism:5}}
        ]
    },
    savonarole_test: {
        location:'San Marco',title:'L\'Épreuve',icon:'⚖️',
        text:`<p class="scene-text">Savonarole vous soumet à un interrogatoire serré sur votre foi. Il perçoit votre intérêt pour l'art et les idées nouvelles.</p><p class="scene-text">« L'art peut servir Dieu ou le démon », dit-il. « Fra Angelico a peint pour la gloire divine. Mais ces humanistes qui redécouvrent les païens... ils ouvrent une porte aux ténèbres. »</p>`,
        choices:[
            {text:'Feindre l\'accord avec Savonarole',target:'savonarole_follower',effects:{clergy:15,humanism:-10}},
            {text:'Exprimer respectueusement votre désaccord',target:'escape_san_marco',effects:{humanism:15,prudence:-10,clergy:-15}}
        ]
    }
};
 a mis des années à peindre tout cela. Les Tornabuoni ont payé une fortune. Mais regardez... » Il pointe des visages dans la foule peinte. « Ce sont des Florentins réels. Des marchands, des humanistes, même des membres de la famille Médicis. L'art sacré et l'art profane se mélangent. »</p><p class="scene-text">Il fronce les sourcils. « Savonarole n'aime pas cela. Il dit que l'église n'est pas un salon. Mais moi, je pense que la beauté honore Dieu, quelle que soit sa forme. »</p>`,
        choices:[
            {text:'Demander où travaille Ghirlandaio maintenant',target:'ghirlandaio_workshop',effects:{humanism:10}},
            {text:'Approfondir la discussion sur l\'art et la foi',target:'art_faith_debate',effects:{humanism:10,clergy:5}},
            {text:'Sortir de l\'église pour explorer la ville',target:'market_life',effects:{}}
        ]
    },
    
    confession_scene: {
        location:'Santa Maria Novella',title:'La Confession',icon:'🙏',
        text:`<p class="scene-text">Dans l'obscurité du confessionnal, vous parlez. De vos doutes, de vos espoirs, de votre quête. Le prêtre écoute en silence.</p><p class="scene-text">« Mon fils », dit-il enfin, « Florence est une ville de tentations. La richesse, la beauté, le pouvoir — tout y est à portée de main. Mais aussi la damnation. Savonarole a raison sur un point : nous avons oublié Dieu dans notre course aux plaisirs. »</p><p class="scene-text">Il marque une pause. « Mais il a tort sur un autre : Dieu ne veut pas notre misère. Il veut notre élévation. Trouve ta voie, mon fils. Elle n'est peut-être ni avec les princes ni avec les moines, mais dans ton propre cœur. »</p>`,
        choices:[
            {text:'Remercier et aller réfléchir',target:'reflection_walk',effects:{prudence:10,humanism:5}},
            {text:'Demander conseil pour trouver du travail',target:'priest_advice',effects:{clergy:5}},
            {text:'Sortir troublé par ces paroles',target:'market_life',effects:{humanism:5}}
        ]
    },
    
    street_artist: {
        location:'Mercato Centrale',title:'L\'Artiste de Rue',icon:'✏️',
        text:`<p class="scene-text">L'artiste dessine des portraits pour quelques sous. Ses traits sont rapides mais précis. Vous observez sa technique : il capte l'essentiel d'un visage en quelques lignes.</p><p class="scene-text">« Tu t'y connais ? » demande-t-il en remarquant votre attention. « J'étais apprenti chez Botticelli avant... avant qu'il ne devienne fou. » Il crache par terre. « Il brûle ses propres tableaux maintenant. Les plus beaux nus de Florence, détruits par la main qui les a créés. Savonarole lui a retourné le cerveau. »</p><p class="scene-text">Il vous tend un fusain. « Tiens, essaie. Si tu as du talent, je connais des ateliers qui recrutent. Des gens qui n'ont pas peur des moines. »</p>`,
        choices:[
            {text:'Essayer de dessiner',target:'drawing_attempt',effects:{humanism:10}},
            {text:'Demander des détails sur Botticelli',target:'botticelli_story',effects:{humanism:10,clergy:-5}},
            {text:'Demander quels ateliers recrutent',target:'bottega_district',effects:{humanism:5}}
        ]
    },
    
    leather_workshop: {
        location:'Santa Croce',title:'L\'Atelier du Tanneur',icon:'🧤',
        text:`<p class="scene-text">Vous acceptez l'offre du vieil artisan. Le travail est dur — le cuir doit être traité avec des produits âcres, les journées sont longues — mais honnête. Vous apprenez un métier.</p><p class="scene-text">Le soir, l'artisan partage ses souvenirs. « J'ai vu Laurent le Magnifique défiler dans ces rues. J'ai vu les fêtes, les tournois, les carnavals. Maintenant, Savonarole veut interdire tout cela. » Il secoue la tête. « Florence n'est plus ce qu'elle était. »</p><p class="scene-text">Après quelques semaines, vous maîtrisez les bases du métier. Mais d'autres voies s'ouvrent à vous...</p>`,
        choices:[
            {text:'Rester artisan — c\'est une vie stable',target:'artisan_life',effects:{prudence:15}},
            {text:'Utiliser ce que vous avez appris pour explorer d\'autres quartiers',target:'market_life',effects:{humanism:5,prudence:5}},
            {text:'Chercher un travail plus intellectuel',target:'student_encounter',effects:{humanism:10}}
        ]
    },
    
    franciscan_monks: {
        location:'Santa Croce',title:'Les Frères Mineurs',icon:'🕊️',
        text:`<p class="scene-text">Les franciscains sont différents des dominicains de Savonarole. Leur ordre prêche la pauvreté et la charité, pas la condamnation et le feu. Un frère vous accueille avec bonté.</p><p class="scene-text">« Nous aidons les pauvres, nous soignons les malades », explique-t-il. « C'est notre mission. Savonarole prêche contre les riches, mais que fait-il pour les pauvres ? Il brûle des tableaux. Nous, nous donnons à manger. »</p><p class="scene-text">Il vous propose de partager leur repas. « Tu as l'air d'un chercheur, pas d'un mendiant. Mais tout le monde est bienvenu à notre table. »</p>`,
        choices:[
            {text:'Rester quelques jours chez les franciscains',target:'franciscan_stay',effects:{clergy:10,humanism:5}},
            {text:'Leur demander ce qu\'ils pensent de l\'art',target:'franciscan_art',effects:{humanism:10,clergy:5}},
            {text:'Remercier et partir explorer la ville',target:'reflection_walk',effects:{}}
        ]
    },
    
    old_artist_wisdom: {
        location:'Via dei Servi',title:'La Sagesse du Vieux Maître',icon:'👴',
        text:`<p class="scene-text">Le vieil homme s'appelle Jacopo. Il a été apprenti chez Donatello, travaillé avec Ghiberti sur les Portes du Paradis, connu personnellement Cosme de Médicis. « J'ai tout vu », dit-il. « La Renaissance, c'est moi qui l'ai vécue depuis le début. »</p><p class="scene-text">Il regarde ses mains tremblantes. « Maintenant, je ne peux plus tenir un pinceau. Mais j'ai des yeux, et je vois ce qui se passe. Savonarole croit détruire la corruption, mais il détruit la beauté. Les Médicis croient protéger l'art, mais ils le mettent en cage. Et les jeunes... » Il sourit. « Les jeunes comme toi, vous devez trouver une autre voie. »</p>`,
        choices:[
            {text:'Lui demander conseil pour trouver cette voie',target:'jacopo_advice',effects:{humanism:15,prudence:5}},
            {text:'Lui demander de vous parler de Donatello',target:'donatello_stories',effects:{humanism:15}},
            {text:'Le remercier et aller voir les ateliers',target:'bottega_district',effects:{humanism:5}}
        ]
    },
    
    young_painter_friendship: {
        location:'Atelier de Piero',title:'L\'Amitié des Artistes',icon:'🎨',cards:['sfumato'],
        text:`<p class="scene-text">Piero vous montre son travail. C'est modeste mais plein de vie : des scènes de rue, des portraits de marchands, des études de lumière. « Je ne serai jamais Léonard », dit-il. « Mais je serai moi. Et c'est déjà quelque chose. »</p><p class="scene-text">Il vous parle de la communauté des artistes florentins : les rivalités, les amitiés, les commandes disputées, les protections recherchées. « Les Médicis paient bien, mais ils sont exigeants. Savonarole ne paie rien, mais il menace. Et entre les deux, nous essayons de survivre. »</p><p class="scene-text">Il vous propose de rester quelques jours pour l'aider sur une commande. « Ce n'est pas glorieux, mais tu apprendras. Et tu rencontreras des gens. »</p>`,
        choices:[
            {text:'Accepter et rester',target:'piero_apprentice',effects:{humanism:15,prudence:5}},
            {text:'Accepter mais continuer à explorer la ville le soir',target:'dual_life_artist',effects:{humanism:10}},
            {text:'Refuser poliment — vous avez d\'autres ambitions',target:'bottega_district',effects:{}}
        ]
    },
    
    artist_vs_monk: {
        location:'Rues de Florence',title:'Le Conflit des Visions',icon:'⚔️',
        text:`<p class="scene-text">Piero crache par terre au nom de Savonarole. « Ce moine détruit ce que nous construisons. Il dit que nos nus sont impies, que nos mythologies sont païennes. Mais que sait-il de la beauté ? Qu'a-t-il jamais créé ? »</p><p class="scene-text">Il s'enflamme. « Laurent le Magnifique comprenait. La beauté élève l'âme. L'art est prière. Mais Savonarole veut nous ramener au Moyen Âge, aux cathédrales sombres, aux saints grimaçants. » Il vous saisit le bras. « Il faut choisir son camp. Les créateurs ou les destructeurs. Toi, qu'est-ce que tu choisis ? »</p>`,
        choices:[
            {text:'Les créateurs — je veux apprendre l\'art',target:'piero_apprentice',effects:{humanism:15,clergy:-10}},
            {text:'Je ne suis pas sûr — je veux comprendre les deux côtés',target:'reflection_walk',effects:{prudence:10}},
            {text:'Peut-être que Savonarole n\'a pas totalement tort...',target:'savonarole_preach',effects:{clergy:10,humanism:-5}}
        ]
    },
    
    workshop_tour: {
        location:'Atelier',title:'Les Secrets de l\'Atelier',icon:'🖌️',cards:['bottega'],
        text:`<p class="scene-text">On vous fait visiter l'atelier. Vous découvrez les différentes étapes de la création : la préparation des panneaux, le broyage des pigments, le tracé des cartons, l'application de l'or, les glacis successifs.</p><p class="scene-text">« Dix ans pour devenir maître », explique l'assistant. « Et encore, si vous avez du talent. La plupart restent apprentis toute leur vie, à préparer les couleurs pour les autres. » Il hausse les épaules. « Mais c'est un travail honnête. Et parfois, on touche à la beauté. »</p>`,
        choices:[
            {text:'Demander à commencer comme apprenti',target:'apprentice_start',effects:{humanism:10,prudence:5}},
            {text:'Chercher un atelier plus prestigieux',target:'ghirlandaio_workshop',effects:{princes:5}},
            {text:'Chercher un atelier plus mystérieux',target:'leonardo_workshop',effects:{humanism:10}}
        ]
    },
    
    apprentice_start: {
        location:'Atelier',title:'Les Premiers Pas',icon:'👶',
        text:`<p class="scene-text">Vos premières semaines sont humbles : balayer l'atelier, préparer les repas, porter les messages. Puis viennent les vrais apprentissages : broyer les pigments, préparer les colles, tendre les toiles.</p><p class="scene-text">C'est un travail répétitif mais vous commencez à comprendre les secrets des couleurs. Le bleu outremer qui vaut plus cher que l'or. Le vermillon toxique. Le blanc de plomb qui tue lentement ceux qui le manipulent sans précaution.</p><p class="scene-text">Un jour, le maître vous tend un fusain. « Dessine-moi cette cruche. » Votre main tremble. C'est le premier test.</p>`,
        choices:[
            {text:'Vous concentrer et donner le meilleur',target:'drawing_test_success',effects:{humanism:15}},
            {text:'Avouer que vous avez peur d\'échouer',target:'humble_confession',effects:{prudence:5,humanism:5}},
            {text:'Réaliser que ce n\'est pas votre voie',target:'career_change',effects:{}}
        ]
    },
    
    night_florence: {
        location:'Florence la Nuit',title:'Les Ombres de la Cité',icon:'🌙',
        text:`<p class="scene-text">Florence la nuit est un autre monde. Les ruelles s'emplissent d'ombres, les tavernes débordent, des silhouettes furtives passent en silence. C'est le moment où les secrets circulent.</p><p class="scene-text">Vous surprenez des conversations : des marchands qui parlent d'un complot, des artistes qui dessinent en cachette des œuvres interdites, des moines qui doutent de leur foi. Florence ne dort jamais vraiment.</p><p class="scene-text">Une femme vous aborde. « Tu as l'air perdu, étranger. Tu cherches quelque chose ? À Florence, tout se trouve — pour un prix. »</p>`,
        choices:[
            {text:'Lui demander où trouver les humanistes',target:'secret_academy',effects:{humanism:10}},
            {text:'Lui demander où trouver du travail',target:'night_work_offer',effects:{prudence:-5}},
            {text:'Retourner à votre logement — c\'est trop risqué',target:'reflection_walk',effects:{prudence:15}}
        ]
    },
    
    san_marco_observer: {
        location:'San Marco',title:'L\'Observateur Silencieux',icon:'👁️',
        text:`<p class="scene-text">Vous restez silencieux, observant Savonarole et ses fidèles. Vous remarquez les jeux de pouvoir subtils, les hiérarchies invisibles, les tensions entre les moines eux-mêmes.</p><p class="scene-text">Certains semblent fanatiques, prêts à tout pour leur maître. D'autres semblent plus nuancés, peut-être même troublés. Un jeune moine vous remarque et s'approche.</p><p class="scene-text">« Tu observes beaucoup », murmure-t-il. « C'est bien. Ici, il vaut mieux écouter que parler. » Il glisse quelque chose dans votre main — un papier plié. « Lis cela plus tard. Pas ici. »</p>`,
        choices:[
            {text:'Lire le papier en sortant du couvent',target:'secret_message',effects:{humanism:5,prudence:-5}},
            {text:'Jeter le papier sans le lire — c\'est un piège',target:'san_marco_departure',effects:{prudence:15}},
            {text:'Le remettre à Savonarole',target:'betrayal_monk',effects:{clergy:10,humanism:-10}}
        ]
    },
    
    san_marco_departure: {
        location:'Florence',title:'Sortie du Couvent',icon:'🚶',
        text:`<p class="scene-text">Vous quittez San Marco avec un sentiment mélangé. Ce que vous avez vu était fascinant et effrayant à la fois. Savonarole a un pouvoir de conviction extraordinaire, mais ses méthodes vous troublent.</p><p class="scene-text">Dehors, le soleil brille sur Florence. La ville continue sa vie, indifférente aux prophéties du moine. Des marchands négocient, des enfants jouent, des artistes travaillent. La Renaissance n'est pas morte, malgré les menaces.</p>`,
        choices:[
            {text:'Aller voir ce que font les artistes',target:'bottega_district',effects:{humanism:10}},
            {text:'Chercher le camp opposé à Savonarole',target:'rich_critic',effects:{princes:10}},
            {text:'Réfléchir à tout cela au bord du fleuve',target:'reflection_walk',effects:{prudence:5}}
        ]
    },
    
    artisan_life: {
        location:'Santa Croce',title:'La Vie Simple',icon:'🧑‍🏭',ending:'neutral',
        text:`<p class="scene-text">Vous choisissez la vie d'artisan. Les années passent — Savonarole tombe, les Médicis reviennent, les guerres ravagent l'Italie — mais vous continuez à travailler le cuir, à gagner honnêtement votre vie.</p><p class="scene-text">Vous n'êtes ni riche ni célèbre. Mais vous avez survécu aux tempêtes qui ont détruit tant d'autres. Et parfois, le soir, vous regardez le coucher de soleil sur l'Arno et vous vous dites que ce n'est pas si mal.</p>`,
        endTitle:'Fin Simple : L\'Artisan',
        endText:'Vous avez choisi la stabilité plutôt que l\'aventure. Ce n\'est pas la voie des héros, mais c\'est une vie digne. La Renaissance a aussi eu besoin de gens ordinaires.'
    },
    
    // SCÈNES POUR ALLONGER ENCORE
    drawing_test_success: {
        location:'Atelier',title:'Le Premier Succès',icon:'✏️',
        text:`<p class="scene-text">Votre dessin n'est pas parfait, mais il montre quelque chose : un œil, une sensibilité. Le maître hoche la tête. « Tu as du potentiel. Reviens demain. Nous verrons ce que nous pouvons en faire. »</p><p class="scene-text">C'est le début d'un long apprentissage. Les mois passent, rythmés par le travail à l'atelier, les leçons de perspective, les études d'anatomie. Vous progressez lentement mais sûrement.</p>`,
        choices:[
            {text:'Continuer l\'apprentissage classique',target:'classical_training',effects:{humanism:10,prudence:5}},
            {text:'Chercher des connaissances plus avancées',target:'advanced_search',effects:{humanism:15,prudence:-5}},
            {text:'Combiner l\'atelier avec l\'exploration de la ville',target:'dual_life_artist',effects:{humanism:10}}
        ]
    },
    
    classical_training: {
        location:'Atelier',title:'L\'Apprentissage Patient',icon:'📚',
        text:`<p class="scene-text">Vous suivez le cursus traditionnel : copie des maîtres, étude de l'antique, exercices de perspective. C'est long, parfois fastidieux, mais vous sentez vos compétences grandir.</p><p class="scene-text">Un jour, le maître vous confie une partie d'une commande réelle : peindre le fond d'un paysage pour un retable. C'est modeste, mais c'est votre première œuvre qui sera vue par le public.</p><p class="scene-text">Pendant ce temps, Florence continue de s'agiter. Savonarole gagne en puissance, les Médicis vacillent. Mais dans l'atelier, vous êtes protégé de la tempête.</p>`,
        choices:[
            {text:'Rester concentré sur l\'art',target:'art_focus',effects:{humanism:15,prudence:10}},
            {text:'S\'impliquer dans les événements politiques',target:'political_involvement',effects:{humanism:5,princes:10,prudence:-10}},
            {text:'Chercher à comprendre le conflit entre art et religion',target:'art_religion_quest',effects:{humanism:15,clergy:5}}
        ]
    },
    
    dual_life_artist: {
        location:'Florence',title:'La Double Vie',icon:'🎭',
        text:`<p class="scene-text">Le jour, vous travaillez à l'atelier. Le soir, vous explorez Florence : les tavernes où se retrouvent les humanistes, les églises où prêche Savonarole, les palais où intriguent les Médicis.</p><p class="scene-text">Vous vivez plusieurs vies à la fois. Chaque monde a ses règles, ses dangers, ses récompenses. Et vous commencez à comprendre les liens qui unissent tout cela : l'art, la politique, la religion sont inséparables dans cette ville.</p>`,
        choices:[
            {text:'Approfondir le monde des artistes',target:'artist_deep_dive',effects:{humanism:15}},
            {text:'Explorer le monde des politiques',target:'political_involvement',effects:{princes:15}},
            {text:'Comprendre le monde religieux',target:'religious_exploration',effects:{clergy:15}},
            {text:'Maintenir l\'équilibre entre tous',target:'balance_path',effects:{humanism:5,prudence:10}}
        ]
    },
    
    art_religion_quest: {
        location:'Florence',title:'L\'Art et la Foi',icon:'🎨',
        text:`<p class="scene-text">Vous décidez de comprendre pourquoi l'art et la religion s'affrontent à Florence. Vous visitez les églises décorées par les grands maîtres, vous écoutez les prêches de Savonarole, vous discutez avec les humanistes.</p><p class="scene-text">La réponse n'est pas simple. L'art religieux peut élever l'âme — Fra Angelico l'a prouvé. Mais l'art profane peut aussi corrompre — les nus, les mythologies, les portraits flatteurs. La question est : où est la limite ?</p><p class="scene-text">Un vieux théologien vous donne une piste : « La limite n'est pas dans le sujet, mais dans l'intention. Peindre pour la gloire de Dieu ou pour la gloire de l'homme — voilà la vraie question. »</p>`,
        choices:[
            {text:'Chercher des artistes qui concilient les deux',target:'synthesis_path',effects:{humanism:15,clergy:10}},
            {text:'Choisir l\'art humaniste',target:'humanist_choice',effects:{humanism:20,clergy:-10}},
            {text:'Choisir l\'art religieux',target:'religious_art_path',effects:{clergy:15,humanism:5}}
        ]
    },
    
    balance_path: {
        location:'Florence',title:'L\'Équilibriste',icon:'⚖️',
        text:`<p class="scene-text">Vous naviguez entre tous les mondes de Florence, n'appartenant vraiment à aucun. C'est une position délicate mais qui offre une perspective unique. Vous voyez les forces qui s'affrontent, les alliances qui se font et se défont.</p><p class="scene-text">Un jour, un événement vous force à choisir. Charles VIII de France franchit les Alpes et marche vers Florence. Piero de' Medici s'humilie devant lui, cédant des forteresses sans combattre. La foule se révolte. Les Médicis sont chassés. Savonarole triomphe.</p><p class="scene-text">Dans le chaos, vous devez décider où vous placez votre fidélité.</p>`,
        choices:[
            {text:'Soutenir Savonarole et la nouvelle République',target:'savonarole_republic',effects:{clergy:20,princes:-15}},
            {text:'Rester fidèle à l\'esprit des Médicis',target:'medici_loyalty',effects:{princes:15,clergy:-15}},
            {text:'Fuir Florence avec vos connaissances',target:'escape_with_knowledge',effects:{humanism:15,prudence:10}}
        ]
    },
    
    synthesis_path: {
        location:'Florence',title:'La Synthèse',icon:'🌟',ending:'victory',
        text:`<p class="scene-text">Vous trouvez votre voie : concilier l'art et la foi, l'humanisme et la spiritualité. Comme Fra Angelico avant vous, comme Ficin qui traduit Platon pour réconcilier philosophie antique et christianisme.</p><p class="scene-text">Ce n'est pas une voie facile. Savonarole vous méfie, les humanistes purs vous trouvent timoré. Mais c'est votre vérité. Et au fil des années, vous créez — ou vous aidez à créer — des œuvres qui témoignent de cette synthèse.</p><p class="scene-text">Quand Savonarole tombera, quand les Médicis reviendront, votre travail survivra. Car il touche à quelque chose d'universel : la beauté au service du sens.</p>`,
        endTitle:'Fin Harmonieuse : Le Conciliateur',
        endText:'Vous avez trouvé la voie du milieu, celle qui unit l\'art et la foi, la raison et le mystère. La Renaissance, à son meilleur, est cette synthèse. Vous l\'avez incarnée.'
    },
    
    escape_with_knowledge: {
        location:'Routes de Toscane',title:'La Fuite Éclairée',icon:'📚',ending:'victory',
        text:`<p class="scene-text">Vous quittez Florence emportant ce que vous avez de plus précieux : vos carnets, vos connaissances, votre expérience. Derrière vous, la ville s'enfonce dans la crise — Savonarole triomphe, puis tombe, les guerres ravagent l'Italie.</p><p class="scene-text">Mais vous, vous portez en vous les graines de la Renaissance. À Venise, à Rome, à Milan, partout où vous passez, vous enseignez ce que vous avez appris. La perspective, l'anatomie, la philosophie humaniste.</p><p class="scene-text">Des années plus tard, vous entendez parler d'un jeune artiste nommé Raphaël qui a synthétisé tout ce que Florence avait créé. Vous souriez. La chaîne continue.</p>`,
        endTitle:'Fin Lumineuse : Le Porteur de Flamme',
        endText:'Vous avez compris que la Renaissance n\'est pas un lieu mais une idée. En la portant avec vous, vous avez contribué à la répandre dans le monde.'
    }
};
