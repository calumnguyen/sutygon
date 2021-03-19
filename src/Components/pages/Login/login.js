import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../../header/headerlogin";
import PageLoader from "../../misc/pageloader";
import "../../../index.css";
import "../../../main.css";

const Login = () => {
  const [addClass, setAddClass] = useState(false);
  useEffect(() => {
    const main = document.querySelector("#mainpage");
    const section = document.querySelector(".section-register");
    main.classList.add(
      "page-main",
      "page-fullpage",
      "main-anim",
      "fullpage-wrapper"
    );
    section.classList.add(
      "section",
      "section-register",
      "fp-auto-height-responsive",
      "fp-section",
      "active",
      "fp-completely",
      "anim"
    );
  });
  return (
    <div>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      {/* <PageLoader/> */}

      <HeaderComponentLogin />

      {/*<!-- BEGIN OF page main content -->*/}
      <main className="page-main page-fullpage main-anim" id="mainpage">
        {/*<!-- Begin of register/login/signin section -->*/}
        <div
          className="section section-register fp-auto-height-responsive fp-section fp-completely anim"
          // data-anchor="null"
          style={{height: '680px'}}
        >
          <div className="section-wrapper" >
            <div className="section-title_custom text-center">
              <h5 className="title-bg">Login</h5>
            </div>
            <div className="section-content anim text-center">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <form className="send_email_form form-container form-container-transparent form-container-white">
                    <div className="form-desc text-white">
                      <h2 className="display-6 display-title anim-2">Đăng nhập</h2>
                      <p className="invite  anim-3">Đăng nhập ngay nào bạn ơi</p>
                    </div>
                    <div className="form-input anim-4">
                      <div className="form-group form-success-gone">
                        <label for="login-number">
                          10 Chữ Số Điện Thoại Của Bạn
                        </label>
                        <input
                          id="login-num"
                          name="number"
                          className="form-control-line form-control-white text-white"
                          type="number"
                          min="0"
                        />
                      </div>
                      <div className="form-group form-success-gone">
                        <label for="login-pasword">Nhập Mật Khẩu</label>
                        <input
                          id="login-pas"
                          name="password"
                          className="form-control-line form-control-white  text-white"
                          type="password"
                        />
                        <label for="login-number" className="link">
                          Quên mật khẩu? Đừng lo,
                          <Link href="/setpass" >
                            <u className="u_link"> nhấn đây</u>
                          </Link>
                        </label>
                        <label className="link">
                          Chưa có tài khoản?
                          <Link href="/register" >
                            <u className="u_link"> Đăng ký nhanh.</u>
                          </Link>
                        </label>
                      </div>
                      <button
                      
                        id="submit-num"
                        className="btn btn-login btn-round btn-full form-success-gone"
                        name="submit_num"
                      >
                        Đăng nhập với một nụ cười
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- End of register/login/signin section -->*/}
      </main>
      {/*<!-- END OF page main content -->*/}
</div>
  );
};

export default Login;
