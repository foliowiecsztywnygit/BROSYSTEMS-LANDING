import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GooeyButton from '../components/ui/GooeyButton';
import { blogPosts } from '../data/blogPosts';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './ContentHub.module.css';

const BlogIndex = () => {
  return (
    <>
      <Helmet>
        <title>Blog dla noclegów w Zakopanem i Szczyrku | BroSystems</title>
        <meta
          name="description"
          content="Blog dla właścicieli noclegów w Zakopanem, na Podhalu i w Szczyrku. Artykuły o stronach, rezerwacjach bezpośrednich i automatyzacji obsługi obiektu."
        />
        <link rel="canonical" href="https://www.brosystems.pl/blog" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.pageMain}>
        <div className={`container ${styles.pageContainer}`}>
          <Breadcrumbs paths={[{ name: 'Strona Główna', url: '/' }, { name: 'Blog', url: '/blog' }]} />
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Blog ekspercki</span>
              <h1 className={`heading-md ${styles.title}`}>Artykuły dla właścicieli noclegów z Zakopanego, Podhala i Szczyrku</h1>
              <p className={styles.intro}>
                Tu znajdziesz konkretne treści o tym, jak odzyskiwać rezerwacje bezpośrednie, jak uporządkować stronę obiektu i jak ograniczyć ręczną obsługę rezerwacji w górach.
              </p>
              <div className={styles.heroActions}>
                <GooeyButton href="/#kontakt" variant="outline">Porozmawiajmy</GooeyButton>
                <GooeyButton href="/oferta" variant="outline">Zobacz pakiety abonamentowe</GooeyButton>
              </div>
            </div>
          </section>

          <section className={styles.listingGrid}>
            {blogPosts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.postMeta}>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                  <span>{post.updatedAt}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className={styles.heroActions}>
                  <Link to={post.path} className={styles.linkItem}>Czytaj artykuł</Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogIndex;
