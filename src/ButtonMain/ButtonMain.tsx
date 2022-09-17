import { FC } from 'react';
import styles from './buttonMain.module.scss';

interface Props {
  text: string;
  currentWidth: string;
  onClick?: () => void;
}

export const ButtonMain: FC<Props> = ({ text, currentWidth, onClick = () => {} }) => (
  <button
    className={styles.button}
    type="button"
    style={{ width: currentWidth }}
    onClick={onClick}
  >
    {text}
  </button>
);
