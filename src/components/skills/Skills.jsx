import React from 'react';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

import styleContainer from '@styles/Container.module.scss';
import { Title } from '@components';

import Skill from './skill/Skill';
import style from './Skills.module.scss';

export function Skills() {
  const skillsInfo = useSelector(state => state.info.skillsInfo);
  return (
    <div id={'skills'} className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title={'Skills'} />
        <div className={style.skills}>
          {skillsInfo.map((el, i) => {
            return (
              <Fade bottom key={i}>
                <Skill
                  img={el.img}
                  title={el.title}
                  description={el.description}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
