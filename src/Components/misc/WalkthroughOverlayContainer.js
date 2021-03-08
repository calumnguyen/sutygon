import React, { useState } from "react";

function WalkthroughOverlayContainer() {
  const [show, sethide] = useState(true);
  const setWalkthroughCompleted2 = (e) => {
    e.preventDefault();
    sethide(false);
  };

  return (
    <>
      {show && (
        <div className="walkthrough-overlay-container">
          <div className="menu-cont">
            <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
              <span className="menu-icon menu-icon-random">
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
