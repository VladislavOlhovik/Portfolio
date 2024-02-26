import React, { useState, useEffect } from 'react';

import Slide from '../slide/Slide';
import style from './Carousel.module.scss';

const Carousel = ({ listOfCerts, size }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  useEffect(() => {
    setTranslateValue(-currentIndex * slideWidth());
  }, [currentIndex]);

  const slideWidth = () => {
    return document.getElementById(`carouselSlide`).clientWidth;
  };

  const nextSlide = () => {
    if (currentIndex === listOfCerts.length - size) {
      return setAll(0, 0);
    }
    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue - slideWidth());
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      return setAll(
        listOfCerts.length - size,
        -(slideWidth() * (listOfCerts.length - size)),
      );
    }
    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + slideWidth());
  };

  const setAll = (index, translate) => {
    setCurrentIndex(index);
    setTranslateValue(translate);
  };

  return (
    <div
      className={style.carouselContainer}
      style={{ width: `${size * 386}px` }}
    >
      <button
        onClick={prevSlide}
        className={`${style.slideButton} ${style.prev}`}
      >
        &#10094;
      </button>
      <div className={style.carouselWrapper}>
        <div
          className={style.carouselContent}
          style={{ transform: `translateX(${translateValue}px)` }}
        >
          {listOfCerts.map((item, index) => (
            <div
              key={index}
              id={'carouselSlide'}
              className={style.slide}
              style={{ width: `${100 / size}%` }}
            >
              <Slide {...item} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className={`${style.slideButton} ${style.next}`}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
