import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './Partners.module.css';

const basePartners = [
  { name: "Beds24", img: "/tech_partners_white/beds24.svg", colorImg: "/tech_partners/beds24.svg" },
  { name: "Stripe", img: "/tech_partners_white/stripe.svg", colorImg: "/tech_partners/stripe.svg" },
  { name: "Booking.com", img: "/tech_partners_white/booking.png", colorImg: "/tech_partners/booking.png" },
  { name: "Airbnb", img: "/tech_partners_white/airbnb.svg", colorImg: "/tech_partners/airbnb.svg" },
  { name: "Google Ads", img: "/tech_partners_white/google_ads.png", colorImg: "/tech_partners/google_ads.png" },
  { name: "Google Search Console", img: "/tech_partners_white/google_search_console.png", colorImg: "/tech_partners/google_search_console.png" }
];

// Dwa zestawy wystarczają do płynnej pętli, a zmniejszają liczbę renderowanych logotypów.
const partners = [...basePartners, ...basePartners];

const Partners = () => {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.partners}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.header} reveal fade-in`}>
          <SectionSubtitle>Narzędzia i Integracje</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Partnerzy Techniczni</h2>
          <h3 className={`subtitle ${styles.subtitle}`}>Żeby było wiadomo, że jesteśmy na serio.</h3>
        </div>

        <div className={`${styles.marqueeWrapper} reveal fade-in delay-100`}>
          <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
              {partners.map((partner, index) => (
                <div key={index} className={styles.partnerItem}>
                  {partner.img ? (
                    <div className={styles.imageWrapper}>
                      <img src={partner.img} alt={partner.name} className={`${styles.partnerLogo} ${styles.whiteLogo}`} loading="lazy" decoding="async" />
                      {partner.colorImg && (
                        <img src={partner.colorImg} alt="" aria-hidden="true" className={`${styles.partnerLogo} ${styles.colorLogo}`} loading="lazy" decoding="async" />
                      )}
                    </div>
                  ) : (
                    <span className={styles.partnerName}>{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
            {/* Duplikujemy grupę, aby zapewnić nieskończoną animację bez przeskoku */}
            <div className={styles.marqueeGroup} aria-hidden="true">
              {partners.map((partner, index) => (
                <div key={`dup-${index}`} className={styles.partnerItem}>
                  {partner.img ? (
                    <div className={styles.imageWrapper}>
                      <img src={partner.img} alt="" aria-hidden="true" className={`${styles.partnerLogo} ${styles.whiteLogo}`} loading="lazy" decoding="async" />
                      {partner.colorImg && (
                        <img src={partner.colorImg} alt="" aria-hidden="true" className={`${styles.partnerLogo} ${styles.colorLogo}`} loading="lazy" decoding="async" />
                      )}
                    </div>
                  ) : (
                    <span className={styles.partnerName}>{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
