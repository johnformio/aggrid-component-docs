import frontmatterData from 'virtual:mdx-frontmatter';

console.log('frontmatterData', frontmatterData);

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}


export function getMdxNavigationItems(): NavigationItem[] {
  // Import all MDX files in src/

  return frontmatterData.map((item => {
    return {
      name: item.title,
      href: item.path,
      description: item.description,
    }
  }))
  
}
