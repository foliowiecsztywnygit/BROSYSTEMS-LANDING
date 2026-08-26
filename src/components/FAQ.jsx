import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Czy taka strona realnie pomaga zdobywać więcej rezerwacji z własnej strony?',
    answer: 'Tak, ale tylko wtedy, gdy nie jest zwykłą wizytówką. Strona musi jasno pokazywać ofertę, szybko działać na telefonie i prowadzić do kontaktu albo rezerwacji bez zbędnych kroków. Właśnie pod to projektuję układ i najważniejsze miejsca na stronie.'
  },
  {
    question: 'Czy mogę przebudować obecną stronę obiektu, czy trzeba robić wszystko od zera?',
    answer: 'W wielu przypadkach da się wykorzystać obecną treść, zdjęcia i strukturę oferty, ale sam układ, komunikaty i ścieżkę kontaktu trzeba przeprojektować. Na początku sprawdzam, co warto zachować, a co dziś blokuje zapytania i rezerwacje.'
  },
  {
    question: 'Jakie elementy są obowiązkowe na skutecznej stronie pensjonatu, willi albo apartamentów?',
    answer: 'Najważniejsze są: przejrzysta oferta noclegów, mocna galeria, widoczne CTA, prosty kontakt na telefonie, informacje o lokalizacji i atrakcjach oraz możliwość przejścia do rezerwacji bezpośredniej. Dopiero później liczą się ozdobniki.'
  },
  {
    question: 'Czy wdrażasz Hotres, Roomadmin albo inne systemy rezerwacji?',
    answer: 'Tak, pracuję z wdrożeniami booking engine i dopasowuję stronę do sposobu, w jaki użytkownik ma przechodzić do sprawdzenia terminu i rezerwacji. Chodzi nie tylko o samą integrację, ale o to, żeby była dobrze osadzona w całej ścieżce zakupu.'
  },
  {
    question: 'Czy taka strona pomoże obiektowi być lepiej widocznym na Zakopane, Szczyrk i Podhale?',
    answer: 'Tak. Fundament buduję pod widoczność lokalną: odpowiednie treści, układ sekcji, szybkość działania i jasne informacje o lokalizacji. Dzięki temu strona lepiej pracuje na osoby, które szukają noclegu właśnie w Twojej okolicy.'
  },
  {
    question: 'Ile trwa wdrożenie i czego potrzebujesz ode mnie na start?',
    answer: 'Po stronie właściciela obiektu najważniejsze są materiały: logo, zdjęcia, oferta, dane kontaktowe i informacja, jak dziś wygląda proces rezerwacji. Resztę porządkujemy wspólnie. Czas wdrożenia zależy od zakresu, ale już na początku rozbijam projekt na konkretne etapy.'
  }
];

const FAQ = () => {
  const revealRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={`section ${styles.faqSection}`} ref={revealRef}>
      <div className="container">
        <div className={styles.header}>
          <SectionSubtitle>Odpowiedzi na pytania przed startem</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Pytania, które najczęściej zadają właściciele obiektów noclegowych</h2>
          <p className={styles.lead}>
            Zanim podejmiesz decyzję, warto uporządkować to, co realnie wpływa na sprzedaż: telefon, wygodę dla gościa, system rezerwacji i to, jak łatwo znaleźć obiekt w Google.
          </p>
        </div>
        
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className={styles.question}>{faq.question}</h3>
                <span className={styles.icon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div 
                className={styles.accordionBody}
                style={{ maxHeight: openIndex === index ? '700px' : '0' }}
              >
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
