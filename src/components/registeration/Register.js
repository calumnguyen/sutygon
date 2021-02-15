import React from "react";
import { Helmet } from "react-helmet";
// import FooterComponent from "../footer/FooterComponent";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import {
  addNewCustomer,
  sendCodeRequest,
  getAllCustomers,
} from "../../actions/customer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { OCAlert } from "@opuscapita/react-alerts";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import VerifyCode from "./VerifyCode";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { vi } from "date-fns/esm/locale";

registerLocale("vi", vi);
setDefaultLocale("vi");

class Register extends React.Component {
  state = {
    fullname: "",
    address: "",
    birthday: "",
    email: "",
    company_name: "",
    company_address: "",
    phonenumber: "",
    password: "",
    code: "",
    customerEmailArray: "",
    saving: false,
    sendingCode: false,
  };

  async componentDidMount() {
    await this.props.getAllCustomers();
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec

    //get all customers email array.
    this.getEmailArray();
  }

  getEmailArray() {
    let emails = [];
    const { customer } = this.props;
    if (customer) {
      //filter email from all customers.
      customer.filter((customer) => {
        emails.push(customer.email);
      });
    }
    this.setState({
      customerEmailArray: emails,
    });
  }

  //send verification code to given phone number
  sendCodeRequest = async (e, number) => {
    e.preventDefault();

    this.setState({sendingCode: true})
    const phonenumber = number;
    //if phonenumber is empty, show error
    if (phonenumber == "") {
      OCAlert.alertSuccess("Please enter phone number", { timeOut: 3000 });
    }
    //api request for sending code
    await this.props.sendCodeRequest(phonenumber);

    const { isReqSent } = this.props;
    if (isReqSent == "pending") {
      OCAlert.alertSuccess("Code sent to given phone number", {
        timeOut: 3000,
      });
    } else if (isReqSent == "Not Sent") {
      OCAlert.alertError("Phone Number is invalid, Try again", {
        timeOut: 3000,
      });
    }
    this.setState({sendingCode: false})

  };

  //validate customer email. show error if same email already exist or format of email is not valid
  validateCustomerEmail = (e) => {
    const { customerEmailArray } = this.state;
    if (e.target.value.length > 0) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      var isInclude = customerEmailArray.includes(e.target.value);
      if (re.test(e.target.value) && !isInclude) {
        this.setState({ email: e.target.value });
      } else if (re.test(e.target.value) && isInclude) {
        OCAlert.alertError("Email Already exists", { timeOut: 3000 });
        this.setState({ email: "" });
        return;
      } else {
        OCAlert.alertError("Email is not valid", { timeOut: 3000 });
        this.setState({ email: "" });
        return;
      }
    }
  };

  //show error on signup button if phone number is not verified
  showVerificationError = (e) => {
    e.preventDefault();
    OCAlert.alertError("Please Verify phone number to proceed!!");
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //handle change for datepicker's event
  handleChangeForDate = (date) => {
    this.setState({
      birthday: date,
    });
  };

  //add customer
  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ saving: true });
    const state = { ...this.state };
    //modifying online account details
    let m_oc = {
      exist: "yes",
      membership: this.state.membership === "" ? null : this.state.membership,
      username: this.state.fullname,
      email: "unverified",
      deactivate: false,
    };
    var customerData = {
      name: state.fullname,
      email: state.email,
      contactnumber: state.phonenumber,
      address: state.address,
      birthday: moment(state.birthday),
      company: state.company_name,
      company_address: state.company_address,
      online_account: m_oc,
      password:state.password,
      block_account: state.block_account === "" ? false : state.block_account,
    };

    //api action call
    await this.props.addNewCustomer(customerData);

    if (this.props.saved == true) {
      OCAlert.alertSuccess("Account details saved successfully", {
        timeOut: 3000,
      });
      this.setState({ saving: false });
    }
  };

  render() {
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
          {/*<!-- Begin of register/login/signin section -->*/}
          <div
            className="section section-register fp-auto-height-responsive "
            data-section="register"
          >
            {/*<!-- Begin of section wrapper -->*/}
            <div className="section-wrapper">
              {/*<!-- title -->*/}
              <div className="section-title text-center">
                <h5 className="title-bg">Regiter</h5>
              </div>

              {/*<!-- content -->*/}
              <div className="section-content anim text-center">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    {/*<!-- Registration form container-->*/}
                    <form
                      className="send_email_form form-container form-container-transparent form-container-white"
                      onSubmit={(e) =>
                        this.sendCodeRequest(e, this.state.phonenumber)
                      }
                    >
                      <div className="form-desc" style={{ color: "white" }}>
                        <h2 className="display-4 display-title anim-2">
                          Register
                        </h2>
                        <p className="invite  anim-3">
                          Register now, receive gifts immediately
                        </p>
                      </div>

                      <div className="form-input  anim-4">
                        <div className="form-group form-success-gone">
                          <label htmlFor="login-number">
                            Enter 10-digit phone number
                          </label>
                          <PhoneInput
                            country={"vn"}
                            onlyCountries={["vn", "us"]}
                            areaCodes={{ vn: ["84"], us: ["1"] }}
                            onChange={(phonenumber) =>
                              this.setState({ phonenumber })
                            }
                          />
                        </div>

                        <div className="form-group form-success-gone">
                          <label htmlFor="login-pasword">
                            Enter a Secured Password
                          </label>
                          <input
                            id="login-pas"
                            style={{ color: "white" }}
                            onChange={(e) => this.handleChange(e)}
                            name="password"
                            className="form-control-line form-control-white"
                            type="password"
                          />
                        </div>
                        {this.state.sendingCode ? (
                          <button
                            className="btn btn-white btn-round btn-full form-success-gone"
                            type="submit"
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
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- End of section wrapper -->*/}
          </div>
          {/*<!-- End of register/login/signin section -->*/}

          {/*<!-- Begin of verification section -->*/}

          <div
            className="section section-register fp-auto-height-responsive "
            data-section="verification"
          >
            <VerifyCode phonenumber={this.state.phonenumber} />
          </div>
          {/*<!-- End of verification section -->*/}

          {/*<!-- Begin of personal info/name section -->*/}
          <div
            className="section section-register fp-auto-height-responsive "
            data-section="personal-info-name"
          >
            {/*<!-- Begin of section wrapper -->*/}
            <div className="section-wrapper">
              {/*<!-- title -->*/}
              <div className="section-title text-center">
                <h5 className="title-bg">Personal</h5>
              </div>

              {/*<!-- content -->*/}
              <div className="section-content anim text-center">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    {/*<!-- Registration form container-->*/}
                    <form className="send_email_form form-container form-container-transparent form-container-white">
                      <div className="form-desc" style={{ color: "white" }}>
                        <h2 className="display-6 display-title anim-2">
                          Personal Information
                        </h2>
                        <p className="invite text-center anim-3">
                          Provide your personal information to complete the
                          account registration process.
                        </p>
                      </div>

                      <div className="form-input  anim-4">
                        <div className="form-group form-success-gone">
                          <label htmlFor="fullname">
                            What is your full name?
                          </label>
                          <input
                            id="fullname"
                            name="fullname"
                            style={{ color: "white" }}
                            className="form-control-line form-control-white"
                            type="text"
                            onChange={(e) => this.handleChange(e)}
                          />
                        </div>
                        <div className="form-input anim">
                          <div className="form-group form-success-gone anim-3">
                            <label htmlFor="login-number">
                              Sam Smith? Beautiful name! <b />
                              What is your Date of Birth?
                            </label>
                            <DatePicker
                              dateFormat="dd/MM/yyyy"
                              locale="vi"
                              selected={this.state.birthday}
                              className="form-control"
                              onChange={(e) =>
                                this.handleChangeForDate(e, "birthday")
                              }
                              popperPlacement="top-start"
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                            />
                          </div>
                        </div>
                        <div className="form-input  anim-4">
                          <div className="form-group form-success-gone">
                            <label htmlFor="login-number">
                              What is your address?{" "}
                            </label>
                            <input
                              id="address"
                              name="address"
                              className="form-control-line form-control-white"
                              type="text"
                              style={{ color: "white" }}
                              onChange={(e) => this.handleChange(e)}
                            />
                          </div>
                        </div>
                        <button
                          to="/register#personal-info-address"
                          className="btn btn-white btn-round btn-full form-success-gone text-center px-1"
                        >
                          Scroll down to add more information
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- End of section wrapper -->*/}
          </div>
          {/*<!-- End of personal info/name section -->*/}

          {/*<!-- Begin of personal info/addrss section -->*/}
          <div
            className="section section-register fp-auto-height-responsive "
            data-section="personal-info-address"
          >
            {/*<!-- Begin of section wrapper -->*/}
            <div className="section-wrapper">
              {/*<!-- title -->*/}
              <div className="section-title text-center">
                <h5 className="title-bg">Other</h5>
              </div>

              {/*<!-- content -->*/}

              <div className="section-content anim text-center">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    {/*<!-- Registration form container-->*/}
                    <form className="send_email_form form-container form-container-transparent form-container-white">
                      <div className="form-desc">
                        <h2 className="display-6 display-title anim-2 text-white">
                          Other Information
                        </h2>
                        <p className="invite text-center anim-3 text-white">
                          Provide your personal information to complete the
                          account registration process.
                        </p>
                      </div>
                      <div className="form-input  anim-4">
                        <div className="form-group form-success-gone">
                          <label htmlFor="email">What is your email? </label>
                          <input
                            id="email"
                            name="email"
                            style={{ color: "white" }}
                            className="form-control-line form-control-white"
                            onChange={(e) => this.handleChange(e)}
                            type="email"
                            onBlur={(e) => this.validateCustomerEmail(e)}
                          />
                        </div>
                        <div className="form-group form-success-gone">
                          <label htmlFor="company_name">
                            What is your Company?{" "}
                          </label>
                          <input
                            id="company_name"
                            style={{ color: "white" }}
                            name="company_name"
                            className="form-control-line form-control-white"
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                          />
                        </div>{" "}
                        <div className="form-group form-success-gone">
                          <label htmlFor="company-address">
                            What is your Company address?{" "}
                          </label>
                          <input
                            id="company-address"
                            style={{ color: "white" }}
                            name="company-address"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control-line form-control-white"
                            type="text"
                          />
                        </div>
                        {this.props.isCodeVerified == true ? (
                          <>
                            {this.state.saving ? (
                              <button
                                type="submit"
                                className="btn btn-white btn-round form-success-gone btn-full text-center "
                              >
                                <div
                                  className="mr-2 spinner-grow spinner-grow-sm  text-light"
                                  role="status"
                                ></div>{" "}
                                &nbsp; Saving...{" "}
                              </button>
                            ) : (
                              <button
                                id="submit-num"
                                className="btn btn-white btn-round form-success-gone btn-full"
                                name="submit_num"
                                onClick={(e) => this.onSubmit(e)}
                              >
                                Sign Up for fun
                              </button>
                            )}{" "}
                          </>
                        ) : (
                          <button
                            id="submit-num"
                            className="btn btn-white btn-round form-success-gone btn-full disabled"
                            name="submit_num"
                            onClick={(e) => this.showVerificationError(e)}
                          >
                            Sign Up for fun
                          </button>
                        )}
                      </div>{" "}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- End of section wrapper -->*/}
          </div>
          {/*<!-- End of personal info/address section -->*/}
        </main>
        {/*<!-- END OF page main content -->*/}
        {/* <FooterComponent id="site-footer" /> */}
        {/* starting div */}
      </div>
    );
  }
}

Register.propTypes = {
  saved: PropTypes.bool,
  customer: PropTypes.object,
};

const mapStateToProps = (state) => ({
  saved: state.customer.saved,
  customer: state.customer.customers,
  isReqSent: state.customer.isReqSent,
  isCodeVerified: state.customer.isCodeVerified,
});
export default connect(mapStateToProps, {
  addNewCustomer,
  getAllCustomers,
  sendCodeRequest,
})(Register);