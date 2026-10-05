import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blog';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './SelectedArticles.module.css';

const SelectedArticles = () => {
  // We take the first 3 articles for the home page
  const selectedPosts = getBlogPosts().slice(0, 3);

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
              <Link to={post.path} key={post.slug} className={styles.postCard}>
                <div className={styles.postMeta}>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <span className={styles.linkItem}>Czytaj artykuł →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedArticles;
