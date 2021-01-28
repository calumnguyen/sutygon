import React from 'react'
import {Helmet} from "react-helmet";

function Team() {

  return (

    <div>

      <Helmet>

        <link rel="stylesheet"
              href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"/>
        <link rel="stylesheet"
              href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>

        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>

        <title>Team SUTYGON</title>


        <meta name="description"
              content="Cửa hàng cho thuê áo dài và tổ chức sự kiện hàng đầu tại Đà Nẵng The leading company in event planning and rental clothes in Da Nang city."/>


        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, user-scalable=0"/>


        <meta name="twitter:site" content="@calumnguyen06"/>
        <meta name="twitter:creator" content="@calumnguyen06"/>
        <meta name="twitter:card" content="Vì sự hạnh phúc của quý khách"/>
        <meta name="twitter:title" content="SUTYGON"/>
        <meta name="twitter:description"
              content="Cửa hàng cho thuê áo dài và tổ chức sự kiện hàng đầu tại Đà Nẵng The leading company in event planning and rental clothes in Da Nang city."/>
        <meta name="twitter:image" content="../img/bg-default.html"/>


        <meta property="og:url" content="your website url here"/>
        <meta property="og:title" content="Giới thiệu"/>
        <meta property="og:description"
              content="Cửa hàng cho thuê áo dài và tổ chức sự kiện hàng đầu tại Đà Nẵng The leading company in event planning and rental clothes in Da Nang city."/>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
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
                <a className="btn btn-outline-white btn-round" target="_blank" href="login">Đăng nhập</a>
              </li>
            </ul>
          </nav>

          <nav className="navbar-sidebar " id="HideMenuBar">
            <ul className="navbar-nav" id="qmenu">
              <li className="nav-item" data-menuanchor="home">
                <a href="/">
                  <i className="icon ion-ios-home-outline"></i>
                  <span className="txt">Trang chủ</span>
                </a>
              </li>
              <li className="nav-item" data-menuanchor="register">
                <a href="register">
                  <i className="icon ion-ios-compose-outline"></i>
                  <span className="txt">Đăng ký</span>
                </a>
              </li>
              <li className="nav-item" data-menuanchor="contact">
                <a href="contact">
                  <i className="icon ion-ios-telephone-outline"></i>
                  <span className="txt">Liên hệ</span>
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

      <div className="page-cover">
        <div className="cover-bg bg-img" data-image-src="assets/img/bg-default1.jpg"></div>

        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>


      </div>

      <main className="page-main page-fullpage main-anim" id="mainpage">

        <div className="section section-home fullscreen-md fp-auto-height-responsive main-home" data-section="home">

          <div className="section-wrapper">
            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-md-12  center-vh">
                  <div className="col-md-12">
                    <div className="title-desc">
                      <h4 className="display-4 display-title anim-1">BẢN QUYỀN</h4>
                      <br/>
                      <img src="assets/img/sutygon-bot.png" alt="Logo" width="150" className="logo1"/>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
              <div className="row">
                <div className="col-12 col-md-12" id="ceoSize">
                  <h3 className="display-4 display-title anim-1 text-center">CEO</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-4 center-vh">
                  <div className="section-content anim translateUp">
                    <div className="images text-center" id="hideSides">
                      <div className="img-avatar-alpha">
                        <div className="img-1 shadow">
                          <a>
                            <img className="img" src="assets/img/items/MyLinh.png" alt="Image" id="roundSize" id="UpSizeImg"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 center-vh" id="UpSize1">
                  <div className="legend text-left pos-abs">
                    <h1 className="strong animate__animated animate__fadeInDown" id="rght2">Nguyễn Mỹ Linh</h1>

                    <p className="txt-para animate__animated animate__fadeInDown" id="rght2">Mang đến những khoảng khắc
                      đáng nhớ cho quý khách là niềm tự hào của chúng tôi</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


        <div className="section section-description fp-auto-height-responsive " data-section="team">
          <div className="section-wrapper center-vh dir-col anim">
            <div className="section-title text-center">
              <h5 className="title-bg">Team</h5>
            </div>

            <div className="section-content anim text-center">

              <br/>
              <div className="row">
                <div className="col-12 col-md-12" id="ceoSize">
                  <h3 className="text-center">Giám đốc chi nhánh một</h3>
                </div>
              </div>
              <div className="row" id="positioningrow">
                <div className="col-6 col-sm-6 col-md-4 center-vh">
                  <div className="section-content anim translateUp">
                    <div className="images text-center">
                      <div className="img-avatar-alpha">
                        <div className="img-1 shadow">
                          <a href="#">
                            <img className="img" src="assets/img/items/TanTai.png" alt="Image" id="roundSize" id="UpSizeImg"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 center-vh" id="UpSize1">
                  <div className="legend text-left pos-abs">
                    <h1 className="strong animate__animated animate__fadeInDown" id="rght">Nguyễn Tấn Tài</h1>
                    <p className="txt-para animate__animated animate__fadeInDown" id="rght">Đối với tôi, sự tin tưởng,
                      tình thương và sự ủng hộ từ quý khách dành cho SUTYGON nhiều năm qua góp phần làm nên SUTYGON của
                      ngày hôm nay. Hân hạnh được phục vụ quý khách.</p>
                  </div>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-12 col-md-12" id="ceoSize">
                  <h3 className="text-center">Giám đốc chi nhánh hai</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-4 center-vh">
                  <div className="section-content anim translateUp">
                    <div className="images text-center">
                      <div className="img-avatar-alpha">
                        <div className="img-1 shadow">
                          <a href="#">
                            <img className="img" src="assets/img/items/HuuTan.png" alt="Image" id="roundSize" id="UpSizeImg"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 center-vh" id="UpSize1">
                  <div className="legend text-left pos-abs">
                    <h1 className="strong" id="rght1">Nguyễn Hữu Tấn</h1>
                    <p className="txt-para" id="rght1">Với chuyên viên tư vấn hàng đầu, nhiều năm kinh nghiệm trong lĩnh
                      vực văn nghệ, SUTYGON sẽ mang một tầm cao mới đến tay mọi người.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="section section-description fp-auto-height-responsive ">
          <div className="section-wrapper center-vh dir-col anim">
            <div className="section-title text-center">
              <h5 className="title-bg">Team</h5>
            </div>

            <div className="section-content anim text-center">
              <br/>
              <div className="row">
                <div className="col-12 col-md-12" id="ceoSize">
                  <h3 className=" text-center">Head of Growth</h3>
                </div>
              </div>
              <div className="row" id="positioningrow">
                <div className="col-6 col-sm-6 col-md-4 center-vh">
                  <div className="section-content anim translateUp">
                    <div className="images text-center">
                      <div className="img-avatar-alpha">
                        <div className="img-1 shadow">
                          <a href="#">
                            <img className="img" src="assets/img/items/calumnguyen.png" alt="Image" id="roundSize"
                                 id="UpSizeImg"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 center-vh" id="UpSize1">
                  <div className="legend text-left pos-abs">
                    <h1 className="strong" id="rght">Calum Nguyễn</h1>
                    <p className="txt-para" id="rght">Mình là Calum Nguyễn. Với cương vị Head of Growth, mình mong muốn
                      sẽ mang lại những sự đột phá mới lạ trong trải nghiệm của bạn khi đến với Sutygon. Cảm ơn bạn đã
                      ủng hộ Sutygon trong thời gian qua!</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>


      <footer id="site-footer" className="page-footer">

        <div className="footer-left">
          <p>Bản quyền
            <a href="" target="_blank">
              <span className="marked">SUTYGON-BOT. </span>
            </a>
            <span>All rights reserved</span> <span id='copyrightyear'>year</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="alert alert-danger mb-2" role="alert">
            <strong style={{fontSize: '15px'}}>Trang web vẫn trong đang được cải tiến. Một số trang chỉ mang tính chất
              minh hoạ.</strong>
          </div>
        </div>
      </footer>


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
          <p className="center-vh animate__animated animate__backInRight">Bấm vào nút 3-gạch này để xem điểm thưởng,
            đơn hàng, thông tin cửa hàng và TEAM SUTYGON nhé bạn!</p>
          <div className="center-vh">
            <a href="#" onClick="setWalkthroughCompleted()" className="btn bttn-succes">Ok</a>
          </div>
        </div>
      </div>


    </div>

  )
}


export default Team


