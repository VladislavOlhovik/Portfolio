import React from 'react';

import { Button, Title } from '@components';
import styleContainer from '@styles/Container.module.scss';

import style from './OpenToOffers.module.scss';

export function OpenToOffers() {
  return (
    <div className={style.remoteWork}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title title={"I'm open to job offers"} />
        <Button title={'Hire Me'} url={'mailto:alkhovikvlad@gmail.com'} />
      </div>
    </div>
  );
}
