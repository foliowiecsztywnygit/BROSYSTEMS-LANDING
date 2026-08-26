import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GooeyButton from './ui/GooeyButton';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './Portfolio.module.css';

const projects = [
  {
    id: 7,
    title: 'DZIANISZ N°54',
    label: 'ELEGANCKA WIZYTÓWKA KOMPLEKSU DOMKÓW',
    description: 'Celem było stworzenie eleganckiej wizytówki obiektu, która w uporządkowany sposób prezentuje ogromną przestrzeń domków (160m²) oraz ich atuty lokalizacyjne, tak aby użytkownik płynnie przeszedł od oglądania zdjęć i inspiracji do decyzji o rezerwacji.',
    categories: ['Dzianisz', 'Kompleks domków', 'Premium Design'],
    highlights: [
      'mocna ekspozycja klimatycznych wnętrz i luksusowego standardu',
      'czytelna prezentacja kluczowych odległości i pobliskich atrakcji (termy, stoki)',
      'nowoczesny i minimalistyczny design budujący premium odbiór kompleksu'
    ],
    image: '/osadadzianiszn54.png',
    link: 'https://osadadzianiszn54.pl',
    scale: 1.0
  },
  {
    id: 3,
    title: 'Willa Szymkówka',
    label: 'Willa z dużą galerią i wyraźnym CTA',
    description: 'Celem było uporządkowanie prezentacji obiektu, zdjęć i najważniejszych informacji tak, aby użytkownik szybciej przeszedł od oglądania willi do kontaktu i decyzji o rezerwacji.',
    categories: ['Willa', 'Galeria', 'Konwersja mobilna'],
    highlights: [
      'mocna ekspozycja zdjęć i standardu obiektu',
      'prostsza ścieżka kontaktu dla użytkownika mobilnego',
      'bardziej premium odbiór całej oferty'
    ],
    caseStudy: {
      title: "🔥 Efekty po zmianach",
      text: "Wyniki z Google po zaledwie 2,5 miesiąca od odpalenia nowej strony. Bez złotówki wydanej na płatne reklamy - po prostu dobrze zrobiona strona, która przyciąga gości.",
      metrics: [
        { value: "5,6 tys.", label: "wyświetleń w Google" },
        { value: "182", label: "kliknięć w stronę" },
        { value: "2.6", label: "średnia pozycja" }
      ]
    },
    image: '/willaszymkowka.png',
    link: 'https://willaszymkowka.pl',
    scale: 1.0
  },
  {
    id: 6,
    title: 'CICHA PRZYSTAŃ DZIANISZ',
    label: 'KOMPLEKS TRZECH LUKSUSOWYCH DOMKÓW Z WIDOKIEM NA TATRY',
    description: 'Projekt zorientowany na budowanie niezależności od portali OTA i maksymalizację bezpośrednich zapytań o rezerwację dla kompleksu trzech domków. Zastosowano elegancką estetykę premium, która płynnie łączy tradycyjny góralski klimat z nowoczesnym minimalizmem.',
    categories: ['DZIANISZ', 'WYNAJEM DOMKÓW', 'UX/UI & CRO'],
    highlights: [
      'architektura pod rezerwacje bezpośrednie (zero prowizji)',
      'autorska, responsywna galeria zdjęć z systemem płynnego filtrowania',
      'idealne zachowanie na mobile i angażujące mikroanimacje (Framer Motion)'
    ],
    image: '/cichaprzystandzianisz.png',
    link: 'https://cichaprzystandzianisz.pl',
    scale: 1.0
  },
  {
    id: 1,
    title: 'Tatrzański Wierch',
    label: 'Kameralna agroturystyka z widokiem na Tatry',
    description: 'Projekt zorientowany na maksymalizację konwersji z użyciem technologii spaceru 360° i budowanie niezależności od portali OTA. Zastosowano estetykę alpine luxury z góralskimi akcentami w nowoczesnym wydaniu.',
    categories: ['Bańska Wyżna', 'Agroturystyka', 'CRO & SEO'],
    highlights: [
      'architektura pod rezerwacje bezpośrednie (zero prowizji)',
      'spacer 360°',
      'idealne zachowanie na mobile (RWD, typografia clamp)'
    ],
    image: '/tatrzanski-wierch.png',
    link: 'https://tatrzanski-wierch.pl',
    scale: 1.0
  },
  {
    id: 2,
    title: 'Domki na Zrąbku pod gubałówką',
    label: 'Domki premium pod Zakopanem',
    description: 'Projekt dla obiektu nastawionego na ruch turystyczny z Podhala. Strona miała połączyć klimat miejsca z prostą drogą do sprawdzenia dostępności i kontaktu bez przechodzenia przez pośredników.',
    categories: ['Zakopane', 'Domki', 'Roomadmin'],
    highlights: [
      'czytelny układ oferty noclegowej na telefonie',
      'szybkie przejście do sprawdzenia terminu',
      'estetyka dopasowana do charakteru obiektu'
    ],
    image: '/domkinazrabku.png',
    link: 'https://domkinazrabku.pl',
    scale: 1.0
  },
  {
    id: 4,
    title: 'Willa Rysy',
    label: 'Obiekt noclegowy z góralskim charakterem',
    description: 'Tutaj nacisk poszedł w połączenie lokalnego klimatu z nowoczesnym, czytelnym interfejsem. Strona miała budować zaufanie i pomagać gościowi szybko ocenić, czy to miejsce jest dla niego.',
    categories: ['Podhale', 'Willa', 'Wizerunek obiektu'],
    highlights: [
      'spójny styl dopasowany do regionu',
      'czytelna prezentacja oferty i wnętrz',
      'lepsze pierwsze wrażenie przed kontaktem'
    ],
    image: '/willarysy.png',
    link: 'https://willa-rysy.pl',
    scale: 1.0
  },
  {
    id: 5,
    title: 'Willa 14',
    label: 'Minimalistyczna strona dla obiektu górskiego',
    description: 'Projekt skupiony na prostocie, szybkim odbiorze oferty i mocnym CTA. To dobry przykład, że obiekt nie potrzebuje przeładowanej strony, jeśli najważniejsze decyzje użytkownika są dobrze poprowadzone.',
    categories: ['Willa górska', 'Minimalizm', 'CTA'],
    highlights: [
      'uproszczona ścieżka decyzji dla gościa',
      'lekki układ wspierający czytelność',
      'design, który nie odciąga od kontaktu'
    ],
    image: '/willa-14.png',
    link: 'https://willa-14.pl',
    scale: 1.0
  }
];

const Portfolio = () => {
  const revealRef = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className={`section ${styles.portfolio}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>

        <div className={`${styles.header} reveal fade-in`}>
          <div className={styles.headerLeft}>
            <SectionSubtitle>Realizacje z branży noclegowej</SectionSubtitle>
            <h2 className={`heading-lg ${styles.title}`}>Przykłady stron, które porządkują ofertę i wspierają rezerwacje bezpośrednie</h2>
            <p className={styles.lead}>
              Pokazuję tutaj projekty z obiektów noclegowych, bo to właśnie ten typ wdrożeń chcę najmocniej rozwijać: strony czytelne, szybkie i przygotowane pod decyzję rezerwacyjną.
            </p>
          </div>

          <div className={styles.navigation}>
            <button className={styles.navButton} onClick={prevProject} aria-label="Poprzedni projekt">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <button className={styles.navButton} onClick={nextProject} aria-label="Następny projekt">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Kontener karuzeli przeładowujący się animacją na podstawie ID projektu */}
        <div className={`${styles.carousel} reveal fade-in delay-100`} key={currentProject.id}>
          <div className={styles.imageColumn}>
            {currentProject.image ? (
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className={styles.image}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="1600"
                height="1000"
                style={{ transform: `scale(${currentProject.scale || 1})` }}
              />
            ) : (
              <div className={styles.placeholder}>Brak zdjęcia mockupu</div>
            )}
          </div>

          <div className={styles.contentColumn}>
            <div className={styles.categories}>
              {currentProject.categories.map((cat, i) => (
                <span key={i} className={styles.categoryTag}>{cat}</span>
              ))}
            </div>

            <p className={styles.projectLabel}>{currentProject.label}</p>
            <h3 className={styles.projectTitle}>{currentProject.title}</h3>
            <p className={styles.projectDescription}>{currentProject.description}</p>

            <ul className={styles.highlights}>
              {currentProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            {currentProject.caseStudy && (
              <div className={styles.caseStudy}>
                <h4 className={styles.caseStudyTitle}>{currentProject.caseStudy.title}</h4>
                <p className={styles.caseStudyText}>{currentProject.caseStudy.text}</p>
                <div className={styles.metricsRow}>
                  {currentProject.caseStudy.metrics.map((metric, i) => (
                    <div key={i} className={styles.metric}>
                      <span className={styles.metricValue}>{metric.value}</span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.actions}>
              <GooeyButton variant="outline" href={currentProject.link}>Zobacz stronę klienta</GooeyButton>
              <GooeyButton variant="outline" href="/#kontakt">Chcę podobne wdrożenie</GooeyButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
