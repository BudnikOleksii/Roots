import { FC } from 'react';
import styles from './Header.module.scss';
import { Navigation } from '../Navigation';
import { Container } from '../Container';
import headline from './Headline.svg';
import { SearchInput } from '../SearchInput';
import parrot from './Parrot.svg';
import faceIcon from './face-icon.svg';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />

        <div className={styles.header__content}>
          <div className={styles.header__textBlock}>
            <h1 className={styles.header__title}>
              <span className={styles.header__titleText}>Nature need you</span>
              <img className={styles.header__titleImg} src={headline} alt="Nature need you" />
            </h1>

            <p className={styles.header__description}>
              {/* eslint-disable-next-line max-len */}
              The scale of the challenges facing our planet can seem daunting, but we can all do something.
            </p>

            <SearchInput />
          </div>

          <div className={styles.header__parrotBlock}>
            <img className={styles.header__parrot} src={parrot} alt="parrot" />

            <div className={styles.header__card}>
              <img className={styles.header__cardIcon} src={faceIcon} alt="face-icon" />

              <div className={styles.header__cardText}>
                <p className={styles.header__cardMembers}>Members</p>
                <p className={styles.header__cardCount}>29 128</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
