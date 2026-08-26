import styles from './SectionSubtitle.module.css';

const SectionSubtitle = ({ children }) => {
  return (
    <span className={styles.subtitle}>
      <span className={styles.circle}></span>
      {children}
    </span>
  );
};

export default SectionSubtitle;
