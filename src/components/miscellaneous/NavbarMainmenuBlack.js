import React from 'react'
import {Link} from 'react-router-dom'

function forced_reload(){
  setTimeout(() => {
    <script type={"text/javascript"}>
    function func_reload(){
      window.location.reload(true)
    }
  
      window.func_reload()
    </script>
  
  },500)
  
}

function NavbarMainmenuBlack() {

  return (

    <div>
      {/*<!-- Begin of hamburger mainmenu menu -->*/}
      <nav className="navbar-mainmenu" style={{textAlign: 'left', backgroundColor:  'black'}}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/myorder"} className={"nav-link"} onClick={forced_reload}>
              <i className="las la-shopping-bag" id="hideIcon"></i>
              <span className="txt">Đơn hàng</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/point"} className={"nav-link"} onClick={forced_reload}>
              <i className="las la-money-check-alt" id="hideIcon"></i>
              <span className="txt">Điểm thưởng</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/store"} className={"nav-link"} onClick={forced_reload}>
              <i className="las la-building" id="hideIcon"></i>
              <span className="txt">Cửa hàng</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/team"} className={"nav-link"} onClick={forced_reload}>
              <i className="las la-user-friends" id="hideIcon"></i>
              <span className="txt">Team</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/*<!-- End of hamburger mainmenu menu -->*/}


    </div>


  )
}


export default NavbarMainmenuBlack