import { FC, useState } from 'react';
import classNames from 'classnames';
import logo from './Logo.svg';
import { Menu } from '../Menu';
import styles from './Navigation.module.scss';
import menuStiles from '../Menu/Menu.module.scss';

export const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__wrapper}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <img src={logo} alt="Roots logo" className={styles.nav__logo} />
        </a>

        <div className={styles.nav__menuDesktop}><Menu /></div>

        <button
          type="button"
          className={classNames(`${styles.nav__burger}`, {
            [`${styles.nav__burgerActive}`]: isMenuOpen,
          })}
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <div className={styles.nav__burgerItem}></div>
          <div className={`${styles.nav__burgerItem} ${styles.nav__burgerItemShort}`}></div>
          <div className={styles.nav__burgerItem}></div>
        </button>
      </div>

      <div className={styles.divider}></div>

      <Menu
        additionalClasses={`${menuStiles.menuMobile} ${isMenuOpen ? menuStiles.menuActive : ''}`}
        onClose={setIsMenuOpen}
      />
    </nav>
  );
};
