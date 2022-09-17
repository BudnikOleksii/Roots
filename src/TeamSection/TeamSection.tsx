import { FC } from 'react';
import styles from './TeamSection.module.scss';
import { SectionHeading } from '../SectionHeading';
import person1 from './team-1.png';
import person2 from './team-2.png';
import person3 from './team-3.png';
import connect from './connect-team.svg';
import { Container } from '../Container';

export const TeamSection: FC = () => {
  return (
    <section id="team" className={styles.team}>
      <Container>
        <SectionHeading text="Our top team" />

        <p className={styles.team__text}>
          Learn more about how you can save
          <br />
          our planet`s nature.
        </p>

        <div className={styles.team__imgBlock}>
          <img
            className={styles.team__person}
            src={person1}
            alt="Person first"
          />
          <img
            className={`${styles.team__connect} ${styles.team__connectFirst}`}
            src={connect}
            alt="connect"
          />
          <img
            className={`${styles.team__person} ${styles.team__personSecond}`}
            src={person2}
            alt="Person second"
          />
          <img
            className={`${styles.team__connect} ${styles.team__connectSecond}`}
            src={connect}
            alt="connect"
          />
          <img
            className={styles.team__person}
            src={person3}
            alt="Person third"
          />
        </div>
      </Container>
    </section>
  );
};
