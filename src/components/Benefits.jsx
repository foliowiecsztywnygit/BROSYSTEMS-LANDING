import styles from './Benefits.module.css';

const benefits = [
  { title: 'Szybka Realizacja', desc: 'Szanuję Twój czas. <strong>Terminowość</strong> to podstawa mojego działania.' },
  { title: 'Indywidualne Podejście', desc: 'Brak gotowców. <strong>Każdy projekt</strong> projektuję od zera.' },
  { title: 'Nowoczesny Design', desc: 'Tworzę zgodnie z <strong>najnowszymi trendami</strong> UX i UI.' },
  { title: 'Responsywność', desc: 'Działa idealnie na smartfonie, tablecie i <strong>każdym ekranie</strong>.' }
];

const Benefits = () => {
  return (
    <section className={`section bg-grid-dark ${styles.benefits}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={`heading-lg ${styles.title}`}>Dlaczego BroSystems?</h2>
          <p className="text-lg">Konkretne efekty. Zero kompromisów.</p>
        </div>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDesc} dangerouslySetInnerHTML={{ __html: benefit.desc }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;