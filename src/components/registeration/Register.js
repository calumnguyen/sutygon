import React from "react";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import PasswordField from "material-ui-password-field";
import {
  addNewCustomer,
  sendCodeRequest,
  getAllCustomers,
  getCustomer,
  updateCustomer,
} from "../../actions/customer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {  Redirect } from "react-router-dom";
import { OCAlert } from "@opuscapita/react-alerts";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import ReactFlagsSelect from "react-flags-select";
import "react-country-dropdown/dist/index.css";
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
    code: "VN",
    customerEmailArray: "",
    isUpdate: false,
    saving: false,
    sendingCode: false,
    contact: "",
    showVerificationSection: false,
  };

  async componentDidMount() {
    await this.props.getAllCustomers();
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec
  }

  toNumber = (e) => {
    const { code, phonenumber } = this.state;
    var num = phonenumber.slice(1);
    var res = phonenumber.slice(0, 1);
    if (phonenumber) {
      if (code === "VN" && res == "0") {
        this.setState({ phonenumber: "0" + num, contact: "+84" + num });
      } else if (code === "VN" && res != "0") {
        this.setState({ phonenumber: "", contact: "" });
        OCAlert.alertError("Phone number must start from 0", { timeOut: 3000 });
      } else if (code === "US") {
        this.setState({
          phonenumber: phonenumber,
          contact: "+1" + phonenumber,
        });
      }
    }
  };
  handleValidation = (e) => {
    var number = e.target.value;
    this.setState({ phonenumber: number });
  };

  //send verification code to given phone number
  sendCodeRequest = async (e, number) => {
    e.preventDefault();
    this.setState({ sendingCode: true });
    const phonenumber = number;
    //if phonenumber is empty, show error
    if (phonenumber == "") {
      OCAlert.alertError("Please enter phone number", { timeOut: 3000 });
      return;
    }
    //api request for sending code
    await this.props.sendCodeRequest(phonenumber);

    const { isReqSent } = this.props;
    console.log(isReqSent);
    if (isReqSent == false) {
      OCAlert.alertError("Phone Number is invalid, Try again", {
        timeOut: 3000,
      });
    } else if (isReqSent == "pending") {
      OCAlert.alertSuccess("Code sent to given phone number", {
        timeOut: 3000,
      });
      return <Redirect exact to={"/VerifyCode"} />;
    }

    const phone = this.state.phonenumber;
    await this.props.getCustomer(phone);
    const { isCustomerExist } = this.props;
    this.setState({ sendingCode: false, isCustomerExist: isCustomerExist });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  showError = (e) =>{
    e.preventDefault();
    OCAlert.alertError("Please Enter Phone Number and Password.", {
      timeOut: 3000,
    });

  }
  render() {
    const { contact, password, phonenumber } = this.state;
    const { isCustomerExist, isReqSent } = this.props;

    if (isReqSent == "pending") {
      OCAlert.alertSuccess("Code sent to given phone number", {
        timeOut: 3000,
      });
      return (
        <Redirect
          exact
          to={{
            pathname: `/VerifyCode`,
            state: {
              contact: contact,
              phonenumber: phonenumber,
              isCustomerExist: isCustomerExist,
              password: password,
            },
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
          {/*<!-- Begin of register/login/signin section -->*/}
          <div
            className="section section-register fp-auto-height-responsive "
            data-section="register"
          >
            {/*<!-- Begin of section wrapper -->*/}
            <div className="section-wrapper">
              {/*<!-- title -->*/}
              <div className="section-title text-center">
                <h5 className="title-bg">Register</h5>
              </div>

              {/*<!-- content -->*/}
              <div className="section-content anim text-center">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    {/*<!-- Registration form container-->*/}
                    <form
                      className="send_email_form form-container form-container-transparent form-container-white"
                      onSubmit={(e) => this.sendCodeRequest(e, contact)}
                    >
                      <div className="form-desc  text-white">
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
                          <div className="row">
                            <div className="col-md-3 flag-dropdown">
                              <ReactFlagsSelect
                                selected={this.state.code}
                                showSelectedLabel={false}
                                showSecondarySelectedLabel={false}
                                countries={["VN", "US"]}
                                placeholder=""
                                fullWidth={false}
                                customLabels={{
                                  VN: { primary: "VN", secondary: "+84" },
                                  US: { primary: "US", secondary: "+1" },
                                }}
                                onSelect={(code) =>
                                  this.setState({ code: code })
                                }
                              />
                            </div>

                            <div className="col-md-9">
                              <input
                                name={"phonenumber"}
                                value={this.state.phonenumber}
                                onChange={(e) => this.handleValidation(e)}
                                className="form-control-line form-control-white text-white"
                                onBlur={(e) => this.toNumber(e)}
                              />
                            </div>
                          </div>
                          {/* <PhoneInput
                                placeholder="Enter phone number"
                                international={false}
                                value={this.state.phonenumber}
                                countryCallingCodeEditable={false}
                                defaultCountry="VN"
                                onChange={phonenumber=>(this.toNumber(phonenumber))}
                          /> */}
                        </div>

                        <div className="form-group form-success-gone">
                          <label htmlFor="login-pasword">
                            Enter a Secured Password
                          </label>
                          <PasswordField
                            hintText="At least 8 characters"
                            floatingLabelText="Enter your password"
                            errorText="Your password is too short"
                            onChange={(e) => this.handleChange(e)}
                            name="password"
                            className="form-control-line form-control-white text-white"

                          />
                         
                        </div>
                        {(this.state.password && this.state.phonenumber) != "" ?
                        <>
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
                        )}</> :
                        <button
                        className="btn btn-white btn-round btn-full form-success-gone disabled"
                        type="button"
                        onClick={(e) =>this.showError(e)}

                      >
                            Send Verification Code
                      </button>}
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
    );
  }
}

Register.propTypes = {
  saved: PropTypes.bool,
  customer: PropTypes.object,
};

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
  addNewCustomer,
  getAllCustomers,
  sendCodeRequest,
  getCustomer,
  updateCustomer,
})(Register);
