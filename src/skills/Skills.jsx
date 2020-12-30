import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';



function Skills() {
  const info =[
    {title:'HTML',
    img:'fas fa-code',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
    {title:'JS-TS',
    img:'fab fa-js-square',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
    {title:'CSS',
    img:'fab fa-css3-alt',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
    {title:'Rest API',
    img:'fas fa-cloud',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
    {title:'React-Redux',
    img:'fab fa-react',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
    {title:'GitHub',
    img:'fab fa-github',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
  ]


  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <Title title={'Skills'}/>
          <div className={style.skills}>
            {info.map((el,i)=>{
              return(
                <Skill key={i} img={el.img} title={el.title} description={el.description}/>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default Skills;
