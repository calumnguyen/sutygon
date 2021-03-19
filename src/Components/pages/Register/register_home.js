import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../../index.css";
import "../../../main.css";

const RegisterHome = () => {
  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <section
        data-aos="zoom-in"
        className="register-container"
        name="register"
        id="register"
      >
        <div
          className="section section-register fp-auto-height-responsive "
          data-section="register"
        >
          <div className="section-wrapper">
            <div className="section-title_custom text-center">
              <h5 className="title-bg">register</h5>
            </div>

            <div className="section-content anim text-center">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <form className="send_email_form form-container form-container-transparent form-container-white">
                    <div className="form-desc">
                      <h2 className="display-4 display-title  anim-2">
                        Đăng ký
                      </h2>
                      <p className="invite  anim-3">
                        Đăng ký ngay, nhận quà liền tay
                      </p>
                    </div>

                    <div className="form-input  anim-4">
                      <Link
                        to="/register"
                        id="submit-num"
                        className="btn btn-white btn-round btn-full form-success-gone text-center px-1"
                        name="submit_num"
                      >
                        Click here to get yourself registered
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterHome;
