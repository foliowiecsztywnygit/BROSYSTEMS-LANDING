import React from 'react';
import styles from './SystemProcess.module.css';

const steps = [
  {
    id: 1,
    title: 'Własny, konwertujący silnik rezerwacyjny (Booking Engine)',
    description: 'Zamiast odsyłać klientów na portale pośredniczące, przyjmuj rezerwacje bezpośrednio na swojej stronie internetowej. Nasz nowoczesny, błyskawicznie działający widżet (z interfejsem przypominającym najlepsze rozwiązania na rynku) przeprowadza gościa przez proces rezerwacji w kilka sekund.',
    benefits: [
      'Zatrzymujesz 100% kwoty rezerwacji w kieszeni.',
      'Oszczędzasz od 15% do 25% na prowizjach Booking.com czy Airbnb.'
    ],
    imageAlt: 'Elegancki mockup laptopa z interfejsem kalendarza'
  },
  {
    id: 2,
    title: 'Centralne zarządzanie (Channel Manager)',
    description: 'Wszystkie Twoje pokoje, cenniki i dostępności są połączone w jednym potężnym panelu administracyjnym zsynchronizowanym z mechanizmem Beds24. Kiedy gość rezerwuje nocleg przez Twój widżet, dostępność automatycznie znika z Booking.com i odwrotnie.',
    benefits: [
      'Koniec z overbookingiem (podwójnymi rezerwacjami).',
      'Zyskujesz jeden scentralizowany kalendarz do zarządzania całym obiektem, eliminując ręczne przepisywanie.'
    ],
    imageAlt: 'Dynamiczna grafika ilustrująca obieg informacji z OTA'
  },
  {
    id: 3,
    title: 'Automatyzacja komunikacji i płatności',
    description: 'Po złożeniu rezerwacji, system automatycznie przejmuje obsługę gościa. Płatności są procesowane natychmiastowo (PayU, Przelewy24, Stripe) lub bezpiecznie obsługiwane przez tradycyjne przelewy manualne. Goście otrzymują zautomatyzowane, piękne potwierdzenia e-mail.',
    benefits: [
      'Uwalniasz się od ciągłego sprawdzania konta bankowego i ręcznego wysyłania maili z instrukcjami.',
      'System zarządza relacją z gościem za Ciebie i buduje zaufanie.'
    ],
    imageAlt: 'Split-screen: powiadomienie e-mail i zielone statusy Opłacono'
  },
  {
    id: 4,
    title: 'Inteligentne reguły cenowe (Dynamic Pricing)',
    description: 'Pełna kontrola nad Twoją polityką sprzedażową. Ustawiaj bazowe ceny w naszym przejrzystym cenniku i jednym kliknięciem aplikuj "Wydarzenia" – np. podnieś ceny o 50% na weekend majowy, sylwestra lub w trakcie lokalnych festiwali. Widżet sam przeliczy ceny w czasie rzeczywistym.',
    benefits: [
      'Maksymalizacja zysków w okresach wysokiego popytu (Revenue Management).',
      'Zwiększenie obłożenia poza sezonem dzięki prostej zmianie reguł.'
    ],
    imageAlt: 'Zrzut ekranu z regułami cenowymi (np. Sylwester +50%)'
  }
];

export default function SystemProcess() {
  return (
    <section className={styles.section} id="dzialanie">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Jak działa BroSystems i jak oszczędza Twój czas?</h2>
          <p className={styles.subheading}>(W 4 prostych krokach)</p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.id} className={`${styles.stepRow} ${index % 2 !== 0 ? styles.stepRowReverse : ''}`}>
              <div className={styles.textContent}>
                <div className={styles.stepNumber}>Krok {step.id}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                <div className={styles.benefitsBox}>
                  <h4 className={styles.benefitsHeading}>Twoje korzyści:</h4>
                  <ul className={styles.benefitsList}>
                    {step.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.imageContent}>
                <img src={`/systemworks/${step.id}.png`} alt={step.imageAlt} className={styles.actualImage} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
