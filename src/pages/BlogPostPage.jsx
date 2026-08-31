import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GooeyButton from '../components/ui/GooeyButton';
import { getBlogPost, getRelatedPosts } from '../utils/blog';
import NotFound from './NotFound';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './ContentHub.module.css';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = getRelatedPosts(post.relatedSlugs);

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
              <p className={styles.intro}>{post.excerpt}</p>
            </div>

            <aside className={styles.statsCard}>
              <div>
                <p className={styles.statLabel}>Najważniejszy problem</p>
                <p className={styles.statValue}>{post.excerpt}</p>
              </div>
              <div>
                <p className={styles.statLabel}>Co dalej</p>
                <p className={styles.statValue}>{post.ctaDescription}</p>
              </div>
            </aside>
          </section>

          <section className={styles.gridTwo}>
            <article className={`${styles.contentCol} ${styles.sectionSpacing}`}>
              {post.content.split(/(?=^##\s)/m).filter(c => c.trim() !== '').map((chunk, idx) => (
                <section key={idx} className={styles.sectionCard}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{chunk}</ReactMarkdown>
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
                <h3>{post.ctaTitle}</h3>
                <p>{post.ctaDescription}</p>
                <div className={styles.heroActions}>
                  <GooeyButton href={post.ctaHref} variant="outline">{post.ctaLabel}</GooeyButton>
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
