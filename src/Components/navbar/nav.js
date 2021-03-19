import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { animateScroll as scroll, Link } from "react-scroll";
import scrollToComponent from 'react-scroll-to-component';
import "../../main.css";
import "../../index.css";

function NavbarSidebar(props) {
  const [addClass, setClass] = useState(props.addClassWrapper);
  useEffect(() => {
    const path = window.location.pathname.slice(1);
    if (path == "" || path == "home") {
      const home = document.querySelector(".nav-home");
      home.classList.add("active");
    } else if (path == "register") {
      const register = document.querySelector(".nav-register");
      register.classList.add("active");
    } else if (path == "contact") {
      const register = document.querySelector(".nav-contact");
      register.classList.add("active");
    }
  });
  useEffect(() => {
    console.log("working");
    setClass(props.addClassWrapper);
  }, [props.addClassWrapper]);

  return (
    <div>
      {/*<!-- Begin of sidebar nav menu params class: text-only / icon-only-->*/}

      <nav
        className={"navbar-rightbar"}
        id="fp-nav"
        style={{ color: "white", textAlign: "right" }}
      >
        <ul className="navbar-nav" id="">
          <li className="nav-item nav-home" data-menuanchor="home">
            <Link
              to="home"
              spy={true}
              smooth={true}
              delay={100}
              // onClick={() => scrollToComponent(props.refs[0],{ offset: 0, align: 'top', duration: 1500})}
              offset={-50}
              duration={500}
            >
              <span></span>
            </Link>
          </li>
          <li className="nav-item nav-register" data-menuanchor="register">
            <Link
              // className="anchor"
              // activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              delay={100}
              offset={-50}
              duration={500}
            >
              <span></span>
            </Link>
          </li>

          <li className="nav-item nav-contact" data-menuanchor="contact">
            <Link
              // className="anchor"
              // activeClass="active"
              to="product"
              spy={true}
              smooth={true}
              delay={100}
              offset={-50}
              duration={500}
            >
              <span></span>
            </Link>
          </li>
          <li className="nav-item nav-contact" data-menuanchor="contact">
            <Link
              // className="anchor"
              // activeClass="active"
              to="register"
              delay={100}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <span></span>
            </Link>
          </li>
          <li className="nav-item nav-contact" data-menuanchor="contact">
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
        </ul>
      </nav>
      {/*<!-- End of sidebar nav menu -->*/}
    </div>
  );
}

export default NavbarSidebar;
