import React from 'react';
import Tilt from 'react-tilt';
import ReactTypingEffect from 'react-typing-effect';
import Particles from 'react-particles-js';

import styleContainer from '@styles/Container.module.scss';

import style from './Main.module.scss';

const particlesParam = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

export function Main() {
  return (
    <div id={'main'} className={style.mainBlock}>
      <Particles className={style.particles} params={particlesParam} />
      <div className={`${styleContainer.container} ${style.mainContainer}`}>
        <div className={style.text}>
          <span>Hi There</span>
          <h1>
            I am <span>Uladzislau Alkhovik</span>
          </h1>
          <ReactTypingEffect
            speed={30}
            typingDelay={1500}
            text={'Frontend Developer'}
          />
        </div>
        <div className={style.photo}>
          <Tilt options={{ scale: 1.05, max: 15 }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/photo.webp`}
              alt='MyPhoto'
            />
          </Tilt>
          <span></span>
        </div>
      </div>
    </div>
  );
}
