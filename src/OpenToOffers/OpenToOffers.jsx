import React from 'react';
import styleContainer from '../common/styles/Container.module.scss'
import style from './OpenToOffers.module.scss'
import Button from '../common/components/button/Button'
import Title from '../common/components/title/Title';

function OpenToOffers() {
  return (
    <div className={style.remoteWork}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title title={"I'm open to job offers"}/>
        <Button text={'Hire Me'} url={'mailto:alkhovikvlad@gmail.com'} />
      </div>
    </div>
  );
}

export default OpenToOffers;
