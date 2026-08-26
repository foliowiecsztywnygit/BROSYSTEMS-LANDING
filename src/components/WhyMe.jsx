import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './WhyMe.module.css';
import GooeyButton from './ui/GooeyButton';

const reasons = [
  { 
    id: 1,
    title: 'Więcej rezerwacji z własnej strony', 
    desc: 'Strona i system rezerwacji mają kierować gości prosto do Ciebie, zamiast gubić ich po drodze.',
    number: '01',
    colorClass: styles.colorBlue
  },
  { 
    id: 2,
    title: 'Lepsza ścieżka rezerwacji', 
    desc: 'Projektuję układ tak, aby na telefonie gość szybciej znalazł ofertę, termin, dane kontaktowe i powód, by zarezerwować bezpośrednio.',
    number: '02',
    colorClass: styles.colorOrange
  },
  { 
    id: 3,
    title: 'Lepsza widoczność na Zakopane, Szczyrk i regiony turystyczne', 
    desc: 'Fundament strony układam tak, żeby obiekt był łatwiej znajdowany przez osoby szukające noclegu w Twojej okolicy.',
    number: '03',
    colorClass: styles.colorGreen
  },
  { 
    id: 4,
    title: 'Jedna odpowiedzialna osoba', 
    desc: 'Pracujesz bezpośrednio ze mną od koncepcji po wdrożenie, więc decyzje są szybsze, komunikacja prostsza, a projekt nie rozmywa się między działami.',
    number: '04',
    colorClass: styles.colorPurple
  }
];

const WhyMe = () => {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.whyme}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.headerWrapper} reveal fade-in`}>
          <div className={styles.headerLeft}>
            <SectionSubtitle>Dlaczego to działa</SectionSubtitle>
          </div>
          <div className={styles.headerRight}>
            <h2 className={`heading-lg ${styles.title}`}>Fundament strony ustawiony pod wynik biznesowy obiektu</h2>
            <p className={styles.lead}>
              Każda decyzja projektowa ma prowadzić do jednego celu: większej liczby zapytań i rezerwacji bezpośrednich z własnej strony.
            </p>
          </div>
        </div>
        
        <div className={styles.contentWrapper}>
          
          <GooeyButton variant="outline" href="/#kontakt">Pokaż mi swój obiekt</GooeyButton>
          
          {/* Kolumna prawa - asymetryczny grid kafelków */}
          <div className={styles.rightColumn}>
            <div className={styles.row}>
              <div className={`${styles.cardWrapper} reveal fade-in delay-200`}>
                <div className={`${styles.card} ${reasons[0].colorClass} ${styles.tiltLeft}`}>
                  <span className={styles.cardNumber}>{reasons[0].number}</span>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{reasons[0].title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: reasons[0].desc }}></p>
                  </div>
                </div>
              </div>
              <div className={`${styles.cardWrapper} ${styles.pushDown} reveal fade-in delay-300`}>
                <div className={`${styles.card} ${reasons[1].colorClass} ${styles.tiltRight}`}>
                  <span className={styles.cardNumber}>{reasons[1].number}</span>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{reasons[1].title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: reasons[1].desc }}></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={`${styles.cardWrapper} ${styles.pullUp} reveal fade-in delay-400`}>
                <div className={`${styles.card} ${reasons[2].colorClass} ${styles.tiltLeftMore}`}>
                  <span className={styles.cardNumber}>{reasons[2].number}</span>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{reasons[2].title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: reasons[2].desc }}></p>
                  </div>
                </div>
              </div>
              <div className={`${styles.cardWrapper} reveal fade-in delay-500`}>
                <div className={`${styles.card} ${reasons[3].colorClass} ${styles.tiltRightMore}`}>
                  <span className={styles.cardNumber}>{reasons[3].number}</span>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{reasons[3].title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: reasons[3].desc }}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.bottom} reveal fade-in delay-400`}>
          <a href="/#proces" className={styles.microCta}>
            Poznaj proces wdrożenia <span className={styles.arrow}>↑</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
