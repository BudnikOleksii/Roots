import { FC } from 'react';
import styles from './SectionHeading.module.scss';

type Props = {
  text: string;
};

export const SectionHeading: FC<Props> = ({ text }) => (
  <h2 className={styles.sectionHeading}>
    {text}
  </h2>
);
