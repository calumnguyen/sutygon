import React, { useState, useEffect, useCallback } from "react";
import HeaderComponentHome from "../../header/headerhome";
import PageLoader from "../../misc/pageloader";
import { Helmet } from "react-helmet";
import PasswordField from "material-ui-password-field";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";
import { OCAlert } from "@opuscapita/react-alerts";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import {
  sendCodeRequest,
  getCustomer,
  getAllCustomers,
} from "../../../actions/customer";
import "../../../index.css";
import "../../../main.css";

class Register extends React.Component {
  state = {
    loader: true,
    isExist: false,
    sendingCode: false,
    password: "",
    countryCode: "VN",
    phonenumber: "",
    code_phonenumber: "",
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
  }

  setCode = (code) => {
    this.setState({
      countryCode: code,
    });
  };
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleValidation = (event) => {
    event.preventDefault();
    var number = event.target.value;
    this.setState({
      phonenumber: number,
    });
  };
  showError = (e) => {
    e.preventDefault();
    OCAlert.alertError("Please Add the required fields.", {
      timeOut: 3000,
    });
  };
  _sendCodeRequest = async (e) => {
    e.preventDefault();
    const { code_phonenumber, phonenumber } = this.state;
    this.setState({ sendingCode: true });
    await this.props.getCustomer(phonenumber);
    const { propsCustomer } = this.props;
    if (this.props.propsIsCustomerExist) {
      const { online_account } = propsCustomer && propsCustomer;
      if (online_account && online_account.exist == "yes") {
        OCAlert.alertError("Customer already registered", {
          timeOut: 3000,
        });
        this.setState({ sendingCode: false });
        return;
      } else if (online_account && online_account.exist == "no") {
        //api request for sending code
        this.setState({ sendingCode: true,isUpdate:true });
        await this.props.sendCodeRequest(code_phonenumber);
        this.setState({ sendingCode: false });

      }
    } else if (!this.props.propsIsCustomerExist) {
      //api request for sending code
      this.setState({ sendingCode: true });
      await this.props.sendCodeRequest(code_phonenumber);
      this.setState({ sendingCode: false });
    }
  };

  toNumber = (e) => {
    const { countryCode, phonenumber } = this.state;
    var num = phonenumber.slice(1);
    var res = phonenumber.slice(0, 1);
    if (phonenumber) {
      if (countryCode === "VN" && res == "0") {
        this.setState({
          phonenumber: "0" + num,
          code_phonenumber: "+84" + num,
        });
      } else if (countryCode === "VN" && res != "0") {
        this.setState({
          phonenumber: "",
        });
        OCAlert.alertError("Phone number must start from 0", { timeOut: 3000 });
      } else if (countryCode === "US") {
        this.setState({
          phonenumber: phonenumber,
          code_phonenumber: "+1" + phonenumber,
        });
      }
    }
  };

 
  render() {
    if (this.props.propsIsReqSent == "pending") {
      return (
        <Redirect
          to={{
            pathname: `/verification`,
            state: {
              contactNumber: this.state.phonenumber,
              password: this.state.password,
              isUpdate:this.state.isUpdate
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
                  <div className="section-title-register1 text-center">
                    <h5 className="title-bg">Register</h5>
                  </div>

                  {/*<!-- content -->*/}
                  <div className="section-content anim text-center">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-12 col-lg-11 col-md-12 col-lg-6">
                        {/*<!-- Registration form container-->*/}
                        <form
                          className="send_email_form form-container form-container-transparent form-container-white"
                          onSubmit={(e) => this._sendCodeRequest(e)}
                        >
                          <div className="form-desc text-white">
                            <h2 className="display-4 display-title anim-2">
                              Register
                            </h2>
                            <p className="invite anim-3">
                              Register now, receive gifts immediately
                            </p>
                          </div>

                          <div className="form-input  anim-4">
                            <div className="form-group form-success-gone">
                              <label htmlFor="login-number">
                                Please type your mobile number below
                              </label>
                              <div className="row">
                                <div className="col-lg-3 col-md-3 flag-dropdown">
                                  <ReactFlagsSelect
                                    selected={this.state.countryCode}
                                    name="countryCode"
                                    showSelectedLabel={false}
                                    showSecondarySelectedLabel={false}
                                    countries={["VN", "US"]}
                                    fullWidth={false}
                                    customLabels={{
                                      VN: { primary: "VN", secondary: "+84" },
                                      US: { primary: "US", secondary: "+1" },
                                    }}
                                    onSelect={(code) => this.setCode(code)}
                                  />
                                </div>

                                <div className="col-md-9">
                                  <input
                                    name={"phonenumber"}
                                    value={this.state.phonenumber}
                                    placeholder={
                                      this.state.countryCode == "VN"
                                        ? "090 123 4567"
                                        : "123 456 7890"
                                    }
                                    onChange={(e) => this.handleValidation(e)}
                                    className="form-control-line form-control-white text-white"
                                    onBlur={(e) => this.toNumber(e)}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-group form-success-gone">
                              <label htmlFor="login-pasword">
                                Enter a Secured Password
                              </label>
                              <PasswordField
                                onChange={(e) => this.handleInputChange(e)}
                                name="password"
                                value={this.state.password}
                                className="form-control-line form-control-white text-white"
                              />
                            </div>

                            {(this.state.password && this.state.phonenumber) !=
                            "" ? (
                              <>
                                {this.state.sendingCode ? (
                                  <button
                                    className="btn btn-white btn-round btn-full form-success-gone"
                                    type="button"
                                  >
                                    Sending...
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-white btn-round btn-full form-success-gone"
                                    type="submit"
                                  >
                                    Send Verification Code
                                  </button>
                                )}
                              </>
                            ) : (
                              <button
                                className="btn btn-white btn-round btn-full form-success-gone"
                                type="button"
                                onClick={(e) => this.showError(e)}
                              >
                                Send Verification Code
                              </button>
                            )}

                            <div className="form-group form-success-gone">
                              <label className="link">
                                Already had account? Sign In{" "}
                                <Link to={"/login"}>
                                  <u className="u_link"> Đăng ký nhanh.</u>
                                </Link>
                              </label>
                            </div>
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
const mapStateToProps = (state) => {
  return {
    propsSaved: state.customer.saved,
    propsCustomers: state.customer.customers,
    propsCustomer: state.customer.customer,
    propsIsReqSent: state.customer.isReqSent,
    propsError: state.customer.error,
    propsIsCodeVerified: state.customer.isCodeVerified,
    propsIsCustomerExist: state.customer.isCustomerExist,
    propsCustomer_number: state.customer.customer_number,
  };
};

export default connect(mapStateToProps, {
  sendCodeRequest,
  getCustomer,
  getAllCustomers,
})(Register);
