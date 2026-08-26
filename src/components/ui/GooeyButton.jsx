import React from 'react';
import styles from './GooeyButton.module.css';

const GooeyButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
}) => {
  const content = (
    <span className={`${styles.wrapper} ${styles[variant]} ${styles[size]}`}>
      <span className={styles.text}>{children}</span>
      <span className={styles.circle}>
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`${styles.btn} ${className}`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {content}
    </button>
  );
};

export default GooeyButton;
