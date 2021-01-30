import React from 'react'


function NavbarMainmenuBlack() {

  return (

    <div>

      {/*<!-- Begin of hamburger mainmenu menu -->*/}
      <nav className="navbar-mainmenu" style={{textAlign: 'left', backgroundColor:  'black'}}>
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


  )
}


export default NavbarMainmenuBlack