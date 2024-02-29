import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import { useDispatch } from 'react-redux';

import { setMessage } from '@store';

import style from './Alert.module.scss';

export const Alert = ({ message, sec = 3, isDone }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let time = setTimeout(() => {
      dispatch(setMessage(null, null));
    }, 1000 * sec);
    return () => {
      clearTimeout(time);
    };
  }, [sec, dispatch]);

  const close = () => {
    dispatch(setMessage(null, null));
  };
  return (
    <div className={style.wrapper}>
      <Zoom>
        <div className={style.block}>
          <button onClick={close}>
            <i className='fas fa-times-circle'></i>
          </button>
          <div className={style.icon}>
            <i
              className={isDone ? 'far fa-check-circle' : 'far fa-sad-tear'}
            ></i>
          </div>
          <span className={style.message}>{message}</span>
        </div>
      </Zoom>
    </div>
  );
};
