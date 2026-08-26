import styles from './About.module.css';

const About = () => {
  return (
    <section id="o-mnie" className={`section ${styles.about}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="heading-md">Krzysztof Żebrowski</h2>
          <p className="text-lg">
            Jestem inżynierem frontendu, twórcą <strong>BroSystems</strong>. 
            Projektuję i wdrażam dedykowane strony internetowe, które łączą <strong>czysty design</strong> z nieskazitelną wydajnością. 
            Mój kod to nie tylko technologia — to <strong>narzędzie do budowy Twojej marki</strong> w sieci.
          </p>
          
          <div className={styles.partners}>
            <p className={styles.partnersTitle}>Partnerzy technologiczni i integracje</p>
            <div className={styles.partnersLogos}>
              <div className={styles.partnerLogo} style={{ color: '#005b9f', fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                hot<span style={{ color: '#00adf0' }}>res</span>
              </div>
              <div className={styles.partnerLogo} style={{ color: '#003580', fontWeight: '900', fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
                Booking.com
              </div>
              <div className={styles.partnerLogo} style={{ color: '#1ab394', fontWeight: '800', fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
                BedBooking
              </div>
              <div className={styles.partnerLogo} style={{ color: '#5f6368', fontWeight: '500', fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
                <span style={{color: '#4285f4'}}>G</span><span style={{color: '#ea4335'}}>o</span><span style={{color: '#fbbc04'}}>o</span><span style={{color: '#4285f4'}}>g</span><span style={{color: '#34a853'}}>l</span><span style={{color: '#ea4335'}}>e</span> Ads
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;