import { Helmet } from 'react-helmet-async';
import styles from './LegalPages.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Breadcrumbs from '../components/Breadcrumbs';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Polityka Prywatności | BroSystems</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://brosystems.pl/polityka-prywatnosci" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.legalMain}>
        <div className={`container ${styles.container}`}>
          <Breadcrumbs paths={[{ name: 'Strona Główna', url: '/' }, { name: 'Polityka Prywatności', url: '/polityka-prywatnosci' }]} />
          <div className={styles.header}>
            <h1 className="heading-lg">Polityka Prywatności</h1>
            <p className={styles.lastUpdated}>Ostatnia aktualizacja: 1 listopada 2026 r.</p>
          </div>
          
          <div className={styles.content}>
            <section className={styles.section}>
              <h2>1. Informacje ogólne</h2>
              <p>Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników oraz Klientów w związku z korzystaniem z witryny internetowej oraz usług wdrożeniowych świadczonych przez markę <strong>BroSystems</strong> (zwaną dalej &quot;Administratorem&quot;).</p>
              <p>Polityka jest w pełni zgodna z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych (RODO).</p>
            </section>

            <section className={styles.section}>
              <h2>2. Administrator Danych Osobowych</h2>
              <p>Administratorem Twoich danych osobowych jest Krzysztof Żebrowski, reprezentujący markę technologiczną <strong>BroSystems</strong>. Możesz skontaktować się z Administratorem:</p>
              <ul>
                <li>Za pośrednictwem poczty elektronicznej: <strong>kontakt@brosystems.pl</strong></li>
                <li>Telefonicznie: <strong>+48 600 176 361</strong></li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Cele i podstawy prawne przetwarzania</h2>
              <p>Twoje dane osobowe mogą być przetwarzane w następujących celach:</p>
              <ul>
                <li><strong>Świadczenie usług i realizacja wdrożeń technologicznych:</strong> projektowanie stron www, wdrożenie silnika rezerwacji bezpośrednich, konfiguracja modułu Channel Manager Beds24, integracje API z portalami noclegowymi oraz wsparcie techniczne – na podstawie art. 6 ust. 1 lit. b RODO.</li>
                <li><strong>Procesowanie płatności i subskrypcji:</strong> obsługa transakcji elektronicznych za pośrednictwem operatora Stripe – na podstawie art. 6 ust. 1 lit. b oraz lit. c RODO.</li>
                <li><strong>Kontakt z Użytkownikiem:</strong> odpowiedzi na zapytania ofertowe, kontakt telefoniczny, e-mail lub komunikatory – na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).</li>
                <li><strong>Wypełnianie obowiązków prawnych:</strong> prowadzenie dokumentacji rozliczeniowej i księgowej – na podstawie art. 6 ust. 1 lit. c RODO.</li>
                <li><strong>Działania analityczne, statystyczne i bezpieczeństwa:</strong> optymalizacja wydajności strony, analiza ruchu oraz ochrona przed spamem i nadużyciami – na podstawie art. 6 ust. 1 lit. a oraz lit. f RODO.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Okres przechowywania danych</h2>
              <p>Twoje dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane:</p>
              <ul>
                <li>Dane związane z umowami wdrożeniowymi i subskrypcjami – przez czas trwania współpracy, a po jej zakończeniu przez okres wymagany przepisami prawa (m.in. przedawnienie roszczeń oraz wymogi rozliczeniowe – do 5 lat).</li>
                <li>Dane przetwarzane na podstawie zgody (np. cookies analityczne) – do momentu jej wycofania.</li>
                <li>Dane kontaktowe – do momentu zakończenia korespondencji lub wniesienia skutecznego sprzeciwu.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Prawa Użytkowników</h2>
              <p>W związku z przetwarzaniem Twoich danych osobowych, przysługują Ci następujące prawa:</p>
              <ul>
                <li>Prawo dostępu do treści swoich danych oraz otrzymania ich kopii.</li>
                <li>Prawo do sprostowania (poprawiania) swoich danych.</li>
                <li>Prawo do usunięcia danych (tzw. &quot;prawo do bycia zapomnianym&quot;).</li>
                <li>Prawo do ograniczenia przetwarzania danych.</li>
                <li>Prawo do przenoszenia danych.</li>
                <li>Prawo wniesienia sprzeciwu wobec przetwarzania danych opartego na prawnie uzasadnionym interesie.</li>
                <li>Prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem wcześniejszego przetwarzania.</li>
                <li>Prawo wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
              </ul>
              <p>W celu realizacji powyższych praw wystarczy wysłać wiadomość na adres: <strong>kontakt@brosystems.pl</strong>.</p>
            </section>

            <section className={styles.section}>
              <h2>6. Pliki Cookies (Ciasteczka)</h2>
              <p>Nasza strona wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia jej stabilnego działania, wygody korzystania oraz w celach analitycznych. Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym Użytkownika.</p>
              <h3>Rodzaje wykorzystywanych cookies:</h3>
              <ul>
                <li><strong>Niezbędne (Techniczne):</strong> Konieczne do prawidłowego funkcjonowania witryny (np. zapamiętanie zgód cookies, prawidłowe renderowanie komponentów). Nie mogą zostać wyłączone.</li>
                <li><strong>Analityczne:</strong> Pomagają analizować ruch na stronie i optymalizować doświadczenie użytkowników (np. Google Analytics). Wykorzystywane wyłącznie po wyrażeniu dobrowolnej zgody.</li>
                <li><strong>Marketingowe:</strong> Służące do mierzenia efektywności kampanii promocyjnych. Aktywowane wyłącznie za Twoją zgodą.</li>
              </ul>
              <h3>Zarządzanie plikami cookies:</h3>
              <p>Użytkownik może w każdej chwili zmienić preferencje dotyczące cookies w ustawieniach swojej przeglądarki internetowej lub za pomocą banera preferencji na naszej stronie.</p>
            </section>

            <section className={styles.section}>
              <h2>7. Odbiorcy Danych (Przekazywanie danych)</h2>
              <p>Dla zagwarantowania najwyższego standardu bezpieczeństwa i niezawodności systemów, Twoje dane mogą być powierzane sprawdzonym podmiotom zewnętrznym:</p>
              <ul>
                <li><strong>Operatorom płatności elektronicznych:</strong> w szczególności <strong>Stripe Technology Europe, Limited / Stripe Payments Europe, Ltd.</strong> – w celu bezpiecznej obsługi płatności elektronicznych, transakcji kartowych, szybkiej autoryzacji oraz zarządzania cyklicznymi subskrypcjami.</li>
                <li><strong>Dostawcom technologii systemów rezerwacji i Channel Manager:</strong> w szczególności <strong>Beds24</strong> oraz zintegrowanym portalom noclegowym OTA (np. Booking.com, Airbnb) – w zakresie niezbędnym do technicznego wdrożenia silnika rezerwacji, synchronizacji kalendarzy i obsługi rezerwacji bezpośrednich.</li>
                <li><strong>Dostawcom infrastruktury serwerowej i teleinformatycznej:</strong> wyspecjalizowanym dostawcom zapewniającym bezpieczny hosting, certyfikację SSL/TLS, ciągłość działania sieci oraz obsługę poczty elektronicznej.</li>
                <li><strong>Dostawcom narzędzi analitycznych:</strong> (np. Google Ireland Limited) w celach statystycznych, wyłącznie za zgodą Użytkownika.</li>
              </ul>
              <p>Wszyscy odbiorcy przetwarzają dane w oparciu o restrykcyjne umowy powierzenia przetwarzania danych oraz rygorystyczne standardy bezpieczeństwa zgodne z RODO.</p>
            </section>

            <section className={styles.section}>
              <h2>8. Zmiany w Polityce Prywatności</h2>
              <p>Administrator zastrzega sobie prawo do aktualizacji Polityki Prywatności w przypadku zmian technologicznych lub prawnych. Aktualna wersja dokumentu jest zawsze publikowana na niniejszej podstronie.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
