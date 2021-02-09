import React from 'react'
import NavbarTopmenu from "../miscellaneous/NavbarTopmenu";
import NavbarMainmenu from "../miscellaneous/NavbarMainmenu";
import {Link} from 'react-router-dom'

function HeaderComponent() {

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

        <Link className={"navbar-brand"} to={"/"}>
          <span className="logo">
            <img className="light-logo" src="assets/img/1.png" alt="Logo"/>
          </span>
        </Link>


        <div className="all-menu-wrapper" id="navbarMenu">
          <NavbarTopmenu/>
          <NavbarMainmenu/>
        </div>

      </header>


    </div>


  )

}


export default HeaderComponent