import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './OpenToOffers.module.scss'
import Button from '../common/components/button/Button'
import Title from '../common/components/title/Title';
import myCV from '../assets/documents/Uladzislau Alkhovik-CV.pdf'

function OpenToOffers() {
  return (
    <div className={style.remoteWork}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title title={"I'm open to job offers"}/>
        <Button text={'Download CV'} url={myCV}/>
      </div>
    </div>
  );
}

export default OpenToOffers;
