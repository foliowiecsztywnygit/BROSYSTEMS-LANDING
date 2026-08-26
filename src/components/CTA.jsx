import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './CTA.module.css';

const talkPoints = [
  'sprawdzimy, dlaczego obecna strona nie daje tylu telefonów i rezerwacji, ile powinna',
  'ustalimy, czy lepsza będzie nowa strona, przebudowa czy podpięcie systemu rezerwacji',
  'pokażę Ci prosty kierunek zmian pod Twój obiekt i sposób pracy'
];

const CTA = () => {
  const revealRef = useScrollReveal();
  const calendarTriggerRef = useRef(null);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    const trigger = calendarTriggerRef.current;
    if (!trigger) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCalendarLoaded(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: '200px 0px',
        threshold: 0.15,
      }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!calendarLoaded) return undefined;

    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    Cal('init', 'rozmowa-przedstawienie-oferty-omowienie-planu-działania', {
      origin: 'https://app.cal.com',
    });

    Cal.ns['rozmowa-przedstawienie-oferty-omowienie-planu-działania']('inline', {
      elementOrSelector: '#my-cal-inline-rozmowa-przedstawienie-oferty-omowienie-planu-działania',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      calLink: 'brosystems/rozmowa-przedstawienie-oferty-omowienie-planu-działania',
    });

    Cal.ns['rozmowa-przedstawienie-oferty-omowienie-planu-działania']('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, [calendarLoaded]);

  return (
    <section id="kontakt" className={`section ${styles.cta}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        <h2 className={`heading-xl ${styles.title} reveal fade-in`}>Chcesz odzyskać więcej rezerwacji <strong>z własnej strony?</strong></h2>
        <p className={`text-lg ${styles.description} reveal fade-in delay-100`}>
          Umów bezpłatną rozmowę i sprawdźmy, co dziś blokuje kontakt z gościem albo przejście do rezerwacji z własnej strony.
        </p>

        <div className={`${styles.auditBox} reveal fade-in delay-100`}>
          <h3 className={styles.auditTitle}>Na rozmowie przechodzimy przez konkret</h3>
          <ul className={styles.auditList}>
            {talkPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className={`${styles.directContact} reveal fade-in delay-200`}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Wyślij link do obecnej strony:</span>
            <a href="mailto:kontakt@brosystems.pl" className={styles.contactLink}>
              kontakt@brosystems.pl
              <span className={styles.pointerEmoji} style={{ animationDelay: '0s' }}>👆</span>
            </a>
          </div>
          
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Zadzwoń, jeśli chcesz omówić obiekt od razu:</span>
            <a href="tel:+48600176361" className={styles.contactLink}>
              +48 600 176 361
              <span className={styles.pointerEmoji} style={{ animationDelay: '0.3s' }}>👆</span>
            </a>
          </div>
          
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Albo napisz na WhatsApp:</span>
            <a 
              href="https://wa.me/48600176361" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.contactLink} ${styles.whatsappLink}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp
              <span className={styles.pointerEmoji} style={{ animationDelay: '0.6s' }}>👆</span>
            </a>
          </div>
        </div>
        
        <div className={`${styles.calendarSection} reveal fade-in delay-300`} ref={calendarTriggerRef}>
          <h3 className={styles.calendarTitle}>Umów rozmowę o swojej stronie i rezerwacjach</h3>
          <p className={styles.calendarSubtitle}>Wybierz termin i pokaż mi, jak dziś wygląda kontakt i sprzedaż noclegów z Twojej strony</p>
          <div className={styles.calendarContainer}>
            {calendarLoaded ? (
              <div
                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                id="my-cal-inline-rozmowa-przedstawienie-oferty-omowienie-planu-działania"
              ></div>
            ) : (
              <div className={styles.calendarPlaceholder}>
                <p>Wczytuję kalendarz konsultacji. Sekcja ładuje się dopiero przy kontakcie, żeby strona startowała szybciej na urządzeniach mobilnych.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
