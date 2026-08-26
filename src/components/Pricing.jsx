import SectionSubtitle from './ui/SectionSubtitle';
import GooeyButton from './ui/GooeyButton';
import styles from './Pricing.module.css';

const packages = [
  {
    name: 'Podstawowy',
    slug: 'wille-domki',
    price: '200 zł / msc',
    badge: 'Wille / Domki',
    description: 'Prosta strona dla małego obiektu np. 1-2 domki.',
    theme: 'blue',
    launchFee: '0 zł',
    highlight: false,
    cta: '/strony-dla-pensjonatow',
    kicker: 'Start dla mniejszych obiektów',
    sections: [
      {
        title: 'Strona WWW',
        items: [
          'szybka, nowoczesna strona oparta na sprawdzonym układzie, który dobrze prowadzi gościa do kontaktu',
          'układ 3-4 zakładek: główna, pokoje lub apartamenty, galeria, kontakt'
        ]
      },
      {
        title: 'System rezerwacji',
        items: [
          'podstawowy widget rezerwacji',
          'prosty formularz kontaktowy albo kalendarz wolnych terminów bez zbędnych kroków'
        ]
      },
      {
        title: 'Hosting i bezpieczeństwo',
        items: [
          'szybki serwer i bezpieczne utrzymanie',
          'darmowy certyfikat SSL i codzienne kopie zapasowe'
        ]
      },
      {
        title: 'Start i opieka',
        items: [
          'strona powstaje zwykle w ciągu tygodnia od dostarczenia materiałów i sprawnej współpracy',
          'drobne poprawki w miesiącu, np. zmiana cennika albo dodanie 3 zdjęć'
        ]
      }
    ]
  },
  {
    name: 'Standard',
    slug: 'pensjonaty',
    price: '250 zł / msc',
    badge: 'Pensjonaty',
    description: 'Strona dla większego obiektu np. willa, 3+ domków.',
    theme: 'purple',
    launchFee: '0 zł',
    highlight: true,
    cta: '/strony-dla-pensjonatow',
    kicker: 'Najczęstszy wybór przy pierwszej porządnej stronie',
    sections: [
      {
        title: 'Strona WWW',
        items: [
          'w pełni spersonalizowana strona z dedykowanymi podstronami dla każdego pokoju albo apartamentu',
          'czytelny układ oferty, który łatwiej zamienia wejścia na wiadomości i rezerwacje'
        ]
      },
      {
        title: 'Pełny system rezerwacji',
        items: [
          'interaktywny kalendarz rezerwacji z widoczną dostępnością',
          'integracja z płatnościami online, np. Tpay lub Przelewy24, żeby gość mógł od razu opłacić zadatek'
        ]
      },
      {
        title: 'Hosting i wydajność',
        items: [
          'priorytetowe zasoby serwera',
          'błyskawiczne ładowanie na telefonach'
        ]
      },
      {
        title: 'Wsparcie techniczne',
        items: [
          'czas reakcji na poprawki do 24h',
          'aktualizacje i bieżąca opieka techniczna'
        ]
      },
      {
        title: 'Start i rozwój',
        items: [
          'strona powstaje zwykle w ciągu tygodnia od dostarczenia materiałów i sprawnej współpracy',
          'podstawowe przygotowanie strony pod wybraną miejscowość, np. Zakopane albo Szczyrk'
        ]
      }
    ]
  },
  {
    name: 'Pro',
    slug: 'apartamenty-premium',
    price: '350 zł / msc',
    badge: 'Apartamenty / Premium',
    description: 'Strona + system rezerwacji + channel manager Beds24.',
    theme: 'gold',
    launchFee: '0 zł',
    highlight: false,
    cta: '/strony-dla-apartamentow',
    kicker: 'Dla większej skali i mocniejszej automatyzacji',
    sections: [
      {
        title: 'Strona WWW',
        items: [
          'indywidualny projekt premium',
          'wersja dwujęzyczna, np. PL + EN, kluczowa dla gór i nad morzem'
        ]
      },
      {
        title: 'Zaawansowany system rezerwacji',
        items: [
          'wszystko z pakietu Standard',
          'channel manager z dwukierunkową synchronizacją kalendarza z Booking.com i Airbnb',
          'automatyczne maile do gości: potwierdzenia, przypomnienia, kody do drzwi'
        ]
      },
      {
        title: 'Dedykowany support',
        items: [
          'bezpośredni numer telefonu',
          'pomoc w nagłych wypadkach także w weekendy, co jest kluczowe w sezonie'
        ]
      },
      {
        title: 'Start i rozwój',
        items: [
          'strona powstaje zwykle w ciągu tygodnia od dostarczenia materiałów i sprawnej współpracy',
          'comiesięczne sprawdzanie najważniejszych fraz',
          'rozwijanie treści i dokładanie nowych stron pod lokalne zapytania'
        ]
      }
    ]
  }
];

const Pricing = () => {
  return (
    <section id="cennik" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionSubtitle>Pakiety abonamentowe</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Wybierz pakiet, z którym szybciej uruchomisz stronę i zaczniesz zbierać więcej zapytań</h2>
          <p className={styles.lead}>
            Najczęściej zaczynam współpracę z obiektami, które nie mają jeszcze strony albo mają stronę, która nie pomaga w sprzedaży. Dlatego pakiety są ułożone tak, żeby wejść bez opłaty na start, ruszyć szybko po dostarczeniu materiałów i od razu prowadzić gościa do kontaktu albo rezerwacji.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg) => (
            <article key={pkg.slug} className={styles.card} data-theme={pkg.theme}>
              <div className={styles.cardTop}>
                <span className={styles.badge}>{pkg.badge}</span>
                {pkg.highlight && <span className={styles.recommended}>Najpopularniejszy</span>}
              </div>

              <h3 className={styles.cardTitle}>Pakiet {pkg.name}</h3>
              <p className={styles.kicker}>{pkg.kicker}</p>
              <p className={styles.cardPrice}>{pkg.price}</p>
              <p className={styles.launchFee}>Opłata na start: <strong>{pkg.launchFee}</strong></p>
              <p className={styles.cardDescription}>{pkg.description}</p>

              <div className={styles.sections}>
                {pkg.sections.map((section) => (
                  <div key={section.title} className={styles.block}>
                    <h4>{section.title}</h4>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <GooeyButton href={pkg.cta} variant="outline">Zobacz szczegóły</GooeyButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
