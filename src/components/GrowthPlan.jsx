import { Link } from 'react-router-dom';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './GrowthPlan.module.css';

const phases = [
  {
    id: 'Etap 1',
    title: 'Podstrony usługowe',
    time: 'Tydzień 1-2',
    description: 'Najpierw budujemy strony, które łapią intencję zakupową. To one mają zbierać ruch od właścicieli obiektów, którzy już wiedzą, czego szukają.',
    deliverables: [
      'landing pages pod typ obiektu i wdrożenie rezerwacji',
      'osobne nagłówki, meta tagi i CTA dla każdej usługi',
      'linkowanie z homepage do stron usługowych'
    ]
  },
  {
    id: 'Etap 2',
    title: 'Landing pages lokalne',
    time: 'Tydzień 3-4',
    description: 'W drugim rzucie dokładamy lokalne strony pod Podhale i Beskidy. To one mają odpowiadać na frazy typu „strony dla pensjonatów Zakopane” i podobne warianty.',
    deliverables: [
      'osobne strony dla Zakopanego, Podhala i Szczyrku',
      'treści pod lokalne frazy i typy obiektów',
      'łączenie lokalnych landingów z odpowiednimi usługami i realizacjami'
    ]
  },
  {
    id: 'Etap 3',
    title: 'Blog ekspercki',
    time: 'Miesiąc 2+',
    description: 'Blog przejmuje zapytania problemowe i edukacyjne. To stąd wchodzisz na frazy związane z prowizjami OTA, booking engine, SEO lokalnym i automatyzacją obsługi gości.',
    deliverables: [
      'artykuły pod problemy właścicieli obiektów',
      'wewnętrzne linkowanie do usług, cennika i kontaktu',
      'cykliczne rozwijanie topical authority wokół branży noclegowej'
    ]
  }
];

const servicePages = [
  { path: '/strony-dla-pensjonatow', live: true },
  { path: '/strony-dla-willi', live: false },
  { path: '/strony-dla-apartamentow', live: true },
  { path: '/strony-dla-domkow', live: false },
  { path: '/wdrozenia-hotres', live: true },
  { path: '/systemy-rezerwacji-bezposrednich', live: false }
];

const localPages = [
  '/strony-dla-obiektow-noclegowych-zakopane',
  '/strony-dla-obiektow-noclegowych-podhale',
  '/strony-dla-obiektow-noclegowych-szczyrk'
];

const blogTopics = [
  { path: '/blog/jak-ominac-wysokie-prowizje-booking-com-willa-podhale', live: true },
  { path: '/blog/system-rezerwacji-dla-domkow-w-tatrach-jak-automatycznie-przyjmowac-zadatki', live: true },
  { path: '/blog/strona-www-dla-pensjonatu-w-zakopanem-3-bledy-przez-ktore-tracisz-gosci-z-google', live: true },
  { path: '/blog/skuteczna-reklama-apartamentow-w-szczyrku-wlasna-strona-kontra-booking', live: true },
  { path: '/blog/nowoczesna-strona-i-system-rezerwacji-dla-pensjonatu-w-szczyrku-standard-na-2026-rok', live: true },
  { path: '/blog/jak-przyciagnac-turystow-do-szczyrku-poza-sezonem', live: true },
  { path: '/blog/zakopane-vs-szczyrk-gdzie-trudniej-o-rezerwacje-bezposrednie-i-jak-to-zmienic', live: true },
  { path: '/blog/overbooking-w-sezonie-narciarskim-jak-zsynchronizowac-kalendarz-z-airbnb-i-booking', live: true },
  { path: '/blog/dlaczego-powolna-strona-www-niszczy-twoj-biznes-noclegowy', live: true }
];

const GrowthPlan = () => {
  return (
    <section id="plan-seo" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionSubtitle>Plan rozwoju SEO</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Jak dołożyć blog i podstrony, żeby strona zaczęła zdobywać więcej wejść z Google</h2>
          <p className={styles.lead}>
            Sam homepage nie wystarczy, jeśli celem jest dominacja na niszowych frazach. Potrzebujesz osobnych podstron pod usługę, lokalizację i problemy właścicieli obiektów noclegowych.
          </p>
        </div>

        <div className={styles.phases}>
          {phases.map((phase) => (
            <article key={phase.id} className={styles.phaseCard}>
              <div className={styles.phaseTop}>
                <span className={styles.phaseId}>{phase.id}</span>
                <span className={styles.phaseTime}>{phase.time}</span>
              </div>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
              <ul>
                {phase.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.structureGrid}>
          <article className={styles.structureCard}>
            <h3>Strony usługowe</h3>
            <p>To jest rdzeń lejka sprzedażowego i pierwsza rzecz, którą warto wdrożyć.</p>
            <ul>
              {servicePages.map((page) => (
                <li key={page.path}>
                  {page.live ? <Link to={page.path}><code>{page.path}</code></Link> : <code>{page.path}</code>}
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.structureCard}>
            <h3>Landing pages lokalne</h3>
            <p>Te podstrony mają łapać lokalny long-tail w regionach turystycznych.</p>
            <ul>
              {localPages.map((page) => (
                <li key={page}><code>{page}</code></li>
              ))}
            </ul>
          </article>

          <article className={styles.structureCard}>
            <h3>Blog ekspercki</h3>
            <p>Blog ma zbierać ruch problem-aware i kierować go do usług oraz cennika.</p>
            <ul>
              {blogTopics.map((page) => (
                <li key={page.path}>
                  {page.live ? <Link to={page.path}><code>{page.path}</code></Link> : <code>{page.path}</code>}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default GrowthPlan;
