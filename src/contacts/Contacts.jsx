import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={`${style.contactsContainer} ${styleContainer.container}`}>
        <h2 className={style.title}>Contact</h2>
        <form className={style.contactForm}>
          <input type="text" />
          <input type="text" />
          <textarea></textarea>
          <button className={style.submitBtn}>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
