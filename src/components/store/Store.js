import React from 'react'
import {Helmet} from "react-helmet";
import HeaderComponentBlack from "../header/HeaderComponentBlack";
import FooterComponent from "../footer/FooterComponent";
import WalkthroughOverlayContainer from "../miscellaneous/WalkthroughOverlayContainer";
import PageLoader from "../miscellaneous/PageLoader";


function Store() {

  return (

    <div>


      <Helmet>
        <title>Cửa hàng</title>
      </Helmet>


      <PageLoader/>


      <HeaderComponentBlack/>





      <main className="page-main page-fullpage main-anim" id="itempage">
        <div className="section section-twoside fp-auto-height-responsive section-item" data-section="item-alpha">
          <div className="section-cover-tier mask-black" style={{backgroundImage: "url('assets/img/55.jpg')"}}>
            <div className="cover-content">
              <div className="title-desc">
                <h2 className="display-4 display-title home-title bordered anim-1">Sutygon</h2>
                <h4 className="anim-2" style={{textAlign:'left'}}>Xem thông tin cửa hàng trong thời gian thực</h4>
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

                        <div className="row" style={{textAlign: 'left'}}>
                          <div className="col-5 col-md-5" id="rowSizingDown">
                            <div>
                              <h2 className="strong"><span className="text-danger">Chi Nhánh 1 </span></h2>
                              <h4 className="text-only" id="headingSize" style={{color: 'white'}}>70A Nguyễn Chí Thanh, Đà Nẵng , Việt nam 0905
                                923 149 </h4>
                            </div>
                          </div>

                          <div className="col-2 col-md-2" id="rowSizingDown">
                            <div className="vl"></div>
                          </div>

                          <div className="col-5 col-md-5" id="rowSizingDown">
                            <div>
                              <h2 className="strong"><span className="text-danger">Chi Nhánh 2 </span></h2>
                              <h4 className="text-only" id="headingSize" style={{color: 'white'}}>76B Nguyễn Chí Thanh, Đà Nẵng , Việt nam 0905
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


                    <FooterComponent/>


                  </article>
                </div>
              </div>

            </div>


          </div>

        </div>

      </main>


      {/*problem*/}
      {/*<WalkthroughOverlayContainer/>*/}


    </div>


  )
}


export default Store


