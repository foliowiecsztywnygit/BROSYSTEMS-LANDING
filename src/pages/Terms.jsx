import { Helmet } from 'react-helmet-async';
import styles from './LegalPages.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Breadcrumbs from '../components/Breadcrumbs';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Regulamin Świadczenia Usług | BroSystems</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://brosystems.pl/regulamin" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.legalMain}>
        <div className={`container ${styles.container}`}>
          <Breadcrumbs paths={[{ name: 'Strona Główna', url: '/' }, { name: 'Regulamin', url: '/regulamin' }]} />
          <div className={styles.header}>
            <h1 className="heading-lg">Regulamin Świadczenia Usług</h1>
            <p className={styles.lastUpdated}>Ostatnia aktualizacja: 1 listopada 2026 r.</p>
          </div>
          
          <div className={styles.content}>
            <section className={styles.section}>
              <h2>§ 1. Postanowienia ogólne</h2>
              <p>1. Niniejszy Regulamin określa ogólne warunki, zasady oraz standard świadczenia usług cyfrowych i wdrożeniowych przez markę <strong>BroSystems</strong>, reprezentowaną przez Krzysztofa Żebrowskiego (zwanego dalej &quot;Usługodawcą&quot;).</p>
              <p>2. BroSystems dostarcza kompleksowe rozwiązania cyfrowe dedykowane dla branży noclegowej (pensjonatów, willi, domków i apartamentów), obejmujące projektowanie nowoczesnych stron internetowych, wdrożenie autorskich systemów rezerwacji bezpośrednich oraz integrację modułu Channel Manager zsynchronizowanego z portalami zewnętrznymi w technologii Beds24.</p>
              <p>3. Obsługa płatności elektronicznych, rozliczeń wdrożeniowych oraz planów subskrypcyjnych realizowana jest za pośrednictwem globalnego, certyfikowanego operatora płatności <strong>Stripe</strong> (Stripe Technology Europe, Limited / Stripe Payments Europe, Ltd.).</p>
              <p>4. Z Usługodawcą można kontaktować się poprzez adres e-mail: <strong>kontakt@brosystems.pl</strong> lub pod numerem telefonu: <strong>+48 600 176 361</strong>.</p>
              <p>5. Regulamin jest nieprzerwanie i nieodpłatnie udostępniony na stronie internetowej w sposób umożliwiający jego pozyskanie, odtwarzanie i utrwalanie.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 2. Definicje</h2>
              <ul>
                <li><strong>Klient</strong> – podmiot gospodarczy (osoba fizyczna prowadząca działalność gospodarczą, spółka) lub osoba fizyczna zarządzająca obiektem noclegowym, zamawiająca wdrożenie systemu lub korzystająca z usług świadczonych przez Usługodawcę.</li>
                <li><strong>Usługi / System</strong> – kompleksowe usługi informatyczne obejmujące: projektowanie i wdrożenie dedykowanej strony internetowej, konfigurację silnika rezerwacji bezpośrednich (booking engine), integrację z operatorem płatności online Stripe, konfigurację centralnego panelu Channel Manager (Beds24) oraz automatyzację komunikacji z gośćmi.</li>
                <li><strong>Channel Manager</strong> – moduł wielokanałowego zarządzania dostępnością, rezerwacjami i stawkami, oparty o architekturę technologiczną Beds24, zapewniający dwukierunkową synchronizację w czasie rzeczywistym z portalami OTA (m.in. Booking.com, Airbnb).</li>
                <li><strong>Operator Płatności</strong> – Stripe Technology Europe, Limited / Stripe Payments Europe, Ltd., dostawca zabezpieczonej infrastruktury płatności elektronicznych.</li>
                <li><strong>Umowa / Zamówienie</strong> – porozumienie stron określające zakres wdrożenia, specyfikację techniczną lub wybrany plan subskrypcyjny, zawierane drogą elektroniczną.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>§ 3. Rodzaje i zakres świadczonych usług</h2>
              <p>1. Usługodawca świadczy dedykowane usługi technologiczne dla rynku hotelarskiego i obiektów noclegowych, w szczególności:</p>
              <ul>
                <li>Projektowanie i programowanie witryn internetowych zoptymalizowanych pod kątem szybkości ładowania, urządzeń mobilnych oraz konwersji na rezerwacje bezpośrednie.</li>
                <li>Wdrażanie zaawansowanego silnika rezerwacji bez prowizji (0% prowizji od pobytów) zintegrowanego z płatnościami online Stripe (obsługa kart płatniczych, BLIK, szybkich przelewów).</li>
                <li>Wdrożenie i konfigurację dwukierunkowej synchronizacji kalendarzy z portalami OTA (Booking.com, Airbnb i inne) w oparciu o silnik Beds24 w celu eliminacji zjawiska overbookingu.</li>
                <li>Utrzymanie serwerowe, monitoring bezpieczeństwa, aktualizacje oraz ciągłe wsparcie techniczne w ramach planów abonamentowych.</li>
              </ul>
              <p>2. Szczegółowy zakres prac, konfiguracji oraz koszt wdrożenia każdorazowo ustalany jest z Klientem w formie elektronicznej lub w ramach dedykowanego pakietu ofertowego.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 4. Zawarcie i realizacja umowy</h2>
              <p>1. Do zawarcia Umowy dochodzi z chwilą akceptacji warunków oferty przez Klienta oraz uregulowania płatności wdrożeniowej lub uruchomienia subskrypcji za pośrednictwem bezpiecznego panelu płatności Stripe.</p>
              <p>2. Usługodawca zobowiązuje się do realizacji wdrożenia z zachowaniem najwyższej staranności technologicznej, zgodnie ze współczesnymi standardami bezpieczeństwa, wydajności sieciowej i SEO.</p>
              <p>3. Klient zobowiązany jest do udostępnienia materiałów i danych niezbędnych do konfiguracji obiektu (m.in. cenniki, opisy jednostek mieszkalnych, zdjęcia, dane do sparowania kalendarzy OTA). Sprawne przekazanie materiałów warunkuje szybki start systemu.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 5. Płatności i rozliczenia</h2>
              <p>1. Wszelkie rozliczenia z tytułu prac wdrożeniowych, licencji technologicznych oraz usług abonamentowych realizowane są w sposób zautomatyzowany i bezpieczny za pośrednictwem operatora <strong>Stripe</strong>.</p>
              <p>2. Klient ma możliwość płatności m.in. kartą płatniczą (debetową/kredytową), szybkimi przelewami elektronicznymi lub za pomocą płatności cyklicznych (subskrypcyjnych).</p>
              <p>3. W przypadku pakietów abonamentowych (obejmujących utrzymanie infrastruktury serwerowej, synchronizację Channel Managera i wsparcie techniczne) opłata pobierana jest cyklicznie zgodnie z wybranym interwałem rozliczeniowym (miesięcznym lub rocznym). Klient może zrezygnować z subskrypcji w dowolnym momencie z zachowaniem okresu opłaconego.</p>
              <p>4. Po każdej zrealizowanej transakcji Klient otrzymuje drogą elektroniczną potwierdzenie płatności oraz odpowiedni dokument księgowy.</p>
              <p>5. W przypadku nieuregulowania płatności lub niepowodzenia transakcji subskrypcyjnej, Usługodawca po uprzednim kontakcie z Klientem ma prawo wstrzymać świadczenie usług wsparcia lub synchronizację zewnętrznych modułów do czasu odnowienia płatności.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 6. Prawa autorskie i własność</h2>
              <p>1. Z chwilą pełnego uregulowania opłaty za etap wdrożeniowy, Klient uzyskuje prawo do bezterminowego korzystania z wdrożonego serwisu internetowego na potrzeby prowadzonego obiektu.</p>
              <p>2. Materiały, zdjęcia, logotypy oraz znaki towarowe przekazane przez Klienta pozostają jego wyłączną własnością.</p>
              <p>3. Usługodawca zastrzega sobie prawo do umieszczenia informacji o wdrożeniu w swoim portfolio referencyjnym na stronie BroSystems, chyba że strony pisemnie ustaliły odmienne warunki poufności.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 7. Bezpieczeństwo i odpowiedzialność</h2>
              <p>1. Usługodawca stosuje rygorystyczne standardy ochrony przesyłu danych, w tym certyfikaty szyfrowania SSL/TLS, bezpieczne tokeny uwierzytelniające API oraz szyfrowaną komunikację z silnikiem Beds24 i Stripe.</p>
              <p>2. Usługodawca ponosi odpowiedzialność za prawidłową architekturę techniczną i konfigurację systemów wdrożonych na rzecz Klienta.</p>
              <p>3. Usługodawca nie ponosi odpowiedzialności za zakłócenia w działaniu systemów wynikające z przyczyn zewnętrznych i niezależnych, takich jak globalne awarie łączności, prace serwisowe po stronie zewnętrznych portali OTA (Booking.com, Airbnb), bankowych systemów rozliczeniowych lub działanie siły wyższej.</p>
              <p>4. Wdrożony system objęty jest opieką techniczną gwarantującą bieżącą pomoc w razie pytań lub potrzeby modyfikacji parametrów obiektu.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 8. Postępowanie reklamacyjne i wsparcie techniczne</h2>
              <p>1. Wszelkie zgłoszenia serwisowe oraz reklamacje dotyczące funkcjonowania usług należy kierować drogą elektroniczną na adres: <strong>kontakt@brosystems.pl</strong> lub telefonicznie pod numer: <strong>+48 600 176 361</strong>.</p>
              <p>2. Zgłoszenia o krytycznym znaczeniu dla procesu rezerwacyjnego obsługiwane są w trybie priorytetowym.</p>
              <p>3. Standardowy czas udzielenia odpowiedzi na formalną reklamację wynosi do 14 dni roboczych.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 9. Postanowienia końcowe</h2>
              <p>1. W sprawach nieuregulowanych w niniejszym Regulaminie zastosowanie mają właściwe przepisy prawa polskiego, w tym Kodeksu cywilnego.</p>
              <p>2. Wszelkie spory wynikające z realizacji usług strony będą dążyły rozstrzygać w drodze porozumienia polubownego.</p>
              <p>3. Regulamin wchodzi w życie z dniem jego publikacji na stronie internetowej.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
