import React from 'react';
import style from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Work from './work/Work';


function Works() {
  const info =[
    {title:'Social Network',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
    {title:'Todolist',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'},
  ]


  return (
    <div className={style.worksBlock}>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
          <h2>My job</h2>
          <div className={style.works}>
            {info.map((el,i)=>{
              return(
                <Work key={i} title={el.title} description={el.description}/>
              )
            })}
          </div>
      </div>
      
    </div>
  );
}

export default Works;
