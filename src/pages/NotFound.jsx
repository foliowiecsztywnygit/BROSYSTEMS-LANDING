import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './NotFound.module.css';
import GooeyButton from '../components/ui/GooeyButton';

const NotFound = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className={styles.container}>
        <div className="container">
          <h1 className="heading-xl">Błąd 404</h1>
          <p className="text-lg" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            Niestety, strona której szukasz nie istnieje lub została przeniesiona.
          </p>
          <GooeyButton href="/" variant="primary">Wróć na stronę główną</GooeyButton>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;