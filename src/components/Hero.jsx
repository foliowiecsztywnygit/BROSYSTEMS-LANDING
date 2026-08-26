import { useEffect, useState } from 'react';
import Waves from './ui/waves';
import GooeyButton from './ui/GooeyButton';
import SectionSubtitle from './ui/SectionSubtitle';
import Typewriter from './ui/Typewriter';
import styles from './Hero.module.css';

const Hero = () => {
  const [showWaves, setShowWaves] = useState(false);
  const [compactHero, setCompactHero] = useState(false);
  const [ultraCompactHero, setUltraCompactHero] = useState(false);
  const [heroOffset, setHeroOffset] = useState(96);

  useEffect(() => {
    // Prosta animacja on mount dla Hero
    const elements = document.querySelectorAll(`.${styles.heroContent} .fade-in`);
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
      const availableHeight = window.innerHeight - totalOffset;

      setHeroOffset(totalOffset || 96);
      setCompactHero(availableHeight <= 760);
      setUltraCompactHero(availableHeight <= 660);
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
        <div className={`${styles.heroContent} ${compactHero ? styles.compact : ''}`}>
          {!compactHero && (
            <div className="fade-in reveal">
              <SectionSubtitle>Strony dla obiektów noclegowych</SectionSubtitle>
            </div>
          )}
          <h1 className={`${styles.title} fade-in reveal delay-100`}>
            {compactHero ? (
              <>
                <span className={styles.titleLine}>Strona dla noclegów, </span>
                <span className={styles.titleLine}>która daje </span>
                <strong className="highlightText">
                  <Typewriter words={["więcej rezerwacji bezpośrednich", "niezależność od portali", "koniec z wysokimi prowizjami"]} />
                </strong>
              </>
            ) : (
              <>
                <span className={styles.titleLine}>Strony dla noclegów, </span>
                <span className={styles.titleLine}>które dają </span>
                <strong className="highlightText">
                  <Typewriter words={["więcej rezerwacji bezpośrednich", "niezależność od portali", "koniec z wysokimi prowizjami"]} />
                </strong>
              </>
            )}
          </h1>
          {compactHero ? (
            <>
              {!ultraCompactHero && (
                <p className={`${styles.description} ${styles.descriptionCompact} fade-in reveal delay-200`}>
                  Robię strony dla pensjonatów, willi i apartamentów, które ułatwiają gościowi szybki <span className="accentText">kontakt albo rezerwację</span>.
                </p>
              )}
              <div className={`${styles.actions} ${styles.actionsCompact} fade-in reveal delay-300`}>
                <GooeyButton href="/#kontakt" variant="primary" size="compact">Porozmawiajmy</GooeyButton>
                {!ultraCompactHero && (
                  <a href="/oferta" className={styles.inlineLink}>Pakiety i ceny</a>
                )}
              </div>
            </>
          ) : (
            <>
              <p className={`${styles.description} fade-in reveal delay-200`}>
                Projektuję szybkie strony dla pensjonatów, willi, apartamentów i domków, które mają ułatwić gościowi <span className="accentText">kontakt albo rezerwację</span>.
              </p>
              <div className={`${styles.actions} fade-in reveal delay-300`}>
                <GooeyButton href="/oferta" variant="primary">Odbierz wycenę</GooeyButton>
                <GooeyButton href="/#portfolio" variant="outline">Zobacz realizacje</GooeyButton>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
