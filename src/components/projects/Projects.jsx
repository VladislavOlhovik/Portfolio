import React from 'react';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

import { Title } from '@components';
import styleContainer from '@styles/Container.module.scss';

import style from './Projects.module.scss';
import Project from './Project/Project';

export function Projects() {
  const projectsInfo = useSelector(state => state.info.projectsInfo);
  return (
    <div id={'projects'} className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
        <Title title={'Projects'} />
        <div className={style.works}>
          {projectsInfo.map((el, i) => {
            return (
              <Fade bottom key={i}>
                <Project
                  urlPr={el.urlPr}
                  urlCode={el.urlCode}
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
