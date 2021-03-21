import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {sectionContact} from '../Functions/func';
import "../../../index.css";
import "../../../main.css";

const Product = () => {
  
  const scrollFunc = () =>{
    var scrollDiv = document.getElementById("contact").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    sectionContact()
  }
  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <section
        data-aos="zoom-in"
        className="services-container"
        name="product"
        id="product"
      >
        <div
          className="section section-description fp-auto-height-responsive"
          data-section="product"
        >
          <div className="section-wrapper center-vh dir-col anim" style={{ color: 'white'}}>
            <div className="section-title text-center">
              <h5 className="title-bg">Product</h5>
              <h2 className="display-4 display-title anim-2">Product</h2>
              <br />
              <br />
              <br />
            </div>

            <div className="section-content reduced anim ">
              <div className="row">
                <div className="col-12 col-md-4 mrColBtn">
                  <div className="card">
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="front">
                          <Link
                            to={"#"}
                            data-toggle={"modal"}
                            data-target={"#xlarge"}
                          >
                            <img
                              alt=""
                              className="img-fluid"
                              src="assets/img/items/img-people1-square.jpg"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="product-detail">
                          <div>
                            <Link
                              to={"#"}
                              data-toggle={"modal"}
                              data-target={"#xlarge"}
                            >
                              <h6>Slim Fit Cotton Shirt</h6>
                            </Link>

                            <h4 id="headingBreak">
                              <span className="fas fa-qrcode"> 0123456</span>
                              <br />
                              <span className="fas fa-money-check-alt">
                                {" "}
                                500.00
                              </span>
                            </h4>
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
                          <Link
                            to={"#"}
                            data-toggle={"modal"}
                            data-target={"#xlarge"}
                          >
                            <img
                              alt=""
                              className="img-fluid"
                              src="assets/img/items/img-people1-square.jpg"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="product-detail">
                          <div>
                            <Link
                              to={"#"}
                              data-toggle={"modal"}
                              data-target={"#xlarge"}
                            >
                              <h6>Slim Fit Cotton Shirt</h6>
                            </Link>

                            <h4 id="headingBreak">
                              <span className="fas fa-qrcode"> 0123456</span>
                              <br />
                              <span className="fas fa-money-check-alt">
                                {" "}
                                500.00
                              </span>
                            </h4>
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
                          <Link
                            to={"#"}
                            data-toggle={"modal"}
                            data-target={"#xlarge"}
                          >
                            <img
                              alt=""
                              className="img-fluid"
                              src="assets/img/items/img-people1-square.jpg"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="product-detail">
                          <div>
                            <Link
                              to={"#"}
                              data-toggle={"modal"}
                              data-target={"#xlarge"}
                            >
                              <h6>Slim Fit Cotton Shirt</h6>
                            </Link>

                            <h4 id="headingBreak">
                              <span className="fas fa-qrcode"> 0123456</span>
                              <br />
                              <span className="fas fa-money-check-alt">
                                {" "}
                                500.00
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="modal fade text-left"
                    id="xlarge"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel16"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl" role="document">
                      <div className="modal-content">
                        <img
                          className="img-fluid"
                          src="assets/img/items/img-people1-square.jpg"
                          alt={""}
                        />
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          id="modalbtn"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                          <h6 id="headingBreak1">Slim Fit Cotton Shirt</h6>
                          <h4 id="headingBreak">
                            <span className="fas fa-qrcode"> 0123456</span>
                            <br />
                            <span className="fas fa-money-check-alt">
                              {" "}
                              500.00
                            </span>
                          </h4>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn grey btn-outline-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <Link to={"contactstore"}>
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              href="contactstore"
                            >
                              Contact Store
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="section-footer scrolldown">
              <Link className={"down"} onClick={()=>scrollFunc()}>
                <span className="icon"></span>
                <span className="txt">Scroll Down</span>
              </Link>
            </footer>
      </section>
    </div>
  );
};

export default Product;
