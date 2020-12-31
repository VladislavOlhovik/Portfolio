import React from 'react';
import style from './Nav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
  return (
    <div className={style.nav}>
      <Link activeClass={style.active}
        to="main"
        spy={true}
        smooth={true}
        offset={0}
        duration={500} >Main</Link>
      <Link activeClass={style.active}
        spy={true}
        smooth={true}
        offset={1}
        duration={500} to="skills">Skills</Link>
      <Link activeClass={style.active}
        spy={true}
        smooth={true}
        offset={1}
        duration={500} to="projects">Projects</Link>
      <Link activeClass={style.active}
        spy={true}
        smooth={true}
        offset={1}
        duration={500} to="contacts">Contacts</Link>
      {/* <a href="">Main</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
      <a href="">Contacts</a> */}
    </div>
  );
}

export default Nav;
