import React from 'react'
import NavbarTopmenu from "../miscellaneous/NavbarTopmenu";
import NavbarMainmenuBlack from "../miscellaneous/NavbarMainmenuBlack";


function HeaderComponentBlack() {

  return (

    <div>


      <header className="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">

        <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
          <span className="menu-icon menu-icon-random">
            <span className="bars">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </span>
          </span>
        </button>

        <a className="navbar-brand" href="/">
          <span className="logo">
            <img className="light-logo" src="assets/img/1.png" alt="Logo"/>
          </span>
        </a>


        <div className="all-menu-wrapper" id="navbarMenu">
          <NavbarTopmenu/>
          <NavbarMainmenuBlack/>
        </div>

      </header>


    </div>


  )

}


export default HeaderComponentBlack