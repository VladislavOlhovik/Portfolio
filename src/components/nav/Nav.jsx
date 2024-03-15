import React from 'react';
import { Link } from 'react-scroll';

import style from './Nav.module.scss';

const links = ['main', 'skills', 'certifications', 'projects', 'contacts'];

export function Nav() {
  return (
    <div className={style.nav}>
      {links.map(link => {
        return (
          <Link
            key={link}
            activeClass={style.active}
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            to={link}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
