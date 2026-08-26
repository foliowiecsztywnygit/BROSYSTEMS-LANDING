import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './SelectedArticles.module.css';

const SelectedArticles = () => {
  // We take the first 3 articles for the home page
  const selectedPosts = blogPosts.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <SectionSubtitle>Baza Wiedzy</SectionSubtitle>
          <h2 className="heading-md">Wybrane artykuły z bloga</h2>
          <p className={styles.lead}>
            Sprawdź wskazówki dotyczące stron dla obiektów noclegowych i automatyzacji rezerwacji.
          </p>
        </div>

        <div className={styles.scrollWrapper}>
          <div className={styles.articlesGrid}>
            {selectedPosts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.postMeta}>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <Link to={post.path} className={styles.linkItem}>Czytaj artykuł →</Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedArticles;
