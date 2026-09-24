import frontMatter from 'front-matter';

// Use Vite's import.meta.glob to import all markdown files as raw strings
const markdownFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true });

const polishMonthsGenitive = [
  'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
  'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
];

const polishMonths = {
  // Genitive (correct form in dates, e.g. "12 sierpnia 2026")
  'stycznia': 0, 'lutego': 1, 'marca': 2, 'kwietnia': 3, 'maja': 4, 'czerwca': 5,
  'lipca': 6, 'sierpnia': 7, 'września': 8, 'października': 9, 'listopada': 10, 'grudnia': 11,
  // Nominative fallback (e.g. "12 wrzesień 2026")
  'styczeń': 0, 'luty': 1, 'marzec': 2, 'kwiecień': 3, 'maj': 4, 'czerwiec': 5,
  'lipiec': 6, 'sierpień': 7, 'wrzesień': 8, 'październik': 9, 'listopad': 10, 'grudzień': 11
};

/**
 * Convert ISO date string (e.g. "2026-09-16") to Polish format ("16 września 2026")
 */
function isoToPolishDate(isoStr) {
  if (!isoStr) return '';
  const parts = String(isoStr).split('-');
  if (parts.length !== 3) return '';
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // 0-indexed
  const day = parseInt(parts[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day) || month < 0 || month > 11) return '';
  return `${day} ${polishMonthsGenitive[month]} ${year}`;
}

function parsePolishDate(dateStr) {
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
}

/**
 * Estimate reading time from markdown body content.
 */
function estimateReadTime(body) {
  if (!body) return '3 min';
  const wordCount = body.trim().split(/\s+/).length;
  const minutes = Math.max(2, Math.ceil(wordCount / 200));
  return `${minutes} min`;
}

/**
 * Normalize post attributes: map old-format fields to the expected schema.
 * Old format uses: date (ISO), description (no excerpt, category, readTime)
 * New format uses: updatedAt (Polish), excerpt, category, readTime, etc.
 */
function normalizePost(attrs, body) {
  const normalized = { ...attrs };

  // Map date → updatedAt (convert ISO to Polish format)
  if (!normalized.updatedAt && normalized.date) {
    normalized.updatedAt = isoToPolishDate(normalized.date);
  }

  // Map description → excerpt
  if (!normalized.excerpt && normalized.description) {
    normalized.excerpt = normalized.description;
  }

  // Map description → metaDescription
  if (!normalized.metaDescription && normalized.description) {
    normalized.metaDescription = normalized.description;
  }

  // Default category
  if (!normalized.category) {
    normalized.category = 'Rezerwacje i Prowizje';
  }

  // Default readTime
  if (!normalized.readTime) {
    normalized.readTime = estimateReadTime(body);
  }

  return normalized;
}

export function getBlogPosts() {
  const posts = [];

  for (const path in markdownFiles) {
    const rawContent = markdownFiles[path];
    // Some versions of Vite return the string directly, others return { default: string }
    const content = typeof rawContent === 'string' ? rawContent : rawContent.default;
    
    if (content) {
      const parsed = frontMatter(content);
      const attrs = normalizePost(parsed.attributes, parsed.body);
      posts.push({
        ...attrs,
        content: parsed.body,
        slug: attrs.slug || path.replace('/src/content/blog/', '').replace('.md', ''),
        path: `/blog/${attrs.slug || path.replace('/src/content/blog/', '').replace('.md', '')}`
      });
    }
  }

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
