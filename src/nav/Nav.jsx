import React from 'react';
import style from './Nav.module.scss';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <div className={style.nav}>
      <Link
        activeClass={style.active}
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        to='main'
      >
        Main
      </Link>
      <Link
        activeClass={style.active}
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        to='skills'
      >
        Skills
      </Link>
      <Link
        activeClass={style.active}
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        to='certifications'
      >
        Certifications
      </Link>
      <Link
        activeClass={style.active}
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        to='projects'
      >
        Projects
      </Link>
      <Link
        activeClass={style.active}
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        to='contacts'
      >
        Contacts
      </Link>
    </div>
  );
}

export default Nav;
