import React, { useState, useEffect } from "react";
import HeaderComponentHome from "../../header/headerhome";
import PageLoader from "../../misc/pageloader";
import { Helmet } from "react-helmet";
import { Link} from "react-router-dom";
import "../../../index.css";
import '../../../main.css'

const Contact = () => {
  const [loader, setLoader] = useState(true);
  const [sendMessage, setSendMessage] = useState(false);
  const setMessage = () => {
    setSendMessage(!sendMessage);
  }
  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 500);
    const navRightbar = document.querySelector(".navbar-rightbar");
      navRightbar && navRightbar.classList.add("n-hidden")
  
   
  }, []);
  return (
    <React.Fragment>
      <Helmet>
      <title>Trang chủ</title>
      </Helmet>
      <HeaderComponentHome />
      {loader && <PageLoader />}

      <section
        data-aos="zoom-in"
        className="contact-container"
        name="contact"
        id="contact"
      >
          <div className="section section-contact fp-auto-height-responsive no-slide-arrows "
               data-section="contact">


            <div className="slide" id="information" data-anchor="information">

              <div className="section-wrapper" style={{color: 'white'}}>

                <div className="section-title text-center">
                  <h5 className="title-bg ml-n5">Contact</h5>
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
                        <button to={"#contact/message"} onClick={setMessage}
                              className={"btn btn-normal btn-white btn-round btn-full email_b py-2"}>
                          <span className="txt">Gửi tin nhắn nhanh</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">

                  </div>
                </div>
              </div>

            </div>


          {sendMessage && <div className="slide" id="message" data-anchor="message" style={{color: 'white'}}>

              <div className="section-wrapper">
                <div className="row justify-content-between">
                  <div className="col-12 col-md-6 center-vh">

                    <div className="section-content anim text-left">

                      <div className="title-desc">
                        <div>
                          <h5>Chăm sóc khách hàng</h5>
                          <h2 className="display-4 display-title">GỬI EMAIL</h2>
                          <p>Mọi thắc mắc, phản hồi và ý kiến đóng góp xin gửi email cho SUTYGON
                            tại đây.</p>
                        </div>
                      </div>


                      <div className="btns-action">
                        <Link className={"btn btn-normal btn-white btn-round btn-full email_b py-2"} to={"store"}>
                          <span className="txt">Thông tin cửa hàng</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-5">

                    <div className="section-content anim text-left">

                      <div className="">
                        <div className="form-container form-container-card">

                          <form className="send_message_form message form" method="post"
                                id="message_form">
                            <div className="form-group name">
                              <label htmlFor="mes-name">Mình tên là</label>
                              <input id="mes-name" name="name" type="text" placeholder=""
                                     className="form-control-line form-success-clean"
                                     required/>
                            </div>
                            <div className="form-group email">
                              <label htmlFor="mes-email">Địa chỉ email là</label>
                              <input id="mes-email" type="email" placeholder="" name="email"
                                     className="form-control-line form-success-clean"
                                     required/>
                            </div>
                            <div className="form-group no-border">
                              <label htmlFor="mes-text">Lời nhắn mà mình muốn gửi</label>
                              <textarea id="mes-text"
                                        placeholder="Sutygon đã mang đến cho mình một trải nghiệm thật tuyệt vời!"
                                        name="message"
                                        className="form-control form-control-outline thick form-success-clean"
                                        required></textarea>

                              <div>
                                <p
                                  className="message-ok invisible form-text-feedback form-success-visible">Sutygon
                                  đã
                                  nhận được
                                  lời nhắn từ bạn. Đội ngũ nhân viên của Sutygon sẽ trả
                                  lời trong thời gian sớm nhất có
                                  thể!</p>
                              </div>
                            </div>

                            <div className="btns">
                              <button id="submit-message"
                                      className="btn btn-normal btn-white btn-round btn-full email_b py-2"
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

            </div>}


          </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
