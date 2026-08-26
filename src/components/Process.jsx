import { useEffect, useRef, useState } from 'react';
import styles from './Process.module.css';

const steps = [
  { title: 'Kontakt', desc: 'Opowiedz mi o <strong>swojej wizji</strong> i celu strony.', threshold: 15 },
  { title: 'Umowa', desc: 'Podpisujemy umowę przez platformę UseMe, Zbieramy Materiały i <strong>ustalamy szczegóły</strong> działania. ', threshold: 35 },
  { title: 'Projekt', desc: 'Tworzę dedykowany design i <strong>czysty kod</strong> od zera. Bez kompromisów.', threshold: 60 },
  { title: 'Poprawki i Wdrożenie', desc: 'Ostatnie szlify, testy optymalizacji, wyświetlania na wszystkich urządzeniach i <strong>start online</strong>.', threshold: 85 }
];

const Process = () => {
  const sectionRef = useRef(null);
  const numbersRef = useRef([]);
  const [progress, setProgress] = useState(0);
  
  // Ref dla animacji lerp (wygładzania)
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    // Funkcja wyliczająca docelowy postęp na podstawie scrolla
    const calculateTarget = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const distance = rect.height - windowHeight;
      const scrolled = -rect.top;

      let currentProgress = (scrolled / distance) * 100;
      targetProgressRef.current = Math.max(0, Math.min(100, currentProgress));
    };

    // Pętla animacji (requestAnimationFrame) dla super płynności
    const updateLoop = () => {
      // Lerp (Linear Interpolation) - wygładzanie ruchu
      // 0.08 to współczynnik płynności (im mniejszy, tym bardziej 'leniwa' i gładka strzałka)
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.08;
      
      // Aktualizacja stanu React tylko jeśli zaszła zauważalna zmiana
      if (Math.abs(currentProgressRef.current - targetProgressRef.current) > 0.01) {
        setProgress(currentProgressRef.current);
        
        // Aktualizacja numerów również na wygładzonej wartości
        numbersRef.current.forEach((numEl, index) => {
          if (!numEl) return;
          
          const stepThreshold = steps[index].threshold;
          const fillWindow = 15;
          
          let numProgress = (currentProgressRef.current - (stepThreshold - fillWindow)) / fillWindow;
          numProgress = Math.max(0, Math.min(1, numProgress));
          
          numEl.style.backgroundPosition = `0 ${numProgress * 100}%`;
        });
      }

      rafRef.current = requestAnimationFrame(updateLoop);
    };

    const handleScroll = () => {
      calculateTarget();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Nasłuchiwanie także na zdarzenia wheel i touchmove dla lepszej responywności
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    // Inicjalizacja
    calculateTarget();
    updateLoop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="proces" className={styles.process} ref={sectionRef}>
      <div className={styles.stickyWrapper}>
        <div className={`container ${styles.container}`}>
          <h2 className={`heading-lg ${styles.title}`}>Proces Współpracy</h2>

          <div className={styles.timeline}>
            <div className={styles.line}>
              <div 
                className={styles.lineProgress} 
                style={{ height: `${progress}%` }}
              >
                <div className={styles.arrow}></div>
              </div>
            </div>

            <div className={styles.steps}>
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`${styles.step} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight} ${progress >= step.threshold ? styles.active : ''}`}
                >
                  <div className={styles.stepContent}>
                    <div 
                      className={styles.stepNumber}
                      ref={el => numbersRef.current[index] = el}
                    >
                      0{index + 1}
                    </div>
                    <h3 className={`heading-md ${styles.stepTitle}`}>{step.title}</h3>
                    <p className={styles.stepDesc} dangerouslySetInnerHTML={{ __html: step.desc }}></p>
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

export default Process;