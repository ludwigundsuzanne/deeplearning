/* Mois 2 à 12 — plan détaillé. Chaque séance : [titre, présentation, notions séparées par « ; », question à explorer].
   Les séances préfixées « Débat : » sont des débats, « Synthèse » des synthèses. */
window.SEED_PLAN = [
  {
    id: "m2", title: "La Grèce ancienne", period: "VIIIe – IVe siècle av. J.-C.",
    question: "Comment un monde de petites cités a-t-il inventé la politique, la philosophie et le théâtre ?",
    intro: "Des cités rivales, une langue et des dieux communs : la Grèce invente la citoyenneté, la démocratie athénienne, l'enquête historique, la philosophie et la tragédie. On regardera aussi ses angles morts : esclavage, exclusion des femmes, impérialisme athénien.",
    sources: [
      { t: "Les Origines de la pensée grecque", a: "Jean-Pierre Vernant", note: "PUF, 1962 (Quadrige). Court et fondamental." },
      { t: "Histoire grecque", a: "Claude Orrieux et Pauline Schmitt Pantel", note: "PUF, Quadrige. Manuel de référence." },
      { t: "L'Enquête", a: "Hérodote", note: "Folio. À lire par extraits (livres I et VII)." },
      { t: "La Guerre du Péloponnèse", a: "Thucydide", note: "Folio. Oraison funèbre de Périclès (II, 35-46) et dialogue mélien (V, 84-116)." },
      { t: "Apologie de Socrate", a: "Platon", note: "GF Flammarion. Une heure de lecture." },
      { t: "Le Cours de l'histoire", a: "France Culture (podcast)", url: "https://www.radiofrance.fr/franceculture/podcasts/le-cours-de-l-histoire", note: "Chercher les séries sur la Grèce antique." }
    ],
    weeks: [
      { title: "Le monde des cités", question: "Qu'est-ce qu'une cité grecque ?", sessions: [
        ["Des palais mycéniens aux siècles obscurs", "Après la chute des palais mycéniens vers 1200 av. J.-C., la Grèce perd l'écriture pendant quatre siècles. Que reste-t-il, et comment repart-elle ?", "Linéaire B ; Mycènes ; siècles obscurs", "Pourquoi la perte de l'écriture n'est-elle pas une perte de culture ?"],
        ["Homère : l'Iliade et l'Odyssée", "Deux poèmes oraux fixés vers le VIIIe siècle forment l'éducation de tous les Grecs. Que valorisent-ils : gloire, ruse, hospitalité ?", "Kleos (gloire) ; xenia (hospitalité) ; aède", "Achille et Ulysse incarnent-ils deux idéaux humains opposés ?"],
        ["Naissance de la polis", "Au VIIIe siècle naissent les cités : une ville, un territoire, des citoyens, des dieux protecteurs. Les colonies essaiment de la mer Noire à Marseille.", "Polis ; colonisation grecque ; hoplite", "Pourquoi la phalange hoplitique aurait-elle favorisé l'égalité entre citoyens ?"],
        ["Sparte, l'autre modèle", "Une cité de soldats-citoyens vivant du travail des hilotes. Mythe d'égalité et d'austérité, réalité d'une domination permanente.", "Hilotes ; agogé ; mirage spartiate", "Pourquoi Sparte fascine-t-elle encore, de Rousseau aux régimes autoritaires ?"],
        ["Débat : la cité grecque est-elle un modèle de liberté ?", "Les Grecs se disaient libres face aux « barbares ». Mais leurs cités reposaient sur l'esclavage et excluaient les femmes et les étrangers. Liberté des Anciens contre liberté des Modernes (Benjamin Constant).", "Liberté des Anciens ; Benjamin Constant ; citoyenneté", "La liberté peut-elle être réelle si elle repose sur l'exclusion d'une majorité ?"]
      ]},
      { title: "Athènes et la démocratie", question: "Comment fonctionnait la première démocratie, et pour qui ?", sessions: [
        ["Solon et Clisthène : inventer la démocratie", "De l'abolition de la servitude pour dettes (594) à la réforme des tribus (508/507) : comment Athènes répartit le pouvoir entre les citoyens.", "Isonomie ; dème ; ostracisme", "Pourquoi le tirage au sort était-il jugé plus démocratique que l'élection ?"],
        ["Les guerres médiques", "Marathon (490), Thermopyles et Salamine (480), Platées (479) : de petites cités résistent à l'empire perse. Naissance de l'opposition Grecs/Barbares.", "Marathon ; Salamine ; ligue de Délos", "Comment une victoire militaire fabrique-t-elle une identité ?"],
        ["Périclès et l'empire athénien", "Le siècle de Périclès : Parthénon, démocratie radicale, mais aussi tribut imposé aux alliés de la ligue de Délos.", "Misthos ; Parthénon ; thalassocratie", "Une démocratie peut-elle être impérialiste ?"],
        ["La guerre du Péloponnèse et Thucydide", "Athènes contre Sparte (431–404). Thucydide invente l'histoire politique rationnelle et analyse la peur comme cause de guerre.", "Piège de Thucydide ; dialogue mélien ; réalisme", "La formule « les forts font ce qu'ils peuvent, les faibles subissent ce qu'ils doivent » décrit-elle encore les relations internationales ?"],
        ["Débat : faut-il tirer les dirigeants au sort ?", "Les Athéniens tiraient au sort la plupart de leurs magistrats. Des conventions citoyennes contemporaines s'en inspirent.", "Tirage au sort ; démocratie représentative ; Bernard Manin", "Le tirage au sort corrige-t-il les défauts de l'élection ou en crée-t-il d'autres ?"]
      ]},
      { title: "Philosophie et science", question: "Que signifie chercher la vérité par la raison ?", sessions: [
        ["Les présocratiques : du mythe au logos", "Thalès, Héraclite, Parménide, Démocrite : expliquer le monde par des principes naturels plutôt que par les dieux.", "Logos ; physis ; atomisme", "Peut-on parler de « passage du mythe à la raison », ou est-ce trop simple ?"],
        ["Socrate et les sophistes", "Les sophistes enseignent l'art de convaincre ; Socrate interroge et avoue ne rien savoir. Il est condamné à mort en 399.", "Maïeutique ; ironie socratique ; sophiste", "Pourquoi une démocratie a-t-elle condamné son philosophe le plus célèbre ?"],
        ["Platon : la caverne et la cité idéale", "Les Idées, l'allégorie de la caverne, la République gouvernée par des philosophes. Une philosophie qui se méfie de la démocratie.", "Théorie des Idées ; allégorie de la caverne ; philosophe-roi", "Que dit l'allégorie de la caverne de l'éducation ?"],
        ["Aristote : observer et classer", "Logique, biologie, éthique de la vertu, politique : « l'homme est un animal politique ». Le savoir encyclopédique qui dominera jusqu'au XVIIe siècle.", "Juste milieu ; zoon politikon ; syllogisme", "En quoi l'éthique d'Aristote diffère-t-elle d'une morale de règles ?"],
        ["Débat : Platon avait-il raison de se méfier de la démocratie ?", "Pour Platon, la démocratie mène à la démagogie puis à la tyrannie. Argument élitiste ou avertissement lucide ?", "Démagogie ; épistocratie ; tyrannie", "Le gouvernement des compétents est-il compatible avec la souveraineté du peuple ?"]
      ]},
      { title: "Arts, théâtre et héritages", question: "Pourquoi la Grèce est-elle devenue une référence universelle ?", sessions: [
        ["La tragédie : Eschyle, Sophocle, Euripide", "Le théâtre est une institution civique : la cité se met en scène et réfléchit à ses conflits. Antigone, Œdipe, Médée.", "Catharsis ; hybris ; chœur", "Antigone a-t-elle raison contre Créon ?"],
        ["Sculpture et architecture : l'idéal classique", "Ordres dorique et ionique, canon de Polyclète, Parthénon. L'idéal de proportion et ce que nous en avons fait (la Grèce était peinte).", "Canon ; ordres architecturaux ; polychromie", "Pourquoi avons-nous longtemps imaginé une Grèce toute blanche ?"],
        ["Alexandre et le monde hellénistique", "De la Macédoine à l'Indus (336–323), puis les royaumes hellénistiques : Alexandrie, sa bibliothèque, Euclide, Archimède, Ératosthène.", "Hellénisme ; Bibliothèque d'Alexandrie ; koinè", "Alexandre est-il un conquérant ou un passeur de cultures ?"],
        ["Épicure et les stoïciens : philosophies pour vivre", "Après la cité indépendante, des sagesses pour l'individu : ataraxie épicurienne, maîtrise stoïcienne de ce qui dépend de nous.", "Ataraxie ; stoïcisme ; cosmopolitisme", "Que dépend vraiment de nous ?"],
        ["Synthèse du mois : l'héritage grec", "Quiz, puis synthèse écrite : qu'avons-nous réellement hérité de la Grèce, et qu'avons-nous inventé après coup ?", "Philhellénisme ; réception de l'Antiquité", "Quelle part de « la Grèce » est une construction européenne moderne ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Démocratie athénienne et démocratie moderne : trois ressemblances, trois différences.", "Qu'apporte la philosophie grecque par rapport aux sagesses vues au mois 1 ?", "Quelle figure grecque vous a le plus fait réfléchir, et pourquoi ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m3", title: "Rome et l'Antiquité tardive", period: "VIIIe s. av. J.-C. – VIe s. ap. J.-C.",
    question: "Comment une cité italienne est-elle devenue un empire universel, et pourquoi s'est-il transformé ?",
    intro: "Rome invente une république de citoyens-soldats, puis un empire qui intègre des peuples par le droit et la citoyenneté. On suit sa conquête, ses crises, le christianisme, et la longue transformation de l'Antiquité tardive.",
    sources: [
      { t: "SPQR. Histoire de l'ancienne Rome", a: "Mary Beard", note: "Perrin, 2016. Vivant et critique." },
      { t: "Comment l'Empire romain s'est effondré", a: "Kyle Harper", note: "La Découverte, 2019. Climat et épidémies." },
      { t: "Pensées pour moi-même", a: "Marc Aurèle", note: "GF. Un fragment par jour." },
      { t: "Quand notre monde est devenu chrétien", a: "Paul Veyne", note: "Albin Michel, 2007. Court." },
      { t: "La Vie des douze Césars", a: "Suétone", note: "Folio. Vies de César et d'Auguste." }
    ],
    weeks: [
      { title: "La République romaine", question: "Comment Rome se gouverne-t-elle sans roi ?", sessions: [
        ["Des origines légendaires à la République", "Romulus, les rois étrusques, l'expulsion de Tarquin (509). Ce que l'archéologie dit des mythes fondateurs.", "Res publica ; Étrusques ; mos maiorum", "Pourquoi une cité invente-t-elle un mythe de fondation fratricide ?"],
        ["Les institutions : consuls, Sénat, peuple", "Une constitution mixte selon Polybe : magistrats élus, Sénat aristocratique, assemblées populaires, tribuns de la plèbe.", "Cursus honorum ; tribun de la plèbe ; constitution mixte", "Un équilibre des pouvoirs peut-il protéger de la tyrannie ?"],
        ["La conquête de la Méditerranée", "Guerres puniques contre Carthage (264–146), Hannibal, destruction de Carthage et Corinthe. Mare nostrum.", "Guerres puniques ; Hannibal ; provinces", "Pourquoi Rome a-t-elle gagné contre Carthage ?"],
        ["La crise de la République", "Les Gracques, Marius et Sylla, Pompée, César. La conquête enrichit une élite, ruine les petits paysans et militarise la politique.", "Optimates et populares ; guerres civiles ; Rubicon", "La République est-elle morte de ses succès ?"],
        ["Débat : César était-il un tyran ou un réformateur ?", "Assassiné aux ides de mars 44 av. J.-C. par des sénateurs au nom de la liberté. Défenseur du peuple ou fossoyeur de la République ?", "Tyrannicide ; dictature ; Brutus", "Le meurtre d'un tyran est-il légitime ?"]
      ]},
      { title: "L'Empire", question: "Comment gouverner un empire de 60 millions d'habitants ?", sessions: [
        ["Auguste et le principat", "Octave devient Auguste (27 av. J.-C.) : un pouvoir monarchique déguisé en restauration de la République.", "Principat ; Pax romana ; propagande augustéenne", "Pourquoi Auguste refuse-t-il le titre de roi ?"],
        ["Romanisation et citoyenneté", "Villes, routes, droit, latin. L'édit de Caracalla (212) donne la citoyenneté à presque tous les hommes libres.", "Romanisation ; édit de Caracalla ; municipe", "Rome a-t-elle « assimilé » ou s'est-elle laissé transformer ?"],
        ["Le droit romain", "Des XII Tables au Code de Justinien : propriété, contrat, personne. La matrice du droit civil européen.", "Loi des XII Tables ; jus gentium ; Code de Justinien", "Pourquoi le droit romain a-t-il survécu à l'empire ?"],
        ["Vivre à Rome : esclaves, femmes, spectacles", "Domus et insulae, esclavage massif, affranchis, jeux du cirque, place des femmes. « Du pain et des jeux. »", "Affranchi ; panem et circenses ; patria potestas", "Que révèle la place de l'esclavage sur l'économie romaine ?"],
        ["Débat : l'Empire romain a-t-il été bénéfique pour les peuples conquis ?", "Paix, routes, villes, droit, d'un côté ; massacres, esclavage, tribut de l'autre. « Ils font un désert et l'appellent paix » (Tacite).", "Impérialisme ; Tacite ; Pax romana", "Peut-on juger un empire sur ses bienfaits à long terme ?"]
      ]},
      { title: "Religions et crises", question: "Comment le christianisme devient-il la religion de l'empire ?", sessions: [
        ["La religion romaine et les cultes orientaux", "Une religion civique de rites et de contrats avec les dieux, ouverte aux cultes d'Isis, de Mithra, de Cybèle.", "Religio ; pax deorum ; cultes à mystères", "Pourquoi les Romains toléraient-ils de nombreux dieux mais persécutaient-ils les chrétiens ?"],
        ["Jésus, Paul et les premiers chrétiens", "Un mouvement juif de Galilée devient, avec Paul, une religion ouverte aux non-Juifs. Persécutions et martyrs.", "Messie ; Paul de Tarse ; martyre", "Qu'est-ce qui rendait le christianisme attirant ?"],
        ["La crise du IIIe siècle et Dioclétien", "Empereurs éphémères, invasions, peste de Cyprien, inflation. Dioclétien réorganise l'empire (tétrarchie).", "Tétrarchie ; anarchie militaire ; dévaluation", "Une réforme autoritaire peut-elle sauver un État en crise ?"],
        ["Constantin et l'empire chrétien", "Conversion de Constantin (312), édit de Milan (313), concile de Nicée (325), fondation de Constantinople (330), Théodose (380).", "Édit de Milan ; concile de Nicée ; Constantinople", "Le christianisme a-t-il conquis l'empire, ou l'empire a-t-il transformé le christianisme ?"],
        ["Débat : le stoïcisme est-il une philosophie de résignation ?", "Sénèque, Épictète (un ancien esclave), Marc Aurèle (un empereur) : la même sagesse pour l'esclave et le maître.", "Stoïcisme ; dichotomie du contrôle ; Épictète", "Accepter ce qui ne dépend pas de nous, est-ce renoncer à changer le monde ?"]
      ]},
      { title: "Chute ou transformation ?", question: "L'Empire romain est-il tombé ?", sessions: [
        ["Les migrations et 476", "Goths, Huns, Vandales. Sac de Rome (410), déposition de Romulus Augustule (476). Un événement passé presque inaperçu ?", "Grandes migrations ; foederati ; Odoacre", "Pourquoi 476 est-elle une date conventionnelle ?"],
        ["Byzance : l'empire qui continue", "L'Empire romain d'Orient dure jusqu'en 1453. Justinien, Sainte-Sophie, reconquêtes et peste de 541.", "Empire byzantin ; Justinien ; Sainte-Sophie", "Pourquoi l'Orient a-t-il survécu et pas l'Occident ?"],
        ["Augustin d'Hippone", "Les Confessions, La Cité de Dieu (écrite après le sac de 410). Le temps, le péché, la grâce, deux cités.", "Cité de Dieu ; péché originel ; intériorité", "Que change l'idée que l'histoire humaine a un sens orienté ?"],
        ["Les royaumes barbares", "Francs (Clovis), Wisigoths, Ostrogoths : des rois germaniques qui gouvernent avec des élites romaines et l'Église.", "Clovis ; royaumes romano-barbares ; Antiquité tardive", "Les « barbares » ont-ils détruit Rome ou l'ont-ils prolongée ?"],
        ["Synthèse du mois : déclin, chute ou transformation ?", "Quiz, puis synthèse : Gibbon (déclin), Peter Brown (transformation), Bryan Ward-Perkins et Kyle Harper (chute réelle).", "Antiquité tardive ; Gibbon ; Peter Brown", "Comment choisir entre « chute » et « transformation » ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "République romaine et Athènes : deux réponses au problème du pouvoir. Comparez.", "Pourquoi le christianisme s'est-il imposé ?", "Chute ou transformation : quelle est votre position ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m4", title: "Religions et mondes médiévaux", period: "VIe – XVe siècle",
    question: "Comment les grandes religions ont-elles organisé les sociétés, les pouvoirs et les savoirs au Moyen Âge ?",
    intro: "Christianisme latin, Byzance, islam, judaïsme, mais aussi bouddhisme et monde mongol : un mois pour comprendre comment la religion structure le pouvoir, le savoir, l'art et les conflits, et comment ces mondes échangent.",
    sources: [
      { t: "Histoire des croyances et des idées religieuses", a: "Mircea Eliade", note: "Payot, 3 vol. À consulter." },
      { t: "Le Coran des historiens", a: "M. A. Amir-Moezzi et G. Dye (dir.)", note: "Cerf, 2019. Volume 1 pour le contexte." },
      { t: "La Civilisation de l'Occident médiéval", a: "Jacques Le Goff", note: "Flammarion, Champs." },
      { t: "Les Routes de la soie", a: "Peter Frankopan", note: "Nevicata, 2017. Vision décentrée." },
      { t: "Héritages de l'islam médiéval", a: "Gabriel Martinez-Gros", note: "Voir aussi Brève histoire des empires (Seuil, 2014)." }
    ],
    weeks: [
      { title: "Naissance et expansion de l'islam", question: "Comment une religion née en Arabie fonde-t-elle un empire en un siècle ?", sessions: [
        ["L'Arabie et Muhammad", "La Mecque, Médine, l'Hégire (622). Ce que disent la tradition musulmane et les historiens.", "Hégire ; Coran ; Umma", "Comment l'histoire critique travaille-t-elle sur les origines de l'islam ?"],
        ["Les conquêtes et le califat", "En un siècle, de l'Espagne à l'Asie centrale. Califes « bien guidés », Omeyyades, Abbassides et Bagdad.", "Califat ; dhimmi ; Omeyyades et Abbassides", "Pourquoi les empires byzantin et perse cèdent-ils si vite ?"],
        ["Sunnites et chiites", "La succession du Prophète divise la communauté. Karbala (680) et la mémoire chiite.", "Sunnisme ; chiisme ; imamat", "Comment un conflit de succession devient-il une différence religieuse durable ?"],
        ["Bagdad et la Maison de la sagesse", "Traductions du grec, mathématiques (al-Khwarizmi), médecine (Avicenne), philosophie (Averroès).", "Algèbre ; falsafa ; Avicenne", "Pourquoi parle-t-on de « transmission » plutôt que de simple conservation ?"],
        ["Débat : la religion est-elle le moteur de l'histoire médiévale ?", "Conquêtes, croisades, cathédrales : religion partout. Mais les intérêts, la démographie et les rivalités politiques expliquent-ils davantage ?", "Matérialisme historique ; fait religieux ; idéologie", "Une croyance peut-elle être une cause historique à part entière ?"]
      ]},
      { title: "La chrétienté latine", question: "Comment l'Église structure-t-elle l'Occident médiéval ?", sessions: [
        ["Charlemagne et la renaissance carolingienne", "Empereur en 800, écoles, minuscule caroline, copie des textes antiques.", "Empire carolingien ; minuscule caroline ; missi dominici", "Pourquoi Charlemagne est-il revendiqué par la France et l'Allemagne ?"],
        ["Seigneurs, paysans et féodalité", "Seigneurie, vassalité, serfs. Les trois ordres : ceux qui prient, combattent, travaillent.", "Féodalité ; seigneurie ; trois ordres", "Le mot « féodal » décrit-il bien la société médiévale ?"],
        ["Papes, moines et cathédrales", "Cluny, Cîteaux, réforme grégorienne, querelle des Investitures, art roman puis gothique.", "Réforme grégorienne ; gothique ; monachisme", "Que dit une cathédrale de la société qui la construit ?"],
        ["Universités et scolastique", "Paris, Bologne, Oxford. Thomas d'Aquin concilie Aristote et la foi.", "Scolastique ; disputatio ; Thomas d'Aquin", "Foi et raison peuvent-elles se compléter ?"],
        ["Débat : le Moyen Âge, âge obscur ?", "L'expression vient de la Renaissance. Les médiévistes la contestent. Que reste-t-il du cliché ?", "Âge sombre ; renaissance du XIIe siècle ; historiographie", "Pourquoi une époque invente-t-elle une « nuit » avant elle ?"]
      ]},
      { title: "Rencontres et affrontements", question: "Comment ces mondes religieux se sont-ils affrontés et influencés ?", sessions: [
        ["Les croisades", "De l'appel d'Urbain II (1095) à la chute d'Acre (1291). Points de vue latin, byzantin, musulman.", "Croisade ; États latins d'Orient ; Saladin", "Pourquoi les croisades sont-elles encore mobilisées dans les discours politiques ?"],
        ["Al-Andalus : coexistence et conflits", "Cordoue, Tolède, les traducteurs, Maïmonide. Mythe ou réalité de la « convivencia » ?", "Convivencia ; Reconquista ; Maïmonide", "Peut-on parler de tolérance avant l'idée moderne de tolérance ?"],
        ["Les Juifs dans l'Europe médiévale", "Communautés, savoirs, mais aussi expulsions (Angleterre 1290, France 1306, Espagne 1492) et accusations.", "Antijudaïsme ; ghetto ; diaspora", "Comment se construit une figure de bouc émissaire ?"],
        ["Les Mongols et les routes de la soie", "Gengis Khan, le plus grand empire continu de l'histoire, Marco Polo, la peste noire (1347-1352).", "Pax mongolica ; routes de la soie ; peste noire", "La première mondialisation a-t-elle commencé avec les Mongols ?"],
        ["Débat : les religions sont-elles plus facteurs de guerre que de paix ?", "Croisades et jihad, mais aussi trêve de Dieu, hospitalité et sagesse. Que disent les faits ?", "Guerre sainte ; trêve de Dieu ; violence religieuse", "Les guerres « religieuses » le sont-elles vraiment ?"]
      ]},
      { title: "Au-delà de la Méditerranée", question: "Que se passe-t-il ailleurs pendant ce « Moyen Âge » ?", sessions: [
        ["Chine des Tang et des Song", "Examens impériaux, imprimerie, boussole, poudre, papier-monnaie. Le pays le plus avancé du monde ?", "Examens impériaux ; néo-confucianisme ; Song", "Pourquoi la Chine des Song n'a-t-elle pas connu de révolution industrielle ?"],
        ["Le bouddhisme en Asie", "Du Gandhara au Japon : Mahayana, Theravada, zen, Tibet. Transformations d'une religion en voyage.", "Mahayana ; zen ; Theravada", "Une religion reste-t-elle la même en changeant de culture ?"],
        ["Les empires d'Afrique de l'Ouest", "Ghana, Mali (Mansa Moussa), Tombouctou, commerce transsaharien de l'or et du sel.", "Empire du Mali ; Tombouctou ; commerce transsaharien", "Pourquoi l'histoire de l'Afrique médiévale a-t-elle été si longtemps ignorée ?"],
        ["La peste noire et la crise du XIVe siècle", "Un tiers de l'Europe meurt. Conséquences sociales, religieuses, économiques.", "Peste noire ; Jacquerie ; flagellants", "Une catastrophe peut-elle améliorer la condition des survivants ?"],
        ["Synthèse du mois : religions et pouvoirs", "Quiz, puis synthèse : comment religion et pouvoir se sont-ils mutuellement servis et limités ?", "Théocratie ; séparation des pouvoirs ; sécularisation", "Quelle relation entre religion et pouvoir vous paraît la plus stable ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Comparez la place du religieux dans le pouvoir chez les Abbassides, Charlemagne et les Song.", "Quelle circulation de savoirs vous a le plus surpris ?", "« Moyen Âge » : le terme est-il encore utile ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m5", title: "Renaissance et premiers mondes globaux", period: "XIVe – XVIe siècle",
    question: "Qu'est-ce qui renaît à la Renaissance, et que naît-il vraiment ?",
    intro: "Humanisme, imprimerie, perspective, Réformes, et la rencontre brutale avec les Amériques. Le mois où l'Europe change de regard sur elle-même et sur le monde, et où commence une mondialisation inégale.",
    sources: [
      { t: "La Civilisation de la Renaissance en Italie", a: "Jacob Burckhardt", note: "1860. Le texte qui a inventé l'idée de Renaissance." },
      { t: "Histoire du monde au XVe siècle", a: "Patrick Boucheron (dir.)", note: "Fayard, 2009. Vue globale." },
      { t: "Le Prince", a: "Machiavel", note: "Folio. Court ; lire les chapitres 15 à 18." },
      { t: "Essais", a: "Montaigne", note: "« Des cannibales » (I, 31) et « Des coches » (III, 6)." },
      { t: "Les Quatre Parties du monde", a: "Serge Gruzinski", note: "La Martinière, 2004." }
    ],
    weeks: [
      { title: "L'humanisme italien", question: "Que veut dire « revenir aux Anciens » ?", sessions: [
        ["Florence et les Médicis", "Banquiers, mécènes, républicains en apparence. Pourquoi l'Italie urbaine est-elle le berceau ?", "Mécénat ; Médicis ; république florentine", "L'argent explique-t-il l'art ?"],
        ["Pétrarque, Érasme et l'humanisme", "Retour aux textes, philologie, dignité de l'homme (Pic de la Mirandole), éducation.", "Humanisme ; philologie ; studia humanitatis", "L'humanisme est-il un programme éducatif ou une philosophie ?"],
        ["Perspective et peinture : Brunelleschi, Masaccio, Léonard", "Une nouvelle manière de représenter l'espace et le corps. L'artiste devient un savant.", "Perspective linéaire ; sfumato ; disegno", "Que change le fait de peindre le monde depuis un point de vue unique ?"],
        ["Machiavel et la politique moderne", "Le Prince (1513) : décrire le pouvoir tel qu'il est, non tel qu'il devrait être. Virtù et fortune.", "Virtù ; fortuna ; raison d'État", "Machiavel est-il cynique ou réaliste ?"],
        ["Débat : la Renaissance est-elle une rupture ?", "Burckhardt contre les médiévistes. Continuités du Moyen Âge, renaissances antérieures.", "Périodisation ; Burckhardt ; renaissances médiévales", "Une période historique existe-t-elle hors du regard des historiens ?"]
      ]},
      { title: "Imprimerie et Réformes", question: "Comment une technique change-t-elle la religion et le savoir ?", sessions: [
        ["Gutenberg et la révolution de l'imprimé", "Vers 1450 à Mayence. Diffusion massive des textes, standardisation, nouvel espace public.", "Caractères mobiles ; incunable ; Elizabeth Eisenstein", "Comparez l'imprimerie à Internet : quelles analogies tiennent ?"],
        ["Luther et la Réforme", "95 thèses (1517), sola scriptura, rupture avec Rome, protection princière.", "Indulgences ; sola fide ; protestantisme", "Pourquoi la Réforme réussit-elle là où des réformateurs antérieurs avaient échoué ?"],
        ["Calvin, la Contre-Réforme et les guerres de religion", "Genève, concile de Trente, jésuites, Saint-Barthélemy (1572), édit de Nantes (1598).", "Concile de Trente ; Saint-Barthélemy ; édit de Nantes", "Comment sort-on d'une guerre de religion ?"],
        ["Montaigne et le scepticisme", "« Que sais-je ? » Se peindre soi-même, douter, juger les cannibales et les Européens.", "Scepticisme ; essai ; relativisme culturel", "Montaigne est-il le premier anthropologue ?"],
        ["Débat : la tolérance est-elle une vertu ou un compromis ?", "Castellion, l'édit de Nantes, plus tard Locke. Tolérer, est-ce respecter ou simplement supporter ?", "Tolérance ; Castellion ; liberté de conscience", "Faut-il tolérer les intolérants ?"]
      ]},
      { title: "Les grandes découvertes", question: "Comment l'Europe se lance-t-elle sur les océans ?", sessions: [
        ["Portugais et Chinois sur les mers", "Zheng He (1405-1433) et Henri le Navigateur : deux choix opposés.", "Zheng He ; caravelle ; route des Indes", "Pourquoi la Chine a-t-elle arrêté ses expéditions ?"],
        ["1492 : Colomb et la rencontre", "Une erreur de calcul, une rencontre, et la naissance de « l'Amérique ».", "Christophe Colomb ; Nouveau Monde ; traité de Tordesillas", "Peut-on encore parler de « découverte » ?"],
        ["La conquête : Cortés, Pizarro et l'effondrement", "Chute de Tenochtitlan (1521) et des Incas. Armes, alliances indigènes et surtout épidémies.", "Conquistadors ; choc microbien ; encomienda", "Pourquoi quelques centaines d'Espagnols ont-ils pu renverser des empires ?"],
        ["La controverse de Valladolid", "Las Casas contre Sepúlveda (1550-1551) : les Amérindiens ont-ils une âme et des droits ?", "Las Casas ; droit des gens ; Vitoria", "Peut-on parler des premiers débats sur les droits humains ?"],
        ["Débat : 1492 marque-t-il le début de la mondialisation ?", "Échange colombien, argent de Potosí, galions de Manille (1571). Ou les Mongols étaient-ils déjà là ?", "Échange colombien ; Potosí ; mondialisation", "À partir de quand le monde devient-il un seul système ?"]
      ]},
      { title: "Empires du monde vers 1550", question: "L'Europe est-elle au centre du monde en 1550 ?", sessions: [
        ["L'Empire ottoman de Soliman", "Constantinople (1453), Soliman le Magnifique, siège de Vienne (1529), Sinan l'architecte.", "Sublime Porte ; janissaires ; millet", "Pourquoi l'Europe voyait-elle l'Ottoman à la fois comme menace et modèle ?"],
        ["Moghols et Safavides", "Akbar et sa tolérance religieuse, Ispahan, le chiisme d'État en Iran.", "Moghols ; Akbar ; Safavides", "Quels sont les points communs des « empires de la poudre » ?"],
        ["La traite atlantique commence", "Plantations sucrières, Portugais en Afrique, premiers asientos. Le système qui déportera 12 millions d'Africains.", "Traite atlantique ; plantation ; commerce triangulaire", "Comment l'économie de plantation transforme-t-elle trois continents ?"],
        ["Arts de la Renaissance du Nord", "Van Eyck, Dürer, Bruegel : une autre Renaissance, plus attentive au quotidien.", "Peinture flamande ; gravure ; Bruegel", "Que montre Bruegel que l'Italie ne montre pas ?"],
        ["Synthèse du mois : naissance de l'Europe moderne ?", "Quiz, puis synthèse : humanisme, imprimé, Réformes, conquêtes. Quel est le fil commun ?", "Modernité ; eurocentrisme ; première mondialisation", "En quoi la « modernité » européenne dépend-elle du reste du monde ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Qu'est-ce qui « renaît » vraiment, et qu'est-ce qui est neuf ?", "Imprimerie et Réforme : quel lien de causalité ?", "Comment jugez-vous la conquête des Amériques avec les outils de l'historien ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m6", title: "La révolution scientifique", period: "XVIe – XVIIIe siècle",
    question: "Comment l'Europe a-t-elle appris à connaître la nature par l'expérience et les mathématiques ?",
    intro: "De Copernic à Newton, un nouveau monde physique et une nouvelle méthode. On verra aussi les institutions (académies, revues), les liens avec la philosophie (Descartes, Bacon) et le débat sur la nature même d'une « révolution » scientifique.",
    sources: [
      { t: "Du monde clos à l'univers infini", a: "Alexandre Koyré", note: "Gallimard, Tel. Classique." },
      { t: "La Révolution scientifique", a: "Steven Shapin", note: "Flammarion, 1998. Court et critique." },
      { t: "La Structure des révolutions scientifiques", a: "Thomas Kuhn", note: "Flammarion, Champs." },
      { t: "Discours de la méthode", a: "Descartes", note: "GF. Parties 1 à 4." },
      { t: "Le Messager des étoiles", a: "Galilée", note: "Points Sciences. 60 pages." }
    ],
    weeks: [
      { title: "Le ciel renversé", question: "Comment a-t-on cessé de croire que la Terre est au centre ?", sessions: [
        ["Le cosmos d'Aristote et de Ptolémée", "Sphères, monde sublunaire et supralunaire, épicycles. Un système cohérent et prédictif.", "Géocentrisme ; épicycle ; monde sublunaire", "Pourquoi le géocentrisme était-il raisonnable ?"],
        ["Copernic (1543)", "De revolutionibus : un modèle héliocentrique, d'abord pour simplifier les calculs.", "Héliocentrisme ; Copernic ; modèle mathématique", "Un modèle plus simple est-il forcément plus vrai ?"],
        ["Tycho Brahe et Kepler", "Des observations précises et des orbites elliptiques : les trois lois de Kepler.", "Ellipses ; lois de Kepler ; observation", "Que change la précision des données ?"],
        ["Galilée et la lunette", "Lunes de Jupiter, phases de Vénus, chute des corps, procès de 1633.", "Lunette astronomique ; inertie ; procès de Galilée", "Le procès de Galilée oppose-t-il vraiment science et religion ?"],
        ["Débat : science et religion sont-elles en conflit ?", "La « thèse du conflit » du XIXe siècle face aux historiens qui montrent des scientifiques croyants et des Églises patronnes.", "Thèse du conflit ; NOMA (Gould) ; théologie naturelle", "Dans quels cas science et religion entrent-elles réellement en conflit ?"]
      ]},
      { title: "Une nouvelle méthode", question: "Comment sait-on qu'une connaissance est vraie ?", sessions: [
        ["Francis Bacon et l'expérience", "Induction, expérimentation organisée, critique des « idoles » de l'esprit.", "Induction ; idoles de Bacon ; savoir et pouvoir", "Pourquoi « savoir c'est pouvoir » change-t-il le but de la science ?"],
        ["Descartes : douter de tout", "Doute méthodique, cogito, mécanisme, dualisme âme-corps.", "Cogito ; doute méthodique ; dualisme", "Peut-on vraiment douter de tout ?"],
        ["Les académies et la République des lettres", "Royal Society (1660), Académie des sciences (1666), revues, correspondances.", "Royal Society ; publication ; République des lettres", "Pourquoi la science est-elle une entreprise collective ?"],
        ["Mesurer le monde : microscopes et horloges", "Leeuwenhoek, Hooke, Harvey (circulation du sang), Huygens.", "Microscope ; circulation sanguine ; instrument scientifique", "Que doit la science aux instruments ?"],
        ["Débat : qu'est-ce qu'une révolution scientifique ?", "Kuhn et les paradigmes contre Popper et la réfutation. Le progrès scientifique est-il cumulatif ?", "Paradigme ; falsifiabilité ; Popper", "La science avance-t-elle par accumulation ou par ruptures ?"]
      ]},
      { title: "Newton et ses héritages", question: "Comment une seule loi peut-elle expliquer la Lune et la pomme ?", sessions: [
        ["Newton et les Principia (1687)", "Gravitation universelle, lois du mouvement, unification du ciel et de la Terre.", "Gravitation universelle ; Principia ; lois de Newton", "Pourquoi l'action à distance gênait-elle les contemporains ?"],
        ["Le calcul infinitésimal : Newton et Leibniz", "Une querelle de priorité, deux notations, un outil qui change toutes les sciences.", "Calcul différentiel ; Leibniz ; querelle de priorité", "Les mathématiques sont-elles découvertes ou inventées ?"],
        ["Les sciences hors d'Europe", "Observatoires de Samarcande et de Jaipur, mathématiques du Kerala, savoirs chinois. Pourquoi la révolution a-t-elle eu lieu en Europe ?", "Question de Needham ; école du Kerala ; Ulugh Beg", "La question « pourquoi l'Europe ? » est-elle bien posée ?"],
        ["Science, empire et classification", "Linné classe le vivant, les expéditions collectent : savoir et domination.", "Taxonomie ; Linné ; science impériale", "Classer la nature, est-ce neutre ?"],
        ["Synthèse du mois : qu'est-ce que la science ?", "Quiz, puis synthèse : méthode, institutions, ruptures. Qu'est-ce qui distingue la science d'autres savoirs ?", "Méthode scientifique ; démarcation ; consensus scientifique", "Comment reconnaître une affirmation scientifique fiable aujourd'hui ?"]
      ]},
      { title: "La science et la société", question: "Comment la science change-t-elle la vision de l'humain ?", sessions: [
        ["La médecine avant et après Vésale", "De Galien à l'anatomie de Vésale (1543), dissections, théâtres anatomiques.", "Vésale ; théorie des humeurs ; dissection", "Pourquoi l'autorité des Anciens a-t-elle tenu si longtemps en médecine ?"],
        ["Femmes et science", "Émilie du Châtelet traduit Newton ; Maria Sibylla Merian peint les métamorphoses. Exclusions et contournements.", "Émilie du Châtelet ; Maria Sibylla Merian ; salon", "Pourquoi ces femmes ont-elles été oubliées ?"],
        ["Spinoza : Dieu ou la Nature", "Un Dieu identifié à la nature, une éthique démonstrative, la liberté de penser.", "Deus sive Natura ; conatus ; Éthique", "Que reste-t-il de la liberté dans un monde déterminé ?"],
        ["Pascal : le cœur et la raison", "Savant et croyant, le pari, « le silence éternel de ces espaces infinis m'effraie ».", "Pari de Pascal ; esprit de géométrie et de finesse ; Pensées", "Que nous dit Pascal de l'homme face à l'univers newtonien ?"],
        ["Débat : la science peut-elle tout expliquer ?", "Scientisme contre limites de la science : conscience, valeurs, sens.", "Scientisme ; réductionnisme ; distinction faits/valeurs", "Existe-t-il des questions que la science ne peut pas trancher ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Qu'est-ce qui a vraiment changé entre Ptolémée et Newton : les faits, la méthode, ou la vision du monde ?", "Kuhn ou Popper : lequel décrit mieux l'histoire que vous avez étudiée ?", "Comment la science s'est-elle liée au pouvoir ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m7", title: "L'âge des révolutions politiques", period: "1688 – 1848",
    question: "Comment l'idée que le pouvoir vient du peuple s'est-elle imposée, et à quel prix ?",
    intro: "Des Lumières aux révolutions anglaise, américaine, française et haïtienne, puis aux révolutions latino-américaines et à 1848. Contrat social, droits de l'homme, souveraineté nationale, mais aussi Terreur, esclavage maintenu et Restauration.",
    sources: [
      { t: "L'Ancien Régime et la Révolution", a: "Alexis de Tocqueville", note: "Folio. Livre III." },
      { t: "Du contrat social", a: "Jean-Jacques Rousseau", note: "GF. Livre I." },
      { t: "Les Jacobins noirs", a: "C. L. R. James", note: "Éditions Amsterdam. Révolution haïtienne." },
      { t: "Qu'est-ce que les Lumières ?", a: "Emmanuel Kant", note: "GF. 10 pages." },
      { t: "Penser la Révolution française", a: "François Furet", note: "Folio. Pour le débat historiographique." }
    ],
    weeks: [
      { title: "Les Lumières", question: "Qu'est-ce que les Lumières ont voulu éclairer ?", sessions: [
        ["Hobbes et Locke : le contrat social", "Le Léviathan contre la guerre de tous contre tous ; Locke et les droits naturels, la propriété, le droit de résistance.", "État de nature ; contrat social ; droits naturels", "Pourquoi accepter d'être gouverné ?"],
        ["Montesquieu et Voltaire", "Séparation des pouvoirs ; tolérance, affaire Calas, critique de l'Église.", "Séparation des pouvoirs ; Écrasez l'infâme ; affaire Calas", "La liberté d'expression a-t-elle des limites chez Voltaire ?"],
        ["Rousseau : volonté générale", "L'homme naît libre et partout il est dans les fers. Souveraineté populaire, volonté générale.", "Volonté générale ; souveraineté populaire ; inégalité", "La volonté générale peut-elle opprimer l'individu ?"],
        ["L'Encyclopédie et les salons", "Diderot, d'Alembert, la circulation des idées, les femmes de salon, la censure.", "Encyclopédie ; opinion publique ; despotisme éclairé", "Les Lumières sont-elles un mouvement d'élite ?"],
        ["Débat : les Lumières étaient-elles universelles ?", "Raison et droits pour tous, mais esclavage, colonies et femmes laissés de côté. Contradiction ou trahison ?", "Universalisme ; Condorcet ; Olympe de Gouges", "Peut-on reprocher aux Lumières de ne pas avoir appliqué leurs propres principes ?"]
      ]},
      { title: "Révolutions atlantiques", question: "Pourquoi les révolutions éclatent-elles des deux côtés de l'Atlantique ?", sessions: [
        ["1688 : la Glorieuse Révolution anglaise", "Bill of Rights (1689), monarchie parlementaire : une révolution sans grand soulèvement ?", "Bill of Rights ; monarchie parlementaire ; habeas corpus", "Pourquoi l'Angleterre a-t-elle évité une révolution violente au XVIIIe siècle ?"],
        ["La révolution américaine", "No taxation without representation, Déclaration d'indépendance (1776), Constitution (1787), fédéralisme.", "Déclaration d'indépendance ; fédéralisme ; checks and balances", "La révolution américaine est-elle une révolution ou une sécession ?"],
        ["1789 : la Révolution française commence", "États généraux, serment du Jeu de paume, prise de la Bastille, nuit du 4 août, Déclaration des droits.", "Souveraineté nationale ; DDHC ; abolition des privilèges", "Qu'est-ce qui fait d'une révolte une révolution ?"],
        ["La République, la guerre et la Terreur", "1792-1794 : chute de la monarchie, guerre européenne, Robespierre, Vendée.", "Terreur ; Comité de salut public ; guerre de Vendée", "La Terreur était-elle une dérive ou inscrite dans la logique révolutionnaire ?"],
        ["Débat : la Terreur était-elle nécessaire ?", "Thèse des circonstances (guerre, complots) contre thèse de l'idéologie (Furet).", "Thèse des circonstances ; Furet ; violence politique", "Une révolution peut-elle se défendre sans devenir tyrannique ?"]
      ]},
      { title: "Haïti, Napoléon et les Amériques", question: "Jusqu'où vont les droits proclamés ?", sessions: [
        ["La révolution haïtienne", "Saint-Domingue, Toussaint Louverture, première république noire (1804), première abolition effective.", "Toussaint Louverture ; abolition de 1794 ; Haïti", "Pourquoi la révolution haïtienne a-t-elle été si longtemps marginalisée ?"],
        ["Napoléon : héritier ou fossoyeur ?", "Consulat, Code civil, Empire, rétablissement de l'esclavage (1802), guerres européennes.", "Code civil ; Empire ; rétablissement de l'esclavage", "Napoléon a-t-il consolidé ou trahi la Révolution ?"],
        ["Indépendances latino-américaines", "Bolívar, San Martín, le Brésil impérial. De nouveaux États, de vieilles hiérarchies.", "Bolívar ; créoles ; caudillo", "Pourquoi l'unité rêvée par Bolívar a-t-elle échoué ?"],
        ["L'abolition de la traite et de l'esclavage", "Mouvements abolitionnistes britanniques, 1807, 1833, 1848 en France (Schœlcher), révoltes d'esclaves.", "Abolitionnisme ; Schœlcher ; révoltes serviles", "Qui a aboli l'esclavage : les abolitionnistes ou les esclaves révoltés ?"],
        ["Débat : les droits de l'homme sont-ils une invention occidentale ?", "Universalité proclamée, origine située. Critiques de Burke, de Marx, des penseurs anticoloniaux.", "Universalisme ; Burke ; droits humains", "Une idée née quelque part peut-elle valoir partout ?"]
      ]},
      { title: "Après la tempête", question: "Comment l'Europe gère-t-elle l'héritage révolutionnaire ?", sessions: [
        ["Le congrès de Vienne et la Restauration", "1815 : équilibre des puissances, Metternich, Sainte-Alliance.", "Concert européen ; équilibre des puissances ; Restauration", "Le système de Vienne a-t-il réussi à maintenir la paix ?"],
        ["Libéralisme, conservatisme, socialisme", "Trois réponses à la Révolution : Constant et Tocqueville, Burke et de Maistre, Saint-Simon et Proudhon.", "Libéralisme ; conservatisme ; socialisme", "Où situez-vous la frontière entre ces trois familles ?"],
        ["Nations et nationalismes", "Herder, Fichte, Mazzini : la nation comme communauté de langue, d'histoire ou de volonté.", "Nation ; Volksgeist ; principe des nationalités", "La nation est-elle un fait ou une construction ?"],
        ["Le printemps des peuples (1848)", "Révolutions dans toute l'Europe, suffrage universel masculin en France, puis échecs.", "Printemps des peuples ; suffrage universel ; question sociale", "Pourquoi les révolutions de 1848 ont-elles échoué presque partout ?"],
        ["Synthèse du mois : qu'est-ce qu'une révolution ?", "Quiz, puis synthèse : comparer les révolutions anglaise, américaine, française et haïtienne.", "Révolution ; légitimité ; souveraineté", "Quelles conditions rendent une révolution durable ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Comparez deux révolutions de ce mois : causes, acteurs, résultats.", "Les droits proclamés en 1789 : qui en a bénéficié, et quand ?", "Hobbes, Locke, Rousseau : lequel vous convainc le plus ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m8", title: "Industrialisation et capitalisme", period: "1750 – 1914",
    question: "Comment la machine et le capital ont-ils transformé le travail, les villes et le monde ?",
    intro: "Charbon, vapeur, usines, chemins de fer : la plus grande transformation matérielle depuis le Néolithique. On en verra les causes (pourquoi l'Angleterre ?), les effets sociaux, les théories (Smith, Marx), et la projection impériale de l'Europe industrielle.",
    sources: [
      { t: "Une grande divergence", a: "Kenneth Pomeranz", note: "Albin Michel, 2010. Pourquoi l'Europe et pas la Chine." },
      { t: "L'Ère des révolutions / L'Ère du capital", a: "Eric Hobsbawm", note: "Pluriel. Classiques." },
      { t: "La Grande Transformation", a: "Karl Polanyi", note: "Gallimard, Tel." },
      { t: "Manifeste du parti communiste", a: "Marx et Engels", note: "Court ; partie I." },
      { t: "Germinal", a: "Émile Zola", note: "Roman ; la mine, la grève." }
    ],
    weeks: [
      { title: "La révolution industrielle", question: "Pourquoi commence-t-elle en Angleterre au XVIIIe siècle ?", sessions: [
        ["Avant les machines : révolution agricole et proto-industrie", "Enclosures, travail à domicile, hausse des rendements.", "Enclosures ; proto-industrialisation ; révolution industrieuse", "Une révolution industrielle peut-elle naître sans révolution agricole ?"],
        ["Coton, charbon et vapeur", "Machines textiles, machine de Watt, usines de Manchester.", "Machine à vapeur ; factory system ; Manchester", "Pourquoi le coton a-t-il été le premier secteur industrialisé ?"],
        ["Pourquoi l'Angleterre ? La grande divergence", "Charbon accessible, salaires élevés, colonies, institutions. Débat Pomeranz, Allen, Mokyr.", "Grande divergence ; salaires élevés ; culture de la croissance", "Quels facteurs vous paraissent décisifs ?"],
        ["Chemins de fer et révolution des transports", "Le train compresse l'espace et le temps : heure normalisée, marchés nationaux.", "Chemin de fer ; heure standard ; marché national", "Comment une technique change-t-elle la perception du temps ?"],
        ["Débat : l'industrialisation a-t-elle amélioré la vie des ouvriers ?", "Débat des optimistes et des pessimistes : salaires réels, espérance de vie, conditions de travail.", "Niveau de vie ; débat optimistes/pessimistes ; paradoxe d'Easterlin", "Comment mesurer l'amélioration d'une vie ?"]
      ]},
      { title: "La question sociale", question: "Qui paie le prix de l'industrialisation ?", sessions: [
        ["La condition ouvrière", "Travail des enfants, logements insalubres, Engels à Manchester, Villermé en France.", "Prolétariat ; travail des enfants ; paupérisme", "Pourquoi le travail des enfants a-t-il été accepté si longtemps ?"],
        ["Adam Smith et le libéralisme économique", "Division du travail, main invisible, critique des monopoles. Un auteur plus moral qu'on ne le croit.", "Main invisible ; division du travail ; laissez-faire", "Que dit vraiment Smith de l'intérêt personnel ?"],
        ["Marx et la critique du capitalisme", "Lutte des classes, plus-value, aliénation, crises.", "Plus-value ; lutte des classes ; aliénation", "Qu'est-ce que l'analyse de Marx a vu juste, et qu'a-t-elle manqué ?"],
        ["Syndicats, socialismes et réformes", "Luddites, chartistes, Internationale, lois sociales de Bismarck, catholicisme social.", "Syndicalisme ; État social ; Rerum novarum", "Les réformes ont-elles désamorcé ou réalisé les révolutions ?"],
        ["Débat : le capitalisme est-il juste ?", "Efficacité et prospérité contre inégalités et exploitation. Smith, Marx, Polanyi, Hayek.", "Justice sociale ; marché ; encastrement", "Quel critère de justice choisissez-vous ?"]
      ]},
      { title: "Un monde industriel", question: "Comment l'industrie transforme-t-elle la planète ?", sessions: [
        ["La deuxième révolution industrielle", "Électricité, chimie, pétrole, acier, grandes entreprises (1870-1914).", "Électricité ; taylorisme ; grande entreprise", "En quoi la deuxième révolution diffère-t-elle de la première ?"],
        ["Japon Meiji et industrialisation hors d'Europe", "1868 : un pays s'industrialise pour ne pas être colonisé.", "Ère Meiji ; modernisation défensive ; zaibatsu", "Peut-on se moderniser sans s'occidentaliser ?"],
        ["Impérialisme et nouvel impérialisme", "Conférence de Berlin (1884-1885), partage de l'Afrique, Inde britannique, Chine des traités inégaux.", "Partage de l'Afrique ; traités inégaux ; impérialisme", "L'impérialisme était-il rentable ?"],
        ["Villes, hygiène et vie moderne", "Haussmann, égouts, Pasteur, grands magasins, loisirs.", "Haussmannisation ; hygiénisme ; société de consommation", "La ville moderne libère-t-elle ou discipline-t-elle ?"],
        ["Débat : l'Anthropocène commence-t-il avec la machine à vapeur ?", "Charbon, CO2, transformation des paysages. Anthropocène ou Capitalocène ?", "Anthropocène ; Capitalocène ; énergies fossiles", "Qui est responsable du changement climatique dans l'histoire ?"]
      ]},
      { title: "Science, progrès et inquiétudes", question: "Le XIXe siècle croit-il au progrès ?", sessions: [
        ["Darwin et l'évolution (1859)", "Sélection naturelle, ascendance commune, scandale et réception.", "Sélection naturelle ; ascendance commune ; L'Origine des espèces", "Pourquoi Darwin a-t-il dérangé davantage que Copernic ?"],
        ["Darwinisme social et racisme scientifique", "Spencer, Gobineau, eugénisme : la biologie détournée au service de la domination.", "Darwinisme social ; eugénisme ; racisme scientifique", "Comment distinguer une théorie scientifique de ses usages idéologiques ?"],
        ["Positivisme et foi dans le progrès", "Comte, expositions universelles, Jules Verne, école républicaine.", "Positivisme ; Exposition universelle ; idée de progrès", "La croyance au progrès est-elle une religion ?"],
        ["Nietzsche : la mort de Dieu", "Critique de la morale, nihilisme, volonté de puissance, généalogie.", "Nihilisme ; mort de Dieu ; généalogie de la morale", "Que signifie « Dieu est mort » pour une société ?"],
        ["Synthèse du mois : la grande transformation", "Quiz, puis synthèse : qu'est-ce qui a changé de plus profond entre 1750 et 1914 ?", "Modernité industrielle ; croissance ; transformation sociale", "Le Néolithique et la révolution industrielle se ressemblent-ils ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Pourquoi l'Angleterre ? Donnez votre explication en hiérarchisant les causes.", "Smith et Marx : sur quoi seraient-ils d'accord ?", "Comment l'industrialisation a-t-elle changé le rapport à la nature ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m9", title: "Les arts et la modernité", period: "1850 – 1950",
    question: "Pourquoi les arts ont-ils rompu avec la représentation traditionnelle, et que cherchent-ils à la place ?",
    intro: "Photographie, impressionnisme, avant-gardes, architecture moderne, musique du XXe siècle, cinéma : un siècle où l'art questionne sa propre définition. Méthode : regarder une œuvre par séance, longtemps, avant de lire.",
    sources: [
      { t: "Histoire de l'art", a: "Ernst H. Gombrich", note: "Phaidon. Chapitres 24 à 28." },
      { t: "Le Peintre de la vie moderne", a: "Charles Baudelaire", note: "1863. Court." },
      { t: "L'Œuvre d'art à l'époque de sa reproductibilité technique", a: "Walter Benjamin", note: "Allia. Court." },
      { t: "À l'écoute du XXe siècle", a: "Alex Ross", note: "Actes Sud, 2010. La musique du siècle." },
      { t: "Collections en ligne du musée d'Orsay et du Centre Pompidou", a: "Musées", url: "https://www.musee-orsay.fr/fr/collections", note: "Pour regarder les œuvres en haute définition." }
    ],
    weeks: [
      { title: "Peindre la vie moderne", question: "Que change la photographie pour la peinture ?", sessions: [
        ["Réalisme : Courbet et Millet", "Un enterrement à Ornans (1849-1850) : peindre les gens ordinaires en grand format.", "Réalisme ; peinture d'histoire ; Salon", "Pourquoi peindre des paysans en grand était-il un scandale ?"],
        ["La photographie", "Niépce, Daguerre (1839), Nadar : un nouveau rapport à l'image et à la vérité.", "Daguerréotype ; reproductibilité ; portrait", "La photographie libère-t-elle la peinture ou la concurrence-t-elle ?"],
        ["Manet et le scandale de la modernité", "Le Déjeuner sur l'herbe, Olympia (1863-1865) : regard frontal, aplats, sujets contemporains.", "Salon des refusés ; modernité ; Olympia", "Qu'est-ce qui choquait vraiment dans Olympia ?"],
        ["L'impressionnisme", "Monet, Renoir, Morisot, Degas : lumière, plein air, instant, exposition indépendante (1874).", "Impression ; plein air ; touche divisée", "L'impressionnisme est-il une révolution technique ou de regard ?"],
        ["Débat : un art qui ne représente plus rien peut-il être beau ?", "Du réalisme à l'abstraction : la beauté dépend-elle de la ressemblance ?", "Beauté ; mimésis ; Kant et le jugement de goût", "Qu'est-ce qui fait qu'une œuvre nous touche ?"]
      ]},
      { title: "Avant-gardes", question: "Pourquoi tant de ruptures entre 1890 et 1920 ?", sessions: [
        ["Van Gogh, Gauguin, Cézanne", "Couleur expressive, primitivisme, construction de l'espace : les chemins vers le XXe siècle.", "Post-impressionnisme ; primitivisme ; Cézanne", "Pourquoi Cézanne est-il appelé « le père de l'art moderne » ?"],
        ["Picasso, Braque et le cubisme", "Les Demoiselles d'Avignon (1907), plusieurs points de vue simultanés, emprunts à l'art africain.", "Cubisme ; collage ; art nègre (terme d'époque)", "Que pose comme question l'emprunt de Picasso aux masques africains ?"],
        ["Kandinsky, Malevitch, Mondrian : l'abstraction", "Du spirituel dans l'art, Carré noir, néo-plasticisme.", "Abstraction ; suprématisme ; De Stijl", "Pourquoi l'abstraction naît-elle avec des préoccupations spirituelles ?"],
        ["Dada et Duchamp", "Fontaine (1917) : l'urinoir signé. L'art comme décision et comme provocation, au milieu de la guerre.", "Ready-made ; Dada ; anti-art", "Qui décide de ce qui est de l'art ?"],
        ["Débat : tout peut-il être de l'art ?", "Après Duchamp : institution, intention, regard. Danto, Dickie, Goodman.", "Théorie institutionnelle ; intention ; monde de l'art", "Existe-t-il encore une limite ?"]
      ]},
      { title: "Formes nouvelles", question: "Comment architecture, musique et cinéma deviennent-ils modernes ?", sessions: [
        ["Le Bauhaus et l'architecture moderne", "Gropius, Le Corbusier, Mies : fonction, industrie, logement de masse.", "Bauhaus ; fonctionnalisme ; « la forme suit la fonction »", "L'architecture moderne a-t-elle tenu ses promesses sociales ?"],
        ["Musique : de Debussy à Stravinsky et Schoenberg", "Le Sacre du printemps (1913), l'atonalité, le dodécaphonisme.", "Atonalité ; dodécaphonisme ; Sacre du printemps", "Pourquoi la musique savante du XXe siècle a-t-elle perdu une partie du public ?"],
        ["Jazz et cultures populaires", "Nouvelle-Orléans, Harlem Renaissance, Louis Armstrong, Duke Ellington.", "Jazz ; Harlem Renaissance ; culture populaire", "Que doit la musique du XXe siècle aux Africains-Américains ?"],
        ["Le cinéma, art du siècle", "Lumière, Méliès, Eisenstein, Chaplin, Lang : un art industriel et populaire.", "Montage ; cinéma muet ; expressionnisme", "Un art industriel peut-il être un grand art ?"],
        ["Débat : l'art doit-il être engagé ?", "Réalisme socialiste, Guernica, art pour l'art. Benjamin : esthétisation de la politique contre politisation de l'art.", "Art engagé ; art pour l'art ; Guernica", "Une œuvre engagée vieillit-elle plus vite ?"]
      ]},
      { title: "Littérature et pensée modernes", question: "Comment la littérature dit-elle la conscience moderne ?", sessions: [
        ["Baudelaire et Rimbaud", "La ville, le spleen, la modernité ; « il faut être absolument moderne ».", "Spleen ; correspondances ; poème en prose", "Qu'est-ce que la modernité selon Baudelaire ?"],
        ["Proust, Joyce, Woolf : le temps et la conscience", "Mémoire involontaire, flux de conscience, roman moderniste.", "Mémoire involontaire ; flux de conscience ; modernisme", "Pourquoi le roman se tourne-t-il vers l'intériorité ?"],
        ["Freud et l'inconscient", "L'Interprétation du rêve (1900) : un homme qui n'est pas maître en sa demeure. Influence sur le surréalisme.", "Inconscient ; refoulement ; surréalisme", "La psychanalyse est-elle une science ?"],
        ["Kafka et l'absurde", "Le Procès, La Métamorphose : bureaucratie, culpabilité, angoisse.", "Kafkaïen ; absurde ; aliénation", "Pourquoi « kafkaïen » est-il devenu un mot courant ?"],
        ["Synthèse du mois : qu'est-ce que la modernité artistique ?", "Quiz, puis synthèse : rupture, autonomie de l'art, nouveaux médias.", "Modernité ; avant-garde ; autonomie de l'art", "Quelle œuvre de ce mois choisiriez-vous pour résumer le siècle ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Quelle œuvre vous a le plus marqué, et pourquoi ?", "La photographie et le cinéma ont-ils changé ce que nous attendons de la peinture ?", "Tout peut-il être de l'art ? Votre position après ce mois.", "Quelle question reste ouverte ?"]
  },
  {
    id: "m10", title: "Les guerres mondiales", period: "1914 – 1945",
    question: "Comment l'Europe industrielle s'est-elle autodétruite, et qu'est-ce que ces guerres ont changé à l'humanité ?",
    intro: "Deux guerres totales, la révolution russe, les totalitarismes, la Shoah, la bombe atomique. Un mois exigeant, émotionnellement aussi. On privilégie la compréhension des mécanismes : comment des sociétés modernes en arrivent là.",
    sources: [
      { t: "Les Somnambules", a: "Christopher Clark", note: "Flammarion, 2013. Origines de 1914." },
      { t: "14-18, retrouver la guerre", a: "S. Audoin-Rouzeau et A. Becker", note: "Gallimard, 2000." },
      { t: "Terres de sang", a: "Timothy Snyder", note: "Gallimard, 2012." },
      { t: "Si c'est un homme", a: "Primo Levi", note: "Pocket." },
      { t: "Les Origines du totalitarisme", a: "Hannah Arendt", note: "Quarto. Partie III, par extraits." }
    ],
    weeks: [
      { title: "La Grande Guerre", question: "Comment une crise régionale devient-elle une guerre mondiale ?", sessions: [
        ["Les origines de 1914", "Alliances, nationalismes, impérialismes, attentat de Sarajevo, engrenage de juillet.", "Triple Entente ; Triple Alliance ; crise de juillet", "Qui est responsable de la guerre ?"],
        ["La guerre des tranchées", "Verdun, la Somme, l'artillerie, les gaz : expérience combattante et brutalisation.", "Guerre de position ; Verdun ; brutalisation", "Comment les soldats ont-ils tenu ?"],
        ["Guerre totale et arrière", "Économie de guerre, femmes au travail, propagande, génocide des Arméniens (1915).", "Guerre totale ; génocide arménien ; union sacrée", "Qu'est-ce qui rend une guerre « totale » ?"],
        ["1917 : la révolution russe", "Février, Octobre, Lénine, guerre civile, naissance de l'URSS.", "Bolcheviks ; soviets ; communisme de guerre", "Octobre 1917 : révolution ou coup d'État ?"],
        ["Débat : le traité de Versailles a-t-il préparé la Seconde Guerre mondiale ?", "Keynes contre la « paix carthaginoise », Margaret MacMillan contre la thèse de la causalité directe.", "Traité de Versailles ; réparations ; SDN", "Une paix peut-elle provoquer la guerre suivante ?"]
      ]},
      { title: "L'entre-deux-guerres et les totalitarismes", question: "Comment des démocraties basculent-elles ?", sessions: [
        ["Mussolini et le fascisme", "Marche sur Rome (1922), parti unique, culte du chef, corporatisme.", "Fascisme ; squadristi ; État totalitaire", "Qu'est-ce qui définit le fascisme ?"],
        ["La crise de 1929", "Krach, chômage de masse, protectionnisme, New Deal.", "Krach de 1929 ; Grande Dépression ; New Deal", "Comment une crise économique devient-elle politique ?"],
        ["Hitler et le nazisme", "Arrivée légale au pouvoir (1933), destruction de la démocratie, antisémitisme d'État.", "NSDAP ; lois de Nuremberg ; Volksgemeinschaft", "Comment un pays cultivé a-t-il adhéré au nazisme ?"],
        ["Staline et la terreur soviétique", "Collectivisation, famine en Ukraine (Holodomor), Goulag, grandes purges.", "Collectivisation ; Goulag ; Grandes Purges", "Peut-on comparer nazisme et stalinisme ?"],
        ["Débat : la notion de totalitarisme est-elle utile ?", "Arendt et Friedrich contre les historiens qui soulignent les différences entre régimes.", "Totalitarisme ; Hannah Arendt ; idéologie", "Que gagne-t-on et que perd-on à comparer ?"]
      ]},
      { title: "La Seconde Guerre mondiale", question: "Pourquoi cette guerre est-elle sans équivalent ?", sessions: [
        ["De Munich à la guerre", "Remilitarisation, Anschluss, Munich (1938), pacte germano-soviétique, invasion de la Pologne.", "Appeasement ; Munich ; pacte germano-soviétique", "Fallait-il faire la guerre plus tôt ?"],
        ["La guerre mondiale (1939-1945)", "Blitzkrieg, Barbarossa, Stalingrad, Pacifique, débarquements.", "Blitzkrieg ; Stalingrad ; guerre du Pacifique", "Quel a été le tournant décisif de la guerre ?"],
        ["La Shoah", "Ghettos, Einsatzgruppen, conférence de Wannsee, centres de mise à mort : six millions de Juifs assassinés.", "Shoah ; génocide ; Solution finale", "Comment des hommes ordinaires deviennent-ils des exécutants ?"],
        ["Collaboration et résistances", "Vichy, résistances intérieures et extérieures, de Gaulle, Jean Moulin.", "Collaboration ; Résistance ; régime de Vichy", "Qu'est-ce qui pousse à résister ?"],
        ["Débat : fallait-il utiliser la bombe atomique ?", "Hiroshima et Nagasaki (août 1945) : arguments militaires, moraux, géopolitiques.", "Bombe atomique ; Hiroshima ; dissuasion", "Un massacre peut-il être justifié par les vies qu'il épargne ?"]
      ]},
      { title: "Comprendre et juger", question: "Quelles leçons le monde a-t-il tirées ?", sessions: [
        ["Nuremberg et le droit international", "Crimes contre l'humanité, crime de génocide (Lemkin), justice des vainqueurs ?", "Crime contre l'humanité ; génocide ; Nuremberg", "Un tribunal des vainqueurs peut-il être juste ?"],
        ["Arendt et la banalité du mal", "Le procès Eichmann (1961) et la controverse.", "Banalité du mal ; Eichmann ; responsabilité", "Le mal peut-il être banal ?"],
        ["L'ONU et la Déclaration universelle (1948)", "Une nouvelle architecture mondiale, Conseil de sécurité, droits humains.", "ONU ; DUDH ; Conseil de sécurité", "Pourquoi la DUDH n'est-elle pas contraignante ?"],
        ["Mémoires de guerre", "Commémorations, témoins, négationnisme, lois mémorielles.", "Devoir de mémoire ; négationnisme ; histoire et mémoire", "Quelle différence entre histoire et mémoire ?"],
        ["Synthèse du mois : comment l'impensable est-il devenu possible ?", "Quiz, puis synthèse : mécanismes de la violence de masse au XXe siècle.", "Violence de masse ; guerre totale ; idéologie", "Quels signaux d'alerte retiendriez-vous pour aujourd'hui ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Comparez les deux guerres mondiales : causes, nature, conséquences.", "Quels mécanismes rendent possible une violence de masse ?", "Quelle lecture ou quel témoignage vous a le plus marqué ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m11", title: "Décolonisation et Sud global", period: "1919 – 1975 et héritages",
    question: "Comment les empires coloniaux ont-ils pris fin, et que reste-t-il de la colonisation ?",
    intro: "De l'Inde de Gandhi à l'Algérie, du Vietnam à l'Afrique subsaharienne : la fin des empires européens en trente ans. On étudie les luttes, les penseurs anticoloniaux, les guerres, la naissance du tiers-monde, et les débats actuels sur les héritages coloniaux.",
    sources: [
      { t: "Les Damnés de la terre", a: "Frantz Fanon", note: "La Découverte. Chapitre 1 et préface de Sartre." },
      { t: "Discours sur le colonialisme", a: "Aimé Césaire", note: "Présence africaine. 60 pages." },
      { t: "L'Orientalisme", a: "Edward Said", note: "Seuil. Introduction." },
      { t: "Décolonisation", a: "Jan C. Jansen et Jürgen Osterhammel", note: "En anglais : Decolonization, Princeton, 2017. Synthèse courte." },
      { t: "La Guerre d'Algérie", a: "Benjamin Stora (et Sylvie Thénault)", note: "Synthèses accessibles." }
    ],
    weeks: [
      { title: "Les empires à leur apogée", question: "Comment fonctionnait la domination coloniale ?", sessions: [
        ["Le monde colonial en 1920", "Plus d'un tiers des terres émergées sous domination européenne. Administration directe et indirecte.", "Indirect rule ; mission civilisatrice ; code de l'indigénat", "Comment quelques milliers d'administrateurs gouvernent-ils des millions de personnes ?"],
        ["Économie coloniale", "Cultures d'exportation, travail forcé, infrastructures orientées vers les ports.", "Travail forcé ; économie de traite ; pacte colonial", "La colonisation a-t-elle enrichi les métropoles ?"],
        ["Racisme et savoirs coloniaux", "Exposition coloniale (1931), zoos humains, anthropologie coloniale.", "Exposition coloniale ; hiérarchie raciale ; savoirs coloniaux", "Comment la science a-t-elle servi la colonisation ?"],
        ["Premières contestations", "Congrès panafricains, Ho Chi Minh à Versailles (1919), Abd el-Krim, négritude.", "Panafricanisme ; négritude ; nationalisme anticolonial", "Pourquoi les promesses wilsoniennes de 1919 ont-elles déçu ?"],
        ["Débat : peut-on faire le bilan de la colonisation ?", "« Aspects positifs » contre crime. Ce que disent les historiens de la méthode du bilan.", "Bilan colonial ; crime contre l'humanité ; histoire et morale", "Faut-il juger le passé avec nos valeurs ?"]
      ]},
      { title: "Les indépendances asiatiques", question: "Comment l'Asie se libère-t-elle ?", sessions: [
        ["Gandhi et l'indépendance de l'Inde", "Non-violence, marche du sel (1930), Quit India, indépendance (1947).", "Satyagraha ; marche du sel ; swaraj", "La non-violence a-t-elle été décisive ?"],
        ["La partition de l'Inde", "Inde et Pakistan, violences, plus de dix millions de déplacés.", "Partition ; Jinnah ; Cachemire", "Pourquoi l'indépendance s'accompagne-t-elle d'une partition ?"],
        ["Indochine et Vietnam", "Ho Chi Minh, Dien Bien Phu (1954), guerre américaine jusqu'en 1975.", "Viet Minh ; Dien Bien Phu ; guerre du Vietnam", "Comment un pays pauvre bat-il deux grandes puissances ?"],
        ["Indonésie, Chine et la fin des empires en Asie", "Sukarno, révolution chinoise (1949), Malaisie.", "Sukarno ; révolution chinoise ; guerre froide en Asie", "Pourquoi décolonisation et guerre froide se mêlent-elles ?"],
        ["Débat : la violence était-elle nécessaire à la décolonisation ?", "Fanon contre Gandhi, ou les deux selon les contextes ?", "Violence anticoloniale ; non-violence ; Fanon", "La violence libère-t-elle ou reproduit-elle la domination ?"]
      ]},
      { title: "L'Afrique et le monde arabe", question: "Comment l'Afrique devient-elle indépendante ?", sessions: [
        ["La guerre d'Algérie (1954-1962)", "Toussaint rouge, torture, pieds-noirs, harkis, accords d'Évian.", "FLN ; torture ; accords d'Évian", "Pourquoi cette guerre reste-t-elle si présente en France ?"],
        ["Les indépendances africaines", "Ghana (1957), 1960 « année de l'Afrique », Congo de Lumumba.", "Nkrumah ; Lumumba ; Françafrique", "Les indépendances ont-elles changé les rapports de dépendance ?"],
        ["Nasser, Suez et le nationalisme arabe", "Nationalisation du canal (1956), panarabisme, création d'Israël et Nakba (1948).", "Crise de Suez ; panarabisme ; Nakba", "Pourquoi Suez marque-t-il la fin des empires britannique et français ?"],
        ["L'apartheid et Mandela", "Afrique du Sud 1948-1994, résistance, sanctions, transition négociée.", "Apartheid ; ANC ; Commission vérité et réconciliation", "Comment sortir d'un système de domination sans guerre civile ?"],
        ["Débat : les frontières africaines doivent-elles être changées ?", "Frontières coloniales maintenues par l'OUA (1964). Stabilité ou injustice ?", "Uti possidetis ; OUA ; Biafra", "Faut-il préférer la stabilité ou l'autodétermination ?"]
      ]},
      { title: "Tiers-monde et héritages", question: "Que devient le « Sud » après les indépendances ?", sessions: [
        ["Bandung et le non-alignement", "1955 : Nehru, Nasser, Sukarno, Zhou Enlai. Le « tiers-monde » s'affirme.", "Conférence de Bandung ; non-alignement ; tiers-monde", "Le non-alignement était-il possible pendant la guerre froide ?"],
        ["Développement et dépendance", "Théories de la modernisation (Rostow) contre théories de la dépendance (Prebisch).", "Développement ; théorie de la dépendance ; aide au développement", "Pourquoi certains pays décollent-ils et d'autres non ?"],
        ["Penser après la colonisation", "Said, Spivak, Mbembe : études postcoloniales et leurs critiques.", "Postcolonialisme ; subalterne ; décolonial", "Les études postcoloniales éclairent-elles ou brouillent-elles le passé ?"],
        ["Restitutions et mémoires", "Rapport Sarr-Savoy (2018), restitutions d'œuvres, débats mémoriels.", "Restitution ; rapport Sarr-Savoy ; mémoire coloniale", "Les musées doivent-ils rendre les objets acquis pendant la colonisation ?"],
        ["Synthèse du mois : qu'est-ce qu'une décolonisation réussie ?", "Quiz, puis synthèse : comparer trois décolonisations.", "Décolonisation ; souveraineté ; néocolonialisme", "L'indépendance politique suffit-elle ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Comparez deux décolonisations (Inde, Algérie, Ghana…).", "Quelle pensée anticoloniale vous a le plus fait réfléchir ?", "Que reste-t-il aujourd'hui de la colonisation ?", "Quelle question reste ouverte ?"]
  },
  {
    id: "m12", title: "Le monde depuis 1945", period: "1945 – aujourd'hui",
    question: "Comment comprendre le monde actuel à partir de tout ce qui précède ?",
    intro: "Guerre froide, fin de l'URSS, mondialisation, montée de la Chine, conflits du Moyen-Orient, retour de la guerre en Europe, enjeux climatiques. Ce dernier mois relie l'année entière : chaque séance mobilise des notions des mois précédents.",
    sources: [
      { t: "La Guerre froide", a: "John Lewis Gaddis", note: "Belles Lettres, 2019. Synthèse claire." },
      { t: "Le Dessous des cartes", a: "Arte", url: "https://www.arte.tv/fr/videos/RC-014036/le-dessous-des-cartes/", note: "Émissions de 12 minutes, idéales pour une séance." },
      { t: "Vers la guerre. La Chine et l'Amérique dans le piège de Thucydide ?", a: "Graham Allison", note: "Odile Jacob, 2019." },
      { t: "La Fin de l'histoire et le dernier homme", a: "Francis Fukuyama", note: "Flammarion. À lire avec Huntington." },
      { t: "Le Grand Continent", a: "Revue en ligne", url: "https://legrandcontinent.eu", note: "Analyses géopolitiques actuelles." }
    ],
    weeks: [
      { title: "La guerre froide", question: "Comment deux superpuissances se sont-elles affrontées sans guerre directe ?", sessions: [
        ["Deux blocs (1945-1953)", "Yalta, rideau de fer, plan Marshall, blocus de Berlin, OTAN.", "Rideau de fer ; containment ; OTAN", "Qui a commencé la guerre froide ?"],
        ["L'équilibre de la terreur", "Bombe soviétique (1949), crise de Cuba (1962), dissuasion nucléaire.", "Dissuasion ; destruction mutuelle assurée ; crise de Cuba", "La bombe a-t-elle évité une troisième guerre mondiale ?"],
        ["Guerres par procuration", "Corée, Vietnam, Afghanistan, Angola : la guerre froide est chaude au Sud.", "Guerre par procuration ; théorie des dominos ; Afghanistan", "Pourquoi la guerre froide a-t-elle tué surtout hors d'Europe ?"],
        ["1989-1991 : la fin de l'URSS", "Gorbatchev, chute du mur, dissolution de l'URSS.", "Perestroïka ; chute du mur de Berlin ; dislocation de l'URSS", "Pourquoi l'URSS s'est-elle effondrée sans guerre ?"],
        ["Débat : la fin de l'histoire ou le choc des civilisations ?", "Fukuyama (1989) et Huntington (1993) : deux prédictions pour l'après-guerre froide.", "Fin de l'histoire ; choc des civilisations ; ordre libéral", "Laquelle des deux thèses a le mieux vieilli ?"]
      ]},
      { title: "Mondialisation", question: "Qui gagne et qui perd dans la mondialisation ?", sessions: [
        ["Construction européenne", "CECA (1951), traité de Rome (1957), Maastricht (1992), euro, élargissements, Brexit.", "Méthode Monnet ; supranationalité ; Maastricht", "L'Union européenne est-elle un empire, une fédération, ou autre chose ?"],
        ["Mondialisation économique", "Conteneur, OMC, délocalisations, « courbe de l'éléphant » des inégalités.", "Mondialisation ; OMC ; courbe de l'éléphant", "La mondialisation a-t-elle réduit ou accru les inégalités ?"],
        ["Le retour de la Chine", "Deng Xiaoping (1978), usine du monde, Xi Jinping, nouvelles routes de la soie.", "Socialisme de marché ; routes de la soie ; Taïwan", "Le piège de Thucydide est-il inévitable entre Chine et États-Unis ?"],
        ["Numérique et puissance", "Internet, plateformes, données, IA : nouveaux leviers de pouvoir.", "Économie de l'attention ; souveraineté numérique ; cyberguerre", "Les plateformes sont-elles de nouvelles puissances géopolitiques ?"],
        ["Débat : la démocratie libérale est-elle en recul ?", "Populismes, régimes autoritaires, « démocraties illibérales ». Données et interprétations.", "Démocratie illibérale ; populisme ; autoritarisme", "Les démocraties sont-elles plus fragiles qu'il y a trente ans ?"]
      ]},
      { title: "Conflits contemporains", question: "Pourquoi la guerre n'a-t-elle pas disparu ?", sessions: [
        ["Le Moyen-Orient : pétrole, États, religions", "Accords Sykes-Picot, conflit israélo-palestinien, révolution iranienne (1979), guerres d'Irak.", "Sykes-Picot ; révolution islamique ; question palestinienne", "Pourquoi cette région concentre-t-elle tant de conflits ?"],
        ["Terrorisme et 11 septembre", "Al-Qaïda, guerre contre le terrorisme, État islamique.", "Djihadisme ; guerre asymétrique ; 11 septembre", "La « guerre contre le terrorisme » a-t-elle atteint ses objectifs ?"],
        ["La Russie et la guerre en Ukraine", "De 1991 à 2014 (Crimée) puis 2022 : empire, nation, sécurité.", "Sphère d'influence ; souveraineté ; élargissement de l'OTAN", "Comment des notions vues toute l'année (empire, nation, légitimité) éclairent-elles cette guerre ?"],
        ["Ordre international et multilatéralisme", "ONU, droit international, Sud global, BRICS : un monde multipolaire ?", "Multipolarité ; BRICS ; droit international", "Le droit international protège-t-il encore les faibles ?"],
        ["Débat : les empires sont-ils de retour ?", "Russie, Chine, Turquie, États-Unis : logiques impériales au XXIe siècle.", "Impérialisme ; néo-impérialisme ; puissance", "Le modèle de l'État-nation est-il en recul ?"]
      ]},
      { title: "Défis communs et bilan", question: "Que faire de tout ce savoir ?", sessions: [
        ["Climat et Anthropocène", "Données du GIEC, géopolitique de l'énergie, justice climatique.", "GIEC ; transition énergétique ; justice climatique", "Le climat peut-il provoquer un effondrement comme ceux étudiés au mois 1 ?"],
        ["Démographie et migrations", "Transition démographique, vieillissement, migrations Sud-Nord et Sud-Sud.", "Transition démographique ; migrations ; vieillissement", "Les migrations sont-elles un phénomène nouveau ?"],
        ["Ce que l'histoire peut et ne peut pas nous dire", "Analogies historiques, leurs usages et leurs abus (Munich, 1914, Weimar).", "Analogie historique ; contingence ; leçons de l'histoire", "L'histoire se répète-t-elle ?"],
        ["Relire l'année : une carte de vos connaissances", "Ouvrez la page Liens et parcourez vos connexions. Choisissez trois fils qui traversent l'année.", "Longue durée ; interdisciplinarité ; synthèse", "Quel fil traverse le plus de mois dans vos notes ?"],
        ["Synthèse finale : votre vision du monde", "Quiz, puis grande synthèse : qu'est-ce qui a changé dans votre manière de comprendre le monde ?", "Culture générale ; esprit critique ; vision du monde", "Quelle est la question que vous voulez explorer l'année prochaine ?"]
      ]}
    ],
    synthesisPrompts: ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Choisissez un conflit actuel et éclairez-le avec trois notions vues dans l'année.", "Fukuyama ou Huntington : votre verdict.", "Qu'est-ce qui a changé dans votre manière de lire l'actualité ?", "Quel programme pour l'année prochaine ?"]
  }
];
