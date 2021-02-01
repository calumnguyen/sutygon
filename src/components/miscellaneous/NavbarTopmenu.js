import React from 'react'
import {Link} from 'react-router-dom'


function NavbarTopmenu() {

  return (

    <div>

      <nav className="navbar-topmenu">
        <ul className="navbar-nav navbar-nav-actions">
          <li className="nav-item">
            <Link to={"login"} target={"_blank"} className={"btn btn-outline-white btn-round"}>
              Đăng nhập
            </Link>
          </li>
        </ul>
      </nav>

    </div>

  )
}

export default NavbarTopmenu