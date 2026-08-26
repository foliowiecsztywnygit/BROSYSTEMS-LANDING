import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GooeyButton from './ui/GooeyButton';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './Services.module.css';

const services = [
  {
    title: 'Strony dla pensjonatów i willi',
    description: 'Projektuję strony, które pokazują standard obiektu, porządkują ofertę noclegów i prowadzą gościa do <strong>rezerwacji bezpośredniej</strong> albo szybkiego kontaktu.',
    number: '01.',
    categories: ['Pokoje i apartamenty', 'Galeria', 'Mapa i atrakcje', 'CTA do rezerwacji'],
    href: '/strony-dla-pensjonatow'
  },
  {
    title: 'Strony dla apartamentów i domków',
    description: 'Buduję lekkie, mobilne układy dla obiektów sezonowych i premium, w których liczy się <strong>szybkość, prostota i łatwy kontakt</strong> dla gościa.',
    number: '02.',
    categories: ['Telefon', 'Galeria', 'Szybki kontakt', 'Układ pod telefon'],
    href: '/strony-dla-apartamentow'
  },
  {
    title: 'Wdrożenia systemów rezerwacji',
    description: 'Integruję system rezerwacji z Twoją stroną tak, aby gość mógł sprawdzić termin i zarezerwować pobyt bez zbędnych kroków, a Ty miał(a) więcej zamówień z własnej strony.',
    number: '03.',
    categories: ['Hotres', 'Roomadmin', 'Rezerwacje bezpośrednie', 'Kalendarz i płatności'],
    href: '/wdrozenia-hotres'
  },
  {
    title: 'Przebudowa obecnej strony obiektu',
    description: 'Jeśli obecna strona jest wolna, nieczytelna lub nie sprzedaje pobytów, przebudowuję ją tak, by lepiej pokazywała obiekt i ułatwiała kontakt z gościem.',
    number: '04.',
    categories: ['Lepszy układ', 'Czytelna oferta', 'Nowe CTA', 'Wygoda dla gościa'],
    href: '/#kontakt'
  }
];

const Services = () => {
  const revealRef = useScrollReveal();
  const containerRef = useRef(null);
  const titlesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const windowHeight = window.innerHeight;
      
      titlesRef.current.forEach((titleEl, index) => {
        if (!titleEl) return;
        
        const card = titleEl.closest(`.${styles.card}`);
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        let progress = 1 - (rect.top / windowHeight);
        progress = Math.max(0, Math.min(1, progress));
        
        const bgPosition = progress * 100;
        titleEl.style.backgroundPosition = `${100 - bgPosition}% 0`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="uslugi" className={`section ${styles.services}`} ref={revealRef}>
      <div className={styles.headerWrapper}>
        <div className={`${styles.header} reveal fade-in`}>
          <SectionSubtitle>Rozwiązania dla branży noclegowej</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Co wdrażam dla obiektów noclegowych</h2>
          <p className="text-lg">Od strony głównej po system rezerwacji, który pomaga sprzedawać pobyty <strong>prosto z własnej strony</strong>.</p>
        </div>
      </div>
        
      <div className={styles.cardsContainer} ref={containerRef}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ zIndex: index + 1, top: `${index * 30}px` }}
            >
              <div className={styles.cardInner}>
                <div className={styles.number}>{service.number}</div>
                <div className={styles.cardContent}>
                  <h3 
                    className={styles.cardTitle}
                    ref={el => titlesRef.current[index] = el}
                  >
                    {service.title}
                  </h3>
                  <p className={styles.cardDescription} dangerouslySetInnerHTML={{ __html: service.description }}></p>
                  
                  <div className={styles.buttonWrapper}>
                    <GooeyButton href={service.href} variant="outline">
                      {service.href.startsWith('/#') ? 'Porozmawiajmy' : 'Zobacz podstronę'}
                    </GooeyButton>
                  </div>
                  
                  <div className={styles.categories}>
                    {service.categories.map((cat, i) => (
                      <span key={i} className={styles.categoryTag}>{cat}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Services;
