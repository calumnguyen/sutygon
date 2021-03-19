import React from "react";
import { Helmet } from "react-helmet";
import HeaderComponentBlack from "../../header/headerblack";
import FooterComponent from "../../footer/FooterComponent"
import "../../../index.css";
import "../../../main.css";

const Point = () => {
  return (
    <div>
      <Helmet>
        <title>Điểm thưởng</title>
      </Helmet>

      {/* <PageLoader /> */}

      <HeaderComponentBlack />

      <main className="page-main page-fullpage main-anim" id="itempage">
        <div
          className="section section-twoside fp-auto-height-responsive section-item"
          data-section="item-alpha"
        >
          <div
            className="section-cover-tier mask-black"
            style={{ backgroundImage: "url('assets/img/44.jpg')" }}
            id="bgImg"
          >
            <div className="cover-content">
              <div className="title-desc">
                <h2 className="display-4 display-title home-title bordered anim-1">
                  Sutygon
                </h2>
                <h4 className="anim-2">
                  Nâng cấp hạng thành viên và nhận ngay nhiều tiện ích
                </h4>
              </div>
            </div>
          </div>

          <div className="section-wrapper largewidth">
            <div className="item row">
              <div className="col-12 col-md-4"></div>

              <div className="col-12 col-md-8">
                <div className="section-content anim scrollable">
                  <article className="article article-light">
                    <div className="article-content">
                      <div className="wrapper" style={{ color: "white" }}>
                        <div className="row">
                          <div className="col-12 col-md-12">
                            <img
                              src="assets/img/diamond.gif"
                              className="centered-gif"
                              width="120px"
                              style={{ marginBottom: "0px" }}
                              alt={"Diamond"}
                            />
                            <h2 className="text-center">Nguyễn Văn A</h2>
                            <h2 className="text-center">
                              <span className="badge badge-pill badge-danger">
                                Thành Viên Kim Cương
                              </span>
                            </h2>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5 col-md-5"
                            id="rowSizingDown"
                            style={{ textAlign: "left" }}
                          >
                            <div>
                              <h6 className="text-only">
                                <span className="dot" id="dclr"></span> Không
                                cọc giấy CMND
                              </h6>
                              <h6 className="text-only" id="headingSize3">
                                <span className="dot" id="dclr"></span> Không
                                cọc tiền thuê đồ
                              </h6>
                              <h6 className="text-only" id="headingSize4">
                                <span className="dot" id="dclr"></span>{" "}
                                <span className="fa fa-dollar"></span>30 voucher
                                cho mỗi <span className="fa fa-dollar"></span>
                                200
                              </h6>
                            </div>
                          </div>
                          <div className="col-2 col-md-2" id="rowSizingDown">
                            <div className="vl" id="vlCustm"></div>
                          </div>

                          <div className="col-5 col-md-5" id="rowSizingDown">
                            <div style={{ textAlign: "left" }}>
                              <h5 className="text-only">
                                <span className="fa fa-dollar"></span>155/{" "}
                                <span className="fa fa-dollar"></span>200 To
                                Next
                              </h5>
                              <h5 className="text-danger">
                                <span className="fa fa-dollar"></span>30 Off
                              </h5>
                              <h6 className="text-only">
                                <span className="badge badge-pill badge-danger">
                                  Bạn có 1 voucher
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-12" id="rowSizingDown2">
                            <h1 className="text-only">
                              <span className="badge badge-pill badge-danger">
                                Bạn đang ở bậc thành viên cao nhất!
                              </span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <FooterComponent/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Point;
