import React, { useEffect, useRef, useState } from 'react';
// short-uuid just for ui testing before connected to the real database
import short from 'short-uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { categories } from '../../data/categories';
import Container from '../../components/Wrapper/Container';
import { CategoryCardsWrapper, CardsCarousel } from './CategoryCards.style';
import { breakpoints } from '../../constants/tailwindBreakpoint';
import { scrollToTop } from '../../util/scrollToTop';

// Install swiper plugin
// Import Swiper styles
import 'swiper/swiper-bundle.css';

const CategoryCards = () => {
  return (
    <CategoryCardsWrapper>
      <Container>
        <CardsCarousel>
          <Swiper
            loop
            slidesPerView="auto"
            style={{
              width: '100%',
              position: 'relative',
              overflow: 'visible',
            }}
            spaceBetween={20}
          >
            {
              categories && categories.map((category) => {
                return (
                  <SwiperSlide
                    style={{
                      width: 'auto',
                    }}
                    key={short.generate()}
                  >
                    <Link
                      onClick={scrollToTop}
                      to={`/category/${category.category}`}
                    >
                      <CategoryCard
                        category={category}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </CardsCarousel>
      </Container>
    </CategoryCardsWrapper>
  );
};

export default CategoryCards;
