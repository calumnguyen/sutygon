import React from 'react'
import {Helmet} from "react-helmet";
import FooterComponent from "../footer/FooterComponent";
import HeaderComponent from "../header/HeaderComponent";

function Login() {

  return (

    <div>

      <Helmet>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"/>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        <title>Đăng nhập</title>
        <meta name="description" content="Cửa hàng cho thuê áo dài và tổ chức sự kiện hàng đầu tại Đà Nẵng The leading company in event planning and rental clothes in Da Nang city."/>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="twitter:site" content="@calumnguyen06"/>
        <meta name="twitter:creator" content="@calumnguyen06"/>
        <meta name="twitter:card" content="Vì sự hạnh phúc của quý khách"/>
        <meta name="twitter:title" content="SUTYGON"/>
        <meta name="twitter:description" content="Cửa hàng cho thuê áo dài và tổ chức sự kiện hàng đầu tại Đà Nẵng The leading company in event planning and rental clothes in Da Nang city."/>
        <meta name="twitter:image" content="../img/bg-default.html"/>
        <meta property="og:url" content="your website url here"/>
        <meta property="og:title" content="Giới thiệu"/>
        <meta property="og:description" content="Cửa hàng cho thuê áo dài và tổ chức sự kiện hàng đầu tại Đà Nẵng The leading company in event planning and rental clothes in Da Nang city."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="../img/bg-default.html"/>
        <meta property="og:image:secure_url" content="../img/bg-default.html"/>
        <meta property="og:image:type" content="image/jpg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>

        <link rel="stylesheet" href="assets/fonts/opensans/stylesheet.css"/>
        <link rel="stylesheet" href="assets/fonts/bebas/stylesheet.css"/>
        <link rel="stylesheet" href="assets/fonts/ionicons.min.css"/>
        <link rel="stylesheet" href="assets/fonts/font-awesome.min.css"/>


        <link rel="stylesheet" href="assets/css/pageloader.css"/>


        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

        <link rel="stylesheet" href="assets/js/vendor/swiper.min.css"/>
        <link rel="stylesheet" href="assets/js/vendor/jquery.fullpage.min.css"/>
        <link rel="stylesheet" href="assets/js/vegas/vegas.min.css"/>

        <link rel="stylesheet" href="assets/css/main.css"/>
        <link rel="stylesheet" href="assets/css/style-default.css"/>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico"/>

        <script src="assets/js/vendor/modernizr-2.7.1.min.js"></script>

      </Helmet>

      <HeaderComponent/>



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

                    <div className="form-desc">
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

                        <label for="login-number">Quên mật khẩu? Đừng lo, <a href="setpass"><u>nhấn đây</u></a>
                        </label>

                        <label>Chưa có tài khoản? <a href="register"><u>Đăng ký nhanh.</u></a>
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


