import { FC, useState } from 'react';
import classNames from 'classnames';
import logo from './Logo.svg';
import { Menu } from '../Menu';
import './navigation.scss';

export const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <img src={logo} alt="Roots logo" className="nav__logo" />
        </a>

        <div className="nav__menu-desktop"><Menu /></div>

        <button
          type="button"
          className={classNames('nav__burger', {
            'nav__burger--active': isMenuOpen,
          })}
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <div className="nav__burger-item"></div>
          <div className="nav__burger-item nav__burger-item--short"></div>
          <div className="nav__burger-item"></div>
        </button>
      </div>

      <div className="divider"></div>

      <Menu
        additionalClasses={`menu--mobile ${isMenuOpen ? 'menu--active' : ''}`}
        onClose={setIsMenuOpen}
      />
    </nav>
  );
};
