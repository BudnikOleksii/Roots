/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dispatch, FC, SetStateAction } from 'react';
import './menu.scss';

interface Props {
  additionalClasses?: string;
  onClose?: Dispatch<SetStateAction<boolean>>;
}

export const Menu: FC<Props> = ({ additionalClasses, onClose = () => {} }) => {
  return (
    <div className={`menu ${additionalClasses}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <a
            href="#"
            className="menu__link menu__link--home"
            onClick={() => onClose(false)}
          >
            Home
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#mission"
            className="menu__link"
            onClick={() => onClose(false)}
          >
            Our mission
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#places"
            className="menu__link"
            onClick={() => onClose(false)}
          >
            Places
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#team"
            className="menu__link"
            onClick={() => onClose(false)}
          >
            Team
          </a>
        </li>
      </ul>

      <button type="button" className="menu__btn">Apply</button>
    </div>
  );
};
