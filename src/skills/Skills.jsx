import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';


function Skills() {
  const info =[
    {title:'JS',description:'Lorem ipsum dolor sit amet'},
    {title:'CSS',description:' consectetur adipisicing elit'},
    {title:'React',description:'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
  ]


  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <h2>Skills</h2>
          <div className={style.skills}>
            {info.map((el,i)=>{
              return(
                <Skill key={i} title={el.title} description={el.description}/>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default Skills;
