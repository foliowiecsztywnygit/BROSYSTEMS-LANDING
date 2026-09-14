import { Helmet } from 'react-helmet-async';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import styles from './CampaignPage.module.css';

const painPoints = [
  {
    emoji: '📞',
    title: 'Telefony o każdej porze',
    description: 'Goście dzwonią o 22:00, w niedzielę, w Wigillię. Pytają o to samo: „Czy macie wolne?" — a Ty musisz odbierać, bo inaczej tracisz rezerwację.',
  },
  {
    emoji: '💸',
    title: '15-18% prowizji dla Booking',
    description: 'Każda rezerwacja przez portal to kilkaset złotych mniej w Twojej kieszeni. W sezonie to tysiące złotych, które mogłyby zostać u Ciebie.',
  },
  {
    emoji: '📋',
    title: 'Chaos z rezerwacjami',
    description: 'Zeszyt, Excel, Messenger, telefon — informacje porozrzucane po 4 miejscach. Jeden błąd i masz overbooking lub wściekłego gościa.',
  },
];

const advantages = [
  {
    title: 'Goście rezerwują 24/7 sami',
    description: 'Twoja strona przyjmuje rezerwacje i zadatki automatycznie. Gość widzi kalendarz, wybiera termin, płaci — a Ty dostajesz powiadomienie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Zero prowizji od rezerwacji',
    description: 'Płacisz stałą, niską opłatę miesięczną. Nie oddajesz 15% z każdej nocy. Każda złotówka z rezerwacji trafia do Ciebie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Synchronizacja z Booking i Airbnb',
    description: 'Kalendarz synchronizuje się automatycznie z OTA. Nie musisz ręcznie blokować terminów — system pilnuje tego za Ciebie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: 'Automatyczne zadatki i potwierdzenia',
    description: 'System pobiera płatność online, wysyła potwierdzenie z kodem i instrukcjami. Gość dostaje profesjonalną obsługę, a Ty nie ruszasz palcem.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: '1',
    title: 'Bezpłatna rozmowa i audyt strony',
    description: 'Sprawdzimy Twoją obecną stronę (lub brak strony), pokażemy co blokuje rezerwacje i ustalimy plan działania dopasowany do Twojego obiektu.',
  },
  {
    number: '2',
    title: 'Budowa strony i wdrożenie systemu',
    description: 'W ciągu kilku dni dostajesz gotową stronę z systemem rezerwacji, kalendarzem, płatnościami online i synchronizacją z portalami OTA.',
  },
  {
    number: '3',
    title: 'Rezerwacje na autopilocie',
    description: 'System pracuje non-stop. Goście rezerwują sami, Ty odzyskujesz czas i pieniądze. Stała opłata, zero prowizji, zero niespodzianek.',
  },
];

const CampaignPage = () => {
  return (
    <>
      <Helmet>
        <title>System rezerwacji dla pensjonatów | BroSystems</title>
        <meta
          name="description"
          content="Odzyskaj rezerwacje bezpośrednie i przestań płacić prowizje. System rezerwacji na Twojej stronie – 0% prowizji, automatyczne zadatki, synchronizacja z Booking i Airbnb."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://brosystems.pl/witaj" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.pageMain}>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroInner}`}>
            <span className={styles.badge}>Dla właścicieli pensjonatów, domków i willi</span>
            <h1 className={styles.heroTitle}>
              Ile gości traci Twój pensjonat, bo <strong>nie masz systemu rezerwacji</strong> na stronie?
            </h1>
            <p className={styles.heroSub}>
              Goście chcą rezerwować od razu — nie dzwonić, nie pisać, nie czekać.
              Jeśli Twoja strona tego nie umożliwia, tracisz ich na rzecz konkurencji z Booking.
            </p>
          </div>
        </section>

        <div className={`container ${styles.container}`}>
          {/* Pain points */}
          <section className={styles.painSection}>
            <div className={styles.painHeader}>
              <h2>Rozpoznajesz te problemy?</h2>
              <p>Każdy z nich kosztuje Cię pieniądze i czas</p>
            </div>
            <div className={styles.painGrid}>
              {painPoints.map((p) => (
                <div key={p.title} className={styles.painCard}>
                  <span className={styles.painEmoji}>{p.emoji}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Video */}
          <section className={styles.videoSection}>
            <div className={styles.videoLabel}>
              <h2>Zobacz jak to działa w praktyce</h2>
              <p>Cały proces od wejścia gościa na stronę, przez rezerwację, aż po automatyczną płatność</p>
            </div>
            <VideoPlayer src="/demo.mp4" label="Kliknij, żeby obejrzeć demo" />
          </section>

          {/* Advantages */}
          <section className={styles.advantagesSection}>
            <div className={styles.advantagesHeader}>
              <h2>Co dokładnie dostajesz?</h2>
              <p>System, który pracuje za Ciebie, oszczędza pieniądze i profesjonalizuje obsługę gości</p>
            </div>
            <div className={styles.advantagesGrid}>
              {advantages.map((a) => (
                <div key={a.title} className={styles.advantageCard}>
                  <div className={styles.advantageIcon}>{a.icon}</div>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className={styles.stepsSection}>
            <div className={styles.stepsHeader}>
              <h2>Jak wygląda proces wdrożenia?</h2>
              <p>Od rozmowy do działającego systemu w kilka dni</p>
            </div>
            <div className={styles.stepsTimeline}>
              {steps.map((s) => (
                <div key={s.number} className={styles.step}>
                  <div className={styles.stepNumber}>{s.number}</div>
                  <div className={styles.stepContent}>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Social proof */}
          <section className={styles.proofSection}>
            <h2>Wdrożenia, które już działają</h2>
            <div className={styles.proofLogos}>
              <div className={styles.proofLogo}>
                <img src="/willarysy.png" alt="Willa Rysy" loading="lazy" />
              </div>
              <div className={styles.proofLogo}>
                <img src="/domkinazrabku.png" alt="Domki na Zrąbku" loading="lazy" />
              </div>
              <div className={styles.proofLogo}>
                <img src="/tatrzanski-wierch.png" alt="Tatrzański Wierch" loading="lazy" />
              </div>
              <div className={styles.proofLogo}>
                <img src="/willaszymkowka.png" alt="Willa Szymkówka" loading="lazy" />
              </div>
            </div>
            <p className={styles.proofQuote}>
              „Przez 3 lata oddawałem Bookingowi po 15% z każdej nocy. Teraz ponad połowa rezerwacji
              przychodzi przez moją stronę i każda złotówka zostaje u mnie."
            </p>
          </section>

          {/* CTA */}
          <section className={styles.ctaSection}>
            <h2>Chcesz taki system u siebie?</h2>
            <p>
              Porozmawiajmy 15 minut. Sprawdzę Twoją obecną sytuację i pokażę,
              co dokładnie możemy zrobić dla Twojego obiektu.
            </p>
            <div className={styles.ctaContacts}>
              <a href="tel:+48600176361" className={styles.ctaContact}>
                <span className={styles.ctaContactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>
                  <span className={styles.ctaContactLabel}>Zadzwoń teraz</span>
                  <br />
                  <span className={styles.ctaContactValue}>+48 600 176 361</span>
                </span>
              </a>

              <a href="https://wa.me/48600176361" target="_blank" rel="noopener noreferrer" className={styles.ctaContact}>
                <span className={styles.ctaContactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </span>
                <span>
                  <span className={styles.ctaContactLabel}>Napisz na WhatsApp</span>
                  <br />
                  <span className={styles.ctaContactValue}>WhatsApp</span>
                </span>
              </a>

              <a href="mailto:kontakt@brosystems.pl" className={styles.ctaContact}>
                <span className={styles.ctaContactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span>
                  <span className={styles.ctaContactLabel}>Wyślij maila</span>
                  <br />
                  <span className={styles.ctaContactValue}>kontakt@brosystems.pl</span>
                </span>
              </a>
            </div>
            <p className={styles.ctaMicro}>
              Bez zobowiązań · Rozmowa trwa 15 minut · Start za 0 zł · Bez umów
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CampaignPage;
