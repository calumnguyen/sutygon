import React from 'react'
import {Helmet} from "react-helmet";

function Store() {

  return (

    <div>


      <Helmet>

        <link rel="stylesheet"
              href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"/>
        <link rel="stylesheet"
              href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        <title>Cửa hàng</title>

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


      <div className="page-loader" id="page-loader">
        <img src="assets/img/loader.gif" width="30%" id="loaderSizing"/>
      </div>


      <header className="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">
        <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
          <span className="menu-icon menu-icon-random">
            <span className="bars">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </span>
          </span>
        </button>

        <a className="navbar-brand" href="/">
          <span className="logo">
            <img className="light-logo" src="assets/img/1.png" alt="Logo"/>
          </span>
        </a>

        <div className="all-menu-wrapper" id="navbarMenu">

          <nav className="navbar-topmenu">
            <ul className="navbar-nav navbar-nav-actions">
              <li className="nav-item">
                <a className="btn btn-outline-white btn-round" target="_blank" href="login">Đăng nhập
                </a>
              </li>
            </ul>
          </nav>

          <nav className="navbar-mainmenu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="myorder">
                  <i className="las la-shopping-bag" id="hideIcon"></i>
                  <span className="txt">Đơn hàng</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="point">
                  <i className="las la-money-check-alt" id="hideIcon"></i>
                  <span className="txt">Điểm thưởng</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="store">
                  <i className="las la-building" id="hideIcon"></i>
                  <span className="txt">Cửa hàng</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="team">
                  <i className="las la-user-friends" id="hideIcon"></i>
                  <span className="txt">Team</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>

      </header>


      <main className="page-main page-fullpage main-anim" id="itempage">
        <div className="section section-twoside fp-auto-height-responsive section-item" data-section="item-alpha">
          <div className="section-cover-tier mask-black" style={{backgroundImage: "url('assets/img/55.jpg')"}}>
            <div className="cover-content">
              <div className="title-desc">
                <h2 className="display-4 display-title home-title bordered anim-1">Sutygon</h2>
                <h4 className="anim-2">Xem thông tin cửa hàng trong thời gian thực</h4>
              </div>
            </div>
          </div>

          <div className="section-wrapper largewidth">
            <div className="item row">
              <div className="col-12 col-md-4">
              </div>

              <div className="col-12 col-md-8">
                <div className="section-content anim scrollable">

                  <article className="article article-light">
                    <div className="article-content">
                      <div className="wrapper">
                        <div className="row">
                          <div className="col-12 col-md-12">
                            <h2 className="text-center"><span className="badge badge-pill badge-danger">Chúng tôi đang mở cửa</span>
                            </h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5 col-md-5" id="rowSizingDown">
                            <div>
                              <h2 className="strong"><span className="text-danger">Chi Nhánh 1 </span></h2>
                              <h4 className="text-only" id="headingSize">70A Nguyễn Chí Thanh, Đà Nẵng , Việt nam 0905
                                923 149 </h4>
                            </div>
                          </div>

                          <div className="col-2 col-md-2" id="rowSizingDown">
                            <div className="vl"></div>
                          </div>

                          <div className="col-5 col-md-5" id="rowSizingDown">
                            <div>
                              <h2 className="strong"><span className="text-danger">Chi Nhánh 2 </span></h2>
                              <h4 className="text-only" id="headingSize">76B Nguyễn Chí Thanh, Đà Nẵng , Việt nam 0905
                                923 149</h4>
                            </div>
                          </div>

                        </div>
                        <br/>
                        <br/>

                        <div className="row">
                          <div className="col-6 col-md-6" id="rowSizingDown1">
                            <h2 className="strong"><span className="badge badge-pill badge-danger">Mở Cửa</span></h2>
                          </div>

                          <div className="col-6 col-md-6" id="rowSizingDown1">
                            <h2 className="strong" id="h2cnter"><span
                              className="badge badge-pill badge-danger">Mở Cửa</span>
                            </h2>
                          </div>

                        </div>
                      </div>
                    </div>


                    <footer className="page-footer">
                      <div className="footer-left" id="footerColor">
                        <p>Bản quyền
                          <a href="" target="_blank">
                            <span className="marked">SUTYGON-BOT. </span>
                          </a>
                          <span> All rights reserved</span> <span id='copyrightyear'>year</span>
                        </p>
                      </div>
                      <div className="footer-right">
                        <div className="alert alert-danger mb-2" role="alert">
                          <strong style={{fontSize: '15px'}}>Trang web vẫn trong đang được cải tiến. Một số trang chỉ
                            mang
                            tính chất minh hoạ.</strong>
                        </div>
                      </div>
                    </footer>


                  </article>
                </div>
              </div>

            </div>


          </div>

        </div>

      </main>


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

        <img src="assets/img/whitearrow.png" className="arrow-img animate__animated animate__heartBeat"/>

        <div className="walkthrough-verlay-1">
          <h1 className="center-vh animate__animated animate__backInLeft">Thêm nhiều bất ngờ</h1>
          <p className="center-vh animate__animated animate__backInRight">Bấm vào nút 3-gạch này để xem điểm thưởng, đơn hàng, thông tin cửa hàng và TEAM SUTYGON nhé bạn!</p>
          <div className="center-vh">
            <a href="#" onClick="setWalkthroughCompleted()" className="btn bttn-succes">Ok</a>
          </div>
        </div>
      </div>


    </div>


  )
}


export default Store


