/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import './footer.scss';
import twitterIcon from './twitter.svg';
import facebookIcon from './facebook.svg';
import inIcon from './in.svg';
import { Container } from '../Container';

export const Footer: FC = () => {
  return (
    <Container>
      <footer className="footer">
        <div className="footer__heading-block">
          <h2 className="footer__heading">Contacts</h2>
          <p className="footer__rights">2019 Rootz Foundation. All rights reserved</p>
        </div>

        <div className="footer__contacts-block">
          <div className="footer__headquarters">
            <h3 className="footer__heading-secondary">Headquarters</h3>

            <ul className="footer__contacts">
              <li className="footer__contacts-item">1234 Taliban</li>
              <li className="footer__contacts-item">Los Angeles, La</li>
              <li className="footer__contacts-item">
                <a className="footer__link" href="tel:(123) 456-7890">1234567</a>
              </li>
              <li className="footer__contacts-item">
                <a className="footer__link" href="tel:(123) 456-7890">(123) 456-7890</a>
              </li>
            </ul>
          </div>

          <div className="footer__social">
            <h3 className="footer__heading-secondary">Social media</h3>

            <div className="footer__social-items">
              <a
                className="footer__social-item"
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer__social-icon" src={twitterIcon} alt="twitter" />
              </a>

              <a
                className="footer__social-item"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer__social-icon" src={facebookIcon} alt="facebook" />
              </a>

              <a
                className="footer__social-item"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer__social-icon" src={inIcon} alt="in" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};
