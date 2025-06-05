// vite.plugins/frontmatter-collector.ts

import matter from 'gray-matter';
import path from 'path';

const virtualModuleId = 'virtual:mdx-frontmatter';
const resolvedVirtualModuleId = '\0' + virtualModuleId;

export function frontmatterCollector() {
  const frontmatters = {};

  return {
    name: 'vite-plugin-mdx-frontmatter-collector',

    enforce: 'pre',

    async transform(code, id) {
      if (!id.endsWith('.mdx')) return;

      const { data } = matter(code);
      frontmatters[id] = data;

      return code; // we don't modify the actual mdx content
    },

    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },

    load(id) {
      if (id === resolvedVirtualModuleId) {
        const dataArray = Object.entries(frontmatters).map(([id, data]) => ({
          file: id,
          ...data,
        }));

        return `export default ${JSON.stringify(dataArray, null, 2)};`;
      }
    },
  };
}
