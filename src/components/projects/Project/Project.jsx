import React from 'react';

import { Button } from '@components';

import style from './Project.module.scss';

function Project({ title, description, img, urlCode, urlPr }) {
  return (
    <div className={style.project}>
      <div
        className={style.icon}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/${img})`,
        }}
      >
        {title !== 'Portfolio' && (
          <div className={style.viewBtn}>
            <Button url={urlPr} title={'Click Me'} />
          </div>
        )}
      </div>
      <div className={style.info}>
        <h3 className={style.title}>{title}</h3>
        <span className={style.description}>
          {description}
          <a target='blank' href={urlCode[0]}>
            {urlCode[2] && urlCode[2]}Code is here
          </a>
          {urlCode[1] && ' and '}
          {urlCode[1] && (
            <a target='blank' href={urlCode[1]}>
              {urlCode[3] && urlCode[3]} Code is here
            </a>
          )}
        </span>
      </div>
    </div>
  );
}

export default Project;
