import { FC } from 'react';
import styles from './SectionText.module.scss';

type Props = {
  text: string;
};

export const SectionText: FC<Props> = ({ text }) => (
  <p className={styles.sectionText}>
    {text}
  </p>
);
