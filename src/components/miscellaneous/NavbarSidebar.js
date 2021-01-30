import React from 'react'


function NavbarSidebar() {

  return (

    <div>

      {/*<!-- Begin of sidebar nav menu params class: text-only / icon-only-->*/}

      <nav className="navbar-sidebar " style={{color: 'white', textAlign:'left'}}>
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


    </div>
  )

}


export default NavbarSidebar