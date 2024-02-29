import React from 'react';
import Fade from 'react-reveal/Fade';

import { Title } from '@components';
import styleContainer from '@styles/Container.module.scss';

import style from './Footer.module.scss';

const SocialMediaInfo = [
  {
    title: 'telegram',
    href: 'https://t.me/vladolhovik',
    className: 'fab fa-telegram',
  },
  {
    title: 'github',
    href: 'https://github.com/VladislavOlhovik',
    className: 'fab fa-github',
  },
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/vlolhovik/',
    className: 'fab fa-linkedin',
  },
  {
    title: 'instagram',
    href: 'https://www.instagram.com/wladolkhovik/?igshid=1hei8w56ildim',
    className: 'fab fa-instagram',
  },
  {
    title: 'facebook',
    href: 'https://www.facebook.com/wladrulit',
    className: 'fab fa-facebook',
  },
  {
    title: 'codewars',
    href: 'https://www.codewars.com/users/VladislavOlhovik',
    className: 'fas fa-laptop-code',
  },
];

export function Footer() {
  return (
    <div className={style.footer}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title title={'Uladzislau Alkhovik'} />
        <Fade bottom>
          <div className={style.list}>
            {SocialMediaInfo.map(({ title, href, className }) => {
              return (
                <a key={href} title={title} target='blank' href={href}>
                  <i className={className}></i>
                </a>
              );
            })}
          </div>
        </Fade>
        <span>© 2024 All Rights Reserved.</span>
      </div>
    </div>
  );
}
