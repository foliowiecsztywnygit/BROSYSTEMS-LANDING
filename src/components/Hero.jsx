import { useEffect, useState } from 'react';
import Waves from './ui/waves';
import GooeyButton from './ui/GooeyButton';
import styles from './Hero.module.css';

const heroDemos = [
  {
    src: '/demos/demo_terminarz.png',
    title: 'Channel Manager',
    desc: 'Wszystko w jednym miejscu, bez przepisywania i bólu głowy.'
  },
  {
    src: '/demos/demo_system.png',
    title: 'System Rezerwacji',
    desc: 'Oszczędzaj na prowizjach portali i buduj bazę klientów.'
  },
  {
    src: '/demos/demo_strona.png',
    title: 'Nowoczesna Strona',
    desc: 'Pokaż się w najlepszej odsłonie.'
  },
  {
    src: '/demos/demo_strona_2.png',
    title: 'Nowoczesna Strona',
    desc: 'Pokaż się w najlepszej odsłonie.'
  }
];

const scrollItems = [...heroDemos, ...heroDemos];

const StarIcon = ({ fill }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const RatingBadge = ({ color, children }) => (
  <div className={styles.ratingBadge}>
    <div className={styles.starsWrapper}>
      {[...Array(5)].map((_, i) => <StarIcon key={i} fill={color} />)}
    </div>
    <span className={styles.ratingPlatform}>
      {children}
    </span>
  </div>
);

const Hero = () => {
  const [showWaves, setShowWaves] = useState(false);
  const [heroOffset, setHeroOffset] = useState(96);

  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.heroContentLeft} .fade-in, .${styles.heroContentRight}.fade-in`);
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('is-revealed');
      }, index * 150);
    });
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopQuery = window.matchMedia('(min-width: 1025px)');

    const updateWavesVisibility = () => {
      setShowWaves(!motionQuery.matches);
    };

    const updateHeroLayout = () => {
      const topBar = document.querySelector('[data-topbar]');
      const navbar = document.querySelector('[data-navbar]');
      const topBarHeight = topBar?.getBoundingClientRect().height ?? 0;
      const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
      const totalOffset = Math.round(topBarHeight + navbarHeight);
      setHeroOffset(totalOffset || 96);
    };

    updateWavesVisibility();
    updateHeroLayout();
    motionQuery.addEventListener('change', updateWavesVisibility);
    desktopQuery.addEventListener('change', updateWavesVisibility);
    window.addEventListener('resize', updateHeroLayout);

    const resizeObserver = new ResizeObserver(() => {
      updateHeroLayout();
    });

    const topBar = document.querySelector('[data-topbar]');
    const navbar = document.querySelector('[data-navbar]');
    if (topBar) resizeObserver.observe(topBar);
    if (navbar) resizeObserver.observe(navbar);

    return () => {
      motionQuery.removeEventListener('change', updateWavesVisibility);
      desktopQuery.removeEventListener('change', updateWavesVisibility);
      window.removeEventListener('resize', updateHeroLayout);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className={`${styles.hero} bg-grid`} style={{ '--hero-offset': `${heroOffset}px` }}>
      {showWaves && (
        <div className={styles.wavesWrapper}>
          <Waves 
            lineColor="rgba(255, 255, 255, 0.5)" 
            backgroundColor="transparent" 
            waveSpeedX={0.02} 
            waveSpeedY={0.01} 
            waveAmpX={40} 
            waveAmpY={20} 
            friction={0.5} 
            tension={0.01} 
            maxCursorMove={40} 
            xGap={12} 
            yGap={36} 
          />
        </div>
      )}
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContentLeft}>
          
          <div className={`${styles.socialProof} fade-in reveal`}>
            <RatingBadge color="#FBBC05">
              <span style={{color: '#4285F4'}}>G</span>
              <span style={{color: '#EA4335'}}>o</span>
              <span style={{color: '#FBBC05'}}>o</span>
              <span style={{color: '#4285F4'}}>g</span>
              <span style={{color: '#34A853'}}>l</span>
              <span style={{color: '#EA4335'}}>e</span>
            </RatingBadge>
            <RatingBadge color="#00B67A">
              <span style={{color: '#00B67A'}}>Trustpilot</span>
            </RatingBadge>
            <RatingBadge color="#1877F2">
              <span style={{color: '#1877F2'}}>Facebook</span>
            </RatingBadge>
          </div>

          <h1 className={`${styles.title} fade-in reveal delay-100`}>
            Koniec pierdół i umów na lata.
          </h1>
          <h2 className={`${styles.subtitle} fade-in reveal delay-200`}>
            Zwiększ liczbę bezpośrednich rezerwacji i przestań płacić gigantyczne prowizje portalom. Otrzymujesz nowoczesną stronę, system rezerwacji i channel manager – wszystko w jednym miejscu.
          </h2>

          <ul className={`${styles.bullets} fade-in reveal delay-300`}>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              0% prowizji od rezerwacji
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Brak długoterminowych umów
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Pełna synchronizacja kalendarzy
            </li>
          </ul>

          <div className={`${styles.actions} fade-in reveal delay-400`}>
            <GooeyButton href="/oferta" variant="primary">Sprawdź pakiety</GooeyButton>
            <GooeyButton href="/#portfolio" variant="outline">Zobacz realizacje</GooeyButton>
          </div>
          <p className={`${styles.microcopy} fade-in reveal delay-500`}>✓ Abonament bez kosztów na start. Zrezygnuj, kiedy chcesz.</p>
        </div>
        
        <div className={`${styles.heroContentRight} fade-in reveal delay-400`}>
          <div className={styles.scrollerWrapper}>
            <div className={styles.scroller}>
              {scrollItems.map((item, i) => (
                <div className={styles.demoCard} key={i}>
                  <div className={styles.demoImageWrapper}>
                    <img src={item.src} alt={item.title} className={styles.demoImage} loading="lazy" />
                  </div>
                  <div className={styles.demoCaption}>
                    <h3 className={styles.demoTitle}>{item.title}</h3>
                    <p className={styles.demoDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
