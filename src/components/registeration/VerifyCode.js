import React from "react";
import { verifyCode, sendCodeRequest } from "../../actions/customer";
import { connect } from "react-redux";
import { OCAlert } from "@opuscapita/react-alerts";
import InputOtp from "@onefifteen-z/react-input-otp";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import $ from "jquery";
import { Link, Redirect } from "react-router-dom";
import "../../registeration.css";
class VerifyCode extends React.Component {
  state = {
    phonenumber: "",
    resendingCode: false,
    verifying: false,
    code: "",
    otpCode: "",
  };

  componentDidMount() {
    setTimeout(function () {
      $("#page-loader").addClass("p-hidden");
      var list = $(".bg-img");
      for (var i = 0; i < $(".bg-img").length; i++) {
        var src = $(".bg-img")[i].getAttribute("data-image-src");
        $(".bg-img")[i].style.backgroundImage = "url('" + src + "')";
        $(".bg-img")[i].style.backgroundRepeat = "no-repeat";
        $(".bg-img")[i].style.backgroundPosition = "center";
        $(".bg-img")[i].style.backgroundSize = "cover";
      }
      var list = $(".bg-color");
      for (var i = 0; i < $(".bg-color").length; i++) {
        var src = $(".bg-color")[i].getAttribute("data-bgcolor");
        $(".bg-color")[i].style.backgroundColor = src;
      }
      $(".section .content .anim.anim-wrapped").wrap(
        "<span class='anim-wrapper'></span>"
      );
    }, 800);
    if (this.props.location.state) {
      const { isCustomerExist } = this.props.location.state;
      if (isCustomerExist) {
        const { customer, password, contactnumber } = this.props.location.state;
        this.setState({
          customer: customer,
          contactnumber: contactnumber,
          password: password,
        });
      } else {
        const { password ,contactnumber} = this.props.location.state;
        this.setState({
          contactnumber: contactnumber,
          password: password,
        });
      }
    }
  }
  sendCodeRequest = async (e) => {
    e.preventDefault();
    const { contactnumber } = this.state;
    this.setState({ resendingCode: true });
    await this.props.sendCodeRequest(contactnumber);
    const { isReqSent } = this.props;
    if (isReqSent == "pending") {
      OCAlert.alertSuccess("Code sent to given phone number", {
        timeOut: 3000,
      });
    } else {
      OCAlert.alertError("Phone Number is invalid, Try again", {
        timeOut: 3000,
      });
    }
    this.setState({ resendingCode: false });
  };
  verifyCode = async (e) => {
    e.preventDefault();
    this.setState({ verifying: true });
    const { otpCode } = this.state;
    const { customer_number } = this.props;
    await this.props.verifyCode(otpCode, customer_number);
    const { isCodeVerified } = this.props;
    setTimeout(function () {
      if (isCodeVerified == true) {
        OCAlert.alertSuccess("Phone Number Verified.", { timeOut: 3000 });
      } else {
        OCAlert.alertError("Verification failed, Resend the code.", {
          timeOut: 3000,
        });
      }
    }, 3000);

    this.setState({ verifying: false });
  };
  showNumberError = (e) => {
    e.preventDefault();
    OCAlert.alertError("Send Verification First", { timeOut: 3000 });
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChange = (otpCode) => {
    this.setState({ otpCode });
  };

  render() {
    const { isCodeVerified, isCustomerExist,isReqSent } = this.props;
  
  if (isCodeVerified == true) {
      return (
        <Redirect
          exact
          to={{
            pathname: "/personalname",
            state: {
              isCustomerExist: isCustomerExist,
              customer: this.state.customer,
              password: this.state.password,
              contactnumber:this.state.contactnumber
            },
          }}
        />
      );
    }
   
 else if (isReqSent !== "pending") {
      return (
        <Redirect
          exact
          to={{
            pathname: "/register",
           
          }}
        />
      );
    }
    return (
      <div>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <PageLoader />
        <HeaderComponentLogin />
        {/*<!-- BEGIN OF page cover -->*/}
        <div className="page-cover">
          {/*<!-- Cover Background -->*/}
          <div
            className="cover-bg bg-img"
            data-image-src="assets/img/bg-default1.jpg"
          ></div>
          {/*<!-- Transluscent mask as filter -->*/}
          <div
            className="cover-bg-mask bg-color"
            data-bgcolor="rgba(2, 3, 10, 0.7)"
          ></div>
        </div>
        <div id="myApp">
          <OCAlertsProvider />
        </div>
        {/*<!--END OF page cover -->*/}
        {/*<!-- BEGIN OF page main content -->*/}
        <main className="page-main page-fullpage main-anim" id="mainpage">
          <div
            className="section-register section-register_custom fp-auto-height-responsive custom_register"
            data-section="register"
          >
            {/*<!-- Begin of verification section -->*/}
            <div className="section-wrapper">
              {/*<!-- title -->*/}
              <div className="section-title section-title_custom text-center">
                <h5 className="title-bg">Verify</h5>
              </div>

              {/*<!-- content -->*/}
              <div className="section-content anim text-center">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    {/*<!-- Registration form container-->*/}
                    <form className="send_email_form form-container form-container-transparent form-container-white">
                      <div className="form-desc" style={{ color: "white" }}>
                        <h2 className="display-6 display-title anim-2">
                          Verify Your Number
                        </h2>
                        <p className="invite text-center anim-3">
                          To ensure your privacy, we have sent you a code to the
                          phone number you registered with. Please provide the
                          code below.
                        </p>
                      </div>
                      <div className="form-input anim-4">
                        <div className="form-group form-success-gone">
                          <div className="col-lg-12 col-md-12 custom_otp">
                            <InputOtp
                              numberOnly={true}
                              autoFocus={true}
                              onChange={this.handleChange}
                              className="form-control-line form-control-white text-white text-center custom_otp_input"
                              id="verify-number"
                              name="code"
                            />
                          </div>
                        </div>
                        <div className="custom_btn">
                          {this.state.verifying == true ? (
                            <button
                              id="submit-num"
                              className="btn btn-white btn-round form-success-gone float-left"
                              name="submit_num"
                              onClick={(e) => this.verifyCode(e)}
                            >
                              Verifying...
                            </button>
                          ) : (
                            <button
                              id="submit-num"
                              className="btn btn-white btn-round form-success-gone float-left"
                              name="submit_num"
                              onClick={(e) => this.verifyCode(e)}
                            >
                              Verify Code
                            </button>
                          )}
                          {this.state.resendingCode ? (
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
                              onClick={(e) =>
                                this.sendCodeRequest(e, this.state.phonenumber)
                              }
                            >
                              Resend Code
                            </button>
                          )}
                        </div>{" "}
                      </div>
                    </form>
                    <div
                      className=""
                      style={{ height: "200px", display: "block" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </main>
      </div>
    );
  }
}

VerifyCode.propTypes = {};

const mapStateToProps = (state) => ({
  saved: state.customer.saved,
  customers: state.customer.customers,
  customer: state.customer.customer,
  isReqSent: state.customer.isReqSent,
  isCodeVerified: state.customer.isCodeVerified,
  isCustomerExist: state.customer.isCustomerExist,
  customer_number: state.customer.customer_number,
});
export default connect(mapStateToProps, {
  verifyCode,
  sendCodeRequest,
})(VerifyCode);
