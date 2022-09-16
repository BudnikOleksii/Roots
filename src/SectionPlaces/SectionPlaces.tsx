import { FC } from 'react';
import './sectionPlaces.scss';
import { SwiperSlider } from '../SwiperSlider';

export const SectionPlaces: FC = () => {
  return (
    <section className="places" id="places">
      <SwiperSlider />
    </section>
  );
};
