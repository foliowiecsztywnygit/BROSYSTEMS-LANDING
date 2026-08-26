import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true, // Niezbędne - zawsze włączone
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Sprawdzanie czy użytkownik podjął już decyzję
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Opóźniamy pojawienie się banera o 1 sekundę dla lepszego efektu
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setIsVisible(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Nie można wyłączyć
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        {!showSettings ? (
          <div className={styles.mainView}>
            <div className={styles.content}>
              <h3 className={styles.title}>Szanuję Twoją prywatność</h3>
              <p className={styles.text}>
                Używam plików cookies, aby ułatwić Ci korzystanie z mojej strony oraz do celów statystycznych. 
                Jeśli zgadzasz się na wykorzystanie wszystkich ciasteczek, kliknij „Akceptuję wszystkie”. 
                Możesz również dostosować swoje zgody klikając „Ustawienia”. 
                Więcej informacji znajdziesz w mojej <Link to="/polityka-prywatnosci" className={styles.link}>Polityce Prywatności</Link>.
              </p>
            </div>
            <div className={styles.actions}>
              <button onClick={handleAcceptAll} className={styles.btnPrimary}>Akceptuję wszystkie</button>
              <button onClick={handleRejectAll} className={styles.btnOutline}>Tylko niezbędne</button>
              <button onClick={() => setShowSettings(true)} className={styles.btnText}>Ustawienia</button>
            </div>
          </div>
        ) : (
          <div className={styles.settingsView}>
            <h3 className={styles.title}>Ustawienia plików cookies</h3>
            <p className={styles.text}>Wybierz, na jakie rodzaje plików cookies wyrażasz zgodę.</p>
            
            <div className={styles.optionsList}>
              <div className={styles.optionRow}>
                <div className={styles.optionInfo}>
                  <h4>Niezbędne</h4>
                  <p>Te pliki są wymagane do działania strony i nie mogą być wyłączone.</p>
                </div>
                <div className={styles.toggle}>
                  <input type="checkbox" checked disabled readOnly />
                </div>
              </div>
              
              <div className={styles.optionRow}>
                <div className={styles.optionInfo}>
                  <h4>Analityczne</h4>
                  <p>Pomagają mi zrozumieć, w jaki sposób odwiedzający wchodzą w interakcję ze stroną.</p>
                </div>
                <div className={styles.toggle}>
                  <label className={styles.switch}>
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics} 
                      onChange={() => togglePreference('analytics')} 
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
              
              <div className={styles.optionRow}>
                <div className={styles.optionInfo}>
                  <h4>Marketingowe</h4>
                  <p>Służą do śledzenia użytkowników na stronach w celu wyświetlania dopasowanych reklam.</p>
                </div>
                <div className={styles.toggle}>
                  <label className={styles.switch}>
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing} 
                      onChange={() => togglePreference('marketing')} 
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className={styles.actions}>
              <button onClick={handleAcceptSelected} className={styles.btnPrimary}>Zapisz wybrane</button>
              <button onClick={() => setShowSettings(false)} className={styles.btnText}>Wróć</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
