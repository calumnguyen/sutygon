import React from "react";
import {Link} from 'react-router-dom'
import "../index.css";
import '../main.css'

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
     <div
            className="section section-description fp-auto-height-responsive"
            data-section="about"
          >
            <div className="section-wrapper center-vh dir-col anim">
              <div className="section-title text-center">
                <h5 className="title-bg">About</h5>
                <h2 className="display-4 display-title anim-2">SUTYGON</h2>
                <br />
                <br />
                <br />
              </div>

              <div className="section-content reduced anim text-center">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="title-desc anim-3">
                      <p className="text-left">
                        SUTYGON được thành lập bởi một đội ngũ chuyên nghiệp để
                        mang đến những mặc hàng chất lượng tuyệt đối, giá cả
                        phải chăng, và trải nghiệm đầy ngọt ngào.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-5 col-sm-12">
                    <div
                      className="embed-responsive embed-responsive-16by9"
                      id="sizingVideo"
                    >
                      <iframe
                        title={"video link"}
                        width="660"
                        src="https://www.youtube.com/embed/Ui02o1wDvVk"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="section-footer scrolldown">
                <Link className={"down"}>
                  <span className="icon"></span>
                  <span className="txt">Products</span>
                </Link>
              </footer>
            </div>
          </div>
    </section>
  );
};

export default Services;
