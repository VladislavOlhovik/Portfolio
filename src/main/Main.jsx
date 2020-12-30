import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Photo from '../assets/images/Америка.jpg'



function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <span>Hi There</span>
          <h1>I am <span>Vladislav Olhovik</span></h1>
          <p>Frontend Developer</p>
        </div>
        <div className={style.photo}>
          <img src={Photo} alt="MyPhoto"/>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Main;
