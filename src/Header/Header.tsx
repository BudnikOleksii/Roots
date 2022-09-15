import { FC } from 'react';
import './header.scss';
import { Navigation } from '../Navigation';
import { Container } from '../Container';
import headline from './Headline.svg';
import { SearchInput } from '../SearchInput';
import parrot from './Parrot.svg';
import faceIcon from './face-icon.svg';

export const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <Navigation />

        <div className="header__content">
          <div className="header__text-block">
            <h1 className="header__title">
              <span className="header__title-text">Nature need you</span>
              <img className="header__title-img" src={headline} alt="Nature need you" />
            </h1>

            <p className="header__description">
              {/* eslint-disable-next-line max-len */}
              The scale of the challenges facing our planet can seem daunting, but we can all do something.
            </p>

            <SearchInput />
          </div>

          <div className="header__parrot-block">
            <img className="header__parrot" src={parrot} alt="parrot" />

            <div className="header__card">
              <img className="header__card-icon" src={faceIcon} alt="face-icon" />

              <div className="header__card-text">
                <p className="header__card-members">Members</p>
                <p className="header__card-count">29 128</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
