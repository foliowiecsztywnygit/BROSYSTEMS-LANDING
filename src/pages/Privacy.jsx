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
        <link rel="canonical" href="https://www.brosystems.pl/polityka-prywatnosci" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.legalMain}>
        <div className={`container ${styles.container}`}>
          <Breadcrumbs paths={[{ name: 'Strona Główna', url: '/' }, { name: 'Polityka Prywatności', url: '/polityka-prywatnosci' }]} />
          <div className={styles.header}>
            <h1 className="heading-lg">Polityka Prywatności</h1>
            <p className={styles.lastUpdated}>Ostatnia aktualizacja: 30 kwietnia 2026 r.</p>
          </div>
          
          <div className={styles.content}>
            <section className={styles.section}>
              <h2>1. Informacje ogólne</h2>
              <p>Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług i strony internetowej prowadzonej przez BroSystems Krzysztof Żebrowski (dalej &quot;Administrator&quot;).</p>
              <p>Polityka jest zgodna z wymogami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych (RODO).</p>
            </section>

            <section className={styles.section}>
              <h2>2. Administrator Danych Osobowych</h2>
              <p>Administratorem Twoich danych osobowych jest Krzysztof Żebrowski, działający pod marką BroSystems jako osoba fizyczna nieprowadząca działalności gospodarczej. Możesz skontaktować się z Administratorem:</p>
              <ul>
                <li>Za pośrednictwem poczty elektronicznej: <strong>kontakt@brosystems.pl</strong></li>
                <li>Telefonicznie: <strong>+48 600 176 361</strong></li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Cele i podstawy prawne przetwarzania</h2>
              <p>Twoje dane osobowe mogą być przetwarzane w następujących celach:</p>
              <ul>
                <li><strong>Świadczenie usług i realizacja umów:</strong> (np. tworzenie stron www, aplikacji) na podstawie art. 6 ust. 1 lit. b RODO.</li>
                <li><strong>Kontakt z Użytkownikiem:</strong> (np. odpowiedź na wiadomości z formularza lub email) na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).</li>
                <li><strong>Realizacja obowiązków prawnych:</strong> (np. wystawianie faktur, prowadzenie dokumentacji księgowej) na podstawie art. 6 ust. 1 lit. c RODO.</li>
                <li><strong>Działania analityczne i statystyczne:</strong> (np. analiza ruchu na stronie) na podstawie wyrażonej zgody (art. 6 ust. 1 lit. a RODO) oraz prawnie uzasadnionego interesu.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Okres przechowywania danych</h2>
              <p>Twoje dane osobowe będą przechowywane przez okres niezbędny do realizacji celu, dla którego zostały zebrane:</p>
              <ul>
                <li>Dane związane z umowami – przez czas ich trwania, a po ich zakończeniu przez okres wynikający z przepisów prawa (np. przedawnienie roszczeń – do 3 lub 6 lat, dane księgowe – 5 lat).</li>
                <li>Dane przetwarzane na podstawie zgody – do momentu jej cofnięcia.</li>
                <li>Dane zebrane do celów kontaktowych – do momentu wniesienia skutecznego sprzeciwu lub zakończenia korespondencji.</li>
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
                <li>Prawo wniesienia sprzeciwu wobec przetwarzania.</li>
                <li>Prawo do cofnięcia zgody w dowolnym momencie (jeśli przetwarzanie odbywa się na jej podstawie).</li>
              </ul>
              <p>W celu realizacji swoich praw, skontaktuj się z Administratorem pod adresem: kontakt@brosystems.pl.</p>
            </section>

            <section className={styles.section}>
              <h2>6. Pliki Cookies (Ciasteczka)</h2>
              <p>Nasza strona wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia jej prawidłowego działania, celów analitycznych i statystycznych. Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym Użytkownika.</p>
              <h3>Rodzaje wykorzystywanych cookies:</h3>
              <ul>
                <li><strong>Niezbędne (Techniczne):</strong> Konieczne do prawidłowego funkcjonowania strony. Nie mogą zostać wyłączone. (np. zapisywanie preferencji dotyczących zgody na cookies).</li>
                <li><strong>Analityczne:</strong> Pomagają zrozumieć, w jaki sposób Użytkownicy korzystają ze strony, co pozwala na jej ulepszanie. (np. Google Analytics). Korzystamy z nich wyłącznie za Twoją zgodą.</li>
                <li><strong>Marketingowe:</strong> Używane do śledzenia Użytkowników w witrynach. Służą do wyświetlania trafnych i angażujących reklam. Używane wyłącznie za Twoją zgodą.</li>
              </ul>
              <h3>Zarządzanie plikami cookies:</h3>
              <p>Użytkownik ma możliwość zarządzania plikami cookies z poziomu ustawień swojej przeglądarki internetowej oraz za pomocą panelu preferencji cookies dostępnego na naszej stronie.</p>
            </section>

            <section className={styles.section}>
              <h2>7. Odbiorcy Danych (Przekazywanie danych)</h2>
              <p>Twoje dane mogą być przekazywane podmiotom przetwarzającym je na zlecenie Administratora (tzw. procesorom), m.in.:</p>
              <ul>
                <li>dostawcom usług hostingowych (np. Vercel),</li>
                <li>platformie <strong>UseMe.com</strong> (Useme Sp. z o.o.) - w celu zawierania umów o dzieło z przeniesieniem praw autorskich i wystawiania faktur VAT Klientom, co wiąże się z realizacją płatności i wymogami prawa podatkowego.</li>
                <li>dostawcom systemów do analityki (np. Google).</li>
              </ul>
              <p>Podmioty te przetwarzają dane wyłącznie na podstawie umowy powierzenia lub zaakceptowanych przez Użytkownika regulaminów platform pośredniczących.</p>
            </section>

            <section className={styles.section}>
              <h2>8. Zmiany w Polityce Prywatności</h2>
              <p>Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. O wszelkich zmianach Użytkownicy będą informowani poprzez publikację nowej wersji dokumentu na stronie internetowej.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
