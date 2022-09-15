import { FC } from 'react';
import './sectionText.scss';

type Props = {
  text: string;
};

export const SectionText: FC<Props> = ({ text }) => (
  <p className="section-text">
    {text}
  </p>
);
