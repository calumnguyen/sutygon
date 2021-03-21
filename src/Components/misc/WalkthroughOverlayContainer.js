import React, { useState } from "react";

function WalkthroughOverlayContainer() {
  const [show, sethide] = useState(true);
  const [addClass, setAddClass] = useState(false);
  const [showNav, setNav] = useState(false);
  const [addClassWrapper, setAddClassWrapper] = useState(false);
  const setWalkthroughCompleted2 = (e) => {
    e.preventDefault();
    sethide(false);
  };
  const test = () => {
    setNav(!showNav);
    if (showNav == true) {
      const main = document.querySelector("#mainpage");
      main.classList.add(
        "page-main",
        "page-fullpage",
        "main-anim",
        "fullpage-wrapper",
        "menu-visible"
      );
      setAddClass(true);
      setAddClassWrapper(true);

      const span = document.querySelector(".menu-icon");
      span.classList.add("menu-visible");
    } else if (showNav == false) {
      const span = document.querySelector(".menu-icon");
      span.classList.remove("menu-visible");
      const main = document.querySelector("#mainpage");
      setAddClass(false);
      setAddClassWrapper(false);

      main.classList.remove(
        "page-main",
        "page-fullpage",
        "main-anim",
        "fullpage-wrapper",
        "menu-visible"
      );
    }
  };
  return (
    <>
      {show && (
        <div className="walkthrough-overlay-container">
          <div className="menu-cont">
          <button
            className={
              addClass == true
                ? "navbar-toggler site-menu-icon menu-visible"
                : "navbar-toggler site-menu-icon"
            }
            id="navMenuIcon"
            onClick={test}
          >           
             <span
              className={
                addClass == true
                  ? "menu-icon menu-icon-random menu-visible"
                  : "menu-icon menu-icon-random"
              }
            >
                <span className="bars">
                  <span className="bar1"></span>
                  <span className="bar2"></span>
                  <span className="bar3"></span>
                </span>
              </span>
            </button>
          </div>

          <img
            src="assets/img/whitearrow.png"
            className="arrow-img animate__animated animate__heartBeat"
            alt="WhiteArrow"
          />

          <div className="walkthrough-verlay-1" style={{ color: "white" }}>
            <h1 className="center-vh animate__animated animate__backInLeft">
              Thêm nhiều bất ngờ
            </h1>
            <p className="center-vh animate__animated animate__backInRight">
              Bấm vào nút 3-gạch này để xem điểm thưởng, đơn hàng, thông tin cửa
              hàng và TEAM SUTYGON nhé bạn!
            </p>
            <div className="center-vh">
              <button
                // to={"/"}
                onClick={(e) => setWalkthroughCompleted2(e)}
                className={"btn bttn-succes"}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WalkthroughOverlayContainer;
