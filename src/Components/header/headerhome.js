import React, { useState } from "react";
import NavbarTopmenu from "../navbar/navbartopmenu";
import NavbarSidebar from "../navbar/navbarsidebar";
import NavRightbar from "../navbar/nav";
import NavbarMainmenuBlack from "../navbar/navbarblack";
import NavbarMainmenu from "../navbar/navbarmain";
import { Link } from "react-router-dom";
import "../../main.css";
import "../../index.css";
function HeaderComponentHome() {
  const [showNav, setNav] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [addClassWrapper, setAddClassWrapper] = useState(false);
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
    <React.Fragment>
      {/* {<NavbarMainmenuBlack />} */}
      <div>
        {/* <!-- BEGIN OF site header Menu -->*/}
        <header className="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">
          {/* <!-- Begin of menu icon toggler -->*/}
          <button
            className={
              addClass == true
                ? "navbar-toggler site-menu-icon menu-visible"
                : "navbar-toggler site-menu-icon"
            }
            id="navMenuIcon"
            onClick={test}
          >
            {/*<!-- Available class : menu-icon-dot / menu-icon-thick /menu-icon-random -->*/}
            <span
              className={
                addClass == true
                  ? "menu-icon menu-icon-random menu-visible"
                  : "menu-icon menu-icon-random"
              }
            >
              <span className="bars">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </span>
            </span>
          </button>
          {/*<!-- End of menu icon toggler -->*/}

          {/*<!-- Begin of logo/brand -->*/}

          <Link className={"navbar-brand"} to={"/home"}>
            <span className="logo">
              <img className="light-logo" src="assets/img/1.png" alt="Logo" />
            </span>
          </Link>

          {/*<!-- End of logo/brand -->*/}

          {/*<!-- begin of menu wrapper -->*/}
          <div className={addClassWrapper ? "all-menu-wrapper menu-visible" : "all-menu-wrapper"} id="navbarMenu">
            <NavbarTopmenu />
            <NavbarSidebar addClassWrapper={addClassWrapper}/>
            <NavRightbar />
            <NavbarMainmenu />

          </div>

          {/*<!-- end of menu wrapper -->*/}
        </header>
      </div>
    </React.Fragment>
  );
}

export default HeaderComponentHome;
