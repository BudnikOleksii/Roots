import { FC } from 'react';
import './buttonMain.scss';

interface Props {
  text: string;
  width: string;
}

export const ButtonMain: FC<Props> = ({ text, width }) => (
  <button
    className="button"
    type="button"
    style={{ width }}
  >
    {text}
  </button>
);
