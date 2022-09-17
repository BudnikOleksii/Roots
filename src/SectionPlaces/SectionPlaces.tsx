import { FC } from 'react';
import styles from './SectionPlaces.module.scss';
import { SwiperSlider } from '../SwiperSlider';

export const SectionPlaces: FC = () => {
  return (
    <section className={styles.places} id="places">
      <SwiperSlider />
    </section>
  );
};
