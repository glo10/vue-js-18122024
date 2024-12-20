# Testing en JS

- Logique : écrire du code qui permet de tester votre code
### Plusieurs niveaux

1. unitaire : isoler la plus pétite unité de code pour la tester. Par exemple une fonction, un composant
2. intégration : tester au moins 2 fonctions qui collaborent (un utilise l'autre ou les deux fonctionnent conjointement pour apporter une solution). Exemple : tester des routes, tester des pages, etc.
3. fonctionnel (end to end ou bout à bout) : tester une fonctionnalité dans son intégralité avec l'interface utilisateur. Par exemple, les intéractions entre UI et l'utilisateur (événements, actions, affichage, etc)

## Mise en place des tests unitaires et d'intégration avec vitest

1. Installez *vitest* et *@vue/test-utils* via npm cf. ci-dessous
2. Créez un fichier de configuration *vitest.config.js*
3. Ecrivez vos tests

### librairies

- Vitest : *npm i -D vitest*
-D alias de --save-dev : c'est une dépendance uniquement dans l'environnement de développement.
- @vue/test-utils : * npm i -D @vue/test-utils*

### Uniquement avec Vue-CLI et Webpack

- `npm i -D jsdom @vitejs/plugin-vue`

### Configuration vitest.config.js pour vu-cli

```js
// vitest.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom', // Pour simuler un environnement navigateur
  },
  coverage: {
    reporter: ['html'],
    reportsDirectory: './tests/coverage'
  },
  environmentMatchGlobs: [
    [
      'tests/*/*.test.[c|m]js',
      'jsdom'
    ]
  ],
  exclude: ['cypress', 'node_modules']
})
```

### Configuration vitest.config.js pour npm

```js
import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: ['node_modules'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
```
## Intégration

### librairies

## Fonctionnels (end-to-end)

### librairies