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
    // Genitive (correct form in dates, e.g. "12 sierpnia 2026")
    'stycznia': 0, 'lutego': 1, 'marca': 2, 'kwietnia': 3, 'maja': 4, 'czerwca': 5,
    'lipca': 6, 'sierpnia': 7, 'września': 8, 'października': 9, 'listopada': 10, 'grudnia': 11,
    // Nominative fallback (e.g. "12 wrzesień 2026")
    'styczeń': 0, 'luty': 1, 'marzec': 2, 'kwiecień': 3, 'maj': 4, 'czerwiec': 5,
    'lipiec': 6, 'sierpień': 7, 'wrzesień': 8, 'październik': 9, 'listopad': 10, 'grudzień': 11
  };
  
  const parsePolishDate = (dateStr) => {
    if (!dateStr) return 0;
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = polishMonths[parts[1].toLowerCase()];
      const year = parseInt(parts[2], 10);
      if (!isNaN(day) && month !== undefined && !isNaN(year)) {
        return new Date(year, month, day).getTime();
      }
    }
    return 0;
  };

  posts.sort((a, b) => {
    return parsePolishDate(b.updatedAt) - parsePolishDate(a.updatedAt);
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
