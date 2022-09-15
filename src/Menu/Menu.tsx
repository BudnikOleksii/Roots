/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import './menu.scss';

export const Menu: FC = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#" className="menu__link menu__link--home">Home</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Our mission</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Places</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Team</a>
        </li>
      </ul>

      <button type="button" className="menu__btn">Apply</button>
    </div>
  );
};
