import React from "react";
import { Helmet } from "react-helmet";
import HeaderComponentBlack from "../../header/headerblack"
import FooterComponent from "../../footer/FooterComponent"
import "../../../index.css";
import "../../../main.css";

const MyOrder = () => {
  return (
    <div>
      <Helmet>
        <title>Đơn Hàng Của Tôi</title>

      </Helmet>
     {/* <PageLoader/> */}

      <HeaderComponentBlack/>

      <main className="page-main page-fullpage main-anim" id="itempage">

        <div className="section section-twoside fp-auto-height-responsive section-item" data-section="item-alpha">

          <div className="section-cover-tier mask-black" style={{backgroundImage: "url('assets/img/33.jpg')"}}
               id="bgImg1">
            <div className="cover-content">
              <div className="title-desc">
                <h2 className="display-4 display-title home-title bordered anim-1">Sutygon</h2>
                <h4 className="anim-2" style={{textAlign: 'left'}}>Quản lý đơn hàng và in hoá đơn trên đầu ngón tay</h4>
              </div>
            </div>
          </div>


          <div className="section-wrapper largewidth">
            <div className="item row">
              <div className="col-12 col-md-4">
              </div>
              <div className="col-12 col-md-8">
                <div className="section-content anim scrollable">

                  <article className="article article-light" style={{color: 'white', textAlign: 'left'}}>
                    <div className="article-content">
                      <div className="wrapper">
                        <div className="row">
                          <div className="col-12 col-md-12">
                            <h2 className="text-center">Nguyễn Văn A</h2>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12 col-md-12">
                            <div>
                              <h4 className="strong">Đơn hàng còn nóng</h4>
                              <br/>
                              <h4 className="text-only"><span className="dot"></span> QUÁ HẠN</h4>

                              <table className="table">
                                <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Thuê ngày</th>
                                  <th>Trả ngày</th>
                                  <th>Tổng</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <th scope="row">28925</th>
                                  <td>2020/09/07</td>
                                  <td>2020/09/10</td>
                                  <td className="fa fa-dollar"> 280</td>
                                </tr>
                                </tbody>

                              </table>

                            </div>
                          </div>

                          <div className="col-12 col-md-12">
                            <h4 className="text-only"><span className="dot" id="dotClr"></span> ĐANG SỬ DỤNG</h4>
                            <table className="table">
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>Thuê ngày</th>
                                <th>Trả ngày</th>
                                <th>Tổng</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">29323</th>
                                <td>2020/09/11</td>
                                <td>2020/09/14</td>
                                <td className="fa fa-dollar"> 76</td>
                              </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12 col-md-12">
                            <h4 className="strong">Đơn hàng cũ</h4>
                            <table className="table">
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>Thuê ngày</th>
                                <th>Trả ngày</th>
                                <th>Tổng</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">21234</th>
                                <td>2020/09/20</td>
                                <td>2020/09/24</td>
                                <td className="fa fa-dollar"> 55</td>
                              </tr>
                              </tbody>
                            </table>
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

export default MyOrder;
