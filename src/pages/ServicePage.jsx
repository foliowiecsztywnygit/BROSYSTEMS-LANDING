import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GooeyButton from '../components/ui/GooeyButton';
import { servicePageMap } from '../data/servicePages';
import { blogPostMap } from '../data/blogPosts';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './ContentHub.module.css';

const ServicePage = ({ pageKey }) => {
  const page = servicePageMap[pageKey];

  if (!page) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`https://www.brosystems.pl${page.path}`} />
      </Helmet>
      <TopBar />
      <Navbar />
      <main className={styles.pageMain}>
        <div className={`container ${styles.pageContainer}`}>
          <Breadcrumbs paths={[{ name: 'Strona Główna', url: '/' }, { name: 'Usługi', url: '/#uslugi' }, { name: page.title, url: page.path }]} />
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Oferta dla obiektu noclegowego</span>
              <h1 className={`heading-md ${styles.title}`}>{page.title}</h1>
              <p className={styles.intro}>{page.intro}</p>
              <div className={styles.heroActions}>
                <GooeyButton href="/#kontakt" variant="outline">Porozmawiajmy</GooeyButton>
                <GooeyButton href="/oferta" variant="outline">Zobacz pakiety</GooeyButton>
              </div>
            </div>

            <aside className={styles.statsCard}>
              <div>
                <p className={styles.statLabel}>Dla kogo</p>
                <p className={styles.statValue}>{page.audience}</p>
              </div>
              <div>
                <p className={styles.statLabel}>Najważniejszy efekt</p>
                <p className={styles.statValue}>{page.outcomes[0]}</p>
              </div>
              <div>
                <p className={styles.statLabel}>Powiązane działanie</p>
                <p className={styles.statValue}>Połączenie strony, lokalnej widoczności i prostej ścieżki rezerwacji.</p>
              </div>
            </aside>
          </section>

          <section className={styles.gridTwo}>
            <div className={styles.contentCol}>
              <article className={styles.listCard}>
                <h2>Najczęstsze problemy, które rozwiązuję</h2>
                <ul className={styles.bulletList}>
                  {page.painPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>

              <article className={styles.listCard}>
                <h2>Co wchodzi w zakres wdrożenia</h2>
                <ul className={styles.bulletList}>
                  {page.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className={styles.listCard}>
                <h2>Co zyskuje obiekt po wdrożeniu</h2>
                <ul className={styles.bulletList}>
                  {page.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <aside className={styles.asideStack}>
              <div className={styles.asideCard}>
                <h3>Powiązane artykuły</h3>
                <div className={styles.linkList}>
                  {page.relatedPosts.map((post) => (
                    <Link key={post} to={post} className={styles.linkItem}>
                      {blogPostMap[post.replace('/blog/', '')]?.title ?? post.replace('/blog/', '').replaceAll('-', ' ')}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.asideCard}>
                <h3>Dalszy krok</h3>
                <p>Jeśli chcesz sprawdzić, który pakiet pasuje do Twojego obiektu, przejdziemy przez to na krótkiej rozmowie i wybierzemy najrozsądniejszy wariant wdrożenia.</p>
                <div className={styles.heroActions}>
                  <GooeyButton href="/#kontakt" variant="outline">Porozmawiajmy</GooeyButton>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
