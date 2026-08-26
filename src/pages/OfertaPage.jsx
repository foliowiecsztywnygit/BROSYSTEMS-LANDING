import { Helmet } from 'react-helmet-async';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

const OfertaPage = () => {
  return (
    <>
      <Helmet>
        <title>Oferta i cennik stron dla noclegów | BroSystems</title>
        <meta name="description" content="Pakiety abonamentowe i wdrożenia jednorazowe dla pensjonatów i apartamentów. Sprawdź, ile kosztuje stworzenie nowoczesnej strony z systemem rezerwacji." />
        <link rel="canonical" href="https://www.brosystems.pl/oferta" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Breadcrumbs paths={[{ name: 'Strona Główna', url: '/' }, { name: 'Oferta', url: '/oferta' }]} />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default OfertaPage;
