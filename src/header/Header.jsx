import React from 'react';
import Nav from '../nav/Nav';
import styleContainer from '../common/styles/Container.module.scss';
import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.header}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Nav />
      </div>
    </div>
  );
}

export default Header;
