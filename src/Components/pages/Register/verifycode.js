import React, { useState, useEffect } from "react";
import HeaderComponentHome from "../../header/headerhome";
import PageLoader from "../../misc/pageloader";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import InputOtp from "@onefifteen-z/react-input-otp";
import { OCAlert } from "@opuscapita/react-alerts";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import { sendCodeRequest, verifyCode } from "../../../actions/customer";
import "./registeration.css";
import "../../../index.css";
import "../../../main.css";

class Verification extends React.Component {
  state = {
    loader: true,
    verificationCode: "",
    isCodeSent: false,
    isResendCode: false,
    contactNumber: "",
    password: "",
  };

  async componentDidMount() {
    const register = document.querySelector(".nav-register");
    register && register.classList.add("active");
    const navRightbar = document.querySelector(".navbar-rightbar");
    navRightbar && navRightbar.classList.add("n-hidden")
    const main = document.querySelector("#mainpage");
    const section = document.querySelector(".section-register");
    main &&
      main.classList.add(
        "page-main",
        "page-fullpage",
        "main-anim",
        "fullpage-wrapper"
      );
    section &&
      section.classList.add(
        "section",
        "section-register",
        "fp-auto-height-responsive",
        "fp-section",
        "active",
        "fp-completely",
        "anim"
      );
    this.setState({ loader: false });
    if (this.props.location.state) {
      const { state } = this.props.location;
      this.setState({
        password: state.password,
        contactNumber: state.contactNumber,
        isUpdate: state.isUpdate
      });
    }
  }
  _verifyCode = async (e) => {
    e.preventDefault();
    this.setState({ isCodeSent: true });
    if (this.state.verificationCode.length != "6") {
      OCAlert.alertError("Wrong Verification Code.", { timeOut: 3000 });
      this.setState({ isCodeSent: false });
      return;
    } else {
      await this.props.verifyCode(this.state.verificationCode, this.props.propsCustomerNumber);
      this.setState({ isCodeSent: false });
    }
  };
  _sendCodeRequest = async (e) => {
    e.preventDefault();
    this.setState({ isResendCode: true });
    await this.props.sendCodeRequest(this.props.propsCustomerNumber);
    this.setState({ isResendCode: false });
  };
  setVerificationCode = (code) => {
    this.setState({
      verificationCode: code,
    });
  };
  render() {
    if (this.props.propsIsCodeVerified) {
      return (
        <Redirect
          to={{
            pathname: `/personalinfo`,
            state: {
              contactNumber: this.state.contactNumber,
              password: this.state.password,
              isUpdate: this.state.isUpdate
            },
          }}
        />
      );
    }
  else if (this.props.propsIsReqSent == null) {
      return (
        <Redirect
          to={{
            pathname: `/register`,
            state: {
              contactNumber: this.state.contactNumber,
              password: this.state.password,
              isUpdate: this.state.isUpdate
            },
          }}
        />
      );
    }
    return (
      <div>
        <Helmet>
          <title>Đăng ký</title>
        </Helmet>
        <HeaderComponentHome />
        {this.state.loader && <PageLoader />}

        <section data-aos="zoom-in" className="contact-container">
          <div id="myApp">
            <OCAlertsProvider />
          </div>
          <div>
            {/* <PageLoader /> */}
            {/*<!--END OF page cover -->*/}
            {/*<!-- BEGIN OF page main content -->*/}
            <main className="page-main page-fullpage main-anim" id="mainpage">
              {/*<!-- Begin of register/login/signin section -->*/}
              <div
                className="section section-register fp-auto-height-responsive "
                data-section="register"
              >
                {/*<!-- Begin of section wrapper -->*/}
                <div className="section-wrapper">
                  {/*<!-- title -->*/}
                  <div className="section-title-verify text-center">
                    <h5 className="title-bg">Verifiy</h5>
                  </div>

                  {/*<!-- content -->*/}
                  <div className="section-content anim text-center">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-12 col-lg-10 col-md-12 col-lg-6">
                        {/*<!-- Registration form container-->*/}
                        <form className="send_email_form form-container form-container-transparent form-container-white">
                          <div className="form-desc" style={{ color: "white" }}>
                            <h2 className="display-6 display-title anim-2">
                              Verify Your Number
                            </h2>
                            <p className="invite text-center anim-3">
                              To ensure your privacy, we have sent you a code to
                              the phone number you registered with. Please
                              provide the code below.
                            </p>
                          </div>
                          <div className="form-input anim-4">
                            <div className="form-group form-success-gone">
                              <div className="col-lg-12 col-md-12 custom_otp">
                                <InputOtp
                                  numberOnly={true}
                                  autoFocus={true}
                                  onChange={(code) =>this.setVerificationCode(code)}
                                  className="form-control-line form-control-white text-white text-center custom_otp_input"
                                  id="verify-number"
                                  value={this.state.verificationCode}
                                  name="code"
                                />
                              </div>
                            </div>
                            <div className="custom_btn">
                              {this.state.isCodeSent == true ? (
                                <button
                                  id="submit-num"
                                  className="btn btn-white btn-round form-success-gone float-left"
                                  name="submit_num"
                                >
                                  Verifying...
                                </button>
                              ) : (
                                <button
                                  id="submit-num"
                                  className="btn btn-white btn-round form-success-gone float-left"
                                  name="submit_num"
                                  onClick={(e) =>this._verifyCode(e)}
                                >
                                  Verify Code
                                </button>
                              )}
                              {this.state.isResendCode ? (
                                <button
                                  id="submit-num"
                                  className="btn btn-white btn-round form-success-gone float-right"
                                  name="submit_num"
                                >
                                  Resending...
                                </button>
                              ) : (
                                <button
                                  id="submit-num"
                                  className="btn btn-white btn-round form-success-gone float-right custom"
                                  name="submit_num"
                                  onClick={(e) => this._sendCodeRequest(e)}
                                >
                                  Resend Code
                                </button>
                              )}
                            </div>{" "}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- End of section wrapper -->*/}
              </div>
              {/*<!-- End of register/login/signin section -->*/}
            </main>
            {/*<!-- END OF page main content -->*/}
            {/* <FooterComponent id="site-footer" /> */}
            {/* starting div */}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  propsSaved: state.customer.saved,
  propsCustomers: state.customer.customers,
  propsCustomer: state.customer.customer,
  propsIsReqSent: state.customer.isReqSent,
  propsError: state.customer.error,
  propsIsCodeVerified: state.customer.isCodeVerified,
  propsIsCustomerExist: state.customer.isCustomerExist,
  propsCustomerNumber: state.customer.customer_number,
});

export default connect(mapStateToProps, {
  verifyCode,
  sendCodeRequest,
})(Verification);
