import React from 'react'

function HeaderComponent() {

  return (

    <div>

      <div className="page-loader" id="page-loader">
        <img src="assets/img/loader.gif" width="30%" id="loaderSizing"/>
      </div>

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
            <img className="light-logo" src="assets/img/1.png" alt="Logo"/>
          </span>
        </a>
        {/*<!-- End of logo/brand -->*/}


        {/*<!-- begin of menu wrapper -->*/}
        <div className="all-menu-wrapper" id="navbarMenu">

          {/*<!-- Begin of top menu -->*/}
          <nav className="navbar-topmenu">
            {/*<!-- Begin of CTA Actions, & Icons menu -->*/}
            <ul className="navbar-nav navbar-nav-actions">
              <li className="nav-item">
                <a className="btn btn-outline-white btn-round" target="_blank" href="login">
                  Đăng nhập
                </a>
              </li>
            </ul>
            {/*<!-- End of CTA & Icons menu -->*/}
          </nav>
          {/*<!-- End of top menu -->*/}
          {/*<!-- Begin of sidebar nav menu params class: text-only / icon-only-->*/}

          <nav className="navbar-sidebar ">
            <ul className="navbar-nav" id="qmenu">
              <li className="nav-item" data-menuanchor="home">
                <a href="/">
                  <i className="icon ion-ios-home-outline"></i>
                  <span className="txt">Trang chủ</span>
                </a>
              </li>
              <li className="nav-item" data-menuanchor="register">
                <a href="register">
                  <i className="icon ion-ios-compose-outline"></i>
                  <span className="txt">Đăng ký</span>
                </a>
              </li>
              <li className="nav-item" data-menuanchor="contact">
                <a href="contact">
                  <i className="icon ion-ios-telephone-outline"></i>
                  <span className="txt">Liên hệ</span>
                </a>
              </li>
            </ul>
          </nav>
          {/*<!-- End of sidebar nav menu -->*/}
          {/*<!-- Begin of hamburger mainmenu menu -->*/}


          <nav className="navbar-mainmenu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="myorder">
                  <i className="las la-shopping-bag" id="hideIcon"></i>
                  <span className="txt">Đơn hàng</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="point">
                  <i className="las la-money-check-alt" id="hideIcon"></i>
                  <span className="txt">Điểm thưởng</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="store">
                  <i className="las la-building" id="hideIcon"></i>
                  <span className="txt">Cửa hàng</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="team">
                  <i className="las la-user-friends" id="hideIcon"></i>
                  <span className="txt">Team</span>
                </a>
              </li>
            </ul>
          </nav>
          {/*<!-- End of hamburger mainmenu menu -->*/}


        </div>
        {/*<!-- end of menu wrapper -->*/}

      </header>


    </div>


  )
}


export default HeaderComponent






