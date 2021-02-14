import React from 'react';
import styleContainer from '../common/styles/Container.module.scss'
import style from './Footer.module.scss'
import Title from '../common/components/title/Title'
import Fade from 'react-reveal/Fade';


function Footer() {
  return (
    <div className={style.footer}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title title={'Vladislav Olhovik'} />
        <Fade bottom>
          <div className={style.list}>
            <a title='telegram' target="blank" href="https://t.me/vladolhovik">
              <i className="fab fa-telegram"></i>
            </a>
            <a title='github' target="blank" href="https://github.com/VladislavOlhovik">
              <i className="fab fa-github"></i>
            </a>
            <a title='linkedin' target="blank" href="https://www.linkedin.com/in/vlolhovik/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a title='instagram' target="blank" href="https://www.instagram.com/wladolkhovik/?igshid=1hei8w56ildim">
              <i className="fab fa-instagram"></i>
            </a>
            <a title='facebook' target="blank" href="https://www.facebook.com/wladrulit">
              <i className="fab fa-facebook"></i>
            </a>
            <a title='codewars' target="blank" href="https://www.codewars.com/users/VladislavOlhovik">
              <i className="fas fa-laptop-code"></i>
            </a>
          </div>
        </Fade>
        <span>© 2021 All Rights Reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
