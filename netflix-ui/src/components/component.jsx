import React, { useEffect } from "react";
import styled from "styled-components";
import Swiper from "swiper";

export default function Component() {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        },
      },
    });
  }, []);

  return (
    <Container>
      <p>Popular on Netflix</p>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  .swiper-container {
    overflow: visible;
  }

  p {
    font-size: 1.7rem;
    font-weight: 500;
  }
  .swiper-slide {
    transition: all 300ms ease-in-out;
    border-radius: 5px;
  }

  .swiper-slide img {
    border-radius: 5px;
    max-width: 18rem;
    cursor: grab;
  }

  .swiper-slide img:active {
    cursor: grabbing;
  }

  .swiper-slide:hover {
    transform: scale(1.5);
    transition: all 300ms ease-in-out;
    transition-delay: 300ms;
    z-index: 1;
  }

  .swiper-slide:hover img {
    transition-delay: 300ms;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 599px) {
    .swiper-slide img {
      max-width: 14rem;
    }
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    .swiper-slide img {
      max-width: 10.5rem;
      border-radius: 2px;
    }
  }
`;
