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
});
