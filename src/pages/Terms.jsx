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
        <link rel="canonical" href="https://www.brosystems.pl/regulamin" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.legalMain}>
        <div className={`container ${styles.container}`}>
          <Breadcrumbs paths={[{ name: 'Strona Główna', url: '/' }, { name: 'Regulamin', url: '/regulamin' }]} />
          <div className={styles.header}>
            <h1 className="heading-lg">Regulamin Świadczenia Usług</h1>
            <p className={styles.lastUpdated}>Ostatnia aktualizacja: 30 kwietnia 2026 r.</p>
          </div>
          
          <div className={styles.content}>
            <section className={styles.section}>
              <h2>§ 1. Postanowienia ogólne</h2>
              <p>1. Niniejszy Regulamin określa ogólne warunki, zasady oraz sposób świadczenia usług drogą elektroniczną oraz stacjonarnie przez Krzysztofa Żebrowskiego, działającego pod marką BroSystems (zwanego dalej &quot;Usługodawcą&quot;).</p>
              <p>2. Usługodawca działa jako osoba fizyczna, nieprowadząca zarejestrowanej działalności gospodarczej. Rozliczenia z Klientami (wystawianie faktur VAT, podpisywanie umów o dzieło z przeniesieniem praw autorskich) realizowane są za pośrednictwem zewnętrznej platformy dla freelancerów – <strong>UseMe.com</strong> (Useme Sp. z o.o.).</p>
              <p>3. Z Usługodawcą można kontaktować się poprzez adres e-mail: <strong>kontakt@brosystems.pl</strong> lub pod numerem telefonu: <strong>+48 600 176 361</strong>.</p>
              <p>4. Regulamin jest nieprzerwanie i nieodpłatnie udostępniony przez Usługodawcę na stronie internetowej w sposób umożliwiający jego pozyskanie, odtwarzanie i utrwalanie.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 2. Definicje</h2>
              <ul>
                <li><strong>Klient</strong> - osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która korzysta z usług świadczonych przez Usługodawcę.</li>
                <li><strong>Usługi</strong> - wszelkie usługi świadczone przez BroSystems, w szczególności: projektowanie, tworzenie stron internetowych, aplikacji webowych, sklepów e-commerce, konsultacje technologiczne, SEO.</li>
                <li><strong>Umowa</strong> - umowa o świadczenie usług zawierana na odległość lub stacjonarnie między Klientem a Usługodawcą, na zasadach określonych w niniejszym Regulaminie oraz szczegółowych ustaleniach ofertowych.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>§ 3. Rodzaje i zakres świadczonych usług</h2>
              <p>1. Usługodawca świadczy usługi z zakresu IT, w tym projektowania graficznego (UI/UX) i tworzenia dedykowanego oprogramowania na zamówienie.</p>
              <p>2. Szczegółowy zakres, harmonogram (np. Etapy: Kontakt, Umowa, Projekt, Wdrożenie) oraz koszt usług są każdorazowo ustalane indywidualnie z Klientem w formie pisemnej (e-mail) lub poprzez zawarcie odrębnej Umowy o Dzieło / Umowy o Świadczenie Usług.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 4. Zawarcie i realizacja umowy</h2>
              <p>1. Do zawarcia Umowy dochodzi poprzez akceptację dedykowanej oferty przez Klienta lub podpisanie formalnego dokumentu (w formie elektronicznej bądź papierowej).</p>
              <p>2. Usługodawca zobowiązuje się do wykonania usług z należytą starannością, zgodnie z zasadami współczesnej wiedzy technicznej oraz ustaloną specyfikacją.</p>
              <p>3. Klient zobowiązany jest do terminowego dostarczania materiałów (tekstów, zdjęć, dostępów) niezbędnych do realizacji zlecenia. Opóźnienia po stronie Klienta mogą wpływać na harmonogram prac.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 5. Płatności i rozliczenia</h2>
              <p>1. Wynagrodzenie z tytułu świadczonych usług płatne jest na podstawie wystawionych faktur VAT (bądź pro-forma) wygenerowanych za pośrednictwem platformy UseMe.com.</p>
              <p>2. UseMe Sp. z o.o. pełni rolę pośrednika (tzw. pracodawcy w umowie o dzieło), który na podstawie wykonanej pracy przejmuje obowiązki podatkowe i prawne, a następnie wystawia finalną fakturę VAT Klientowi.</p>
              <p>3. Domyślnie rozliczenie następuje na podstawie systemu zaliczkowego/zadatku (zabezpieczonego przez UseMe) przed przystąpieniem do prac oraz rozliczenia końcowego po wdrożeniu projektu, chyba że indywidualna umowa stanowi inaczej.</p>
              <p>4. W przypadku braku terminowych płatności Usługodawca ma prawo wstrzymać świadczenie usług do momentu uregulowania należności.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 6. Prawa autorskie</h2>
              <p>1. Autorskie prawa majątkowe do stworzonych kodów źródłowych, grafik, czy projektów przechodzą na Klienta dopiero po pełnym uregulowaniu należności finansowych (zapłacie 100% wynagrodzenia).</p>
              <p>2. Usługodawca zastrzega sobie prawo do umieszczenia wykonanego projektu w swoim portfolio (na stronie internetowej oraz w mediach społecznościowych) po jego wdrożeniu i upublicznieniu, chyba że strony umówią się na klauzulę poufności (NDA).</p>
            </section>

            <section className={styles.section}>
              <h2>§ 7. Odpowiedzialność i gwarancja</h2>
              <p>1. Usługodawca ponosi odpowiedzialność wyłącznie za szkody powstałe z jego winy umyślnej.</p>
              <p>2. Usługodawca udziela gwarancji na wykonane przez siebie oprogramowanie na okres ustalony w odrębnej umowie (domyślnie obejmuje on usuwanie ewentualnych błędów programistycznych &quot;bugów&quot; zgłoszonych w pierwszych 30 dniach po wdrożeniu, o ile kod nie był modyfikowany przez osoby trzecie).</p>
              <p>3. Usługodawca nie odpowiada za przerwy w dostępie do usług wynikające z awarii zewnętrznych dostawców (np. hosting, Vercel, serwery domen).</p>
            </section>

            <section className={styles.section}>
              <h2>§ 8. Postępowanie reklamacyjne i rozwiązywanie sporów</h2>
              <p>1. Wszelkie reklamacje związane ze świadczeniem Usług należy zgłaszać na adres: kontakt@brosystems.pl.</p>
              <p>2. Reklamacja powinna zawierać szczegółowy opis problemu oraz oczekiwania Klienta. Usługodawca rozpatruje reklamacje w terminie 14 dni roboczych.</p>
              <p>3. Wszelkie spory wynikające z realizacji umów strony będą starały się rozwiązywać polubownie. W przypadku braku porozumienia sądem właściwym będzie sąd właściwy dla siedziby Usługodawcy.</p>
            </section>

            <section className={styles.section}>
              <h2>§ 9. Postanowienia końcowe</h2>
              <p>1. W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie powszechnie obowiązujące przepisy prawa polskiego, w szczególności Kodeksu cywilnego.</p>
              <p>2. Regulamin wchodzi w życie z dniem jego publikacji na stronie internetowej.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
