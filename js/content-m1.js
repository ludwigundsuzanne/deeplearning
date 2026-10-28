/* Mois 1 — contenu complet : 4 semaines, 20 séances. */
window.SEED_M1 = {
  id: "m1",
  title: "Les premières civilisations",
  period: "vers 10 000 – 500 av. J.-C.",
  question: "Comment des groupes humains sont-ils passés du village à l'État, à l'écriture et à l'empire ?",
  intro: "Ce mois pose les fondations de tout le parcours. On y voit naître l'agriculture, les villes, l'écriture, la loi écrite, les rois et les dieux d'État, en Mésopotamie, en Égypte, en Inde, en Chine et dans les Amériques. Le fil rouge : rien de tout cela n'était inévitable, et chaque « invention » a eu un prix.",
  weeks: [
    {
      id: "m1w1",
      title: "Naissance des sociétés complexes",
      question: "Qu'est-ce qui change quand les humains se sédentarisent ?",
      sessions: [
        {
          id: "m1s1",
          kind: "cours",
          title: "La révolution néolithique",
          hook: "Pendant 95 % de son histoire, Homo sapiens a vécu de chasse et de cueillette. Pourquoi, en quelques millénaires, plusieurs régions du monde se sont-elles mises à cultiver ?",
          body: `## Un basculement lent, pas une révolution

Le mot « révolution néolithique » vient de l'archéologue Vere Gordon Childe (années 1930). Il suggère un événement brutal. En réalité, le passage à l'agriculture s'étale sur **plusieurs millénaires**. Au Proche-Orient, entre environ 12 000 et 8 000 av. J.-C., des groupes déjà sédentaires (les Natoufiens) récoltent des céréales sauvages, puis sélectionnent peu à peu des plantes plus faciles à moissonner.

## Où et quand

L'agriculture apparaît de façon **indépendante** dans plusieurs foyers :

- le **Croissant fertile** (du Levant au Zagros) : blé, orge, lentille, chèvre, mouton, vers 9 500–8 000 av. J.-C. ;
- la **Chine** : riz dans la vallée du Yangzi, millet dans celle du fleuve Jaune, vers 7 000 av. J.-C. ;
- la **Mésoamérique** : courge puis maïs (domestiqué à partir d'une herbe sauvage, le téosinte) ;
- les **Andes** : pomme de terre, quinoa, lama ;
- la **Nouvelle-Guinée**, l'**Afrique sahélienne**, l'est de l'**Amérique du Nord**.

Ce caractère multiple est essentiel : il montre que l'agriculture n'est pas une idée géniale apparue une fois puis diffusée, mais une réponse convergente à des conditions comparables (fin de la dernière glaciation, climat plus stable, densité humaine croissante).

## Göbekli Tepe : le temple avant la ferme ?

Sur ce site du sud-est de la Turquie, des chasseurs-cueilleurs ont érigé, vers 9 500 av. J.-C., des enceintes de piliers en T sculptés d'animaux. L'archéologue Klaus Schmidt y voyait la preuve que le rassemblement rituel a précédé l'agriculture et l'a peut-être provoqué : nourrir les foules aurait poussé à cultiver. L'hypothèse est discutée (des habitats ont depuis été repérés sur le site), mais elle retourne une idée reçue : la complexité sociale et symbolique n'attend pas forcément les surplus agricoles.

## Ce que l'agriculture change

1. **La démographie.** Une terre cultivée nourrit beaucoup plus de bouches qu'une terre de chasse. Les populations augmentent fortement.
2. **La santé.** Paradoxalement, les squelettes des premiers agriculteurs montrent souvent une taille plus petite, plus de caries, de carences et de maladies infectieuses (proximité du bétail, eaux stagnantes, densité).
3. **Le travail.** Labourer, semer, irriguer, stocker : le calendrier se resserre autour des saisons.
4. **La propriété et le stockage.** Les greniers rendent possible l'accumulation, donc l'inégalité, la dette, le vol et la défense.
5. **Le rapport à la nature.** On ne prélève plus seulement, on transforme : défrichement, sélection, élevage.

## Un village emblématique : Çatal Höyük

En Anatolie, vers 7 400–6 000 av. J.-C., jusqu'à plusieurs milliers de personnes vivent dans des maisons collées les unes aux autres, sans rues : on entre par le toit. Les fouilles (Ian Hodder) montrent peu de différences de richesse entre les maisons. Le Néolithique n'implique donc pas immédiatement des chefs et des palais : l'État vient beaucoup plus tard.

## À retenir

L'agriculture rend possible tout ce qui suit (villes, écriture, États) sans l'imposer. Elle crée des surplus, mais aussi de nouvelles vulnérabilités : famines quand la récolte échoue, épidémies, travail plus contraint.`,
          notions: [
            ["Néolithique", "Période où apparaissent agriculture, élevage et sédentarité généralisée ; au Proche-Orient, à partir d'environ 9 500 av. J.-C."],
            ["Domestication", "Sélection, sur de nombreuses générations, de plantes ou d'animaux dont les caractères deviennent dépendants de l'action humaine (épis qui ne se dispersent plus, animaux dociles)."],
            ["Croissant fertile", "Arc de terres allant du Levant à la Mésopotamie et au Zagros, l'un des premiers foyers de l'agriculture."],
            ["Foyers multiples", "L'agriculture est apparue indépendamment dans au moins sept régions du monde."],
            ["Göbekli Tepe", "Site monumental de chasseurs-cueilleurs (vers 9 500 av. J.-C.), sud-est de la Turquie."],
            ["Surplus", "Production supérieure aux besoins immédiats, stockable : condition matérielle de la spécialisation et des inégalités."]
          ],
          perspective: "Le Néolithique est le premier grand exemple d'une transformation qu'aucun acteur n'a voulue dans son ensemble. Chaque génération fait des choix raisonnables à court terme (stocker, semer un peu plus), et le résultat, sur des siècles, est un monde radicalement différent. On retrouvera ce schéma avec la révolution industrielle.",
          connections: [
            { a: "Révolution néolithique", rel: "rend possible", b: "Uruk et les premières villes", type: "événement" },
            { a: "Révolution néolithique", rel: "comparable par son ampleur à", b: "Révolution industrielle", type: "événement" },
            { a: "Domestication", rel: "étudiée par", b: "Génétique des populations", type: "discipline" }
          ],
          questions: [
            ["Pourquoi dit-on que l'agriculture est apparue de façon indépendante, et pourquoi est-ce important ?", "Elle naît dans au moins sept foyers sans contact (Croissant fertile, Chine, Mésoamérique, Andes, Nouvelle-Guinée…). Cela en fait une réponse convergente à des conditions communes (fin de la glaciation, climat stable, densité) plutôt qu'une invention unique."],
            ["Quel paradoxe sanitaire les squelettes néolithiques révèlent-ils ?", "Plus de population, mais des individus souvent plus petits, avec plus de caries, de carences et d'infections : le surplus collectif ne signifie pas un meilleur niveau de vie individuel."],
            ["Que suggère Göbekli Tepe sur l'ordre des causes ?", "Que des rassemblements rituels monumentaux ont pu précéder l'agriculture, voire la stimuler : la complexité symbolique ne vient pas forcément après les surplus."]
          ],
          sources: [
            { t: "Les dix millénaires oubliés qui ont fait l'histoire", a: "Jean-Paul Demoule", note: "Fayard, 2017. Synthèse claire et critique sur le Néolithique." },
            { t: "Homo domesticus. Une histoire profonde des premiers États", a: "James C. Scott", note: "La Découverte, 2019. Thèse provocante, utile pour le débat de vendredi." }
          ]
        },
        {
          id: "m1s2",
          kind: "cours",
          title: "Uruk et l'invention de l'État",
          hook: "Vers 3 300 av. J.-C., une ville de Mésopotamie du Sud compte peut-être 40 000 habitants. Qui la dirige, et comment ?",
          body: `## La Mésopotamie : un milieu exigeant

« Mésopotamie » signifie « entre les fleuves » : le Tigre et l'Euphrate. Le sud, le pays de **Sumer**, est une plaine alluviale très fertile mais presque sans pluie, sans pierre, sans bois de qualité ni métal. Pour y vivre en nombre, il faut **irriguer** (canaux, digues) et **échanger** (pour obtenir cuivre, pierre, bois). Ces deux contraintes favorisent la coordination à grande échelle.

## Uruk, première grande ville

Entre 4 000 et 3 100 av. J.-C. (période dite d'Uruk), la ville d'Uruk devient un centre exceptionnel : plusieurs centaines d'hectares, des temples monumentaux (quartier de l'Eanna, dédié à la déesse **Inanna**), des ateliers spécialisés. On y trouve en masse des **bols à bord biseauté**, fabriqués en série, qui servaient probablement à distribuer des rations d'orge à des travailleurs. C'est la trace matérielle d'une économie redistributive : une institution collecte, stocke et redistribue.

## Le temple, puis le palais

Au début, le pouvoir semble s'exercer à travers les **grands organismes** : temples et administration. Le temple possède terres, troupeaux, ateliers et dépendants. Au IIIe millénaire, à l'époque des **cités-États sumériennes** (Ur, Lagash, Umma, Kish…), apparaît plus nettement une figure royale, le *lugal* (« grand homme »), qui mène la guerre, construit les murailles et les temples, et se présente comme le serviteur du dieu de la cité.

## Qu'est-ce qu'un État ?

Pour l'historien et le politiste, un État réunit au moins :

- un **territoire** contrôlé ;
- une **administration** spécialisée qui compte, enregistre, prélève ;
- un **monopole** (ou une prétention au monopole) de la contrainte légitime, selon la formule de Max Weber ;
- une **idéologie** qui justifie l'inégalité entre gouvernants et gouvernés (ici, la volonté des dieux).

Uruk réunit ces traits de manière précoce. Mais l'État reste fragile : les cités se font la guerre (le conflit Lagash–Umma pour un territoire frontalier dure plus d'un siècle), et les populations peuvent fuir vers les marges.

## Le premier empire : Akkad

Vers 2 300 av. J.-C., **Sargon d'Akkad** unifie les cités de Sumer et du nord sous une seule autorité. C'est souvent présenté comme le premier empire : un pouvoir qui domine plusieurs peuples et cités, avec une langue administrative (l'akkadien, langue sémitique) qui coexiste avec le sumérien. L'empire d'Akkad s'effondre vers 2 150 av. J.-C., mais le modèle impérial est désormais pensable.

## À retenir

L'État naît en Mésopotamie d'une combinaison : irrigation, stockage de céréales, temples qui redistribuent, guerre entre cités. Les céréales jouent un rôle particulier : elles mûrissent en même temps, se voient, se mesurent et se stockent. Elles sont donc faciles à **taxer**, ce qui n'est pas le cas des tubercules ou du gibier (argument de James C. Scott).`,
          notions: [
            ["Mésopotamie", "« Entre les fleuves » : région du Tigre et de l'Euphrate, actuel Irak. Sumer en est le sud."],
            ["Cité-État", "Ville autonome qui contrôle son arrière-pays, avec ses institutions et son dieu protecteur."],
            ["Économie redistributive", "Système où une institution centrale (temple, palais) collecte les productions et les redistribue sous forme de rations."],
            ["Lugal", "Titre sumérien du roi, littéralement « grand homme »."],
            ["Monopole de la violence légitime", "Définition de l'État par Max Weber (1919) : l'État revendique avec succès le monopole de la contrainte physique légitime sur un territoire."],
            ["Empire", "Entité politique qui domine durablement des peuples et territoires divers sous un centre unique. Akkad (vers 2 300 av. J.-C.) en est le premier exemple connu."]
          ],
          perspective: "La définition wébérienne de l'État reviendra tout au long du parcours : Rome, les monarchies absolues, l'État-nation du XIXe siècle et les « États faillis » de la géopolitique contemporaine se mesurent à cette aune. Retenez qu'à Uruk, l'administration précède probablement la royauté forte.",
          connections: [
            { a: "Uruk", rel: "voit naître", b: "Écriture cunéiforme", type: "lieu" },
            { a: "Max Weber", rel: "définit", b: "État", type: "personne" },
            { a: "Sargon d'Akkad", rel: "fonde", b: "Empire d'Akkad", type: "personne" },
            { a: "Empire d'Akkad", rel: "modèle pour", b: "Empire perse achéménide", type: "événement" }
          ],
          questions: [
            ["Pourquoi le milieu de Sumer favorise-t-il une coordination à grande échelle ?", "Plaine fertile mais sans pluie, sans pierre, bois ni métal : il faut irriguer collectivement et organiser des échanges lointains."],
            ["Que révèlent les bols à bord biseauté ?", "Une production en série, probablement pour distribuer des rations d'orge : la trace d'une économie redistributive gérée par une institution."],
            ["Pourquoi les céréales sont-elles des cultures « d'État » selon James C. Scott ?", "Elles mûrissent en même temps, sont visibles, mesurables et stockables : faciles à recenser et à taxer."],
            ["Donnez les quatre éléments d'une définition de l'État.", "Territoire, administration spécialisée, monopole (revendiqué) de la contrainte légitime, idéologie justifiant la hiérarchie."]
          ],
          sources: [
            { t: "La Mésopotamie. De Gilgamesh à Artaban", a: "Bertrand Lafont, Aline Tenu, Philippe Clancier, Francis Joannès", note: "Belin, coll. Mondes anciens, 2017. La référence actuelle en français." },
            { t: "Uruk. The First City", a: "Mario Liverani", note: "Equinox, 2006. Court et très clair, en anglais." }
          ]
        },
        {
          id: "m1s3",
          kind: "cours",
          title: "L'écriture : du comptage à la littérature",
          hook: "Les premiers textes de l'humanité ne racontent ni des mythes ni des exploits. Ils comptent des moutons et des sacs d'orge.",
          body: `## Avant l'écriture : compter

Dès le IVe millénaire, les administrateurs mésopotamiens utilisent des **jetons d'argile** (*calculi*) de formes différentes pour représenter des quantités de biens. Pour garantir une transaction, on les enferme dans une **bulle-enveloppe** d'argile, sur laquelle on imprime parfois les jetons et le sceau des personnes concernées. L'archéologue Denise Schmandt-Besserat a proposé d'y voir l'ancêtre direct de l'écriture : à quoi bon garder les jetons si l'empreinte suffit ?

## Uruk, vers 3 300 av. J.-C.

Les plus anciennes **tablettes** viennent d'Uruk. Ce sont des comptes : rations, troupeaux, terres, travailleurs. Les signes sont d'abord des dessins tracés dans l'argile (**pictogrammes**), associés à des signes numériques. Environ 85 % de ces premières tablettes sont administratives ; le reste sert surtout à former les scribes (listes lexicales de signes).

## Du dessin au son

L'étape décisive est le **principe du rébus** : on utilise un signe non plus pour ce qu'il représente, mais pour le **son** du mot. En sumérien, le signe de la flèche se lit *ti* ; or *ti* signifie aussi « vie ». Le signe de la flèche peut donc écrire « vie ». Grâce à ce principe, l'écriture peut noter des noms propres, des verbes, des idées abstraites : elle devient capable de transcrire la langue parlée.

Les signes, tracés au calame (un roseau taillé) dans l'argile fraîche, prennent une forme de clous ou de coins : c'est l'écriture **cunéiforme** (du latin *cuneus*, « coin »). Elle servira pendant près de 3 000 ans à noter une quinzaine de langues (sumérien, akkadien, hittite, élamite, ourartéen…). La dernière tablette datée connue remonte au Ier siècle de notre ère.

## L'Égypte, la Chine, la Mésoamérique

L'écriture naît **au moins trois ou quatre fois** de façon indépendante : en Mésopotamie, en Égypte (hiéroglyphes, vers 3 200 av. J.-C., presque en même temps : l'influence mésopotamienne reste débattue), en Chine (inscriptions oraculaires des Shang, vers 1 250 av. J.-C.) et en Mésoamérique (Ier millénaire av. J.-C.). L'écriture de l'Indus, elle, n'est toujours pas déchiffrée.

## Le scribe et le pouvoir

Apprendre le cunéiforme prend des années, dans l'*edubba* (« maison des tablettes »). Les scribes forment une élite liée aux temples et aux palais. L'écriture sert d'abord à **gouverner** : compter les biens, enregistrer les dettes, fixer les contrats, puis proclamer les exploits royaux. L'anthropologue Claude Lévi-Strauss a résumé cette idée de façon volontairement provocante : la fonction première de l'écriture serait de « faciliter l'asservissement ». La formule est excessive, mais elle oblige à voir le lien entre écriture et administration.

## La naissance de la littérature

Au IIIe et au début du IIe millénaire apparaissent des textes littéraires : hymnes, lamentations sur la destruction des villes, proverbes, et surtout l'**Épopée de Gilgamesh**. Ce roi d'Uruk, en partie divin, cherche l'immortalité après la mort de son ami Enkidu. Il échoue, et comprend que l'humain doit accepter sa finitude. Le récit contient aussi un **Déluge**, raconté par le survivant Uta-napishti, qui présente des parallèles frappants avec celui de la Genèse, rédigée bien plus tard.

## À retenir

L'écriture est née de la comptabilité. Elle ne devient un outil de pensée, de mémoire et de littérature que dans un second temps, grâce au principe phonétique.`,
          notions: [
            ["Cunéiforme", "Écriture en forme de « coins » imprimés au calame dans l'argile, née en Mésopotamie vers 3 300 av. J.-C., utilisée pendant environ 3 000 ans."],
            ["Pictogramme", "Signe qui représente directement un objet par un dessin."],
            ["Principe du rébus", "Utiliser un signe pour la valeur sonore du mot qu'il représente, et non pour son sens : le passage décisif vers une écriture phonétique."],
            ["Calculi", "Jetons d'argile servant à représenter des quantités avant l'écriture."],
            ["Épopée de Gilgamesh", "Récit mésopotamien sur un roi d'Uruk en quête d'immortalité ; versions sumériennes puis akkadiennes, du IIIe au Ier millénaire av. J.-C."],
            ["Scribe", "Spécialiste de l'écriture formé pendant des années, au service des temples et des palais."]
          ],
          perspective: "Chaque nouvelle technologie d'écriture déplace le pouvoir : l'alphabet (semaine 4) démocratise la lecture ; l'imprimerie (mois 5) bouleverse la religion et la science ; le numérique, aujourd'hui, transforme à nouveau la mémoire et l'autorité. Demandez-vous à chaque fois : qui contrôle l'écrit ?",
          connections: [
            { a: "Écriture cunéiforme", rel: "née de", b: "Comptabilité des temples", type: "idée" },
            { a: "Épopée de Gilgamesh", rel: "récit de déluge parallèle à", b: "Genèse (Bible hébraïque)", type: "œuvre" },
            { a: "Claude Lévi-Strauss", rel: "relie l'écriture à", b: "Domination politique", type: "personne" },
            { a: "Écriture cunéiforme", rel: "précède", b: "Alphabet phénicien", type: "idée" }
          ],
          questions: [
            ["Que contiennent la plupart des premières tablettes d'Uruk ?", "Des comptes administratifs (rations, troupeaux, terres, travailleurs) et des listes servant à former les scribes ; pas de récits."],
            ["Expliquez le principe du rébus avec l'exemple sumérien.", "Le signe de la flèche se lit « ti » ; « ti » veut aussi dire « vie » ; on utilise donc la flèche pour écrire « vie ». Le signe vaut pour son son."],
            ["Combien de fois l'écriture a-t-elle été inventée indépendamment, selon le consensus actuel ?", "Au moins trois ou quatre : Mésopotamie, Chine, Mésoamérique, et probablement Égypte (l'indépendance égyptienne est débattue)."],
            ["De quoi parle l'Épopée de Gilgamesh ?", "De la quête d'immortalité d'un roi d'Uruk après la mort d'Enkidu ; il échoue et accepte la condition mortelle. Le récit inclut un déluge."]
          ],
          sources: [
            { t: "L'Épopée de Gilgamesh. Le grand homme qui ne voulait pas mourir", a: "Jean Bottéro (trad. et commentaire)", note: "Gallimard, L'aube des peuples, 1992. À lire par extraits." },
            { t: "Mésopotamie. L'écriture, la raison et les dieux", a: "Jean Bottéro", note: "Gallimard, 1987 (Folio Histoire)." },
            { t: "Les trois écritures. Langue, nombre, code", a: "Clarisse Herrenschmidt", note: "Gallimard, 2007. Pour aller plus loin." }
          ]
        },
        {
          id: "m1s4",
          kind: "cours",
          title: "Hammurabi : la loi écrite et la justice",
          hook: "Une stèle de basalte de 2,25 mètres, aujourd'hui au Louvre, porte près de 300 décisions de justice. Est-ce vraiment un « code » ?",
          body: `## Babylone et son roi

Après la chute d'Akkad et la renaissance sumérienne d'Ur (IIIe dynastie, vers 2 100–2 000 av. J.-C.), la Mésopotamie se fragmente en royaumes rivaux. **Hammurabi** règne à Babylone de 1792 à 1750 av. J.-C. environ (chronologie dite moyenne). Diplomate patient et chef de guerre, il unifie progressivement la Mésopotamie en battant Larsa, puis Mari. Babylone devient pour longtemps la capitale symbolique de la région.

## La stèle

Vers la fin de son règne, Hammurabi fait dresser plusieurs stèles. Celle qui nous est parvenue a été emportée au XIIe siècle av. J.-C. à **Suse** (Iran) comme butin par un roi élamite, où des archéologues français l'ont retrouvée en 1901–1902. Elle se compose de trois parties :

1. un **prologue** où le roi se présente comme choisi par les dieux pour « faire apparaître la justice dans le pays, détruire le méchant et le pervers, afin que le fort n'opprime pas le faible » ;
2. environ **282 articles** de la forme « Si un homme a fait X, alors Y » ;
3. un **épilogue** qui invite l'opprimé à venir lire la stèle et maudit quiconque l'effacerait.

En haut, un relief montre le roi debout devant **Shamash**, dieu du soleil et de la justice.

## Le contenu

Les articles couvrent le vol, les dépôts, les prêts et les dettes, le mariage, le divorce, l'héritage, l'adoption, les salaires, la location de bœufs, les responsabilités des médecins et des architectes. On y trouve le principe du **talion** (« si un homme a crevé l'œil d'un homme libre, on lui crèvera l'œil »), mais la peine **dépend du statut social** : la victime peut être un *awilum* (homme libre de plein droit), un *mushkenum* (dépendant du palais) ou un esclave, et les sanctions diffèrent fortement.

## Un « code » ? Débat d'historiens

On parle traditionnellement du « Code d'Hammurabi », mais les assyriologues nuancent :

- les tribunaux babyloniens ne **citent jamais** la stèle dans les milliers de procès connus ;
- le texte ne couvre pas tous les domaines et procède par cas concrets ;
- il ressemble aux **traités savants** mésopotamiens (listes de présages, de diagnostics médicaux) qui raisonnent par exemples.

L'interprétation dominante y voit donc une **œuvre politique et savante** : un recueil de jugements exemplaires qui montre que le roi est juste, plutôt qu'une loi appliquée mécaniquement. Il n'était d'ailleurs pas le premier : le recueil d'**Ur-Namma** (vers 2 100 av. J.-C.) est plus ancien de trois siècles.

## Pourquoi c'est important

La stèle formule une idée qui nous est familière : le pouvoir est légitime s'il garantit la **justice**, et en particulier la protection des faibles. Elle montre aussi l'autre face : cette justice est hiérarchique et assume l'inégalité des statuts. L'égalité devant la loi est une idée beaucoup plus tardive.

## À retenir

Hammurabi unifie la Mésopotamie au XVIIIe siècle av. J.-C. Sa stèle est une proclamation de justice royale, gravée pour la postérité, plus qu'un code au sens moderne. Elle associe talion, protection du faible et hiérarchie des statuts.`,
          notions: [
            ["Hammurabi", "Roi de Babylone (vers 1792–1750 av. J.-C.) qui unifie la Mésopotamie."],
            ["Talion", "Principe d'une peine équivalente au dommage (« œil pour œil ») ; il limite aussi la vengeance à une proportion."],
            ["Shamash", "Dieu mésopotamien du soleil et de la justice, représenté sur la stèle face au roi."],
            ["Awilum / mushkenum", "Catégories sociales babyloniennes : homme libre de plein droit / dépendant du palais. Les peines varient selon le statut."],
            ["Ur-Namma", "Roi d'Ur (vers 2 100 av. J.-C.) dont le recueil de lois est le plus ancien connu."],
            ["Casuistique", "Raisonnement juridique par cas particuliers (« si… alors… ») plutôt que par principes généraux."]
          ],
          perspective: "Comparez trois moments : la stèle d'Hammurabi (justice royale, hiérarchique), la loi des XII Tables à Rome (mois 3, loi publique affichée), la Déclaration des droits de 1789 (mois 7, égalité de principe). La question constante : la loi protège-t-elle le faible ou consacre-t-elle l'ordre établi ?",
          connections: [
            { a: "Stèle d'Hammurabi", rel: "conservée au", b: "Musée du Louvre", type: "œuvre" },
            { a: "Stèle d'Hammurabi", rel: "comparable à", b: "Loi des XII Tables", type: "œuvre" },
            { a: "Talion", rel: "repris dans", b: "Exode 21 (Bible hébraïque)", type: "idée" },
            { a: "Justice royale", rel: "étudiée par", b: "Histoire du droit", type: "discipline" }
          ],
          questions: [
            ["Pourquoi les historiens hésitent-ils à parler de « code » ?", "Les procès babyloniens ne citent jamais la stèle ; le texte procède par cas, ne couvre pas tout, et ressemble aux traités savants. C'est plutôt un recueil exemplaire de justice royale."],
            ["Quelle tension traverse la conception de la justice de la stèle ?", "Elle prétend protéger le faible contre le fort, mais les peines varient selon le statut social de la victime et du coupable."],
            ["Comment la stèle est-elle arrivée à Suse ?", "Emportée comme butin par un roi élamite au XIIe siècle av. J.-C. ; retrouvée par des archéologues français en 1901–1902."]
          ],
          sources: [
            { t: "Hammu-rabi de Babylone", a: "Dominique Charpin", note: "PUF, 2003. Biographie par le meilleur spécialiste français." },
            { t: "Fiche « Code de Hammurabi » (Sb 8)", a: "Musée du Louvre, collections en ligne", url: "https://collections.louvre.fr", note: "Photographies détaillées de la stèle." }
          ]
        },
        {
          id: "m1s5",
          kind: "debat",
          title: "Débat : l'agriculture a-t-elle été un progrès ?",
          hook: "Jared Diamond a qualifié l'agriculture de « pire erreur de l'histoire de l'humanité ». Provocation gratuite ou vraie question ?",
          body: `## La question

Pendant longtemps, le récit dominant était simple : l'agriculture libère l'humanité de la faim et de l'errance, permet les surplus, les villes, l'écriture, la civilisation. Depuis les années 1960–1980, des anthropologues et des archéologues ont contesté ce récit. Ce débat n'oppose pas des faits contre des opinions : les deux camps s'appuient sur des données réelles, mais ne mesurent pas la même chose.

## Ce qu'il faut garder en tête

- **Échelle collective ou individuelle ?** L'agriculture augmente massivement la population totale. Mais la vie de l'individu moyen s'améliore-t-elle ?
- **Court ou long terme ?** Les premiers agriculteurs vivent souvent moins bien. Leurs lointains descendants bénéficient de la médecine, de l'écriture et de la science.
- **Choix ou piège ?** Une fois la population accrue, revenir en arrière devient impossible : il n'y a plus assez de gibier pour tous.

Lisez les deux positions, puis rédigez la vôtre en 10 minutes, en répondant à l'objection la plus forte du camp adverse.`,
          positions: [
            { title: "Oui, un progrès décisif", args: "Sans surplus agricoles, pas de spécialisation, donc pas d'artisans, de savants, d'écriture ni de science. La population mondiale passe de quelques millions à des centaines de millions : beaucoup plus d'êtres humains peuvent exister. Les maux du Néolithique (épidémies, carences) sont transitoires, et c'est la civilisation agricole qui a fini par produire les moyens de les vaincre (médecine, hygiène, agronomie). Juger le Néolithique sur 2 000 ans, c'est oublier les 10 000 suivants." },
            { title: "Non, ou pas pour ceux qui l'ont vécu", args: "Les squelettes montrent une baisse de la taille, plus de caries, de carences et de maladies. Le temps de travail augmente. Le stockage permet l'impôt, la dette, l'esclavage et la guerre de conquête. James C. Scott montre que les premiers États se sont construits sur des céréales taxables et des populations captives, et que beaucoup de gens les ont fuis. Graeber et Wengrow ajoutent que les humains ont longtemps alterné, refusé ou limité l'agriculture : ce n'était pas une évidence." }
          ],
          prompt: "Rédigez votre position en 5 à 8 phrases. Précisez quel critère vous utilisez pour juger un « progrès » (nombre d'humains, bien-être moyen, liberté, connaissance) et répondez à l'argument le plus fort du camp adverse.",
          notions: [
            ["Progrès", "Idée d'une amélioration cumulative de la condition humaine ; elle suppose un critère (bien-être, liberté, puissance, savoir) qu'il faut expliciter."],
            ["Piège malthusien", "Situation où toute hausse de production est absorbée par la hausse de la population, sans amélioration du niveau de vie moyen (d'après Thomas Malthus, 1798)."]
          ],
          questions: [
            ["Pourquoi les deux camps peuvent-ils tous deux avoir raison sur les faits ?", "Ils ne mesurent pas la même chose : l'un regarde la population totale et le long terme, l'autre le bien-être individuel des premiers agriculteurs."]
          ],
          connections: [
            { a: "Jared Diamond", rel: "critique", b: "Révolution néolithique", type: "personne" },
            { a: "James C. Scott", rel: "relie céréales et", b: "Premiers États", type: "personne" },
            { a: "Piège malthusien", rel: "explique aussi", b: "Grande divergence (XIXe s.)", type: "idée" }
          ],
          sources: [
            { t: "The Worst Mistake in the History of the Human Race", a: "Jared Diamond", note: "Discover Magazine, mai 1987. Article court, en ligne." },
            { t: "Au commencement était… Une nouvelle histoire de l'humanité", a: "David Graeber et David Wengrow", note: "Les Liens qui libèrent, 2021. Long ; lire le chapitre sur l'agriculture." }
          ]
        }
      ]
    },
    {
      id: "m1w2",
      title: "L'Égypte pharaonique",
      question: "Comment une civilisation a-t-elle tenu près de 3 000 ans autour d'un fleuve et d'un roi ?",
      sessions: [
        {
          id: "m1s6",
          kind: "cours",
          title: "Le Nil et l'unification de l'Égypte",
          hook: "L'historien grec Hérodote écrivait que l'Égypte est « un don du Nil ». C'est vrai, mais ce don, il a fallu l'organiser.",
          body: `## Un fleuve dans le désert

L'Égypte est une bande de terre fertile, large de quelques kilomètres, de part et d'autre du Nil, au milieu du désert. Chaque été, jusqu'à la construction du haut barrage d'Assouan (1970), la **crue** du Nil, alimentée par les pluies d'Éthiopie, recouvrait la vallée et déposait un limon noir très fertile. Les Égyptiens appelaient leur pays *Kemet*, « la Terre noire », par opposition au désert, la « Terre rouge ».

La crue est **régulière mais variable** : trop faible, c'est la famine ; trop forte, elle détruit digues et villages. Mesurer la crue (avec des **nilomètres**), stocker le grain les bonnes années, répartir les terres après l'inondation : tout cela appelle une administration.

## Deux terres, une couronne

À la fin du IVe millénaire, on distingue la **Haute-Égypte** (la vallée, au sud) et la **Basse-Égypte** (le delta, au nord). Vers 3 100 av. J.-C., un roi du sud unifie le pays. La tradition retient le nom de **Ménès** ; l'archéologie montre la **palette de Narmer** (musée du Caire), qui représente un roi portant tour à tour la couronne blanche du sud et la couronne rouge du nord, frappant un ennemi. L'unification a probablement été progressive, mais l'idéologie retient un acte fondateur.

Désormais, le pharaon est « roi de Haute et de Basse-Égypte », et porte la **double couronne**. L'unité des « Deux Terres » est la mission première du roi ; sa rupture est vécue comme un chaos.

## La chronologie en un coup d'œil

Les égyptologues découpent l'histoire en 30 (puis 31) **dynasties**, d'après le prêtre Manéthon (IIIe s. av. J.-C.), regroupées en grandes périodes :

- **Ancien Empire** (vers 2 700–2 200) : l'âge des pyramides ;
- **Première Période intermédiaire** : division, troubles ;
- **Moyen Empire** (vers 2 050–1 750) : réunification, apogée littéraire ;
- **Deuxième Période intermédiaire** : domination des **Hyksôs**, venus d'Asie, dans le delta ;
- **Nouvel Empire** (vers 1 550–1 070) : empire en Nubie et au Levant ;
- **Basse Époque**, puis conquête perse (525), conquête d'Alexandre (332), Égypte **ptolémaïque** jusqu'à **Cléopâtre VII** et la conquête romaine (30 av. J.-C.).

Le rythme est frappant : de longues phases d'unité, séparées par des périodes de division, puis une restauration qui se veut toujours un retour à l'ordre ancien.

## Une civilisation de la continuité

Écriture hiéroglyphique, style artistique, titulature royale, grands dieux : l'Égypte change bien moins vite que la Mésopotamie. Cette **stabilité** tient à la géographie (un fleuve qui relie tout, des déserts qui protègent), mais aussi à une idéologie qui valorise la conformité au modèle des origines. Cléopâtre est plus proche de nous dans le temps que de la construction de la pyramide de Khéops.

## À retenir

L'Égypte unifie très tôt un territoire long de près de 1 000 km grâce au fleuve qui le traverse. L'unité des Deux Terres, garantie par le pharaon, est le cœur de l'idéologie politique.`,
          notions: [
            ["Kemet", "« La Terre noire » : nom que les Égyptiens donnaient à leur pays, d'après le limon déposé par la crue."],
            ["Crue du Nil", "Inondation annuelle de la vallée (été–automne), qui fertilise les terres ; trop faible ou trop forte, elle provoque des catastrophes."],
            ["Palette de Narmer", "Plaque de schiste (vers 3 100 av. J.-C.) montrant un roi avec les couronnes de Haute et Basse-Égypte : symbole de l'unification."],
            ["Deux Terres", "Haute-Égypte (vallée, sud) et Basse-Égypte (delta, nord), dont l'union définit le royaume."],
            ["Dynastie", "Succession de souverains d'une même lignée ; Manéthon en a compté 30 pour l'Égypte."],
            ["Période intermédiaire", "Phase de division du pouvoir entre deux périodes d'unité (« empires »)."]
          ],
          perspective: "L'hypothèse du « despotisme hydraulique » (Karl Wittfogel, 1957) soutenait que la gestion de l'eau produit des États centralisés et autoritaires. Elle est aujourd'hui jugée trop mécanique : en Égypte, l'irrigation est longtemps gérée localement. Gardez cette prudence face à tout déterminisme géographique, qui revient souvent en géopolitique.",
          connections: [
            { a: "Nil", rel: "conditionne", b: "Unification de l'Égypte", type: "lieu" },
            { a: "Hérodote", rel: "décrit", b: "Égypte ancienne", type: "personne" },
            { a: "Barrage d'Assouan", rel: "met fin à", b: "Crue du Nil", type: "événement" },
            { a: "Déterminisme géographique", rel: "débattu en", b: "Géopolitique", type: "idée" }
          ],
          questions: [
            ["Pourquoi la crue du Nil est-elle à la fois une chance et un risque ?", "Elle fertilise la vallée chaque année, mais son niveau varie : trop basse, famine ; trop haute, destructions. D'où le besoin de mesurer, stocker et répartir."],
            ["Que représente la palette de Narmer ?", "Un roi portant successivement la couronne blanche (Haute-Égypte) et la couronne rouge (Basse-Égypte) : l'idéologie de l'unification des Deux Terres, vers 3 100 av. J.-C."],
            ["Citez dans l'ordre les trois « Empires » de l'Égypte et une caractéristique de chacun.", "Ancien Empire (pyramides), Moyen Empire (réunification, littérature), Nouvel Empire (expansion en Nubie et au Levant)."]
          ],
          sources: [
            { t: "L'Égypte des pharaons. De Narmer à Dioclétien", a: "Damien Agut et Juan Carlos Moreno García", note: "Belin, coll. Mondes anciens, 2016." },
            { t: "Histoire de l'Égypte ancienne", a: "Nicolas Grimal", note: "Fayard, 1988 (Livre de Poche). Classique, plus ancien mais solide." }
          ]
        },
        {
          id: "m1s7",
          kind: "cours",
          title: "Pharaon, Maât et les pyramides",
          hook: "Qui a construit les pyramides ? Pas des esclaves, et pas des extraterrestres : un État capable de mobiliser des milliers de personnes.",
          body: `## Le pharaon, intermédiaire entre les dieux et les hommes

Le mot « pharaon » vient de l'égyptien *per-aâ*, « la grande maison », c'est-à-dire le palais. Le roi est l'incarnation d'**Horus**, le dieu faucon, et le fils de **Rê**, le soleil. Il n'est pas un dieu comme les autres : il est le seul humain qui puisse rendre le culte aux dieux au nom de tous (les prêtres agissent par délégation).

## Maât : l'ordre du monde

La notion centrale est **Maât**, représentée par une déesse portant une plume d'autruche. Maât désigne à la fois la vérité, la justice, l'équilibre cosmique et l'ordre social. Son contraire est *isefet*, le chaos. Le rôle du roi est de « faire Maât » : maintenir l'ordre du cosmos par les rites, l'ordre du pays par la justice et l'administration, ses frontières par la guerre contre les ennemis, qui incarnent le chaos.

L'égyptologue Jan Assmann insiste sur une dimension sociale : Maât signifie aussi la **solidarité** entre les hommes, l'idée qu'on agit pour celui qui agit pour soi, et que le puissant doit protéger le faible.

## L'âge des pyramides

Sous la IIIe dynastie, l'architecte **Imhotep** construit pour le roi **Djéser** la pyramide à degrés de Saqqarah (vers 2 650 av. J.-C.), premier grand monument en pierre taillée. Sous la IVe dynastie, la forme se perfectionne avec **Snéfrou** (pyramides de Dahchour, dont la pyramide rhomboïdale), puis les trois pyramides de Gizeh : **Khéops** (vers 2 560 av. J.-C., environ 146 m de haut à l'origine), **Khéphren** et **Mykérinos**.

La pyramide est un tombeau, mais surtout une **machine de résurrection** : elle doit assurer au roi défunt sa transformation en être divin, qui rejoint les étoiles et le soleil, et par là garantir la continuité de l'ordre du monde.

## Qui les a construites ?

Les fouilles du **village des ouvriers** de Gizeh (Mark Lehner, Zahi Hawass) montrent des boulangeries, des brasseries, des quantités de viande de bœuf, et des tombes d'ouvriers enterrés avec honneur près des pyramides. Les travailleurs sont des équipes organisées, nourries par l'État : un noyau de spécialistes permanents et des paysans mobilisés par rotation, dans le cadre de la **corvée**. Ce n'est pas de l'esclavage au sens d'une propriété de personnes ; mais ce n'est pas non plus un travail libre : on ne refuse pas la corvée.

En 2013, l'égyptologue français **Pierre Tallet** a découvert au Ouadi el-Jarf, sur la mer Rouge, les plus anciens papyrus inscrits connus : le **journal de Merer**, un inspecteur qui raconte comment son équipe transportait par bateau des blocs de calcaire de Toura jusqu'à Gizeh, sous Khéops. Un document de première main sur le chantier.

## Après les pyramides

À la fin de l'Ancien Empire, les pyramides deviennent plus petites, le pouvoir central s'affaiblit, les gouverneurs de province (**nomarques**) gagnent en autonomie. Une série de crues faibles, liée à un changement climatique vers 2 200 av. J.-C., a pu aggraver la crise. Au Nouvel Empire, les rois se feront enterrer dans des tombes cachées de la **Vallée des Rois**.

## À retenir

Le pharaon tient sa légitimité de Maât : il maintient l'ordre contre le chaos. Les pyramides sont l'expression la plus spectaculaire de cette idéologie et de la capacité de l'État à mobiliser le travail.`,
          notions: [
            ["Pharaon", "Du égyptien per-aâ, « la grande maison » ; le roi d'Égypte, incarnation d'Horus et fils de Rê."],
            ["Maât", "Principe d'ordre, de vérité et de justice cosmique et sociale, que le roi doit maintenir contre le chaos (isefet)."],
            ["Corvée", "Travail obligatoire dû à l'État par la population, organisé par rotation."],
            ["Imhotep", "Architecte et vizir du roi Djéser, constructeur de la pyramide à degrés de Saqqarah (vers 2 650 av. J.-C.)."],
            ["Journal de Merer", "Plus anciens papyrus inscrits connus (règne de Khéops), décrivant le transport de blocs pour la Grande Pyramide ; découverts en 2013."],
            ["Nomarque", "Gouverneur d'une province (nome) en Égypte ancienne."]
          ],
          perspective: "Maât rappelle d'autres notions d'ordre juste : le *dharma* indien (semaine 3), le Mandat du Ciel chinois (semaine 3), la *dikè* grecque (mois 2). Toutes lient le pouvoir à un ordre qui le dépasse et qui, en principe, le juge. Relevez à chaque fois : qui peut dire que le souverain a failli ?",
          connections: [
            { a: "Maât", rel: "comparable à", b: "Mandat du Ciel", type: "idée" },
            { a: "Maât", rel: "comparable à", b: "Dharma", type: "idée" },
            { a: "Pyramide de Khéops", rel: "documentée par", b: "Journal de Merer", type: "œuvre" },
            { a: "Pyramides", rel: "étudiées par", b: "Archéologie expérimentale", type: "discipline" }
          ],
          questions: [
            ["Que signifie « faire Maât » pour le pharaon ?", "Maintenir l'ordre du monde contre le chaos : par les rites (cosmos), la justice et l'administration (société), la guerre (frontières)."],
            ["Quelles preuves montrent que les pyramides n'ont pas été bâties par des esclaves ?", "Le village des ouvriers de Gizeh (nourriture abondante, organisation en équipes, tombes honorables) et le journal de Merer : des travailleurs organisés par l'État, en partie mobilisés par corvée."],
            ["Pourquoi la pyramide est-elle plus qu'un tombeau ?", "C'est un dispositif de résurrection qui assure la divinisation du roi et, par là, la continuité de l'ordre cosmique."]
          ],
          sources: [
            { t: "Maât, l'Égypte pharaonique et l'idée de justice sociale", a: "Jan Assmann", note: "Julliard, 1989 (rééd. Michalon). Court et stimulant." },
            { t: "The Red Sea Scrolls", a: "Pierre Tallet et Mark Lehner", note: "Thames & Hudson, 2021. Le récit de la découverte du journal de Merer." }
          ]
        },
        {
          id: "m1s8",
          kind: "cours",
          title: "La mort, les dieux et l'au-delà en Égypte",
          hook: "Pour entrer dans l'éternité, le cœur du défunt devait peser aussi léger qu'une plume. Que dit cette image d'une civilisation ?",
          body: `## Une civilisation obsédée par la mort ?

Ce que nous connaissons de l'Égypte vient surtout des **tombes** : elles étaient bâties en pierre, dans le désert sec, alors que les maisons, en brique crue, dans la vallée humide, ont disparu. Notre image d'une civilisation tournée vers la mort est donc en partie un **biais de conservation**. Les Égyptiens aimaient la vie ; c'est justement pour la prolonger qu'ils préparaient l'au-delà.

## Les composantes de la personne

Pour les Égyptiens, l'être humain est composé de plusieurs éléments :

- le **corps** (*khet*), qu'il faut préserver : d'où la momification ;
- le **ka**, force vitale, qui a besoin d'offrandes de nourriture ;
- le **ba**, souvent représenté comme un oiseau à tête humaine, qui peut circuler entre la tombe et le monde ;
- le **nom** (*ren*) : l'effacer, c'est détruire la personne.

La **momification** (environ 70 jours selon Hérodote) consiste à retirer les organes, les conserver dans des vases canopes, dessécher le corps au natron, puis l'envelopper de bandelettes et d'amulettes.

## Osiris et le jugement

Le mythe central est celui d'**Osiris**, roi tué et démembré par son frère **Seth**, reconstitué par son épouse **Isis**, et devenu souverain du monde des morts. Leur fils **Horus** venge son père et règne sur les vivants. Ce mythe fonde la royauté (le roi vivant est Horus, le roi mort devient Osiris) et offre un modèle de résurrection.

À partir du Moyen Empire, et surtout au Nouvel Empire, l'espoir de survie s'étend au-delà du roi à toute personne qui peut s'offrir les rites. C'est ce qu'on a appelé, avec prudence, une « **démocratisation** » de l'au-delà. Le **Livre des morts** (en égyptien, « Formules pour sortir au jour ») est un recueil de formules écrites sur papyrus et placées dans la tombe.

La scène la plus célèbre est la **pesée du cœur** : devant Osiris, le cœur du défunt est posé sur une balance face à la plume de Maât. Le défunt récite une « confession négative » (« Je n'ai pas volé, je n'ai pas tué, je n'ai pas affamé… »). Si le cœur est trop lourd, il est dévoré par **Ammit**, monstre mi-crocodile, mi-lion, mi-hippopotame. L'idée est forte : la survie dépend d'une **conduite morale** jugée.

## Akhenaton : une révolution religieuse

Vers 1 350 av. J.-C., le pharaon **Amenhotep IV** prend le nom d'**Akhenaton** et impose le culte d'un seul dieu, l'**Aton**, le disque solaire. Il ferme des temples d'Amon, fonde une nouvelle capitale (Akhetaton, l'actuelle Amarna), et l'art devient plus naturaliste. Son épouse **Néfertiti** joue un rôle de premier plan. Après sa mort, tout est effacé : son successeur Toutânkhaton devient **Toutânkhamon** et restaure les anciens cultes. Les historiens débattent encore : premier monothéisme, ou culte royal exclusif au service du pharaon ?

## À retenir

La religion égyptienne lie survie après la mort, ordre cosmique et morale. Le jugement d'Osiris introduit l'idée que chacun répond de ses actes. L'épisode d'Akhenaton montre qu'une tentative de religion d'un seul dieu a existé, et a échoué.`,
          notions: [
            ["Ka et ba", "Composantes de la personne : force vitale nourrie par les offrandes (ka) ; principe mobile entre tombe et monde (ba)."],
            ["Osiris", "Dieu assassiné par Seth et ramené à la vie par Isis ; souverain et juge du monde des morts."],
            ["Livre des morts", "Recueil de formules funéraires (« pour sortir au jour ») placé dans les tombes, surtout au Nouvel Empire."],
            ["Pesée du cœur", "Jugement du défunt : son cœur est pesé contre la plume de Maât devant Osiris."],
            ["Akhenaton", "Pharaon (vers 1 353–1 336 av. J.-C.) qui impose le culte exclusif de l'Aton, le disque solaire."],
            ["Biais de conservation", "Distorsion de notre connaissance du passé causée par ce qui a survécu (ici, les tombes en pierre plutôt que les maisons en brique)."]
          ],
          perspective: "Le jugement individuel des morts sur des critères moraux réapparaît dans le zoroastrisme, le judaïsme tardif, le christianisme et l'islam (mois 4). Et la question d'Akhenaton (qu'est-ce qui fait un monothéisme ?) prépare la séance sur les Hébreux (semaine 4). Le biais de conservation, lui, concerne toute l'histoire : demandez-vous toujours ce qui a disparu.",
          connections: [
            { a: "Akhenaton", rel: "précurseur discuté de", b: "Monothéisme hébraïque", type: "personne" },
            { a: "Pesée du cœur", rel: "annonce", b: "Jugement dernier", type: "idée" },
            { a: "Toutânkhamon", rel: "restaure le culte d'", b: "Amon", type: "personne" },
            { a: "Biais de conservation", rel: "concept clé en", b: "Épistémologie de l'histoire", type: "discipline" }
          ],
          questions: [
            ["Pourquoi notre image de l'Égypte est-elle trop funéraire ?", "Parce que les tombes, en pierre et dans le désert sec, ont survécu, alors que les maisons en brique crue de la vallée ont disparu : biais de conservation."],
            ["Décrivez la pesée du cœur et ce qu'elle implique.", "Le cœur du défunt est pesé contre la plume de Maât devant Osiris ; trop lourd, il est dévoré par Ammit. La survie dépend d'une conduite morale jugée."],
            ["Qu'a fait Akhenaton et qu'est-il advenu de sa réforme ?", "Il a imposé le culte exclusif de l'Aton, fondé Amarna ; après sa mort, ses successeurs (dont Toutânkhamon) ont restauré les anciens cultes et effacé sa mémoire."]
          ],
          sources: [
            { t: "Mort et au-delà dans l'Égypte ancienne", a: "Jan Assmann", note: "Éditions du Rocher, 2003. Approfondissement." },
            { t: "Papyrus de Hounefer (scène de la pesée du cœur)", a: "British Museum, EA 9901", url: "https://www.britishmuseum.org/collection", note: "Image de référence, à regarder en détail." }
          ]
        },
        {
          id: "m1s9",
          kind: "cours",
          title: "Le Nouvel Empire et le premier monde international",
          hook: "Au XIVe siècle av. J.-C., des rois s'écrivent d'Égypte à Babylone en s'appelant « mon frère ». Bienvenue dans la première diplomatie mondiale.",
          body: `## Une Égypte conquérante

Après l'expulsion des **Hyksôs** (vers 1 550 av. J.-C.), les rois de la XVIIIe dynastie, basés à **Thèbes**, mènent une politique d'expansion inédite : au sud en **Nubie** (riche en or), au nord-est jusqu'en Syrie. **Thoutmôsis III** remporte la bataille de **Megiddo** (vers 1 457 av. J.-C.), la première bataille dont on possède un récit détaillé.

Entre-temps, **Hatchepsout** (vers 1 479–1 458) gouverne en tant que pharaon, avec titres et représentations masculines, et organise une expédition vers le pays de **Pount** (probablement la Corne de l'Afrique). Après sa mort, son nom est en partie martelé, sans doute pour des raisons de légitimité dynastique plutôt que par haine personnelle.

## Le club des grandes puissances

Au XIVe siècle, plusieurs grands royaumes se partagent le Proche-Orient : l'**Égypte**, le **Hatti** (les Hittites, en Anatolie), le **Mitanni** (Syrie du Nord), puis l'**Assyrie**, la **Babylonie** (dynastie kassite), et à la périphérie le monde **mycénien** en Grèce.

Les **lettres d'Amarna**, environ 380 tablettes retrouvées dans la capitale d'Akhenaton, montrent comment ils communiquent : en **akkadien**, la langue diplomatique de l'époque, écrite en cunéiforme, même entre l'Égypte et le Hatti. Les rois égaux s'appellent « frère », échangent des cadeaux (or égyptien contre chevaux, lapis-lazuli, bois), négocient des mariages et se plaignent quand le cadeau est jugé insuffisant. Les petits rois du Levant, vassaux de l'Égypte, écrivent pour demander de l'aide contre leurs voisins.

## Qadesh et le premier traité de paix connu

En **1274 av. J.-C.**, **Ramsès II** affronte le roi hittite **Muwatalli II** à **Qadesh**, en Syrie. Ramsès la présente sur les murs de ses temples comme une victoire personnelle éclatante ; les sources hittites et l'absence de gains territoriaux suggèrent un résultat indécis. C'est un cas d'école de **propagande**.

Vers 1259, Ramsès II et le roi hittite **Hattusili III** concluent un **traité** dont on possède les deux versions, égyptienne (hiéroglyphes) et hittite (akkadien) : non-agression, alliance défensive, extradition des fugitifs. Une copie de la version hittite est exposée au siège de l'ONU à New York.

## L'effondrement de l'âge du bronze

Vers **1200–1150 av. J.-C.**, ce système s'écroule : le royaume hittite disparaît, les palais mycéniens sont détruits, la ville d'**Ougarit** est anéantie. L'Égypte de **Ramsès III** repousse de justesse des envahisseurs que les textes appellent les **Peuples de la mer**. Les causes sont multiples et liées : sécheresses, séismes, famines, migrations, révoltes internes, rupture des échanges d'étain indispensable au bronze. L'historien Eric Cline parle d'un effondrement **systémique** : des économies très interconnectées tombent ensemble.

## À retenir

Le Nouvel Empire fait de l'Égypte une puissance impériale dans un système international de grands royaumes, avec diplomatie, traités et propagande. Ce monde interdépendant s'effondre vers 1200 av. J.-C.`,
          notions: [
            ["Lettres d'Amarna", "Correspondance diplomatique (XIVe s. av. J.-C.) entre l'Égypte et les puissances du Proche-Orient, en akkadien cunéiforme."],
            ["Hatchepsout", "Femme pharaon (vers 1 479–1 458 av. J.-C.), qui règne avec les attributs royaux masculins."],
            ["Bataille de Qadesh", "Affrontement entre Ramsès II et les Hittites (1274 av. J.-C.), au résultat indécis présenté comme une victoire par Ramsès."],
            ["Traité égypto-hittite", "Traité de paix et d'alliance (vers 1259 av. J.-C.) entre Ramsès II et Hattusili III, connu dans les deux versions."],
            ["Peuples de la mer", "Groupes d'envahisseurs et migrants mentionnés par les sources égyptiennes vers 1200–1175 av. J.-C."],
            ["Effondrement de l'âge du bronze", "Chute simultanée de plusieurs grands royaumes de Méditerranée orientale vers 1200–1150 av. J.-C."]
          ],
          perspective: "Le « club des grandes puissances » du XIVe siècle av. J.-C. ressemble au concert européen de 1815 (mois 7) et au système international actuel (mois 12) : quelques puissances égales, des vassaux, des cadeaux, des traités, de la propagande. Et l'effondrement systémique de 1200 pose une question très contemporaine : l'interdépendance rend-elle plus fort ou plus fragile ?",
          connections: [
            { a: "Lettres d'Amarna", rel: "première trace d'un", b: "Système international", type: "œuvre" },
            { a: "Traité égypto-hittite", rel: "copie exposée à", b: "Siège de l'ONU", type: "œuvre" },
            { a: "Effondrement de l'âge du bronze", rel: "comparé à", b: "Chute de l'Empire romain d'Occident", type: "événement" },
            { a: "Bataille de Qadesh", rel: "exemple de", b: "Propagande", type: "événement" }
          ],
          questions: [
            ["Quelle langue utilisent les rois dans les lettres d'Amarna et pourquoi est-ce remarquable ?", "L'akkadien en cunéiforme, langue diplomatique commune, même entre l'Égypte et les Hittites qui ne la parlent pas : une langue internationale, comme plus tard le français ou l'anglais."],
            ["Pourquoi Qadesh est-elle un cas d'école de propagande ?", "Ramsès II la célèbre comme une grande victoire, alors que les sources hittites et l'absence de gains territoriaux indiquent un résultat indécis."],
            ["Quelles causes combinées expliquent l'effondrement vers 1200 av. J.-C. ?", "Sécheresses, séismes, famines, migrations (Peuples de la mer), révoltes, rupture des échanges (étain) : un effondrement systémique d'économies interconnectées."]
          ],
          sources: [
            { t: "1177 avant J.-C. Le jour où la civilisation s'est effondrée", a: "Eric H. Cline", note: "La Découverte, 2015. Très lisible." },
            { t: "Les Lettres d'El-Amarna", a: "William L. Moran (éd.)", note: "Cerf, 1987. Pour lire quelques lettres en traduction." }
          ]
        },
        {
          id: "m1s10",
          kind: "debat",
          title: "Débat : pourquoi les civilisations s'effondrent-elles ?",
          hook: "Akkad, l'Ancien Empire égyptien, le monde de 1200 av. J.-C. : des sociétés puissantes s'écroulent. Est-ce le climat, les élites, ou la complexité elle-même ?",
          body: `## La question

Depuis Ibn Khaldoun (XIVe siècle) et Gibbon (XVIIIe), on cherche des lois de l'effondrement. Le sujet est revenu au premier plan avec les inquiétudes climatiques. Trois grandes familles d'explication s'opposent ou se combinent.

1. **Les chocs externes** : climat, sécheresses, épidémies, invasions.
2. **Les choix internes** : élites qui épuisent les ressources, refusent de s'adapter, se divisent.
3. **La complexité elle-même** : selon Joseph Tainter, les sociétés résolvent leurs problèmes en ajoutant de la complexité (administration, armée, infrastructures). Au-delà d'un certain point, chaque ajout rapporte moins qu'il ne coûte, et la société devient vulnérable au moindre choc.

Un autre courant (Guy Middleton, et les archéologues critiques de Jared Diamond) conteste la notion même d'effondrement : souvent, ce qui s'effondre, c'est l'État et l'élite, tandis que les populations s'adaptent, se déplacent et continuent à vivre. Vu d'en bas, ce n'est pas toujours une catastrophe.`,
          positions: [
            { title: "Les effondrements sont surtout provoqués par des chocs extérieurs", args: "Les carottes de sédiments et les données paléoclimatiques montrent des sécheresses majeures vers 2 200 av. J.-C. (fin d'Akkad, crise de l'Ancien Empire) et vers 1200 av. J.-C. Aucune organisation ne résiste à des décennies de mauvaises récoltes. Les sociétés anciennes n'avaient pas les moyens techniques de compenser." },
            { title: "Les effondrements sont surtout des échecs internes", args: "Les mêmes chocs climatiques n'ont pas fait tomber toutes les sociétés : certaines se sont adaptées. Ce qui fait la différence, ce sont les institutions, la cohésion des élites, la capacité à changer de pratiques. Tainter montre que la complexité devient un fardeau ; Diamond insiste sur les décisions des sociétés. Le climat révèle des fragilités, il ne les crée pas." }
          ],
          prompt: "Choisissez un des cas vus cette semaine (fin de l'Ancien Empire ou effondrement de 1200 av. J.-C.) et expliquez quelle combinaison de causes vous semble la plus convaincante. Puis : l'idée d'« effondrement » vous semble-t-elle juste, ou trop vue d'en haut ?",
          notions: [
            ["Rendements décroissants de la complexité", "Thèse de Joseph Tainter (1988) : au-delà d'un seuil, chaque investissement supplémentaire en complexité rapporte moins qu'il ne coûte."],
            ["Résilience", "Capacité d'une société à absorber un choc et à se réorganiser sans perdre ses fonctions essentielles."]
          ],
          questions: [
            ["Quelles sont les trois grandes familles d'explication des effondrements ?", "Chocs externes (climat, épidémies, invasions), choix internes (élites, institutions), et coût croissant de la complexité (Tainter)."]
          ],
          connections: [
            { a: "Joseph Tainter", rel: "théorise", b: "Effondrement des sociétés complexes", type: "personne" },
            { a: "Ibn Khaldoun", rel: "pense le cycle des", b: "Dynasties", type: "personne" },
            { a: "Effondrement des sociétés complexes", rel: "étudié par", b: "Paléoclimatologie", type: "discipline" }
          ],
          sources: [
            { t: "Effondrement. Comment les sociétés décident de leur disparition ou de leur survie", a: "Jared Diamond", note: "Gallimard, 2006." },
            { t: "The Collapse of Complex Societies", a: "Joseph Tainter", note: "Cambridge University Press, 1988. Chapitres 1 et 4." },
            { t: "Understanding Collapse", a: "Guy D. Middleton", note: "Cambridge University Press, 2017. Point de vue critique." }
          ]
        }
      ]
    },
    {
      id: "m1w3",
      title: "Les mondes de l'Indus, de la Chine et de l'Inde",
      question: "Les civilisations d'Asie suivent-elles le même chemin que la Mésopotamie et l'Égypte ?",
      sessions: [
        {
          id: "m1s11",
          kind: "cours",
          title: "La civilisation de l'Indus : une énigme urbaine",
          hook: "Des villes planifiées, des égouts, des poids standardisés… et aucun palais clairement identifié. Qui gouvernait la civilisation de l'Indus ?",
          body: `## Redécouverte

Dans les années 1920, des archéologues britanniques et indiens (John Marshall, R. D. Banerji) révèlent une civilisation inconnue dans la vallée de l'**Indus** (actuels Pakistan et nord-ouest de l'Inde). Ses deux sites les plus célèbres sont **Harappa** et **Mohenjo-daro**. On parle de civilisation de l'Indus ou **harappéenne**. Sa phase urbaine mûre se situe vers **2 600–1 900 av. J.-C.** Elle couvre un territoire immense, de l'ordre de 800 000 km², plus vaste que l'Égypte et la Mésopotamie réunies.

## Des villes remarquables

- **Plan orthogonal** : rues se croisant à angle droit, quartiers organisés.
- **Hygiène** : réseaux d'évacuation des eaux couverts, salles de bain dans de nombreuses maisons, puits.
- **Briques standardisées** : mêmes proportions (1:2:4) sur des centaines de kilomètres.
- **Poids** en pierre suivant un système régulier, signe d'un commerce contrôlé.
- À Mohenjo-daro, le **Grand Bain**, bassin étanche, probablement à usage rituel.

Le commerce s'étend loin : des textes mésopotamiens parlent d'un pays nommé **Meluhha**, qui fournit des perles de cornaline et du bois, et que la plupart des chercheurs identifient à l'Indus. Des sceaux harappéens ont été retrouvés en Mésopotamie.

## Une écriture non déchiffrée

Des milliers de **sceaux** en stéatite portent de courtes inscriptions (en moyenne cinq signes) et des animaux (souvent un animal ressemblant à une licorne). Faute de texte long et de document bilingue, l'écriture reste **non déchiffrée**. On ne sait même pas avec certitude quelle langue elle notait, ni si elle notait pleinement une langue. Nous ignorons donc les noms des rois éventuels, des dieux et des villes.

## Un pouvoir discret

Contrairement à l'Égypte ou à la Mésopotamie, on ne trouve pas de **palais** évident, pas de tombes royales somptueuses, peu de représentations de guerre ou de souverains. Plusieurs hypothèses s'affrontent : une élite marchande ou religieuse plutôt que militaire ; des cités-États coordonnées ; ou simplement un pouvoir qui ne s'exprimait pas par la monumentalité. La civilisation de l'Indus montre en tout cas qu'une société urbaine complexe ne prend pas forcément la forme d'une monarchie spectaculaire.

## Le déclin

Vers **1 900 av. J.-C.**, les grandes villes se dépeuplent progressivement. Les causes probables : un affaiblissement de la mousson, le déplacement ou l'assèchement de cours d'eau (le système Ghaggar-Hakra), la baisse du commerce avec la Mésopotamie. Il n'y a pas de destruction violente généralisée. La population se disperse en villages plus à l'est. L'ancienne théorie d'une invasion « aryenne » qui aurait détruit ces villes est abandonnée : l'arrivée de populations de langue indo-aryenne est plus tardive et progressive.

## À retenir

L'Indus est la plus étendue des civilisations de l'âge du bronze, avec un urbanisme remarquable, mais son écriture non déchiffrée et l'absence de palais en font une énigme politique. Son déclin est une dispersion, pas une catastrophe militaire.`,
          notions: [
            ["Civilisation harappéenne", "Civilisation de la vallée de l'Indus, phase urbaine vers 2 600–1 900 av. J.-C. ; sites majeurs : Harappa, Mohenjo-daro."],
            ["Urbanisme orthogonal", "Plan de ville à rues perpendiculaires, signe d'une planification."],
            ["Meluhha", "Nom mésopotamien d'un pays lointain fournisseur de produits de luxe, généralement identifié à l'Indus."],
            ["Sceaux harappéens", "Petits sceaux en stéatite portant animaux et courtes inscriptions non déchiffrées."],
            ["Grand Bain", "Bassin étanche de Mohenjo-daro, probablement rituel."]
          ],
          perspective: "L'Indus oblige à réviser une idée reçue sur la « civilisation » : on l'associe à des rois, des temples et des guerres, parce que ce sont eux qui écrivent l'histoire. Une société peut être urbaine, prospère et organisée sans laisser ce type de traces. Graeber et Wengrow (débat de la semaine 1) utilisent précisément cet exemple.",
          connections: [
            { a: "Civilisation de l'Indus", rel: "commerce avec", b: "Mésopotamie", type: "lieu" },
            { a: "Écriture de l'Indus", rel: "défi pour", b: "Linguistique et déchiffrement", type: "discipline" },
            { a: "Civilisation de l'Indus", rel: "contre-exemple pour", b: "État", type: "lieu" }
          ],
          questions: [
            ["Citez trois traits de l'urbanisme harappéen.", "Plan orthogonal, réseaux d'évacuation des eaux couverts, briques standardisées (1:2:4), puits et salles de bain, Grand Bain."],
            ["Pourquoi l'écriture de l'Indus n'est-elle pas déchiffrée ?", "Les inscriptions sont très courtes, il n'existe aucun bilingue, et on ignore la langue notée."],
            ["Quelle explication du déclin est aujourd'hui privilégiée ?", "Une dispersion progressive liée au climat (mousson plus faible), aux changements de cours d'eau et au recul du commerce ; pas une invasion violente."]
          ],
          sources: [
            { t: "The Ancient Indus Valley. New Perspectives", a: "Jane McIntosh", note: "ABC-Clio, 2008. Synthèse de référence, en anglais." },
            { t: "Mohenjo-daro", a: "Centre du patrimoine mondial de l'UNESCO", url: "https://whc.unesco.org/fr/list/138", note: "Présentation et photographies du site." }
          ]
        },
        {
          id: "m1s12",
          kind: "cours",
          title: "Chine ancienne : Shang, Zhou et le Mandat du Ciel",
          hook: "Un roi chinois pose une question à ses ancêtres, chauffe un os jusqu'à ce qu'il se fende, et lit la réponse dans la fissure. Ainsi commence l'écriture chinoise.",
          body: `## La dynastie Shang (vers 1 600–1 046 av. J.-C.)

La tradition chinoise parle de trois dynasties fondatrices : Xia, Shang, Zhou. La Xia reste discutée (le site d'**Erlitou** lui est souvent associé). Les **Shang**, en revanche, sont bien attestés grâce aux fouilles de leur dernière capitale, **Anyang**, dans la vallée du fleuve Jaune.

Les Shang ont laissé deux grands types de traces :

- des **bronzes rituels** d'une technique et d'une beauté exceptionnelles (vases pour les offrandes de nourriture et d'alcool aux ancêtres), coulés dans des moules en plusieurs parties ;
- des **os oraculaires** : omoplates de bovins et carapaces de tortues que l'on chauffait pour obtenir des fissures, interprétées comme des réponses des ancêtres ou des puissances. Les questions et parfois les réponses étaient gravées sur l'os : récoltes, guerres, chasses, naissances, maladies du roi.

Ces inscriptions (vers 1 250 av. J.-C.) sont la plus ancienne forme connue de l'**écriture chinoise**, ancêtre direct des caractères utilisés aujourd'hui. C'est la plus longue continuité d'écriture au monde.

Le pouvoir des Shang repose sur le **culte des ancêtres** royaux, la guerre et des sacrifices, y compris humains : les tombes royales d'Anyang contiennent des victimes sacrificielles.

## Les Zhou et le Mandat du Ciel

Vers **1 046 av. J.-C.**, les **Zhou**, venus de l'ouest, renversent les Shang. Pour justifier ce renversement, ils formulent une idée appelée à durer trois mille ans : le **Mandat du Ciel** (*tianming*). Le Ciel (*tian*) confie le pouvoir à une dynastie vertueuse ; si elle devient tyrannique et néglige le peuple, le Ciel lui retire son mandat et le confie à une autre. Les catastrophes naturelles et les révoltes peuvent être interprétées comme des signes de ce retrait.

Cette idée a une double face : elle **légitime** toute dynastie au pouvoir (elle a le mandat, sinon elle ne serait pas là), mais elle **justifie aussi la révolte** contre un souverain injuste. Chaque changement de dynastie en Chine, jusqu'au XXe siècle, sera pensé dans ces termes.

## Un royaume en réseau

Les premiers Zhou (**Zhou occidentaux**) gouvernent par un système de fiefs confiés à des parents et alliés, liés au roi par des rites et des liens de parenté. On parle parfois de « féodalité » chinoise, mais la comparaison avec l'Europe médiévale est trompeuse. En 771 av. J.-C., la capitale est prise ; les **Zhou orientaux** s'installent à Luoyang, mais leur autorité devient largement symbolique. Les seigneurs deviennent des États indépendants qui se font la guerre : c'est la période des **Printemps et Automnes** (770–481), puis des **Royaumes combattants** (481–221), sujet de la séance suivante.

## À retenir

Avec les Shang naît l'écriture chinoise, sur des os de divination. Avec les Zhou naît le Mandat du Ciel, une théorie de la légitimité conditionnelle du pouvoir qui structure toute l'histoire politique chinoise.`,
          notions: [
            ["Os oraculaires", "Os et carapaces chauffés pour la divination sous les Shang, portant les plus anciennes inscriptions chinoises (vers 1 250 av. J.-C.)."],
            ["Shang", "Dynastie chinoise (vers 1 600–1 046 av. J.-C.), capitale finale à Anyang ; bronzes rituels et culte des ancêtres."],
            ["Mandat du Ciel (tianming)", "Doctrine des Zhou : le Ciel confie le pouvoir à une dynastie vertueuse et le lui retire si elle devient injuste."],
            ["Culte des ancêtres", "Rites d'offrandes aux ancêtres défunts, considérés comme capables d'influencer le monde des vivants."],
            ["Zhou occidentaux / orientaux", "Les Zhou gouvernent depuis l'ouest (1046–771), puis depuis Luoyang avec une autorité devenue symbolique (771–256)."]
          ],
          perspective: "Comparez le Mandat du Ciel à Maât (semaine 2) et au droit de résistance à l'oppression de 1789 (mois 7). Dans les trois cas, le pouvoir est soumis à un critère supérieur. Mais qui juge ? En Chine, ce sont l'histoire et le succès : la dynastie qui gagne prouve qu'elle a le mandat. Est-ce une limite au pouvoir, ou une justification de la force après coup ?",
          connections: [
            { a: "Mandat du Ciel", rel: "comparable à", b: "Droit de résistance à l'oppression", type: "idée" },
            { a: "Os oraculaires", rel: "origine de", b: "Écriture chinoise", type: "œuvre" },
            { a: "Bronzes Shang", rel: "étudiés par", b: "Métallurgie et histoire des techniques", type: "discipline" }
          ],
          questions: [
            ["À quoi servaient les os oraculaires ?", "À interroger les ancêtres ou les puissances : on chauffait l'os, on lisait la fissure, et on gravait la question (et parfois la réponse). Ce sont les plus anciennes inscriptions chinoises."],
            ["Expliquez le Mandat du Ciel et sa double face.", "Le Ciel confie le pouvoir à une dynastie vertueuse et le retire si elle devient injuste. Il légitime le pouvoir en place mais justifie aussi la révolte contre un tyran."],
            ["Que se passe-t-il en 771 av. J.-C. ?", "La capitale des Zhou est prise ; les Zhou se replient à l'est (Luoyang), leur autorité devient symbolique et les seigneurs deviennent des États rivaux."]
          ],
          sources: [
            { t: "Histoire de la pensée chinoise", a: "Anne Cheng", note: "Seuil, 1997 (Points). Chapitres 1 et 2." },
            { t: "La Chine ancienne. Des origines à l'Empire", a: "Jacques Gernet", note: "PUF, Que sais-je ?, rééd. Court." }
          ]
        },
        {
          id: "m1s13",
          kind: "cours",
          title: "Confucius, Laozi et l'unification de la Chine",
          hook: "Dans une Chine déchirée par la guerre, des penseurs se demandent comment bien gouverner. Leurs réponses opposées façonnent encore l'Asie orientale.",
          body: `## Le contexte : un monde en guerre

Pendant les **Printemps et Automnes** puis les **Royaumes combattants**, des États rivaux (Qi, Chu, Jin, puis Qin, Zhao, Wei…) se livrent des guerres de plus en plus massives. Les princes ont besoin de conseillers. Des lettrés itinérants proposent leurs doctrines : c'est l'époque des « **Cent écoles** ».

## Confucius (vers 551–479 av. J.-C.)

Kong Qiu, dit **Kongzi** (« Maître Kong »), latinisé en Confucius, est un lettré de l'État de **Lu**, qui n'a jamais obtenu de poste important. Ses propos ont été rassemblés par ses disciples dans les **Entretiens** (*Lunyu*).

Ses idées principales :

- **Ren** (仁) : l'humanité, la bienveillance, le fait de traiter autrui comme un être humain. « Ce que tu ne veux pas qu'on te fasse, ne le fais pas aux autres. »
- **Li** (礼) : les rites et les convenances, qui règlent les relations sociales. Les rites ne sont pas de simples formalités : ils éduquent et civilisent.
- La **piété filiale** (*xiao*) et les relations hiérarchisées (souverain–sujet, père–fils, aîné–cadet…), fondées sur des devoirs réciproques.
- Le gouvernement par l'**exemple moral** plutôt que par les châtiments : « Si tu gouvernes par la vertu, tu seras comme l'étoile polaire, qui reste à sa place tandis que les autres astres tournent autour d'elle. »
- L'**éducation** : le *junzi* (« homme de bien ») se définit par sa vertu et son étude, pas par sa naissance.

Le disciple le plus influent de la tradition est **Mencius** (Mengzi, IVe siècle), pour qui la nature humaine est bonne et qui radicalise le Mandat du Ciel : on peut renverser un tyran.

## Laozi et le daoïsme

Le *Daodejing* (« Livre de la Voie et de la Vertu »), attribué à **Laozi** (personnage semi-légendaire), et le **Zhuangzi** proposent une autre voie. Le **Dao**, la Voie, est l'ordre spontané du monde, qu'on ne peut nommer ni maîtriser. La sagesse consiste à le suivre par le **wuwei**, le « non-agir », c'est-à-dire l'action sans forcer. Le daoïsme critique les rites, l'ambition et la volonté de tout contrôler : « Gouverner un grand pays, c'est comme faire frire un petit poisson » (il ne faut pas trop le remuer).

## Les légistes et le triomphe de Qin

Les **légistes** (Shang Yang, Han Feizi) récusent la morale confucéenne : les hommes suivent leur intérêt, il faut donc des **lois claires**, des récompenses et des châtiments sévères, appliqués à tous. L'État de **Qin**, réformé par Shang Yang au IVe siècle, devient une machine agricole et militaire redoutable.

En **221 av. J.-C.**, le roi de Qin achève la conquête des autres royaumes et prend le titre de **Qin Shi Huangdi**, « Premier Auguste Empereur ». Il unifie l'écriture, les poids et mesures, la monnaie, l'écartement des essieux ; il divise l'empire en commanderies dirigées par des fonctionnaires ; il fait relier des murailles au nord. Selon la tradition, il fait brûler des livres et persécuter des lettrés. Son tombeau est gardé par l'**armée de terre cuite** (découverte en 1974). La dynastie Qin s'effondre dès 206 av. J.-C., mais la dynastie **Han** qui lui succède conserve l'empire unifié et fait du confucianisme la doctrine officielle.

## À retenir

Face à la guerre, trois réponses : gouverner par la vertu et les rites (Confucius), par le non-agir (Laozi), par la loi et la force (légistes). La Chine impériale combinera durablement une administration légiste et une idéologie confucéenne.`,
          notions: [
            ["Confucius (Kongzi)", "Lettré de Lu (vers 551–479 av. J.-C.) ; ses Entretiens prônent la vertu, les rites et l'éducation."],
            ["Ren", "Vertu confucéenne d'humanité, de bienveillance envers autrui."],
            ["Li", "Rites et convenances qui règlent et civilisent les relations sociales."],
            ["Dao et wuwei", "Dans le daoïsme : la Voie, ordre spontané du monde, et le non-agir, l'action qui ne force pas."],
            ["Légisme", "Doctrine politique chinoise fondée sur des lois strictes, des récompenses et des châtiments ; appliquée par Qin."],
            ["Qin Shi Huangdi", "Premier empereur de Chine (221–210 av. J.-C.), qui unifie et standardise l'empire."]
          ],
          perspective: "Le débat entre Confucius et les légistes ressemble à celui entre Aristote et Machiavel (mois 5), ou au débat contemporain sur la confiance et la régulation : faut-il compter sur la vertu des dirigeants ou sur des règles qui fonctionnent même avec de mauvais dirigeants ? La Chine actuelle revendique souvent l'héritage confucéen.",
          connections: [
            { a: "Confucius", rel: "contemporain approximatif de", b: "Bouddha", type: "personne" },
            { a: "Légisme", rel: "comparable à", b: "Machiavel", type: "idée" },
            { a: "Qin Shi Huangdi", rel: "fonde", b: "Empire chinois", type: "personne" },
            { a: "Confucianisme", rel: "objet de", b: "Philosophie politique", type: "discipline" }
          ],
          questions: [
            ["Comment Confucius pense-t-il qu'on doit gouverner ?", "Par l'exemple moral et les rites plutôt que par les châtiments ; le dirigeant vertueux entraîne les autres, comme l'étoile polaire."],
            ["Que signifie wuwei ?", "Le « non-agir » daoïste : agir sans forcer, en suivant le cours spontané des choses (le Dao)."],
            ["Quelles mesures d'unification Qin Shi Huangdi prend-il ?", "Unification de l'écriture, des poids et mesures, de la monnaie, des essieux ; commanderies administrées par des fonctionnaires ; murailles au nord."]
          ],
          sources: [
            { t: "Les Entretiens de Confucius", a: "trad. Pierre Ryckmans (Simon Leys)", note: "Gallimard, 1987. Traduction élégante, à lire par petits morceaux." },
            { t: "Tao-tö king (Daodejing)", a: "Laozi, trad. Liou Kia-hway", note: "Gallimard, Folio sagesses. Très court." }
          ]
        },
        {
          id: "m1s14",
          kind: "cours",
          title: "L'Inde ancienne : Védas, Upanishads et Bouddha",
          hook: "Un prince quitte son palais après avoir vu un vieillard, un malade et un mort. Ce récit fonde une religion qui compte aujourd'hui des centaines de millions de fidèles.",
          body: `## L'époque védique (vers 1 500–500 av. J.-C.)

Après le déclin de l'Indus, des populations parlant des langues **indo-aryennes** s'installent progressivement dans le nord de l'Inde, d'abord au Pendjab puis dans la plaine du Gange. Leur langue sacrée est le **sanskrit**, apparenté au grec, au latin et aux langues germaniques (famille **indo-européenne**). Le lien entre ces langues a été démontré à la fin du XVIIIe siècle par William Jones : c'est l'acte de naissance de la linguistique comparée.

Les textes fondamentaux sont les **Védas** (« savoir »), dont le plus ancien est le **Rigveda**, recueil d'hymnes transmis oralement pendant des siècles avant d'être écrit. La religion védique est centrée sur le **sacrifice** du feu, accompli par les **brahmanes** (prêtres), pour entretenir l'ordre du cosmos.

## La société des varna

Un hymne du Rigveda décrit la société comme issue du corps d'un être primordial : les **brahmanes** (prêtres) de sa bouche, les **kshatriya** (guerriers) de ses bras, les **vaishya** (producteurs, marchands) de ses cuisses, les **shudra** (serviteurs) de ses pieds. Ce sont les quatre **varna**. Le système des **jati** (castes au sens de groupes héréditaires endogames, très nombreux) est distinct et s'est développé sur la longue durée. L'idée de groupes hors du système (« intouchables ») est plus tardive. Il faut se méfier d'une image figée : ce système a beaucoup évolué, y compris sous la colonisation britannique.

## Les Upanishads : le tournant intérieur

Entre environ 800 et 300 av. J.-C., les **Upanishads** déplacent l'attention du rite extérieur vers la connaissance intérieure. Idées clés :

- le **samsara**, cycle des renaissances ;
- le **karma**, loi selon laquelle les actes déterminent les renaissances futures ;
- le **moksha**, libération de ce cycle ;
- l'identité entre l'**atman** (le soi profond) et le **brahman** (le principe absolu du monde) : « Tu es cela. »

## Le Bouddha

**Siddhartha Gautama**, appelé le **Bouddha** (« l'Éveillé »), vit probablement au Ve siècle av. J.-C. (les dates sont débattues : vers 480–400 selon de nombreux chercheurs), dans le nord-est de l'Inde. Selon la tradition, ce fils de chef du clan Shakya quitte une vie confortable, pratique l'ascèse extrême, la rejette, puis atteint l'**éveil** sous un arbre à Bodh-Gaya.

Son enseignement tient dans les **quatre nobles vérités** :

1. l'existence est marquée par la souffrance, l'insatisfaction (*dukkha*) ;
2. elle a pour origine la soif, l'attachement (*tanha*) ;
3. elle peut cesser : c'est le **nirvana** (« extinction ») ;
4. le chemin pour y parvenir est l'**octuple sentier** (vue juste, intention juste, parole juste, action juste, moyens d'existence justes, effort juste, attention juste, concentration juste).

Le Bouddha propose une **voie du milieu** entre plaisir et ascèse, rejette l'autorité des Védas et la supériorité de naissance des brahmanes, et enseigne qu'il n'y a pas de soi permanent (*anatman*). À la même époque, **Mahavira** fonde le **jaïnisme**, centré sur la non-violence absolue (*ahimsa*).

## Ashoka

Au IIIe siècle av. J.-C., l'empereur **Ashoka**, de la dynastie **Maurya**, après une conquête sanglante du Kalinga, se convertit au bouddhisme et fait graver des **édits** sur des rochers et des piliers dans tout son empire, prônant la non-violence, la tolérance entre les sectes et le bien-être de ses sujets. Le chapiteau aux lions de Sarnath est aujourd'hui l'emblème de l'Inde.

## À retenir

L'Inde ancienne passe d'une religion du sacrifice (Védas) à une quête de libération intérieure (Upanishads, Bouddha, Mahavira). Karma, renaissance et libération forment le cadre commun de ces traditions, qui se répandront dans toute l'Asie.`,
          notions: [
            ["Védas", "Recueils d'hymnes et de textes rituels en sanskrit, transmis oralement ; le Rigveda est le plus ancien."],
            ["Varna", "Les quatre catégories sociales idéales de la société védique : brahmanes, kshatriya, vaishya, shudra. Distinct des jati (castes héréditaires)."],
            ["Karma et samsara", "Loi des actes qui détermine les renaissances ; cycle des renaissances dont on cherche à se libérer."],
            ["Atman et brahman", "Dans les Upanishads : le soi profond et le principe absolu, ultimement identiques."],
            ["Quatre nobles vérités", "Souffrance, origine de la souffrance (attachement), cessation (nirvana), chemin (octuple sentier)."],
            ["Ashoka", "Empereur maurya (IIIe s. av. J.-C.) converti au bouddhisme, connu par ses édits gravés prônant la non-violence."]
          ],
          perspective: "La découverte de la parenté entre sanskrit, grec et latin a fondé la linguistique, mais le mot « aryen » a ensuite été détourné par le racisme européen du XIXe siècle jusqu'au nazisme (mois 10). C'est un bon exemple d'une notion savante captée par une idéologie. Côté philosophie, la critique bouddhiste du soi permanent sera rapprochée de Hume (mois 7) et des neurosciences contemporaines.",
          connections: [
            { a: "Bouddha", rel: "contemporain approximatif de", b: "Confucius", type: "personne" },
            { a: "Sanskrit", rel: "apparenté au", b: "Grec et latin (indo-européen)", type: "idée" },
            { a: "Anatman (non-soi)", rel: "rapproché de", b: "David Hume", type: "idée" },
            { a: "Ashoka", rel: "diffuse le", b: "Bouddhisme", type: "personne" }
          ],
          questions: [
            ["Quelle différence entre varna et jati ?", "Les varna sont quatre catégories idéales décrites par les textes ; les jati sont de très nombreux groupes héréditaires endogames, développés sur la longue durée."],
            ["Énoncez les quatre nobles vérités.", "L'existence est souffrance ; la souffrance vient de l'attachement ; elle peut cesser (nirvana) ; le chemin est l'octuple sentier."],
            ["Qu'est-ce qui distingue l'enseignement du Bouddha de la religion védique ?", "Il rejette l'autorité des Védas, l'efficacité du sacrifice et la supériorité de naissance des brahmanes ; il propose une voie du milieu et une libération par la pratique et la sagesse."]
          ],
          sources: [
            { t: "L'enseignement du Bouddha d'après les textes les plus anciens", a: "Walpola Rahula", note: "Seuil, 1961 (Points Sagesses). Introduction claire." },
            { t: "L'Inde ancienne", a: "Romila Thapar (Early India, trad.)", note: "Pour une histoire non religieuse de l'Inde ancienne ; en anglais : Early India, Penguin, 2002." }
          ]
        },
        {
          id: "m1s15",
          kind: "debat",
          title: "Débat : l'« âge axial » existe-t-il ?",
          hook: "Entre 800 et 200 av. J.-C., Confucius, Laozi, le Bouddha, les prophètes d'Israël et les philosophes grecs auraient tous transformé la pensée humaine. Coïncidence, ou phénomène réel ?",
          body: `## L'idée

En 1949, le philosophe allemand **Karl Jaspers** propose le concept d'**âge axial** (*Achsenzeit*) : entre environ 800 et 200 av. J.-C., dans plusieurs civilisations sans contact direct, apparaissent les grandes traditions de pensée qui structurent encore l'humanité :

- en **Chine** : Confucius, Laozi, Mencius ;
- en **Inde** : les Upanishads, le Bouddha, Mahavira ;
- en **Iran** : Zarathoustra (date très incertaine) ;
- en **Israël** : les grands prophètes ;
- en **Grèce** : les présocratiques, Socrate, Platon, Aristote.

Selon Jaspers, partout l'homme prend conscience de lui-même, de ses limites, et pose des questions universelles. On passe d'une religion du rite et du mythe à une réflexion critique et éthique. Le concept a été repris par des sociologues (Shmuel Eisenstadt, Robert Bellah) et popularisé par Karen Armstrong.

## Les critiques

Depuis les années 2000, de nombreux historiens le jugent fragile :

- les dates sont **élastiques** : Zarathoustra pourrait être bien antérieur, les textes des prophètes ont été rédigés et remaniés sur des siècles ;
- le schéma reflète une vision **européenne** qui cherche des équivalents de la philosophie grecque ailleurs ;
- il **dévalue** ce qui précède : la sagesse égyptienne, la réflexion mésopotamienne sur la mort dans Gilgamesh, Akhenaton ;
- il **oublie** d'autres régions (Afrique, Amériques).

Une explication matérialiste existe aussi : une étude (Baumard, Hyafil et al., 2015) relie l'apparition de ces morales ascétiques à la hausse de la richesse et de la sécurité dans ces sociétés.`,
          positions: [
            { title: "Un phénomène réel", args: "Même si les dates sont floues, la convergence est frappante : dans plusieurs grands foyers apparaissent, en quelques siècles, des pensées qui critiquent le pouvoir, cherchent une vérité universelle, valorisent la conduite morale individuelle plutôt que le seul rite. Le fait qu'elles aient survécu et fondé les grandes traditions du monde suffit à justifier un concept." },
            { title: "Une illusion d'optique", args: "Le concept regroupe des phénomènes très différents sur six siècles et dans des sociétés sans rapport. Il projette sur le monde le modèle grec de la « naissance de la philosophie ». Ce qui ressemble à une rupture est souvent l'effet de la conservation des textes : nous connaissons ces penseurs parce que leurs écoles ont duré, pas forcément parce qu'ils étaient sans précédent." }
          ],
          prompt: "Comparez deux figures vues ce mois-ci (par exemple Confucius et le Bouddha, ou Akhenaton et le Bouddha). Ont-elles un point commun qui justifie le concept d'âge axial ? Concluez : le concept est-il utile, même s'il est imparfait ?",
          notions: [
            ["Âge axial", "Concept de Karl Jaspers (1949) : période (vers 800–200 av. J.-C.) où naissent en parallèle les grandes traditions philosophiques et religieuses."],
            ["Karl Jaspers", "Philosophe et psychiatre allemand (1883–1969), auteur de Origine et sens de l'histoire."]
          ],
          questions: [
            ["Quelles sont les deux principales critiques adressées au concept d'âge axial ?", "Des dates élastiques et des phénomènes hétérogènes regroupés artificiellement ; un regard européen qui cherche partout des équivalents de la philosophie grecque et dévalue ce qui précède."]
          ],
          connections: [
            { a: "Karl Jaspers", rel: "propose", b: "Âge axial", type: "personne" },
            { a: "Âge axial", rel: "inclut", b: "Socrate", type: "idée" },
            { a: "Âge axial", rel: "objet de", b: "Sociologie historique", type: "idée" }
          ],
          sources: [
            { t: "Origine et sens de l'histoire", a: "Karl Jaspers", note: "Plon, 1954. Chapitre 1." },
            { t: "La Grande Transformation. Aux origines de nos traditions religieuses", a: "Karen Armstrong", note: "Seuil, 2009. Version enthousiaste du concept." }
          ]
        }
      ]
    },
    {
      id: "m1w4",
      title: "Empires, alphabets et mondes lointains",
      question: "Comment gouverner des peuples nombreux et différents, et que reste-t-il de ces mondes ?",
      sessions: [
        {
          id: "m1s16",
          kind: "cours",
          title: "Assyrie et Babylone : la puissance et la mémoire",
          hook: "Les rois assyriens se vantaient de leurs massacres sur des bas-reliefs. Le même empire a constitué l'une des plus grandes bibliothèques de l'Antiquité.",
          body: `## Le premier empire militaire

Après l'effondrement de 1200 av. J.-C., l'**Assyrie**, centrée sur le Tigre au nord de la Mésopotamie (villes d'Assur, Nimrud, Ninive), devient à partir du IXe siècle av. J.-C. la première grande puissance d'une nouvelle ère. On parle d'empire **néo-assyrien** (vers 911–609 av. J.-C.). À son apogée au VIIe siècle, il s'étend de l'Iran à l'Égypte.

Ses outils :

- une **armée permanente**, avec cavalerie, chars, ingénieurs de siège, et un usage précoce du **fer** ;
- une **terreur assumée** : les inscriptions et bas-reliefs royaux décrivent villes rasées, prisonniers empalés ou écorchés. C'est autant de la propagande dissuasive qu'un compte rendu ;
- des **déportations massives** : des centaines de milliers de personnes déplacées d'un bout à l'autre de l'empire, pour briser les identités locales et repeupler des régions ;
- une **administration** en provinces, un réseau de routes et de relais, une correspondance royale abondante.

En **722 av. J.-C.**, les Assyriens détruisent le royaume d'**Israël** (au nord) et déportent une partie de sa population. Le royaume de **Juda** (au sud, capitale Jérusalem) survit comme vassal.

## La bibliothèque d'Assurbanipal

Le dernier grand roi, **Assurbanipal** (668–vers 631), se vante de savoir lire et écrire, chose rare pour un roi. Il fait rassembler à **Ninive** des dizaines de milliers de tablettes : présages, textes médicaux, listes lexicales, hymnes, et la version la plus complète de l'**Épopée de Gilgamesh**. Ironie de l'histoire : c'est l'incendie de Ninive en 612 qui a **cuit** les tablettes d'argile et les a conservées. Redécouvertes au XIXe siècle, elles sont au British Museum. En 1872, George Smith y déchiffre le récit du Déluge, ce qui fait sensation en pleine controverse sur la Bible.

## La chute et Babylone

L'empire assyrien s'effondre très vite : Ninive tombe en **612 av. J.-C.** sous les coups des **Babyloniens** et des **Mèdes**. L'empire **néo-babylonien** prend le relais. Son roi **Nabuchodonosor II** (605–562) prend **Jérusalem** en **587/586 av. J.-C.**, détruit le Temple et déporte une partie de l'élite de Juda à Babylone : c'est l'**Exil**. Il embellit Babylone : la **porte d'Ishtar** en briques émaillées bleues (reconstituée au musée de Pergame à Berlin), la grande ziggourat, l'**Etemenanki**, qui a sans doute inspiré le récit biblique de la **tour de Babel**. Les « jardins suspendus » restent sans preuve archéologique.

Babylone tombe à son tour en **539 av. J.-C.**, prise par le Perse **Cyrus**, sujet de la séance suivante.

## À retenir

L'Assyrie invente l'empire militaire à grande échelle, fondé sur la terreur, la déportation et l'administration. Elle laisse aussi, paradoxalement, une mémoire écrite exceptionnelle. Babylone prend sa suite, et l'Exil des Judéens à Babylone sera décisif pour la formation de la Bible.`,
          notions: [
            ["Empire néo-assyrien", "Empire (vers 911–609 av. J.-C.) centré sur le nord de la Mésopotamie, fondé sur l'armée, la terreur et les déportations."],
            ["Déportation", "Déplacement forcé de populations, utilisé par l'Assyrie pour briser les résistances et repeupler des régions."],
            ["Bibliothèque d'Assurbanipal", "Collection de dizaines de milliers de tablettes à Ninive (VIIe s. av. J.-C.), conservée par l'incendie de 612."],
            ["Exil à Babylone", "Déportation d'une partie de la population de Juda après la prise de Jérusalem par Nabuchodonosor II (587/586 av. J.-C.)."],
            ["Ziggourat", "Tour à étages des temples mésopotamiens ; l'Etemenanki de Babylone a probablement inspiré la tour de Babel."]
          ],
          perspective: "La déportation de masse comme outil de gouvernement réapparaît de Rome à l'URSS de Staline (mois 10 et 12). Et l'histoire de la bibliothèque de Ninive illustre de nouveau le biais de conservation : c'est la destruction qui a sauvé les textes. À rapprocher de la bibliothèque d'Alexandrie (mois 2).",
          connections: [
            { a: "Bibliothèque d'Assurbanipal", rel: "conserve", b: "Épopée de Gilgamesh", type: "œuvre" },
            { a: "Nabuchodonosor II", rel: "provoque", b: "Exil à Babylone", type: "personne" },
            { a: "Exil à Babylone", rel: "décisif pour", b: "Rédaction de la Bible hébraïque", type: "événement" },
            { a: "Etemenanki", rel: "inspire", b: "Tour de Babel", type: "œuvre" }
          ],
          questions: [
            ["Quels sont les instruments du pouvoir assyrien ?", "Une armée permanente et technique, la terreur proclamée, les déportations massives, une administration provinciale avec routes et relais."],
            ["Pourquoi l'incendie de Ninive a-t-il été une chance pour les historiens ?", "Il a cuit les tablettes d'argile de la bibliothèque d'Assurbanipal, qui ont ainsi été conservées."],
            ["Que se passe-t-il en 587/586 av. J.-C. ?", "Nabuchodonosor II prend Jérusalem, détruit le Temple et déporte une partie de l'élite de Juda à Babylone : l'Exil."]
          ],
          sources: [
            { t: "La Mésopotamie. De Gilgamesh à Artaban", a: "B. Lafont, A. Tenu, P. Clancier, F. Joannès", note: "Belin, 2017. Partie sur les empires néo-assyrien et néo-babylonien." },
            { t: "Salles assyriennes (bas-reliefs de Ninive)", a: "British Museum, salles 6 à 10", url: "https://www.britishmuseum.org/collection", note: "Chasse aux lions d'Assurbanipal, à voir en ligne." }
          ]
        },
        {
          id: "m1s17",
          kind: "cours",
          title: "L'Empire perse : gouverner la diversité",
          hook: "Cyrus prend Babylone en 539 av. J.-C. et laisse les déportés rentrer chez eux. Générosité, ou intelligence politique ?",
          body: `## Cyrus le Grand

Au milieu du VIe siècle av. J.-C., **Cyrus II**, roi d'un petit royaume perse du sud-ouest de l'Iran (le Fars), soumet les **Mèdes** (vers 550), conquiert la **Lydie** du roi Crésus (vers 546), puis **Babylone** (539). Il fonde l'empire **achéménide**, du nom de l'ancêtre légendaire de la dynastie, Achéménès. En une génération, c'est le plus grand empire que le monde ait connu, de l'Asie centrale à la Méditerranée. Son fils **Cambyse** y ajoute l'Égypte (525).

## Le cylindre de Cyrus

Ce cylindre d'argile (British Museum), rédigé en akkadien, présente Cyrus comme choisi par **Marduk**, le dieu de Babylone, pour remplacer un roi impie. Il affirme avoir restauré les cultes et permis le **retour des populations déportées** dans leurs sanctuaires. Le livre biblique d'**Esdras** et le second Isaïe présentent aussi Cyrus comme celui qui autorise les Judéens à rentrer et à reconstruire le Temple de Jérusalem ; Isaïe l'appelle même « oint » (messie) du Seigneur.

On a parfois présenté le cylindre comme la « première déclaration des droits de l'homme ». C'est un **anachronisme** : il s'agit d'un texte de propagande royale dans la tradition mésopotamienne, qui légitime un conquérant étranger en lui faisant endosser le rôle du bon roi local. Mais la politique qu'il décrit est réelle : les Perses gouvernent en **respectant largement** les cultes, les langues et les élites locales, à condition qu'on paie le tribut et qu'on reste loyal.

## Darius et l'organisation de l'empire

**Darius Ier** (522–486) réorganise l'empire :

- découpage en **satrapies**, provinces confiées à des **satrapes** (gouverneurs), surveillés par des inspecteurs, « les yeux et les oreilles du roi » ;
- **tribut** fixé pour chaque province ;
- **Route royale** de Sardes (Anatolie) à Suse, environ 2 500 km, avec des relais permettant aux messagers de la parcourir en une semaine environ ;
- monnaie d'or, le **darique** ;
- usage de l'**araméen** comme langue administrative commune ;
- construction de **Persépolis**, dont les bas-reliefs montrent les délégations de tous les peuples de l'empire apportant leurs présents au roi.

Le roi se présente comme **« roi des rois »** et protégé d'**Ahura Mazda**, le dieu suprême de la tradition associée à **Zarathoustra** (Zoroastre). Le **zoroastrisme** oppose un principe de vérité (*asha*) à un principe de mensonge (*druj*) et insiste sur le choix moral individuel. Il influencera probablement les religions qui ont côtoyé les Perses.

## La Perse vue par les Grecs

Nous connaissons souvent les Perses par les **Grecs**, leurs adversaires lors des **guerres médiques** (490–479 av. J.-C. : Marathon, Thermopyles, Salamine), qui ouvriront le mois 2. Hérodote les décrit avec curiosité, mais la tradition grecque a imposé l'image d'un **despote oriental** face à la liberté grecque. Les historiens (notamment Pierre Briant) ont largement révisé cette image à partir des sources perses elles-mêmes, comme les **tablettes de Persépolis**.

L'empire achéménide tombe sous les coups d'**Alexandre le Grand** (331 av. J.-C.), qui reprend d'ailleurs une bonne partie de son administration.

## À retenir

L'empire perse invente un modèle impérial fondé sur la tolérance contrôlée de la diversité, l'administration et les communications. Il est la première puissance mondiale de l'Antiquité, et l'image que nous en avons a longtemps été déformée par ses adversaires grecs.`,
          notions: [
            ["Achéménides", "Dynastie perse fondée par Cyrus II (vers 550 av. J.-C.), renversée par Alexandre (331 av. J.-C.)."],
            ["Cylindre de Cyrus", "Texte akkadien de propagande royale (539 av. J.-C.) présentant Cyrus comme restaurateur des cultes et des peuples déportés."],
            ["Satrapie", "Province de l'empire perse, gouvernée par un satrape sous surveillance royale."],
            ["Route royale", "Route d'environ 2 500 km de Sardes à Suse, avec relais de poste."],
            ["Zoroastrisme", "Religion associée à Zarathoustra, centrée sur Ahura Mazda et le choix entre vérité (asha) et mensonge (druj)."],
            ["Anachronisme", "Erreur qui consiste à attribuer à une époque des idées ou réalités d'une autre (par exemple les « droits de l'homme » à Cyrus)."]
          ],
          perspective: "Deux modèles impériaux se dessinent ce mois-ci : la terreur assyrienne et l'intégration perse. Rome (mois 3) combinera les deux, l'Empire ottoman et les empires coloniaux (mois 11) aussi. Et la manière dont les Grecs ont décrit les Perses est le premier exemple de ce qu'Edward Said appellera l'orientalisme (mois 11).",
          connections: [
            { a: "Cyrus II", rel: "libère les déportés de", b: "Exil à Babylone", type: "personne" },
            { a: "Image grecque des Perses", rel: "préfigure", b: "Orientalisme (Edward Said)", type: "idée" },
            { a: "Empire perse achéménide", rel: "conquis par", b: "Alexandre le Grand", type: "lieu" },
            { a: "Zoroastrisme", rel: "influence probable sur", b: "Judaïsme du Second Temple", type: "idée" }
          ],
          questions: [
            ["Pourquoi est-il anachronique de parler de « première déclaration des droits de l'homme » à propos du cylindre de Cyrus ?", "C'est un texte de propagande royale mésopotamienne qui légitime un conquérant ; il ne pose pas de droits universels des individus. La politique de tolérance qu'il décrit est réelle mais intéressée."],
            ["Citez trois outils de l'administration de Darius.", "Satrapies sous surveillance, tribut fixé, Route royale avec relais, monnaie (darique), araméen administratif, Persépolis."],
            ["Pourquoi notre image des Perses a-t-elle longtemps été biaisée ?", "Elle venait surtout des Grecs, leurs ennemis, qui ont construit l'image du despote oriental face à la liberté grecque."]
          ],
          sources: [
            { t: "Histoire de l'Empire perse. De Cyrus à Alexandre", a: "Pierre Briant", note: "Fayard, 1996. La somme de référence ; à consulter par chapitres." },
            { t: "Le cylindre de Cyrus", a: "British Museum (1880,0617.1941)", url: "https://www.britishmuseum.org/collection", note: "Traduction en ligne." }
          ]
        },
        {
          id: "m1s18",
          kind: "cours",
          title: "Phéniciens et Hébreux : l'alphabet et le Dieu unique",
          hook: "Deux petits peuples du Levant, sans grand empire, ont légué au monde deux des inventions les plus durables : l'alphabet et le monothéisme.",
          body: `## Les Phéniciens, marins et marchands

Sur la côte du Liban actuel, des cités comme **Byblos**, **Tyr** et **Sidon** forment, après 1200 av. J.-C., le monde **phénicien** (nom donné par les Grecs, peut-être d'après la pourpre, *phoinix*). Ce ne sont pas un État unifié mais des cités marchandes. Leurs navires sillonnent la Méditerranée ; ils fondent des comptoirs et des colonies jusqu'en Espagne (Gadès, l'actuelle Cadix). La plus célèbre, **Carthage**, fondée selon la tradition par des colons de Tyr en 814 av. J.-C., deviendra la grande rivale de Rome (mois 3). Leurs produits phares : la **pourpre** tirée du murex, le bois de cèdre, le verre, le travail du métal.

## L'alphabet

Le cunéiforme et les hiéroglyphes comptent des centaines de signes. Vers le XIXe–XVIe siècle av. J.-C., des travailleurs de langue sémitique dans le Sinaï et en Égypte créent une écriture d'un tout autre type, dite **protosinaïtique** : on prend des signes inspirés des hiéroglyphes et on leur attribue seulement le **premier son** du mot qu'ils représentent (principe **acrophonique**). La tête de bœuf, *alef*, note le son « a » (en fait un coup de glotte) ; la maison, *bet*, note « b ».

Les Phéniciens en fixent une version de **22 lettres**, toutes des **consonnes** (vers le XIe siècle av. J.-C.). Le système est simple : on peut apprendre à lire en quelques semaines, et non plus en années.

Les **Grecs** l'adoptent vers le VIIIe siècle av. J.-C. et ajoutent des **voyelles** en réutilisant des lettres inutiles en grec (alef → alpha). De l'alphabet grec dérivent l'étrusque, le **latin**, puis le cyrillique ; de l'**araméen**, autre branche, dérivent l'hébreu carré et l'**arabe**. Presque toutes les écritures alphabétiques du monde descendent ainsi de cette invention.

## Les Hébreux et la formation de la Bible

Les royaumes d'**Israël** (nord, capitale Samarie) et de **Juda** (sud, capitale Jérusalem) apparaissent au début du Ier millénaire av. J.-C. Le récit biblique (patriarches, sortie d'Égypte, royaume uni de David et Salomon) a été mis par écrit et remanié sur plusieurs siècles. L'archéologie (Israël Finkelstein, entre autres) conduit à des conclusions débattues mais largement partagées :

- pas de trace archéologique d'un **Exode** massif d'Égypte ;
- un royaume de David et Salomon beaucoup plus **modeste** que le récit (une stèle de Tel Dan, IXe siècle, mentionne cependant la « maison de David ») ;
- une religion d'abord **polythéiste** ou monolâtre (culte principal de YHWH sans nier les autres dieux ; des inscriptions évoquent « YHWH et son Ashera »).

Le **monothéisme strict** (un seul Dieu existe, créateur universel) se cristallise surtout entre la fin du royaume de Juda (réforme du roi **Josias**, vers 620 av. J.-C.) et l'**Exil à Babylone** (587–539). Privés de roi, de terre et de Temple, les Judéens réinterprètent leur malheur : leur Dieu n'a pas été vaincu par Marduk ; c'est lui qui a utilisé Babylone pour punir son peuple infidèle. Il devient alors le Dieu de toute la terre. Le **texte** et la **Loi** (*Torah*) deviennent le centre de l'identité, transportable partout.

## À retenir

Les Phéniciens diffusent l'alphabet consonantique, ancêtre de presque tous les alphabets. Les Hébreux, petit peuple pris entre les empires, élaborent progressivement, et surtout à l'épreuve de l'Exil, un monothéisme centré sur un texte.`,
          notions: [
            ["Alphabet consonantique (abjad)", "Écriture où chaque signe note une consonne ; l'alphabet phénicien compte 22 lettres."],
            ["Principe acrophonique", "Un signe vaut pour le premier son du mot qu'il représente (alef, « bœuf », pour « a »)."],
            ["Carthage", "Colonie phénicienne fondée par Tyr (selon la tradition en 814 av. J.-C.), future rivale de Rome."],
            ["Monolâtrie", "Culte d'un seul dieu sans nier l'existence des autres ; étape avant le monothéisme strict."],
            ["Monothéisme", "Croyance en un seul Dieu, unique et universel."],
            ["Torah", "La Loi : les cinq premiers livres de la Bible hébraïque, centre de l'identité juive après l'Exil."]
          ],
          perspective: "Remarquez le contraste : ce ne sont pas les grands empires, mais de petits peuples marchands ou vaincus qui produisent les inventions les plus durables. L'Exil montre aussi comment une catastrophe politique peut devenir une révolution intellectuelle. Le mois 4 suivra les héritiers de ce monothéisme : judaïsme rabbinique, christianisme, islam.",
          connections: [
            { a: "Alphabet phénicien", rel: "adopté par", b: "Alphabet grec", type: "idée" },
            { a: "Exil à Babylone", rel: "cristallise le", b: "Monothéisme hébraïque", type: "événement" },
            { a: "Carthage", rel: "rivale de", b: "Rome", type: "lieu" },
            { a: "Bible hébraïque", rel: "étudiée par", b: "Archéologie biblique", type: "discipline" }
          ],
          questions: [
            ["Pourquoi l'alphabet est-il une révolution par rapport au cunéiforme ?", "Une vingtaine de signes au lieu de centaines : on apprend à lire en quelques semaines, l'écrit sort du monopole des scribes."],
            ["Qu'ont ajouté les Grecs à l'alphabet phénicien ?", "Les voyelles, en réutilisant des lettres notant des consonnes inexistantes en grec."],
            ["Quel rôle l'Exil à Babylone joue-t-il dans la formation du monothéisme ?", "La catastrophe est réinterprétée : YHWH n'a pas été vaincu, il a puni son peuple ; il devient Dieu universel, et la Loi écrite devient le centre d'une identité sans terre ni Temple."]
          ],
          sources: [
            { t: "La Bible dévoilée", a: "Israël Finkelstein et Neil Asher Silberman", note: "Bayard, 2002 (Folio). Thèses archéologiques accessibles et discutées." },
            { t: "Histoire de la Phénicie", a: "Josette Elayi", note: "Perrin, 2013." }
          ]
        },
        {
          id: "m1s19",
          kind: "cours",
          title: "Les Amériques anciennes : des civilisations indépendantes",
          hook: "Sans contact avec l'Ancien Monde, des peuples d'Amérique ont inventé l'agriculture, les villes, des pyramides, l'écriture et un calendrier. Que nous apprend cette expérience parallèle ?",
          body: `## Une expérience historique indépendante

Les humains arrivent en Amérique par la Béringie à la fin de la dernière glaciation (au moins 15 000 ans avant notre ère, peut-être plus tôt). Ensuite, pendant plus de dix millénaires, l'Amérique évolue **sans contact** significatif avec l'Afrique, l'Europe et l'Asie (sauf les brefs voyages vikings vers l'an mil). C'est une occasion unique de comparer : qu'est-ce qui se répète, qu'est-ce qui diffère ?

## Caral et le Norte Chico (Pérou)

Sur la côte désertique du Pérou, la civilisation de **Caral-Supe** (ou Norte Chico) construit, vers **2 600 av. J.-C.**, des centres monumentaux avec plateformes pyramidales et places circulaires en creux. C'est presque contemporain des pyramides d'Égypte. Fait remarquable : on y trouve peu de céramique et peu d'armes, et l'économie semble reposer sur la pêche côtière (anchois), le coton (pour les filets) et l'irrigation. L'archéologue péruvienne **Ruth Shady** y a mené les fouilles principales.

Plus tard, les Andes connaîtront Chavín, les Moche, Nazca, Tiwanaku, Wari, puis les **Incas** (XVe siècle). Les Andins utilisent les **quipus**, cordelettes à nœuds servant à enregistrer des nombres, et peut-être plus.

## Les Olmèques (Mésoamérique)

Sur la côte du golfe du Mexique, les **Olmèques** (vers 1 200–400 av. J.-C.) sont souvent considérés comme la « culture mère » de la Mésoamérique. On les connaît par leurs **têtes colossales** en basalte (jusqu'à 3 m), qui représentent probablement des souverains, et par leurs centres cérémoniels (San Lorenzo, La Venta). Les Olmèques pratiquent déjà le **jeu de balle** avec des balles en caoutchouc, et plusieurs éléments que l'on retrouve chez les Mayas et les Aztèques apparaissent chez eux.

## Écriture, calendrier et zéro

La Mésoamérique est l'un des rares foyers d'**invention indépendante de l'écriture** (Ier millénaire av. J.-C., zapotèque puis olmèque tardive et surtout maya). L'écriture **maya**, déchiffrée en grande partie depuis les années 1950–1980 (Youri Knorozov, Linda Schele, David Stuart), combine signes logographiques et syllabiques, comme le cunéiforme.

Les Mésoaméricains développent des **calendriers** complexes : un cycle rituel de 260 jours, une année solaire de 365 jours, et chez les Mayas le « **compte long** », qui date les événements à partir d'un point de départ correspondant à 3114 av. J.-C. Les Mayas utilisent un système numérique de position avec un signe pour le **zéro**, une invention que l'on retrouve aussi en Inde (et dont l'Europe héritera via le monde arabe).

## Les grandes différences

Les Amériques n'ont ni roue utilitaire (elle existe sur des jouets mésoaméricains), ni grands animaux de trait (sauf le lama, aux capacités limitées), ni fer. Jared Diamond (*De l'inégalité parmi les sociétés*, 1997) l'explique par la géographie : peu d'animaux domesticables et un axe nord-sud qui gêne la diffusion des plantes. Sa thèse est utile mais souvent critiquée comme trop déterministe.

## À retenir

Les Amériques montrent que l'agriculture, les villes, l'architecture monumentale, l'écriture et les mathématiques ne sont pas des inventions uniques de l'Ancien Monde : elles ont été réinventées de façon indépendante, avec des solutions différentes.`,
          notions: [
            ["Caral-Supe (Norte Chico)", "Civilisation de la côte péruvienne (vers 2 600 av. J.-C.), l'une des plus anciennes des Amériques, avec architecture monumentale."],
            ["Olmèques", "Culture du golfe du Mexique (vers 1 200–400 av. J.-C.), connue pour ses têtes colossales ; « culture mère » de la Mésoamérique."],
            ["Mésoamérique", "Aire culturelle du Mexique et de l'Amérique centrale (Olmèques, Mayas, Aztèques…) partageant calendriers, jeu de balle, pyramides."],
            ["Compte long", "Calendrier maya comptant les jours depuis une date de départ équivalente à 3114 av. J.-C."],
            ["Quipu", "Système andin de cordelettes à nœuds servant à enregistrer des données."],
            ["Invention indépendante", "Apparition d'une même innovation dans plusieurs sociétés sans contact entre elles."]
          ],
          perspective: "Les Amériques reviennent au mois 5 (conquête espagnole, choc microbien) et au mois 11 (héritages coloniaux). Gardez cette séance en tête : la « découverte » de 1492 met en contact deux expériences historiques développées séparément pendant plus de dix mille ans. C'est la plus grande rencontre de l'histoire humaine.",
          connections: [
            { a: "Écriture maya", rel: "invention indépendante comme", b: "Écriture cunéiforme", type: "idée" },
            { a: "Zéro maya", rel: "parallèle au", b: "Zéro indien", type: "idée" },
            { a: "Jared Diamond", rel: "explique les écarts par", b: "Géographie", type: "personne" },
            { a: "Amériques anciennes", rel: "rencontrent l'Europe en", b: "1492", type: "lieu" }
          ],
          questions: [
            ["Pourquoi les Amériques sont-elles un cas précieux pour l'historien ?", "Elles ont évolué sans contact avec l'Ancien Monde pendant plus de dix millénaires : on peut comparer ce qui se répète (agriculture, villes, écriture) et ce qui diffère."],
            ["Qu'a de remarquable Caral ?", "Une architecture monumentale vers 2 600 av. J.-C., presque contemporaine des pyramides, avec une économie fondée sur la pêche et le coton, peu d'armes et peu de céramique."],
            ["Citez deux réalisations intellectuelles mésoaméricaines.", "Une écriture inventée indépendamment (maya, logo-syllabique), des calendriers complexes (260 jours, 365 jours, compte long), une numération de position avec zéro."]
          ],
          sources: [
            { t: "1491. Nouvelles révélations sur les Amériques avant Christophe Colomb", a: "Charles C. Mann", note: "Albin Michel, 2007. Très vivant." },
            { t: "De l'inégalité parmi les sociétés", a: "Jared Diamond", note: "Gallimard, 2000 (Folio). Chapitres sur la géographie." }
          ]
        },
        {
          id: "m1s20",
          kind: "synthese",
          title: "Synthèse du mois : qu'est-ce qu'une civilisation ?",
          hook: "Vous avez parcouru dix mille ans et cinq continents. Il est temps de mettre en ordre ce que vous avez compris, avec vos propres mots.",
          body: `## Pourquoi une séance de synthèse

Les recherches sur la mémoire montrent que **reformuler avec ses propres mots** et **relier** les connaissances entre elles est l'une des méthodes les plus efficaces pour comprendre et retenir. Cette séance ne contient pas de nouveau cours. Elle vous demande de produire.

## Déroulé conseillé (25 minutes)

1. **5 min — Révisions** : faites vos fiches du jour.
2. **5 min — Quiz du mois** : ouvrez l'onglet Révisions, section « Quiz », et faites le quiz du mois 1.
3. **15 min — Synthèse écrite** : ouvrez la page **Synthèses** et répondez aux questions guidées du mois. Vous pouvez y revenir plus tard pour compléter.

## Quelques fils pour vous aider

- **L'État** : Uruk, l'Égypte, les Shang, l'Assyrie, la Perse. Qu'ont-ils en commun ? Qu'est-ce qui les distingue ? L'Indus est-il un contre-exemple ?
- **L'écriture** : née de la comptabilité, réinventée plusieurs fois, simplifiée par l'alphabet. Qui la contrôle ?
- **La légitimité** : Maât, la justice d'Hammurabi, le Mandat du Ciel, la faveur de Marduk pour Cyrus. Comment un pouvoir se justifie-t-il ?
- **La fragilité** : effondrements de 2200 et 1200 av. J.-C., déclin de l'Indus. Qu'est-ce qui rend une société résiliente ?
- **La religion** : des dieux de cité aux sagesses intérieures (Upanishads, Bouddha) et au Dieu unique (après l'Exil).

## Le mot « civilisation »

Le mot apparaît en français au XVIIIe siècle (Mirabeau, vers 1756). Il a deux sens qu'il faut distinguer :

- un sens **descriptif** : un ensemble de sociétés partageant villes, écriture, institutions, croyances sur une longue durée (on parle des civilisations au pluriel) ;
- un sens **normatif** : le contraire de la « barbarie », un degré supérieur de développement (la civilisation au singulier). Ce second sens a servi à justifier la colonisation (mois 11).

Dans votre synthèse, dites lequel de ces sens vous paraît utile, et à quelles conditions.`,
          notions: [
            ["Civilisation (sens descriptif)", "Ensemble de sociétés partageant sur la longue durée des traits culturels, politiques et matériels (villes, écriture, croyances)."],
            ["Civilisation (sens normatif)", "Degré supposé supérieur de développement opposé à la « barbarie » ; usage idéologique, notamment colonial."]
          ],
          questions: [
            ["Quels sont les deux sens du mot « civilisation » ?", "Un sens descriptif (des civilisations au pluriel, ensembles culturels durables) et un sens normatif (la civilisation opposée à la barbarie), qui a servi à justifier la domination coloniale."]
          ],
          connections: [
            { a: "Civilisation (notion)", rel: "utilisée pour justifier", b: "Colonisation", type: "idée" },
            { a: "Civilisation (notion)", rel: "objet de", b: "Anthropologie", type: "idée" }
          ],
          sources: [
            { t: "Grammaire des civilisations", a: "Fernand Braudel", note: "Flammarion, 1987 (Champs). Introduction sur la notion de civilisation." }
          ]
        }
      ]
    }
  ],
  synthesisPrompts: [
    "En une phrase : quelle est l'idée la plus importante que vous retenez de ce mois ?",
    "Qu'est-ce qu'un État, et en quoi Uruk, l'Égypte et la Perse en sont-ils des exemples différents ?",
    "Comment l'écriture a-t-elle changé le rapport au pouvoir et à la mémoire ?",
    "Comparez deux manières de légitimer le pouvoir (Maât, Mandat du Ciel, justice d'Hammurabi, faveur des dieux).",
    "Qu'avez-vous appris qui contredit une idée que vous aviez avant ?",
    "Quelle question reste ouverte pour vous, et que voudriez-vous approfondir ?"
  ],
  quiz: [
    { q: "Dans combien de foyers, au minimum, l'agriculture est-elle apparue de façon indépendante ?", c: ["Un seul, le Croissant fertile", "Deux", "Environ sept", "Plus de trente"], a: 2, e: "Au moins sept foyers : Croissant fertile, Chine, Mésoamérique, Andes, Nouvelle-Guinée, Afrique sahélienne, est de l'Amérique du Nord." },
    { q: "Que contiennent la plupart des premières tablettes d'Uruk ?", c: ["Des hymnes religieux", "Des comptes administratifs", "Des lois royales", "Des récits épiques"], a: 1, e: "Environ 85 % sont administratives : rations, troupeaux, travailleurs." },
    { q: "Quel principe permet à l'écriture de noter des sons et non seulement des objets ?", c: ["Le principe du rébus", "Le principe acrophonique", "Le pictogramme", "La casuistique"], a: 0, e: "Le rébus : on utilise un signe pour le son du mot (la flèche « ti » pour « vie »)." },
    { q: "Où a été retrouvée la stèle d'Hammurabi ?", c: ["À Babylone", "À Ninive", "À Suse", "À Ur"], a: 2, e: "Emportée comme butin par un roi élamite au XIIe s. av. J.-C., retrouvée à Suse en 1901–1902." },
    { q: "Que désigne Maât ?", c: ["Le dieu des morts", "L'ordre, la vérité et la justice du monde", "La crue du Nil", "Le palais royal"], a: 1, e: "Maât est l'ordre cosmique et social que le pharaon doit maintenir contre le chaos." },
    { q: "Quel document décrit le transport de blocs pour la Grande Pyramide ?", c: ["Le Livre des morts", "Les lettres d'Amarna", "Le journal de Merer", "La palette de Narmer"], a: 2, e: "Découvert en 2013 au Ouadi el-Jarf par Pierre Tallet." },
    { q: "En quelle langue les rois s'écrivent-ils dans les lettres d'Amarna ?", c: ["Égyptien", "Hittite", "Akkadien", "Araméen"], a: 2, e: "L'akkadien en cunéiforme était la langue diplomatique du XIVe s. av. J.-C." },
    { q: "Qu'est-ce que la bataille de Qadesh illustre particulièrement ?", c: ["La victoire hittite totale", "La propagande royale", "L'usage du fer", "L'unification de l'Égypte"], a: 1, e: "Ramsès II présente comme un triomphe une bataille au résultat indécis." },
    { q: "Pourquoi l'écriture de l'Indus n'est-elle pas déchiffrée ?", c: ["Elle a été volontairement détruite", "Inscriptions courtes et absence de bilingue", "On n'en a trouvé aucune trace", "Elle est trop proche du sanskrit"], a: 1, e: "Les inscriptions font en moyenne cinq signes, et aucun texte bilingue n'existe." },
    { q: "Selon le Mandat du Ciel, que se passe-t-il si une dynastie devient injuste ?", c: ["Rien, le roi est divin", "Le Ciel lui retire le mandat", "Les prêtres élisent un nouveau roi", "Le peuple vote"], a: 1, e: "Le Ciel retire son mandat ; la révolte devient légitime." },
    { q: "Que prône le légisme chinois ?", c: ["Le gouvernement par l'exemple moral", "Le non-agir", "Des lois strictes, récompenses et châtiments", "La non-violence absolue"], a: 2, e: "Shang Yang et Han Feizi : des lois claires appliquées à tous ; appliqué par l'État de Qin." },
    { q: "Quelle est la deuxième des quatre nobles vérités du Bouddha ?", c: ["La souffrance a pour origine l'attachement", "Le nirvana existe", "Il faut suivre l'octuple sentier", "Le soi est éternel"], a: 0, e: "1. souffrance ; 2. origine (l'attachement, la soif) ; 3. cessation ; 4. chemin." },
    { q: "Pourquoi les tablettes de la bibliothèque d'Assurbanipal ont-elles survécu ?", c: ["Elles étaient en pierre", "Elles ont été cuites par l'incendie de Ninive", "Elles ont été copiées par les Grecs", "Elles étaient enterrées dans un tombeau"], a: 1, e: "L'incendie de 612 av. J.-C. a cuit l'argile." },
    { q: "Qu'est-ce qu'une satrapie ?", c: ["Un temple perse", "Une province de l'empire perse", "Un impôt babylonien", "Une colonie phénicienne"], a: 1, e: "Province gouvernée par un satrape, sous surveillance royale." },
    { q: "Qu'ont ajouté les Grecs à l'alphabet phénicien ?", c: ["Les consonnes", "Les voyelles", "Les chiffres", "La ponctuation"], a: 1, e: "Ils ont réutilisé des lettres inutiles en grec pour noter les voyelles." },
    { q: "Quel site péruvien, vers 2 600 av. J.-C., est presque contemporain des pyramides d'Égypte ?", c: ["Machu Picchu", "Tiwanaku", "Caral", "Teotihuacan"], a: 2, e: "Caral-Supe (Norte Chico), fouillé par Ruth Shady." }
  ]
};
