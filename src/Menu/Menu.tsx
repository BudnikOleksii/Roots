/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './Menu.module.scss';

interface Props {
  additionalClasses?: string;
  onClose?: Dispatch<SetStateAction<boolean>>;
}

export const Menu: FC<Props> = ({ additionalClasses, onClose = () => {} }) => {
  return (
    <div className={`${styles.menu} ${additionalClasses}`}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <a
            href="#"
            className={`${styles.menu__link} ${styles.menu__linkHome}`}
            onClick={() => onClose(false)}
          >
            Home
          </a>
        </li>
        <li className={styles.menu__item}>
          <a
            href="#mission"
            className={styles.menu__link}
            onClick={() => onClose(false)}
          >
            Our mission
          </a>
        </li>
        <li className={styles.menu__item}>
          <a
            href="#places"
            className={styles.menu__link}
            onClick={() => onClose(false)}
          >
            Places
          </a>
        </li>
        <li className={styles.menu__item}>
          <a
            href="#team"
            className={styles.menu__link}
            onClick={() => onClose(false)}
          >
            Team
          </a>
        </li>
      </ul>

      <button type="button" className={styles.menu__btn}>Apply</button>
    </div>
  );
};
