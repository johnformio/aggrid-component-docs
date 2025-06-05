


export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

  const modules = import.meta.glob('../src/*.mdx', { eager: true }) as Record<string, any>;
export function getMdxNavigationItems(): NavigationItem[] {
  // Import all MDX files in src/
  const modules = import.meta.glob('/src/*.mdx', { eager: true }) as Record<string, any>;
  const items: NavigationItem[] = [];
  for (const path in modules) {
    const mod = modules[path];
    const frontmatter = mod.frontmatter || {};
    const fileName = path.split('/').pop()?.replace('.mdx', '') || '';
    items.push({
      name: frontmatter.title || fileName,
      href: `/${fileName}`,
      description: frontmatter.description || '',
    });
  }
  return items;
}
