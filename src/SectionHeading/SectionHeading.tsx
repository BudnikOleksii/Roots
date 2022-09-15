import { FC } from 'react';
import './sectionHeading.scss';

type Props = {
  text: string;
};

export const SectionHeading: FC<Props> = ({ text }) => (
  <h2 className="section-heading">
    {text}
  </h2>
);
