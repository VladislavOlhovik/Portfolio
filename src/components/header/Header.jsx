import React from 'react';

import { Nav } from '@components';
import styleContainer from '@styles/Container.module.scss';

import style from './Header.module.scss';

export function Header() {
  return (
    <div className={style.header}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Nav />
      </div>
    </div>
  );
}
