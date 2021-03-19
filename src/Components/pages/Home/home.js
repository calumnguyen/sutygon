import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../../index.css";
import '../../../main.css'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <section
        className="home-container"
        data-aos="fade-up"
        id="home"
        name="home"
      >
        <div
          className="section section-home fullscreen-md fp-auto-height-responsive main-home mb-5"
          data-section="home"
        >
          <div className="section-wrapper">
            <div className="section-content anim mx-5">
              <div className="row">
                <div className="col-12 col-md-6 text-left" id="leftContent">
                  <div className="title-desc">
                    <h2 className="display-4 display-title home-title anim-1 ">
                      SUTYGON
                    </h2>
                    <h4 className="anim-2">
                      Chào mừng bạn đã đến với Sutygon – dẫn <br /> đầu về tổ
                      chức sự kiện và cho thuê áo dài, trang phục biểu diễn tại
                      Đà Nẵng
                    </h4>
                  </div>

                  <div className="btns-action anim-3">
                    <Link
                      to={"login"}
                      className={
                        "btn btn-outline-white px-4 py-2 btn-round text-white"
                      }
                    >
                      Đăng nhập
                    </Link>
                  </div>
                </div>

                <div
                  className=" col-md-6 right-content center-vh logo-hp"
                  id="logoSizing"
                >
                  <div className="section-content">
                    <div className="illustr zoomout-1">
                      <img className="logo" src="assets/img/1.png" alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="section-footer scrolldown">
              <Link className={"down"}>
                <span className="icon"></span>
                <span className="txt">Scroll Down</span>
              </Link>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
