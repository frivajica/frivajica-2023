import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import tailwindcssNesting from 'tailwindcss/nesting';
import autoprefixer from 'autoprefixer';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting(), autoprefixer()],
      },
    },
  },
});
