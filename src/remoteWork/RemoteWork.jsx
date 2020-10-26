import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './RemoteWork.module.css'

function RemoteWork() {
  return (
    <div className={style.remoteWork}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <h3 className={style.title}>Рассматриваю варианты удаленной работы</h3>
        <button className={style.button}>Нанаять меня</button>
      </div>
    </div>
  );
}

export default RemoteWork;
