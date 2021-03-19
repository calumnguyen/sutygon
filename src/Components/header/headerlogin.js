import React, { useState,useEffect } from "react";
import NavbarTopmenu from "../navbar/navbartopmenu";
import NavbarSidebar from "../navbar/navbarsidebar";
import NavbarMainmenu from "../navbar/navbarmain";
import { Link } from "react-router-dom";

{
  /*problem*/
}
function HeaderComponentLogin() {
  const [showNav, setNav] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [addClassWrapper, setAddClassWrapper] = useState(false);
  useEffect(() => {
    const home = document.querySelector(".nav-home");
    home.classList.add("active");
  }, []);
  const test = () => {
    setNav(!showNav);
    if (showNav == true) {
      const main = document.querySelector("#mainpage");
      main.classList.add(
        "page-main",
        "page-fullpage",
        "main-anim",
        "fullpage-wrapper",
        "menu-visible"
      );
      setAddClass(true);
      setAddClassWrapper(true);

      const span = document.querySelector(".menu-icon");
      span.classList.add("menu-visible");
    } else if (showNav == false) {
      const span = document.querySelector(".menu-icon");
      span.classList.remove("menu-visible");
      const main = document.querySelector("#mainpage");
      setAddClass(false);
      setAddClassWrapper(false);

      main.classList.remove(
        "page-main",
        "page-fullpage",
        "main-anim",
        "fullpage-wrapper",
        "menu-visible"
      );
    }
  };
  return (
    <div>
      {/* <!-- BEGIN OF site header Menu -->*/}
      <header className="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">
        {/* <!-- Begin of menu icon toggler -->*/}
        <button
          className="navbar-toggler site-menu-icon"
          id="navMenuIcon"
          onClick={test}
        >
          {/*<!-- Available class : menu-icon-dot / menu-icon-thick /menu-icon-random -->*/}
          <span className="menu-icon menu-icon-random">
            <span className="bars">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </span>
          </span>
        </button>
        {/*<!-- End of menu icon toggler -->*/}

        {/*<!-- Begin of logo/brand -->*/}
        <Link className={"navbar-brand"} to={"/"}>
          <span className="logo">
            <img
              className="light-logo"
              src="assets/img/1.png"
              alt="Logo"
              style={{ display: "inline" }}
            />
          </span>
        </Link>

        {/*<!-- End of logo/brand -->*/}

        {/*<!-- begin of menu wrapper -->*/}
        <div
          className={
            addClassWrapper
              ? "all-menu-wrapper menu-visible"
              : "all-menu-wrapper"
          }
          id="navbarMenu"
        >
          <NavbarTopmenu />
          <NavbarSidebar addClassWrapper={addClassWrapper} />
          <NavbarMainmenu />
        </div>
        {/*<!-- end of menu wrapper -->*/}
      </header>
    </div>
  );
}

export default HeaderComponentLogin;
