import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ paths }) => {
  if (!paths || paths.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className={`container ${styles.breadcrumbs}`}>
      <ol className={styles.list}>
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          
          return (
            <li key={index} className={styles.item} aria-current={isLast ? 'page' : undefined}>
              {isLast ? (
                <span className={styles.current}>{path.name}</span>
              ) : (
                <Link to={path.url} className={styles.link}>
                  {path.name}
                </Link>
              )}
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
