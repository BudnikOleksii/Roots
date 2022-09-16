import { FC } from 'react';
import './buttonMain.scss';

interface Props {
  text: string;
  currentWidth: string;
  onClick?: () => void;
}

export const ButtonMain: FC<Props> = ({ text, currentWidth, onClick = () => {} }) => (
  <button
    className="button"
    type="button"
    style={{ width: currentWidth }}
    onClick={onClick}
  >
    {text}
  </button>
);
