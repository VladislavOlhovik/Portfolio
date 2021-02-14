import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Photo from '../assets/images/photo.jpg'
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';

const particlesParam = {
  'particles': {
    'number': {
      'value': 160,
      'density': {
        'enable': true,
        'value_area': 800
      }
    }
  }
}

function Main() {
  return (
    <div id={'main'} className={style.mainBlock}>
      <Particles className={style.particles} params={particlesParam} />
      <div className={`${styleContainer.container} ${style.mainContainer}`}>
        <div className={style.text}>
          <span>Hi There</span>
          <h1>I am <span>Vladislav Olhovik</span></h1>
          <ReactTypingEffect speed={30} typingDelay={1500} text={'Frontend Developer'} />
        </div>
        <div className={style.photo}>
          <Tilt options={{ scale: 1.05, max: 15 }}>
            <img src={Photo} alt="MyPhoto" />
          </Tilt>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Main;
