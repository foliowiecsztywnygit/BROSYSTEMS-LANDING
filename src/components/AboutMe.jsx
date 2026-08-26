import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import GooeyButton from './ui/GooeyButton';
import styles from './AboutMe.module.css';

const segments = [

];

const AboutMe = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="dla-kogo" className={`section ${styles.aboutMe}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.left} reveal fade-in`}>
          <SectionSubtitle>Moje podejście</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Nie komplikuję.</h2>
          <h2 className={`heading-lg ${styles.title}`}>Marketing i widoczność w sieci</h2>
          <h2 className={`heading-lg ${styles.title}`}>to nie fizyka kwantowa.</h2>
          <h2 className={`heading-lg ${styles.title}`}></h2>
        </div>

        <div className={`${styles.right} reveal fade-in delay-100`}>
          <div className={styles.textContent}>
            <p>
              Pracuję przede wszystkim z właścicielami <strong>pensjonatów, willi, apartamentów i domków</strong>, którzy chcą, żeby własna strona realnie pomagała zdobywać zapytania i rezerwacje.
            </p>
            <p>
              Moje projekty są nastawione na trzy rzeczy: <strong>czytelną ofertę</strong>, <strong>prostą drogę do kontaktu</strong> i <strong>lepszą widoczność dla osób szukających noclegu w okolicy</strong>. Dzięki temu strona staje się realnym kanałem pozyskiwania gości, a nie tylko internetową wizytówką.
            </p>
          </div>

          <div className={styles.actions}>
            <GooeyButton href="/#uslugi" variant="primary">Sprawdź rozwiązania</GooeyButton>
            <GooeyButton href="/#kontakt" variant="outline">Porozmawiajmy o Twoim obiekcie</GooeyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
