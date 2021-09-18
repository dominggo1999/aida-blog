import SwiperCore, {
  Navigation, A11y, EffectFade,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import short from 'short-uuid';
import Container from '../../components/Wrapper/Container';
import {
  EditorsPickedWrapper, Carousel, NavigationNext, NavigationPrev,
} from './EditorsPicked.style';
import Slide from './Slide';
import { PickedPosts } from '../../data/editorspicked';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, A11y, EffectFade]);

const EditorsPicked = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const onInit = (swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    swiper.params.navigation.nextEl = navigationNextRef.current;
    swiper.navigation.update();
  };

  return (
    <EditorsPickedWrapper>
      <Container>
        <SectionHeader>Editor&apos;s picked</SectionHeader>
        <Carousel>
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
            {PickedPosts && PickedPosts.map((item) => {
              return (
                <SwiperSlide key={short.generate()}>
                  <Slide
                    post={item}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Carousel>
      </Container>
    </EditorsPickedWrapper>
  );
};

export default EditorsPicked;
