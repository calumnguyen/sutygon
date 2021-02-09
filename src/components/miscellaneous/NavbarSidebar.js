import React from 'react'
import {Link} from 'react-router-dom'

function NavbarSidebar() {

  return (

    <div>
      {/*<!-- Begin of sidebar nav menu params class: text-only / icon-only-->*/}

      <nav className="navbar-sidebar " style={{color: 'white', textAlign:'left'}}>
        <ul className="navbar-nav" id="qmenu">
          <li className="nav-item" data-menuanchor="home">
            <Link to={"/"}>
              <i className="icon ion-ios-home-outline"></i>
              <span className="txt">Trang chủ</span>
            </Link>
          </li>
          <li className="nav-item" data-menuanchor="register">
            <Link to="/login">
              <i className="icon ion-ios-compose-outline"></i>
              <span className="txt">Đăng ký</span>
            </Link>
          </li>

          <li className="nav-item" data-menuanchor="contact">
            <Link to={"contact"}>
              <i className="icon ion-ios-telephone-outline"></i>
              <span className="txt">Liên hệ</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/*<!-- End of sidebar nav menu -->*/}


    </div>
  )

}


export default NavbarSidebar