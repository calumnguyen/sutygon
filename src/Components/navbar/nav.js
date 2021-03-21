import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll, Link } from "react-scroll";
import $ from "jquery";
import "../../main.css";
import "../../index.css";

function NavbarSidebar(props) {
  const [addClass, setClass] = useState(props.addClassWrapper);
  useEffect(() => {
    const path = window.location.pathname.slice(1);
    if (path == "" || path == "home") {
      const home = document.querySelector(".nav-home");
      home.classList.add("active");
    }
  });
  useEffect(() => {
    setClass(props.addClassWrapper);
  }, [props.addClassWrapper]);

  const scrollToComponent = (e, comp) => {
    const home = document.querySelector("#nav-home");
    const about = document.querySelector(".nav-about");
    const product = document.querySelector(".nav-product");
    const contact = document.querySelector(".nav-rcontact");

    e.preventDefault();
    if (comp == "home") {
      home && home.classList.add("active");
      about && about.classList.remove("active");
      product && product.classList.remove("active");
      contact && contact.classList.remove("active");
      window.scrollTo(0, 0);
    } else if (comp == "about") {
      home && home.classList.remove("active");
      about && about.classList.add("active");
      product && product.classList.remove("active");
      contact && contact.classList.remove("active");
      var scrollDiv = document.getElementById("about").offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: "smooth" });
    } else if (comp == "product") {
      home && home.classList.remove("active");
      about && about.classList.remove("active");
      product && product.classList.add("active");
      contact && contact.classList.remove("active");
      window.scrollTo(0, 1550);
    }  else if (comp == "contact") {
      window.scrollTo(0, 3200);
      home && home.classList.remove("active");
      about && about.classList.remove("active");
      product && product.classList.remove("active");
      contact && contact.classList.add("active");
    }
  };

  return (
    <div>
      {/*<!-- Begin of sidebar nav menu params class: text-only / icon-only-->*/}

      <motion.nav
        className={"navbar-rightbar"}
        id="fp-nav"
        style={{ color: "white", textAlign: "right" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item" data-menuanchor="home">
            <Link
              // to="home"
              id="nav-home"
              onClick={(e) => scrollToComponent(e, "home")}
              spy={true}
              smooth={true}
              delay={100}
              offset={1}
              duration={500}
            >
              <span></span>
            </Link>
          </li>
          <li className="nav-item" data-menuanchor="about">
            <Link
              className="nav-about"
              onClick={(e) => scrollToComponent(e, "about")}
              spy={true}
              smooth={true}
              delay={100}
              offset={1}
              duration={500}
            >
              <span></span>
            </Link>
          </li>

          <li className="nav-item" data-menuanchor="product">
            <Link
              className="nav-product"
              onClick={(e) => scrollToComponent(e, "product")}
              spy={true}
              smooth={true}
              delay={100}
              offset={1}
              duration={500}
            >
              <span></span>
            </Link>
          </li>
          {/* <li className="nav-item" data-menuanchor="register">
            <Link
              className="nav-register"
              onClick={(e) => scrollToComponent(e, "register")}
              delay={100}
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              <span></span>
            </Link>
          </li> */}
          <li className="nav-item" data-menuanchor="contact">
            <Link
              className="nav-rcontact"
              onClick={(e) => scrollToComponent(e, "contact")}
              delay={100}
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              <span></span>
            </Link>
          </li>
        </ul>
      </motion.nav>
      {/*<!-- End of sidebar nav menu -->*/}
    </div>
  );
}

export default NavbarSidebar;
