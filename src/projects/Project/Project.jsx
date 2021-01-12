import React from 'react';
import Button from '../../common/components/button/Button';
import style from './Project.module.scss'


function Project(props) {
  return (
    <div className={style.project}>
      <div className={style.icon} style={props.img}>
        {props.title !== 'Portfolio' && <div className={style.viewBtn}>
          <Button url={props.urlPr} text={'Click Me'} />
        </div>}
      </div>
      <div className={style.info}>
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.description}>
          {props.description}
          <a target="blank" href={props.urlCode[0]}>
            {props.urlCode[2] && props.urlCode[2]}Code is here
          </a>
          {props.urlCode[1]&&' and '}
          {props.urlCode[1] && <a target="blank" href={props.urlCode[1]}>
            {props.urlCode[3] && props.urlCode[3]} Code is here
          </a>}
        </span>
      </div>
    </div>
  );
}

export default Project;
