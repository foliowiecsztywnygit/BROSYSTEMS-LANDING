import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './Partners.module.css';

const basePartners = [
  { name: "Hotres", img: "/tech_partners_white/hotres.png", colorImg: "/tech_partners/hotres.png" },
  { name: "Booking.com", img: "/tech_partners_white/booking.png", colorImg: "/tech_partners/booking.png" },
  { name: "Google Ads", img: "/tech_partners_white/google_ads.png", colorImg: "/tech_partners/google_ads.png" },
  { name: "Google Search Console", img: "/tech_partners_white/google_search_console.png", colorImg: "/tech_partners/google_search_console.png" },
  { name: "Vercel", img: "/tech_partners_white/vercel.png", colorImg: "/tech_partners/vercel.png" },
  { name: "Useme", img: "/tech_partners_white/useme_logo.png", colorImg: "/tech_partners/useme_logo.png" }
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
