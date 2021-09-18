import SwiperCore, {
  Navigation, A11y, EffectFade,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Container from '../Wrapper/Container';
import {
  BigBannerWrapper, BannerCarousel, NavigationNext, NavigationPrev,
} from './BigBanner.style';
import Slide from './Slide';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, A11y, EffectFade]);

const BigBanner = ({ posts }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const onInit = (swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    swiper.params.navigation.nextEl = navigationNextRef.current;
    swiper.navigation.update();
  };

  return (
    <BigBannerWrapper>
      <Container>
        <BannerCarousel>
          {/* Navigation buttons */}
          <NavigationPrev ref={navigationPrevRef}>
            <FiArrowLeft />
          </NavigationPrev>
          <NavigationNext ref={navigationNextRef}>
            <FiArrowRight />
          </NavigationNext>
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={onInit}
            loop
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            spaceBetween={50}
            slidesPerView={1}
            style={{
              width: '100%',
            }}
            observer
            observeParents
            initialSlide={2}
          >
            {posts && posts.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Slide
                    post={item}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </BannerCarousel>
      </Container>
    </BigBannerWrapper>
  );
};

export default BigBanner;
