import { FC } from 'react';
import './buttonMain.scss';

interface Props {
  text: string;
  width: string;
  onClick?: () => void;
}

export const ButtonMain: FC<Props> = ({ text, width, onClick = () => {} }) => (
  <button
    className="button"
    type="button"
    style={{ width }}
    onClick={onClick}
  >
    {text}
  </button>
);
