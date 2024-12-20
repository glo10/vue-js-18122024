# Corrections des exercices 9, 10 et 11

Il est tout  fait normal ici que les informations ne soient pas conservés d'une page à une autre. L'utilisation d'un datastore avec pinia est traité à l'exercice suivant.

## Concetps abordées

- Router
- Transition et TransitionGroup (pour les transitions des pages cf. [Documentation vue-router](https://router.vuejs.org/guide/advanced/transitions))
- [Composables](https://fr.vuejs.org/guide/reusability/composables)

### Nouveaux fichiers significatifs et réorgarnisation

- Ajout du router avec `npm instal vue-rouer@4`
- [src/composables/useFilter.js](./src/composables/useFilter.js)
- [src/composables/useOpenFoodFact.js](./src/composables/useOpenFoodFact.js)
- [src/composables//useArticle.js](src/composables//useArticle.js)
- [Ajout du router dans src/main.js](src/main.js)
- [Configuration des routes dans src/router](src/router/)
- [Pages web dans src/views](src/views/)

---

# Lancement de l'application

- `npm install`
- `npm run dev`