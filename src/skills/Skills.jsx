import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

function Skills() {
  const skillsInfo = useSelector(state=>state.info.skillsInfo)
  return (
    <div id={'skills'} className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <Title title={'Skills'}/>
          <div className={style.skills}>
            {skillsInfo.map((el,i)=>{
              return (
                <Fade bottom key={i}>
                  <Skill img={el.img} title={el.title} description={el.description} />
                </Fade>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default Skills;
