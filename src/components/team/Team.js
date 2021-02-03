import React from 'react'
import {Helmet} from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import FooterComponent from "../footer/FooterComponent";
import WalkthroughOverlayContainer from "../miscellaneous/WalkthroughOverlayContainer";
import PageLoader from "../miscellaneous/PageLoader";
import {Link} from 'react-router-dom'


function Team() {

  return (

    <div>

      <Helmet>
        <title>Team SUTYGON</title>
      </Helmet>


      <PageLoader/>

      <HeaderComponentLogin/>



      <div className="page-cover">
        <div className="cover-bg bg-img" data-image-src="assets/img/bg-default1.jpg"></div>

        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>


      </div>

      <main className="page-main page-fullpage main-anim" id="mainpage" style={{color: 'white'}}>

        <div className="section section-home fullscreen-md fp-auto-height-responsive main-home" data-section="home">

          <div className="section-wrapper">
            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-md-12  center-vh">
                  <div className="col-md-12">
                    <div className="title-desc">
                      <h4 className="display-4 display-title anim-1">BẢN QUYỀN</h4>
                      <br/>
                      <img src="assets/img/sutygon-bot.png" alt="" width="150" className="logo1"/>
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
                          <Link>
                            <img className="img" src="assets/img/items/MyLinh.png" alt={""}  id="roundSize"/>
                          </Link>
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
                          <Link to={"#"}>
                            <img className="img" src="assets/img/items/TanTai.png" alt={""}  id="roundSize"/>
                          </Link>

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
                          <Link to={"#"}>
                            <img className="img" src="assets/img/items/HuuTan.png" alt={""}  id="roundSize"/>
                          </Link>
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
                          <Link to={"#"}>
                            <img className="img" src="assets/img/items/calumnguyen.png" alt={""}  id="roundSize"/>
                          </Link>

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


      <FooterComponent id="site-footer"/>


      <WalkthroughOverlayContainer/>

    </div>

  )
}


export default Team


