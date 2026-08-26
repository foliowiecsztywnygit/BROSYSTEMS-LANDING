import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <p className={styles.authorName}>Krzysztof Żebrowski</p>
          <p className={styles.seoFooterText}>
            BroSystems tworzy strony dla pensjonatów, willi, apartamentów i domków, które pomagają zdobywać więcej rezerwacji z własnej strony i ułatwiają gościowi szybki kontakt.
          </p>
          <div className={styles.legalInfo}>
            <Link to="/strony-dla-pensjonatow">Strony dla pensjonatów</Link>
            <span className={styles.separator}>|</span>
            <Link to="/wdrozenia-hotres">Wdrożenia Hotres</Link>
            <span className={styles.separator}>|</span>
            <Link to="/blog">Blog</Link>
          </div>
          <div className={styles.legalInfo}>
            <span>&copy; {new Date().getFullYear()} BroSystems</span>
            <span className={styles.separator}>|</span>
            <a href="/regulamin" rel="nofollow">Regulamin</a>
            <span className={styles.separator}>|</span>
            <a href="/polityka-prywatnosci" rel="nofollow">Polityka prywatności</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
