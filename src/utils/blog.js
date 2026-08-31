import frontMatter from 'front-matter';

// Use Vite's import.meta.glob to import all markdown files as raw strings
const markdownFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true });

export function getBlogPosts() {
  const posts = [];

  for (const path in markdownFiles) {
    const rawContent = markdownFiles[path];
    // Some versions of Vite return the string directly, others return { default: string }
    const content = typeof rawContent === 'string' ? rawContent : rawContent.default;
    
    if (content) {
      const parsed = frontMatter(content);
      posts.push({
        ...parsed.attributes,
        content: parsed.body,
        slug: parsed.attributes.slug || path.replace('/src/content/blog/', '').replace('.md', ''),
        path: `/blog/${parsed.attributes.slug || path.replace('/src/content/blog/', '').replace('.md', '')}`
      });
    }
  }

  const polishMonths = {
    'stycznia': 0, 'lutego': 1, 'marca': 2, 'kwietnia': 3, 'maja': 4, 'czerwca': 5,
    'lipca': 6, 'sierpnia': 7, 'września': 8, 'października': 9, 'listopada': 10, 'grudnia': 11
  };
  
  posts.sort((a, b) => {
    try {
      const parseDate = (dateStr) => {
        if (!dateStr) return 0;
        const parts = dateStr.split(' ');
        if (parts.length === 3) {
          const day = parseInt(parts[0], 10);
          const month = polishMonths[parts[1].toLowerCase()];
          const year = parseInt(parts[2], 10);
          return new Date(year, month, day).getTime();
        }
        return 0;
      };
      return parseDate(b.updatedAt) - parseDate(a.updatedAt);
    } catch (e) {
      return 0;
    }
  });

  return posts;
}

export function getBlogPost(slug) {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(relatedSlugs = []) {
  if (!relatedSlugs || !relatedSlugs.length) return [];
  const posts = getBlogPosts();
  return relatedSlugs.map(slug => posts.find(p => p.slug === slug)).filter(Boolean);
}
