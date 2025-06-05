import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter';
import path from "path"
import { fileURLToPath } from 'url';
import tailwindcss from "@tailwindcss/vite"
import {frontmatterCollector} from './frontmatter-parser.js'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    mdx({
      remarkPlugins: [remarkFrontmatter]
    }),
    tailwindcss(),
    frontmatterCollector(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },

});
