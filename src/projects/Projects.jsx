import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';


function Projects() {
  const projectsInfo = useSelector(state => state.info.projectsInfo)
  return (
    <div id={'projects'} className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
        <Title title={'Projects'} />
        <div className={style.works}>
          {projectsInfo.map((el, i) => {
            return (
              <Fade bottom key={i}>
                <Project urlPr={el.urlPr} urlCode={el.urlCode} img={el.img} title={el.title} description={el.description} />
              </Fade>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
