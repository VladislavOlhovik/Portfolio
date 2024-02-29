import React from 'react';
import Fade from 'react-reveal/Fade';

import style from './Title.module.scss';

export function Title({ title }) {
  return (
    <Fade bottom>
      <div className={style.title}>
        <h2>{title}</h2>
      </div>
    </Fade>
  );
}
