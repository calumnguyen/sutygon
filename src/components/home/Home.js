import React from 'react'
import {Helmet} from "react-helmet";
import FooterComponent from "../footer/FooterComponent";
import WalkthroughOverlayContainer from "../miscellaneous/WalkthroughOverlayContainer";
import PageLoader from "../miscellaneous/PageLoader";
import HeaderComponentHome from "../header/HeaderComponentHome";




function Home() {

  return (

    <div id={'new'}>

      <Helmet>



        <title>Trang chủ</title>
      </Helmet>

      <PageLoader/>

      {/*problem*/}
      <HeaderComponentHome/>


      <div className="page-cover">
        <div className="cover-bg bg-img" data-image-src="img/bg-default1.jpg"></div>
        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>
      </div>

      <main className="page-main page-fullpage main-anim" id="mainpage" style={{color: 'white'}}>
        <div className="section section-home fullscreen-md fp-auto-height-responsive main-home "
             data-section="home">
          <div className="section-wrapper">

            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-md-6 text-left" id="leftContent">

                  <div className="title-desc">
                    <h2 className="display-4 display-title home-title anim-1">SUTYGON</h2>
                    <h4 className="anim-2">Chào mừng bạn đã đến với Sutygon – dẫn đầu về tổ chức sự kiện và cho thuê áo
                      dài, trang phục biểu diễn tại Đà Nẵng</h4>
                  </div>


                  <div className="btns-action anim-3">
                    <a className="btn btn-outline-white btn-round" href="login">
                      Đăng nhập
                    </a>
                  </div>
                </div>


                <div className=" col-md-6 right-content center-vh logo-hp" id="logoSizing">
                  <div className="section-content">
                    <div className="illustr zoomout-1">
                      <img className="logo" src="assets/img/1.png" alt="Logo"/>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">Scroll Down</span>
              </a>
            </footer>
          </div>

        </div>

        <div className="section section-description fp-auto-height-responsive" data-section="about">
          <div className="section-wrapper center-vh dir-col anim">
            <div className="section-title text-center">
              <h5 className="title-bg">About</h5>
              <h2 className="display-4 display-title anim-2">SUTYGON</h2>
              <br/><br/><br/>
            </div>


            <div className="section-content reduced anim text-center">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title-desc anim-3">
                    <p className="text-left">SUTYGON được thành lập bởi một đội ngũ chuyên nghiệp để mang đến những mặc
                      hàng chất lượng tuyệt đối, giá cả phải chăng, và trải nghiệm đầy ngọt ngào. </p>
                  </div>
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-5 col-sm-12">
                  <div className="embed-responsive embed-responsive-16by9" id="sizingVideo">
                    <iframe width="660" src="https://www.youtube.com/embed/Ui02o1wDvVk" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                  </div>
                </div>
              </div>


            </div>


            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">Products</span>
              </a>
            </footer>
          </div>

        </div>

        <div className="section section-description fp-auto-height-responsive" data-section="product">

          <div className="section-wrapper center-vh dir-col anim">

            <div className="section-title text-center">
              <h5 className="title-bg">Product</h5>
              <h2 className="display-4 display-title anim-2">Product</h2>
              <br/><br/><br/>
            </div>


            <div className="section-content reduced anim ">
              <div className="row">
                <div className="col-12 col-md-4 mrColBtn">
                  <div className="card">
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="front">
                          <a href="#" data-toggle="modal" data-target="#xlarge">
                            <img alt="" className="img-fluid" src="assets/img/items/img-people1-square.jpg"/>
                          </a>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="product-detail">
                          <div>
                            <a href="#" data-toggle="modal" data-target="#xlarge">
                              <h6>Slim Fit Cotton Shirt</h6>
                            </a>
                            <h4 id="headingBreak"><span className="fas fa-qrcode"> 0123456</span><br/><span
                              className="fas fa-money-check-alt"> 500.00</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 mrColBtn">
                  <div className="card">
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="front">
                          <a href="#" data-toggle="modal" data-target="#xlarge">
                            <img alt="" className="img-fluid" src="assets/img/items/img-people1-square.jpg"/>
                          </a>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="product-detail">
                          <div>
                            <a href="#" data-toggle="modal" data-target="#xlarge">
                              <h6>Slim Fit Cotton Shirt</h6>
                            </a>
                            <h4 id="headingBreak"><span className="fas fa-qrcode"> 0123456</span><br/><span
                              className="fas fa-money-check-alt"> 500.00</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 mrColBtn">
                  <div className="card">
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="front">
                          <a href="#" data-toggle="modal" data-target="#xlarge">
                            <img alt="" className="img-fluid" src="assets/img/items/img-people1-square.jpg"/>
                          </a>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="product-detail">
                          <div>
                            <a href="#" data-toggle="modal" data-target="#xlarge">
                              <h6>Slim Fit Cotton Shirt</h6>
                            </a>
                            <h4 id="headingBreak"><span className="fas fa-qrcode"> 0123456</span><br/><span
                              className="fas fa-money-check-alt"> 500.00</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="modal fade text-left" id="xlarge" tabIndex="-1" role="dialog"
                       aria-labelledby="myModalLabel16"
                       aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                      <div className="modal-content">
                        <img className="img-fluid" src="assets/img/items/img-people1-square.jpg"/>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="modalbtn">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                          <h6 id="headingBreak1">Slim Fit Cotton Shirt</h6>
                          <h4 id="headingBreak"><span className="fas fa-qrcode"> 0123456</span><br/><span
                            className="fas fa-money-check-alt"> 500.00</span></h4>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn grey btn-outline-secondary"
                                  data-dismiss="modal">Close
                          </button>
                          <a href="contactstore">
                            <button type="button" className="btn btn-outline-primary" href="contactstore">Contact
                              Store
                            </button>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="section section-register fp-auto-height-responsive " data-section="register">

          <div className="section-wrapper">

            <div className="section-title text-center">
              <h5 className="title-bg">register</h5>
            </div>


            <div className="section-content anim text-center">

              <div className="row align-items-center justify-content-center">

                <div className="col-12 col-md-8 col-lg-6">

                  <form className="send_email_form form-container form-container-transparent form-container-white"
                  >
                    <div className="form-desc">
                      <h2 className="display-4 display-title  anim-2">Đăng ký</h2>
                      <p className="invite  anim-3">Đăng ký ngay, nhận quà liền tay</p>
                    </div>

                    <div className="form-input  anim-4">
                      <div className="form-group form-success-gone">
                        <label for="reg-number">10 Chữ Số Điện Thoại Của Bạn</label>
                        <input id="reg-num" name="number" className="form-control-line form-control-white" type="number"
                               min="0"
                        />
                      </div>
                      <div className="form-group form-success-gone">
                        <label for="reg-pasword">Nhập Mật Khẩu Mới</label>
                        <input id="reg-pas" name="password" className="form-control-line form-control-white"
                               type="number" min="0"
                        />
                      </div>
                      <button id="submit-num" className="btn btn-white btn-round btn-full form-success-gone"
                              name="submit_num">Đăng ký với đầy niềm vui
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="section section-contact fp-auto-height-responsive no-slide-arrows " data-section="contact">


          <div className="slide" id="information" data-anchor="information">

            <div className="section-wrapper">

              <div className="section-title text-center">
                <h5 className="title-bg">Contact</h5>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">

                  <div className="section-content anim text-left" id="leftContent">

                    <div className="title-desc">
                      <div className="anim-2">
                        <h5>Chăm sóc khách hàng</h5>
                        <h2 className="display-4 display-title">Liên hệ</h2>
                        <p>Sutygon đề cao ý kiến đánh giá của bạn.</p>
                      </div>
                      <div className="address-container anim-3">

                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-6">
                            <h4>Mọi thắc mắc vui lòng liên hệ</h4>
                            <p>Phone: 0905 923 149</p>
                            <p>Email: supervisor@sutygon.com</p>
                          </div>
                          <div className="col-12 col-md-12 col-lg-6">
                            <h4>Địa chỉ</h4>
                            <p>
                              Chi nhánh
                              <br/>
                              70A Nguyễn Chí Thanh
                              <br/>
                              Hải Châu, Việt Nam
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white btn-round" href="#contact/message">
                        <span className="txt">Gửi tin nhắn nhanh</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">

                </div>
              </div>
            </div>

          </div>


          <div className="slide" id="message" data-anchor="message">

            <div className="section-wrapper">
              <div className="row justify-content-between">
                <div className="col-12 col-md-6 center-vh">

                  <div className="section-content anim text-left">

                    <div className="title-desc">
                      <div>
                        <h5>Chăm sóc khách hàng</h5>
                        <h2 className="display-4 display-title">GỬI EMAIL</h2>
                        <p>Mọi thắc mắc, phản hồi và ý kiến đóng góp xin gửi email cho SUTYGON tại đây.</p>
                      </div>
                    </div>


                    <div className="btns-action">
                      <a className="btn btn-outline-white btn-round" href="store">
                        <span className="txt">Thông tin cửa hàng</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-5">

                  <div className="section-content anim text-left">

                    <div className="">
                      <div className="form-container form-container-card">

                        <form className="send_message_form message form" method="post"
                              action="https://demo.highhay.com/simpleux/ajaxserver/serverfile.php"
                              id="message_form">
                          <div className="form-group name">
                            <label for="mes-name">Mình tên là</label>
                            <input id="mes-name" name="name" type="text" placeholder=""
                                   className="form-control-line form-success-clean"
                                   required/>
                          </div>
                          <div className="form-group email">
                            <label for="mes-email">Địa chỉ email là</label>
                            <input id="mes-email" type="email" placeholder="" name="email"
                                   className="form-control-line form-success-clean"
                                   required/>
                          </div>
                          <div className="form-group no-border">
                            <label for="mes-text">Lời nhắn mà mình muốn gửi</label>
                            <textarea id="mes-text"
                                      placeholder="Sutygon đã mang đến cho mình một trải nghiệm thật tuyệt vời!"
                                      name="message"
                                      className="form-control form-control-outline thick form-success-clean"
                                      required></textarea>

                            <div>
                              <p className="message-ok invisible form-text-feedback form-success-visible">Sutygon đã
                                nhận được
                                lời nhắn từ bạn. Đội ngũ nhân viên của Sutygon sẽ trả lời trong thời gian sớm nhất có
                                thể!</p>
                            </div>
                          </div>

                          <div className="btns">
                            <button id="submit-message" className="btn btn-normal btn-white btn-round btn-full email_b"
                                    name="submit_message">
                              <span className="txt">Gửi lời nhắn kèm chút nắng</span>
                              <span className="arrow-icon"></span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>

      </main>


      <FooterComponent id="site-footer"/>

      {/*problem*/}
      {/*<WalkthroughOverlayContainer/>*/}


    </div>


  )
}


export default Home


