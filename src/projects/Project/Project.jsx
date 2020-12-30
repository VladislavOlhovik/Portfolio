import React from 'react';
import Button from '../../common/components/button/Button';
import style from './Project.module.scss'


function Project(props) {
  return (
    <div className={style.project}>
      <div className={style.icon} style={props.img}>
        <div className={style.viewBtn}>
          <Button url={props.url} text={'Click Me'} />
        </div>
      </div>
      <div className={style.info}>
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
}

export default Project;
