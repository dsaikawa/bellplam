import { Image } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <Image src="/sample1.jpg" fit="cover" h="100svh" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/sample2.jpg" fit="cover" h="100svh" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Hero;
