import React from 'react'
import {Link} from 'react-router-dom'


function NavbarTopmenu() {

  return (

    <div>

      <nav className="navbar-topmenu">
        <ul className="navbar-nav navbar-nav-actions">
          <li className="nav-item">
            <Link to={"login"} target={"_blank"} className={"btn btn-outline-white px-4 py-2 btn-round text-white"}
>
              Đăng nhập
            </Link>
          </li>
        </ul>
      </nav>

    </div>

  )
}

export default NavbarTopmenu