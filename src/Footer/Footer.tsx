/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import styles from './Footer.module.scss';
import twitterIcon from './twitter.svg';
import facebookIcon from './facebook.svg';
import inIcon from './in.svg';
import { Container } from '../Container';

export const Footer: FC = () => {
  return (
    <Container>
      <footer className={styles.footer}>
        <div className={styles.footer__headingBlock}>
          <h2 className={styles.footer__heading}>Contacts</h2>
          <p className={styles.footer__rights}>2019 Rootz Foundation. All rights reserved</p>
        </div>

        <div className={styles.footer__contactsBlock}>
          <div>
            <h3 className={styles.footer__headingSecondary}>Headquarters</h3>

            <ul className={styles.footer__contacts}>
              <li className={styles.footer__contactsItem}>1234 Taliban</li>
              <li className={styles.footer__contactsItem}>Los Angeles, La</li>
              <li className={styles.footer__contactsItem}>
                <a href="tel:(123) 456-7890">1234567</a>
              </li>
              <li className={styles.footer__contactsItem}>
                <a href="tel:(123) 456-7890">(123) 456-7890</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footer__headingSecondary}>Social media</h3>

            <div className={styles.footer__socialItems}>
              <a
                className={styles.footer__socialItem}
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitterIcon} alt="twitter" />
              </a>

              <a
                className={styles.footer__socialItem}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebookIcon} alt="facebook" />
              </a>

              <a
                className={styles.footer__socialItem}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={inIcon} alt="in" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};
