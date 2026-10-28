# Fil d'Ariane

Application web personnelle pour un challenge de culture générale : un parcours de 12 mois, des séances de 25 minutes, des notes, des fiches à révision espacée, une carte des liens entre les connaissances et des synthèses mensuelles.

Aucun compte, aucun serveur, aucune API payante. Les données restent dans le navigateur.

## Lancer l'application

- **En ligne (recommandé)** : l'adresse GitHub Pages du dépôt, ouvrable sur ordinateur et téléphone. Sur téléphone, « Ajouter à l'écran d'accueil » l'installe comme une application, utilisable hors ligne.
- **En local** : dans ce dossier, lancer `python3 -m http.server 8000`, puis ouvrir http://localhost:8000.
- **Fichier unique** : `node build-artifact.mjs` produit `dist/fil-ariane.html`, une version autonome (sans mode hors ligne).

## Une séance

1. **Révisions** (5 min) : les fiches dues aujourd'hui. Répondre de tête, afficher la réponse, s'évaluer (touches 1 à 4, Espace pour révéler).
2. **Lecture** (15 min) : le cours, les notions clés, la mise en perspective, les liens, les sources.
3. **Rappel** (5 min) : répondre de mémoire aux questions, puis comparer. Pour un débat : rédiger sa position.
4. **Bilan** : une note de séance, puis « Terminer ». Les notions et questions deviennent des fiches.

On peut quitter à tout moment : la séance reprend à la même étape.

## Bibliothèque

Les ouvrages conseillés des 12 mois, rangés en rayons. Statut (à lire, en cours, lu) et fiche de lecture : idée centrale, ce que je retiens, une citation, des liens. L'idée centrale peut devenir une fiche de révision.

## Contenu

- **Mois 1, Les premières civilisations** : 20 séances rédigées (cours, notions, questions, mises en perspective, liens, sources), 3 débats, une synthèse, un quiz de 16 questions.
- **Mois 2 à 12** : 220 séances guidées (présentation, notions à définir, question directrice), ressources conseillées par mois, questions de synthèse.

Tout est modifiable dans **Parcours → Modifier le parcours**.

## Sauvegarder

Les données vivent dans le navigateur de l'appareil utilisé. Effacer les données du site les supprime.

- **Données → Sauvegarder** : fichier JSON complet. **Restaurer** le recharge (sur le même appareil ou un autre).
- **Export Markdown** : notes, notions, synthèses, bibliothèque (fiches de lecture) et liens, lisibles partout.
- **Export CSV** : les fiches, importables dans Anki.

## Structure

```
index.html            page
styles.css            styles
js/content-m1.js      contenu du mois 1
js/content-plan.js    plan des mois 2 à 12
js/app.js             application
sw.js                 cache hors ligne
manifest.webmanifest  installation
```
