import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Pricing from './components/Pricing';
import RotatingProcess from './components/RotatingProcess';
import SelectedArticles from './components/SelectedArticles';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import WhyMe from './components/WhyMe';
import FAQ from './components/FAQ';

import CommissionCalculator from './components/CommissionCalculator';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import ServicePage from './pages/ServicePage';
import BlogIndex from './pages/BlogIndex';
import BlogPostPage from './pages/BlogPostPage';
import OfertaPage from './pages/OfertaPage';
import ThankYou from './pages/ThankYou';
import ScrollToTop from './components/ScrollToTop';

const GooeyFilter = () => (
  <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="buttonFilter">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
      </filter>
    </defs>
  </svg>
);

const Home = () => (
  <>
    <Helmet>
      <title>Strony dla pensjonatów i willi | Rezerwacje bezpośrednie</title>
      <meta name="description" content="Buduję strony dla pensjonatów, domków i willi z systemem rezerwacji bez prowizji. Zwiększ rezerwacje bezpośrednie w Zakopanem i Szczyrku." />
      <link rel="canonical" href="https://www.brosystems.pl/" />
    </Helmet>
    <TopBar />
    <Navbar />
    <main>
      <Hero />
      <CommissionCalculator />
      <Services />
      <Portfolio />
      <AboutMe />
      <WhyMe />
      <RotatingProcess />
      <Partners />
      <SelectedArticles />

      <FAQ />
      <CTA />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <CookieBanner />
      <GooeyFilter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<OfertaPage />} />
        <Route path="/strony-dla-pensjonatow" element={<ServicePage pageKey="strony-dla-pensjonatow" />} />
        <Route path="/strony-dla-apartamentow" element={<ServicePage pageKey="strony-dla-apartamentow" />} />
        <Route path="/wdrozenia-hotres" element={<ServicePage pageKey="wdrozenia-hotres" />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/sukces" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
