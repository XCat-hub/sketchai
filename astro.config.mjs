import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xcat-hub.github.io',
  base: '/sketchai',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
