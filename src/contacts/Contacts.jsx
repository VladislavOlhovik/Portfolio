import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.scss'
import Title from '../common/components/title/Title'
import Fade from 'react-reveal/Fade';


function Contacts() {
  return (
    <div id={'contacts'} className={style.contactsBlock}>
      <div className={`${style.contactsContainer} ${styleContainer.container}`}>
        <Title title={'Contact'} />
        <Fade bottom>
          <form className={style.contactForm}>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='e-mail' />
            <textarea placeholder='Message' />
            <button className={style.submitBtn}>Send message</button>
          </form>
        </Fade>
      </div>
    </div>
  );
}

export default Contacts;
