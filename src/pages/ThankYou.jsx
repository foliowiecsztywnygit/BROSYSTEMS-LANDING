import { Helmet } from 'react-helmet-async';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GooeyButton from '../components/ui/GooeyButton';
import styles from './NotFound.module.css'; // Reusing NotFound styles for simple layout

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Dziękuję za wiadomość | BroSystems</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.container}>
        <div className="container">
          <h1 className="heading-xl">Wiadomość wysłana</h1>
          <p className="text-lg" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            Dziękuję za kontakt! Odezwiemy się do Ciebie najszybciej jak to możliwe.
          </p>
          <GooeyButton href="/" variant="primary">Wróć na stronę główną</GooeyButton>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
