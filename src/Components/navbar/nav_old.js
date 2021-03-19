import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll, Link } from "react-scroll";
import '../../main.css'
import '../../index.css'

const NavRightbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleClick = () => {
    setNavClicked(!navClicked);
  };
  useEffect(() => {
    const nav_home = document.querySelector('.home_link')
    nav_home.classList.add('active')
  }, []);
  const changeNav = () => {
    scroll.scrollMore(400);
    
    // if (window.scrollY >= 50) {
    //   console.log('workign')
    //   setNavbar(true);
    // } else {
    //   setNavbar(false);
    // }
  };

  window.addEventListener("keydown", (event) => {
    if (event.keyCode === 34 || event.keyCode=== 40) {
      return changeNav;
    }
  });

  return (
    <motion.div
      className={"navbar-sidebar right"}
      id="fp-nav"
      style={{ color: "white", marginTop: "14rem" }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <ul>
        <li>
          <Link
            className={"home_link"}
            // activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            delay={100}
            offset={-50}
            duration={500}
          >
            <span></span>
          </Link>
        </li>

        <li className="">
          <Link
            // className="anchor"
            // activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            delay={100}
            offset={-50}
            duration={500}
          >
            <span></span>
          </Link>
        </li>

        <li className="">
          <Link
            // className="anchor"
            // activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            delay={100}
            offset={-50}
            duration={500}
          >
            <span></span>
          </Link>
        </li>

        {/* <li className="link">
          <Link
            className="anchor"
            // activeClass="active"
            to="portfolio"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Portfolio
          </Link>
        </li>

        <li className=""> 
          <Link
            className="anchor"
            // activeClass="active"
            to="achievements"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Achievements
          </Link>
        </li> */}

        <li className="">
          <Link
            // className="anchor"
            // activeClass="active"
            to="contact"
            delay={100}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <span></span>
          </Link>
        </li>
        <li className="">
          <Link
            // className="anchor"
            // activeClass="active"
            to="test"
            delay={100}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <span></span>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default NavRightbar;
