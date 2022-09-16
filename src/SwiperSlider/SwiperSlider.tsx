import { FC, useEffect, useState } from 'react';
import './swiperSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import water from './img-main.png';
import trees from './img-1.png';
import energy from './img-2.png';
import organic from './img-3.png';
import plastic from './img-4.png';

export const SwiperSlider: FC = () => {
  const [slidesPerViewCount, setSlidesPerViewCount] = useState(1);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setSlidesPerViewCount(1);
    } else if (window.innerWidth < 1024) {
      setSlidesPerViewCount(2);
    } else {
      setSlidesPerViewCount(3);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        loop
        slidesPerView={slidesPerViewCount}
        // eslint-disable-next-line
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide--main">
            <img src={water} alt="water" />
            <h4 className="slide__heading">Save watter</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={trees} alt="trees" />
            <h4 className="slide__heading">Plant trees</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={energy} alt="energy" />
            <h4 className="slide__heading">Save energy</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={plastic} alt="plastic" />
            <h4 className="slide__heading">Avoid plastic</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={organic} alt="organic" />
            <h4 className="slide__heading">Choose organic</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
