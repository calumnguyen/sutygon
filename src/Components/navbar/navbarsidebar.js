import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import iosHomeOutline from "@iconify/icons-ion/ios-home-outline";
import iosComposeOutline from "@iconify/icons-ion/ios-compose-outline";
import iosTelephoneOutline from "@iconify/icons-ion/ios-telephone-outline";
import "../../main.css";
import "../../index.css";

function NavbarSidebar(props) {
  const [addClass, setClass] = useState(props.addClassWrapper);
  useEffect(() => {
    const path = window.location.pathname.slice(1);
    if (path == "" || path == "home") {
      const home = document.querySelector(".nav-home");
      home.classList.add("active");
    } else if (path == "register") {
      const register = document.querySelector(".nav-register");
      register.classList.add("active");
    } else if (path == "contact") {
      const register = document.querySelector(".nav-contact");
      register.classList.add("active");
    }
  });
  useEffect(() => {
    setClass(props.addClassWrapper);  
  }, [props.addClassWrapper]);
  return (
    <div>
      {/*<!-- Begin of sidebar nav menu params class: text-only / icon-only-->*/}

      <nav
        className={
          addClass ? "navbar-sidebar menu-visible" : "navbar-sidebar"
        }
        id="nav"
        style={{ color: "white", textAlign: "left" }}
      >
        <ul className="navbar-nav" id="qmenu">
          <li className="nav-item nav-home" data-menuanchor="home">
            <Link to={"/home"}>
              <i className="icon ion-ios-home-outline text-white">
                <Icon icon={iosHomeOutline} className="mb-1" />
              </i>
              <span className="txt">Trang chủ</span>
            </Link>
          </li>
          <li className="nav-item nav-register" data-menuanchor="register">
            <Link to="/register">
              <i className="icon text-white">
                <Icon icon={iosComposeOutline} className="mb-1" />
              </i>
              <span className="txt">Đăng ký</span>
            </Link>
          </li>

          <li className="nav-item nav-contact" data-menuanchor="contact">
            <Link to={"/contact"}>
              <i className="icon text-white">
                <Icon icon={iosTelephoneOutline} className="mb-1" />
              </i>
              <span className="txt">Liên hệ</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/*<!-- End of sidebar nav menu -->*/}
    </div>
  );
}

export default NavbarSidebar;
