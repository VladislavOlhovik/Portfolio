import React from 'react';
import style from './Project.module.scss'


function Project(props) {
  return (
    <div className={style.project}>
      <div className={style.icon} style={props.img}>
        <a href={`${props.url}`} target="blank" className={style.viewBtn}>Click Me</a>
      </div>
      <div className={style.info}>
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
}

export default Project;
