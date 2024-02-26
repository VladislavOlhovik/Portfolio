import React from 'react';
import styleContainer from '../common/styles/Container.module.scss';
import style from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import Fade from 'react-reveal/Fade';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { sendContacts } from '../Redux/contacts.reducer';
import Alert from '../common/components/Alert/alert';

function Contacts() {
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
      if (!values.email) {
        errors.email = 'Please enter your e-mail';
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
            <button type='submit' className={style.submitBtn}>
              Send message
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
}

export default Contacts;
