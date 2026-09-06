import SectionSubtitle from './ui/SectionSubtitle';
import styles from './RotatingProcess.module.css';

const steps = [
  { id: '01', title: 'Rozmowa i plan', desc: 'W rozmowie, najczęściej telefonicznej, ustalamy szczegóły i dobieramy <strong>odpowiedni plan działania</strong> oraz <strong>plan subskrypcji</strong>. Zajmuję się przygotowaniem podglądu strony.' },
  { id: '02', title: 'Półmetek i płatność', desc: 'Po zapoznaniu się z podglądem strony, przechodzimy do płatności <strong>wygodnym linkiem</strong>. Po subskrypcji wykupuję domenę, podpinam system, tworzymy wszystkie potrzebne konta i wprowadzam na bieżąco poprawki na życzenie.' },
  { id: '03', title: 'Szkolenie i start', desc: 'Krótko przeszkalam cię jak korzystać ze <strong>strony, channel managera i systemu</strong>. Optymalizujemy wizytówkę google i finalnie odpalamy sprzedaż. <strong>Pierwsze zapytania</strong> z strony czy google przychodzą średnio <strong>1-2 miesiącach od startu strony</strong> a ich liczba <strong>stale rośnie</strong>.' },
  { id: '04', title: 'Stały rozwój', desc: 'System <strong>automatycznie wrzuca blogi</strong> i dba o pozycje strony. Ja zajmuję się twoim systemem żeby pracował <strong>24h/7</strong> a ty <strong>tym co ważne ;)</strong>' }
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
