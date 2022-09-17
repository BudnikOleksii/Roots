import { FC } from 'react';
import styles from './SectionForm.module.scss';
import { Container } from '../Container';
import { SectionHeading } from '../SectionHeading';
import { SectionText } from '../SectionText';
import { LoginForm } from '../LoginForm';

export const SectionForm: FC = () => {
  return (
    <Container>
      <section className={styles.sectionForm}>
        <div className={styles.sectionForm__textBlock}>
          <SectionHeading text="Get started today!" />
          <div className={styles.sectionForm__text}>
            <SectionText text="Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. " />
          </div>
        </div>

        <LoginForm />
      </section>
    </Container>
  );
};
