import React from 'react'
import NavbarTopmenu from "../miscellaneous/NavbarTopmenu";
import NavbarSidebar from "../miscellaneous/NavbarSidebar";
import NavbarMainmenu from "../miscellaneous/NavbarMainmenu";


function HeaderComponentHome() {

  return (

    <div>


      {/* <!-- BEGIN OF site header Menu -->*/}
      <header className="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">


        {/* <!-- Begin of menu icon toggler -->*/}
        <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
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
        <a className="navbar-brand" href="/">
          <span className="logo">
            <img className="light-logo" src="assets/img/1.png" alt="Logo" style={{display: 'inline'}}/>
          </span>
        </a>
        {/*<!-- End of logo/brand -->*/}


        {/*<!-- begin of menu wrapper -->*/}
        <div className="all-menu-wrapper" id="navbarMenu">
          <NavbarTopmenu/>
          <NavbarMainmenu/>
          <NavbarSidebar/>
        </div>
        {/*<!-- end of menu wrapper -->*/}

      </header>



    </div>


  )

}

export default HeaderComponentHome