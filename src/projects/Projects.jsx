import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import ImgTodolist from '../assets/images/why-reminders.jpg'
import ImgSocialNetwork from '../assets/images/sdf.jpg'
import Fade from 'react-reveal/Fade';


function Projects() {
  const info =[
    {title:'Social Network', img:{ backgroundImage: `url(${ImgSocialNetwork})` },
    url:'https://vladislavolhovik.github.io/SocialNetwork-TS/',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
    {title:'Todolist', img:{ backgroundImage: `url(${ImgTodolist})` },
    url:'https://vladislavolhovik.github.io/TodoList/',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
  ]
  
  return (
    <div id={'projects'} className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
          <Title title={'Projects'}/>
          <div className={style.works}>
            {info.map((el,i)=>{
              return (
                <Fade bottom key={i}>
                  <Project url={el.url} img={el.img} title={el.title} description={el.description} />
                </Fade>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default Projects;
