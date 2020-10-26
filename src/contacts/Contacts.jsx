import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

function Contacts() {
  return (
    <div className={style.contacts}>
      <div className={`${styleContainer.container} ${style.container}`}>
       <h2>Contact</h2>
       <div className={style.form}>
         <input type="text"/>
         <input type="text"/>
         <textarea name="" id="" cols="30" rows="10"></textarea>
       </div>
       <button className={style.button}>Отправить</button>
      </div>
    </div>
  );
}

export default Contacts;
