import React from 'react'
import {Helmet} from "react-helmet";
import FooterComponent from "../footer/FooterComponent";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import {Link} from 'react-router-dom'

function Login() {

  return (

    <div>

      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>


      <PageLoader/>

      <HeaderComponentLogin/>



      {/*<!-- BEGIN OF page cover -->*/}
      <div className="page-cover">
        {/*<!-- Cover Background -->*/}
        <div className="cover-bg bg-img" data-image-src="assets/img/bg-default1.jpg"></div>
        {/*<!-- Transluscent mask as filter -->*/}
        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>
      </div>
      {/*<!--END OF page cover -->*/}

      {/*<!-- BEGIN OF page main content -->*/}
      <main className="page-main page-fullpage main-anim" id="mainpage">

        {/*<!-- Begin of register/login/signin section -->*/}
        <div className="section section-register fp-auto-height-responsive">

          {/*<!-- Begin of section wrapper -->*/}
          <div className="section-wrapper">

            {/*<!-- title -->*/}
            <div className="section-title text-center">
              <h5 className="title-bg">Login</h5>
            </div>

            {/*<!-- content -->*/}
            <div className="section-content anim text-center">
              <div className="row align-items-center justify-content-center">

                <div className="col-12 col-md-8 col-lg-6">

                  {/*<!-- Registration form container-->*/}
                  <form className="send_email_form form-container form-container-transparent form-container-white">

                    <div className="form-desc" style={{color: 'white'}}>
                      <h2 className="display-4 display-title  anim-2">Đăng nhập</h2>
                      <p className="invite  anim-3">Đăng nhập ngay nào bạn ơi</p>
                    </div>

                    <div className="form-input  anim-4">

                      <div className="form-group form-success-gone">
                        <label for="login-number">10 Chữ Số Điện Thoại Của Bạn</label>
                        <input id="login-num" name="number" className="form-control-line form-control-white"
                               type="number"
                               min="0"/>
                      </div>

                      <div className="form-group form-success-gone">
                        <label for="login-pasword">Nhập Mật Khẩu</label>
                        <input id="login-pas" name="password" className="form-control-line form-control-white"
                               type="text"/>

                        <label for="login-number">Quên mật khẩu? Đừng lo,<Link to={"setpass"}><u>nhấn đây</u></Link>

                        </label>

                        <label>Chưa có tài khoản?<Link to={"register"}><u>Đăng ký nhanh.</u></Link>
                        </label>
                      </div>

                      <button id="submit-num" className="btn btn-white btn-round btn-full form-success-gone"
                              name="submit_num">Đăng nhập với một nụ cười
                      </button>
                    </div>
                  </form>

                </div>

              </div>
            </div>

          </div>
          {/*<!-- End of section wrapper -->*/}

        </div>
        {/*<!-- End of register/login/signin section -->*/}

      </main>
      {/*<!-- END OF page main content -->*/}



      {/*
      <footer id="site-footer" className="page-footer">

        <div className="footer-left">
          <p>Bản quyền
            <a href="" target="_blank">
              <span className="marked">SUTYGON-BOT. </span>
            </a>
            <span> All rights reserved</span>
            <span id='copyrightyear'>year</span>
          </p>
        </div>

        <div className="footer-right">
          <div className="alert alert-danger mb-2" role="alert">
            <strong style={{fontSize: '15px'}}>Trang web vẫn trong đang được cải tiến. Một số trang chỉ mang tính chất minh hoạ.</strong>
          </div>
        </div>

      </footer>
      */}

      <FooterComponent id="site-footer" />




      {/* starting div */}
    </div>


  )
}


export default Login


