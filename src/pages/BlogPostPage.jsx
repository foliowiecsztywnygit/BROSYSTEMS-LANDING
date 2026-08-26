import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GooeyButton from '../components/ui/GooeyButton';
import { blogPostMap } from '../data/blogPosts';
import NotFound from './NotFound';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './ContentHub.module.css';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPostMap[slug];

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = (post.relatedSlugs || [])
    .map((relatedSlug) => blogPostMap[relatedSlug])
    .filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.brosystems.pl${post.path}`} />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.pageMain}>
        <div className={`container ${styles.pageContainer}`}>
          <Breadcrumbs paths={[{ name: 'Strona Główna', url: '/' }, { name: 'Blog', url: '/blog' }, { name: post.title, url: post.path }]} />
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>{post.category}</span>
              <h1 className={`heading-md ${styles.title}`}>{post.title}</h1>
              <div className={styles.postMeta}>
                <span>{post.readTime}</span>
                <span>{post.updatedAt}</span>
              </div>
              <p className={styles.intro}>{post.intro}</p>
            </div>

            <aside className={styles.statsCard}>
              <div>
                <p className={styles.statLabel}>Najważniejszy problem</p>
                <p className={styles.statValue}>{post.excerpt}</p>
              </div>
              <div>
                <p className={styles.statLabel}>Co dalej</p>
                <p className={styles.statValue}>{post.cta.description}</p>
              </div>
            </aside>
          </section>

          <section className={styles.gridTwo}>
            <article className={`${styles.contentCol} ${styles.sectionSpacing}`}>
              {post.sections.map((section) => (
                <section key={section.heading} className={styles.sectionCard}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, idx) => {
                    if (paragraph === 'CTA_BUTTON') {
                      return (
                        <div key={idx} style={{ margin: '2.5rem 0' }}>
                          <GooeyButton href="/oferta" variant="outline" style={{ display: 'block', textAlign: 'center' }}>
                            Nie chcesz uczyć się skomplikowanych systemów? Wdrożymy to dla Ciebie za 250 zł/mc. Sprawdź demo.
                          </GooeyButton>
                        </div>
                      );
                    }
                    if (paragraph.startsWith('Autor: ')) {
                      return <p key={idx} style={{ fontStyle: 'italic', marginTop: '2rem', textAlign: 'right' }}><strong>{paragraph}</strong></p>;
                    }
                    return <p key={idx}>{paragraph}</p>;
                  })}
                </section>
              ))}
            </article>

            <aside className={styles.asideStack}>
              <div className={styles.asideCard}>
                <h3>Powiązane artykuły</h3>
                <div className={styles.linkList}>
                  {relatedPosts.map((item) => (
                    <Link key={item.slug} to={item.path} className={styles.linkItem}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.asideCard}>
                <h3>{post.cta.title}</h3>
                <p>{post.cta.description}</p>
                <div className={styles.heroActions}>
                  <GooeyButton href={post.cta.href} variant="outline">{post.cta.label}</GooeyButton>
                  <GooeyButton href="/#kontakt" variant="outline">Porozmawiajmy</GooeyButton>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
