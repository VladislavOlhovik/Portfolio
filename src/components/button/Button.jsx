import React from 'react';

import style from './Button.module.scss';

export const Button = ({
  url = '',
  title,
  type = 'button',
  onClick = () => {},
}) => {
  if (url) {
    return (
      <a href={url} target='blank' className={style.btn}>
        {title}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={style.btn}>
      {title}
    </button>
  );
};
