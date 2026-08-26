import SectionSubtitle from './ui/SectionSubtitle';
import styles from './RotatingProcess.module.css';

const steps = [
  { id: '01', title: 'System', desc: 'Wdrażamy sprawdzony <strong>system rezerwacji bezpośrednich</strong>. Zyskujesz czytelną stronę, która od razu sprzedaje, bez prowizji dla pośredników i z pełną kontrolą nad kalendarzem.' },
  { id: '02', title: 'Onboarding', desc: 'Nie zostawiam Cię z tym samego. Przechodzimy przez <strong>pełny onboarding</strong>: wspólnie konfigurujemy płatności, podłączamy cenniki i pokazuję Ci, jak prosto zarządzać rezerwacjami w panelu.' },
  { id: '03', title: 'Start', desc: 'Po testach i dopięciu szczegółów, <strong>odpalamy sprzedaż</strong>. Od tego momentu goście mogą łatwo sprawdzić dostępność i zarezerwować pobyt bezpośrednio u Ciebie.' }
];

const RotatingProcess = () => {
  return (
    <section id="proces" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <SectionSubtitle>System i Onboarding</SectionSubtitle>
          <h2 className={`heading-lg ${styles.mainTitle}`}>Prosty system i wsparcie w 3 krokach</h2>
          <p className={styles.lead}>
            Zamiast skomplikowanych procedur, proponuję prosty układ. Otrzymujesz gotowy system do sprzedaży i pełne szkolenie z jego obsługi.
          </p>
        </div>

        <div className={styles.timeline}>
          {/* Ząbkowana linia tła (SVG zig-zag) jako centralna oś */}
          <div className={styles.zigzagLine}>
            <svg preserveAspectRatio="none" viewBox="0 0 100 400" className={styles.zigzagSvg}>
              <path d="M50 0 L10 100 L90 200 L10 300 L50 400" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="4" strokeDasharray="8 8" />
            </svg>
          </div>

          {steps.map((step, index) => (
            <div key={step.id} className={`${styles.step} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight}`}>
              <div className={styles.stepContent}>
                <span className={styles.stepId}>{step.id}.</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc} dangerouslySetInnerHTML={{ __html: step.desc }} />
              </div>
              <div className={styles.dot}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RotatingProcess;
