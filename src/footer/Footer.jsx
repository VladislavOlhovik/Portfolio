import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Footer.module.scss'
import Title from '../common/components/title/Title'

function Footer() {
  return (
    <div className={style.footer}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title title={'Vladislav Olhovik'}/>
        {/* <h3>Vladislav</h3> */}
        <div className={style.list}>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">Dribble</a>
          <a href="">Linkedin</a>
          <a href="">Pinterest</a>
        </div>
        <span>© 2020 beingeorge, All Rights Reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
