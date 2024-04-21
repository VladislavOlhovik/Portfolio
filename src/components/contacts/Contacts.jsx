import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { useFormik } from 'formik';

import { Alert, Title, Button } from '@components';
import styleContainer from '@styles/Container.module.scss';
import { sendContacts } from '@store';

import style from './Contacts.module.scss';

export function Contacts() {
  const dispatch = useDispatch();
  const { message, isDone } = useSelector(state => state.contacts);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Please enter your name';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.email) {
        errors.email = 'Please enter your e-mail';
      } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email format';
      }
      if (!values.message) {
        errors.message = 'Please enter your message';
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(sendContacts(values));
      formik.resetForm();
    },
  });
  let errorName = formik.touched.name && formik.errors.name;
  let errorEmail = formik.touched.email && formik.errors.email;
  let errorMessage = formik.touched.message && formik.errors.message;
  return (
    <div id={'contacts'} className={style.contactsBlock}>
      {message && <Alert message={message} sec={5} isDone={isDone} />}
      <div className={`${style.contactsContainer} ${styleContainer.container}`}>
        <Title title={'Contact'} />
        <Fade bottom>
          <form className={style.contactForm} onSubmit={formik.handleSubmit}>
            <div>{errorName ? <div>{formik.errors.name}</div> : null}</div>
            <input
              className={errorName ? style.error : ''}
              id='name'
              type='text'
              placeholder='Enter your name*'
              {...formik.getFieldProps('name')}
            />
            <div>{errorEmail ? <div>{formik.errors.email}</div> : null}</div>
            <input
              className={errorEmail ? style.error : ''}
              id='email'
              type='text'
              placeholder='Enter your e-mail*'
              {...formik.getFieldProps('email')}
            />
            <div>
              {errorMessage ? <div>{formik.errors.message}</div> : null}
            </div>
            <textarea
              className={errorMessage ? style.error : ''}
              id='message'
              type='text'
              placeholder='Enter your message*'
              {...formik.getFieldProps('message')}
            />
            <Button type='submit' title='Send message' />
          </form>
        </Fade>
      </div>
    </div>
  );
}
