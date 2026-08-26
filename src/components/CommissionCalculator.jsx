import { useState, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GooeyButton from './ui/GooeyButton';
import styles from './CommissionCalculator.module.css';

const CommissionCalculator = () => {
  const revealRef = useScrollReveal();
  const [bookings, setBookings] = useState(30);
  const [bookingValue, setBookingValue] = useState(1500);
  const [commission, setCommission] = useState(15);

  const { monthlyCommission, yearlyCommission } = useMemo(() => {
    const monthlyRevenue = bookings * bookingValue;
    const monthlyCom = monthlyRevenue * (commission / 100);
    const yearlyCom = monthlyCom * 12;
    return {
      monthlyCommission: monthlyCom,
      yearlyCommission: yearlyCom
    };
  }, [bookings, bookingValue, commission]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className={`section ${styles.calculatorSection}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={`heading-lg ${styles.title} reveal fade-in`}>
            Ile tracisz na <strong>prowizjach portali?</strong>
          </h2>
          <p className={`text-lg ${styles.subtitle} reveal fade-in delay-100`}>
            Sprawdź, ile pieniędzy mógłbyś zaoszczędzić i reinwestować we własny biznes, gdybyś pozyskiwał rezerwacje bezpośrednio z własnej strony.
          </p>
        </div>

        <div className={`${styles.calculatorBox} reveal fade-in delay-200`}>
          <div className={styles.controlsPanel}>
            <div className={styles.controlGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="bookings">Liczba rezerwacji w miesiącu</label>
                <span className={styles.valueDisplay}>{bookings}</span>
              </div>
              <input 
                type="range" 
                id="bookings" 
                min="1" 
                max="500" 
                value={bookings} 
                onChange={(e) => setBookings(Number(e.target.value))}
                className={styles.rangeSlider}
                style={{ '--progress': `${((bookings - 1) / (500 - 1)) * 100}%` }}
              />
            </div>

            <div className={styles.controlGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="bookingValue">Średnia wartość rezerwacji</label>
                <span className={styles.valueDisplay}>{formatCurrency(bookingValue)}</span>
              </div>
              <input 
                type="range" 
                id="bookingValue" 
                min="100" 
                max="5000" 
                step="50"
                value={bookingValue} 
                onChange={(e) => setBookingValue(Number(e.target.value))}
                className={styles.rangeSlider}
                style={{ '--progress': `${((bookingValue - 100) / (5000 - 100)) * 100}%` }}
              />
            </div>

            <div className={styles.controlGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="commission">Średnia prowizja (OTA)</label>
                <span className={styles.valueDisplay}>{commission}%</span>
              </div>
              <input 
                type="range" 
                id="commission" 
                min="10" 
                max="25" 
                step="1"
                value={commission} 
                onChange={(e) => setCommission(Number(e.target.value))}
                className={styles.rangeSlider}
                style={{ '--progress': `${((commission - 10) / (25 - 10)) * 100}%` }}
              />
            </div>
          </div>

          <div className={styles.resultsPanel}>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>Oddajesz portalom miesięcznie:</span>
              <span className={styles.resultValue}>{formatCurrency(monthlyCommission)}</span>
            </div>
            
            <div className={styles.divider}></div>

            <div className={styles.resultItemHighlight}>
              <span className={styles.resultLabelHighlight}>Rocznie tracisz zysku nawet:</span>
              <span className={styles.resultValueHighlight}>{formatCurrency(yearlyCommission)}</span>
              <p className={styles.resultNote}>To budżet, za który dawno zbudowałbyś świetną stronę, a resztę zatrzymał w kieszeni!</p>
            </div>
            
            <div className={styles.ctaWrapper}>
              <GooeyButton href="/#kontakt" variant="primary">Przestań przepłacać</GooeyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionCalculator;
