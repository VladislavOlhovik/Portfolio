import React from 'react';

import style from './Skill.module.scss';

function Skill({ img, title, description }) {
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <div className={`${style.logo}`}>
          <i className={img}></i>
        </div>
      </div>
      <h3>{title}</h3>
      <span className={style.description}>{description}</span>
    </div>
  );
}

export default Skill;
