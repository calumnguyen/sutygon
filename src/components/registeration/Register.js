import React from "react";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import {
  addNewCustomer,
  sendCodeRequest,
  getAllCustomers,
  getCustomer,
  updateCustomer,
} from "../../actions/customer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { OCAlert } from "@opuscapita/react-alerts";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import VerifyCode from "./VerifyCode";
import "react-phone-number-input/style.css";
import ReactFlagsSelect from "react-flags-select";
import "react-country-dropdown/dist/index.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { vi } from "date-fns/esm/locale";
import scrollToComponent from 'react-scroll-to-component';


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
    phonenumber: '',
    password: "",
    code: "VN",
    customerEmailArray: "",
    isUpdate: false,
    saving: false,
    sendingCode: false,
contact:'' 
  };

  async componentDidMount() {
    await this.props.getAllCustomers();
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec

    //get all customers email array.
    this.getEmailArray();
  }

  toNumber = (e) => {
    const {code,phonenumber} = this.state;
    var num = phonenumber.slice(1);
    var res = phonenumber.slice(0, 1);
    if (phonenumber ) {
      if(code === "VN" && res == "0"){
        this.setState({ phonenumber: "VIE " + num, contact: "+84" + num });
      }
      else if(code === "VN" && res != "0"){
        this.setState({ phonenumber: "", contact:"" });
        OCAlert.alertError("Phone number must start from 0",{  timeOut: 3000});
      }
      else if(code === "US" && res != "1"){
        this.setState({ phonenumber: "", contact:"" });
        OCAlert.alertError("Phone number must start from 1",{  timeOut: 3000});
      }
      else if(code === "US" && res == "1"){
        this.setState({ phonenumber: "ENG " + num, contact: "+1" + num });
      }
    }
  };
  handleValidation = (e) =>{
    var number = e.target.value;
   this.setState({phonenumber:number});
  }
  getEmailArray() {
    let emails = [];
    const { customer } = this.props;
    if (customer) {
      //filter email from all customers.
      customer &&
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

    this.setState({ sendingCode: true });
    const phonenumber = number;
    //if phonenumber is empty, show error
    if (phonenumber == "") {
      OCAlert.alertError("Please enter phone number", { timeOut: 3000 });
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
    await this.props.getCustomer(phonenumber);
    const { isCustomerExist } = this.props;
    this.setState({ sendingCode: false, isCustomerExist: isCustomerExist });
    if (isCustomerExist == true) {
      this.getExistingCustomerDetails();
    }
  };

  UpdateCustomer = async (e) => {
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
      password: state.password,
      block_account: state.block_account === "" ? false : state.block_account,
    };

    //api action call for updating customer
    await this.props.updateCustomer(customerData, state.id);

    if (this.props.saved == true) {
      OCAlert.alertSuccess("Account details updated successfully", {
        timeOut: 3000,
      });
      this.setState({
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
        isUpdate: false,
        saving: false,
        sendingCode: false,
      });
    }
  };
  getExistingCustomerDetails = () => {
    const { customer } = this.props;
    if (customer) {
      this.setState({
        id: customer._id,
        fullname: customer.name,
        address: customer.address,
        birthday:
          customer.birthday && moment(customer.birthday).format("DD/MM/YYYY"),
        email: customer.email,
        company_name: customer.company,
        company_address: customer.company_address,
        phonenumber: customer.phonenumber,
        isUpdate: true,
      });
    }
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
  SaveCustomer = async (e) => {
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
      password: state.password,
      block_account: state.block_account === "" ? false : state.block_account,
    };

    //api action call for adding new customer
    await this.props.addNewCustomer(customerData);

    if (this.props.saved == true) {
      OCAlert.alertSuccess("Account details saved successfully", {
        timeOut: 3000,
      });
      this.setState({
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
        isUpdate: false,
        saving: false,
        sendingCode: false,
      });
    }
  };

  render() {
    const {
      fullname,
      birthday,
      address,
      company_name,
      email,
      contact,
      company_address,
      phonenumber,
    } = this.state;
    
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
                                customLabels= {
                                  {VN: { primary: "VIE", secondary: "+84" },
                                  US: { primary: "US", secondary: "+1" },}
                                }
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
                          <input
                            id="login-pas"
                            onChange={(e) => this.handleChange(e)}
                            name="password"
                            className="form-control-line form-control-white text-white"
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
                            onClick={() => scrollToComponent(this.Blue, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}
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
            data-section="verification" ref={(section) => { this.Blue = section; }} 
          >

            <VerifyCode phonenumber={contact} />

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
                      <div className="form-desc text-white">
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
                            className="form-control-line form-control-white text-white"
                            type="text"
                            value={fullname}
                            onChange={(e) => this.handleChange(e)}
                          />
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
          {/*<!-- Begin of personal info/dob section -->*/}
          <div
            className="section section-register fp-auto-height-responsive "
            data-section="personal-info-dob"
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
                      <div className="form-desc text-white">
                        <h2 className="display-6 display-title anim-2">
                          Personal Information
                        </h2>
                        <p className="invite text-center anim-3">
                          Provide your personal information to complete the
                          account registration process.
                        </p>
                      </div>

                      <div className="form-input  anim-4">
                        <div className="form-input anim">
                          <div className="form-group form-success-gone anim-3">
                            <label htmlFor="login-number">
                              {fullname ? fullname : ""} ? Beautiful name! <b />
                              What is your Date of Birth?
                            </label>
                            {this.state.isUpdate ? (
                              <input
                                value={this.state.birthday}
                                className="form-control border-primary"
                                readOnly
                              />
                            ) : (
                              <DatePicker
                                dateFormat="dd/MM/yyyy"
                                locale="vi"
                                selected={birthday}
                                className="form-control"
                                onChange={(e) =>
                                  this.handleChangeForDate(e, "birthday")
                                }
                                popperPlacement="top-start"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                              />
                            )}
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
          {/*<!-- Begin of personal info/address section -->*/}

          <div
            className="section section-register fp-auto-height-responsive "
            data-section="personal-info-address"
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
                      <div className="form-desc text-white">
                        <h2 className="display-6 display-title anim-2">
                          Personal Information
                        </h2>
                        <p className="invite text-center anim-3">
                          Provide your personal information to complete the
                          account registration process.
                        </p>
                      </div>
                      <div className="form-input anim-4">
                        <div className="form-group form-success-gone">
                          <label htmlFor="login-number">
                            What is your address?{" "}
                          </label>
                          <input
                            id="address"
                            name="address"
                            className="form-control-line form-control-white text-white"
                            type="text"
                            onChange={(e) => this.handleChange(e)}
                            value={address}
                          />
                        </div>
                      </div>

                      <button
                        to="/register#personal-info-address"
                        className="btn btn-white btn-round btn-full form-success-gone text-center px-1"
                      >
                        Scroll down to add more information
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- End of section wrapper -->*/}
          </div>
          {/*<!-- End of personal info/adress section -->*/}

          {/*<!-- Begin of other info section -->*/}
          <div
            className="section section-register fp-auto-height-responsive "
            data-section="other-info"
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
                            className="form-control-line form-control-white text-white"
                            onChange={(e) => this.handleChange(e)}
                            type="email"
                            onBlur={(e) => this.validateCustomerEmail(e)}
                            value={email}
                          />
                        </div>
                        <div className="form-group form-success-gone">
                          <label htmlFor="company_name">
                            What is your Company?{" "}
                          </label>
                          <input
                            id="company_name"
                            name="company_name"
                            className="form-control-line form-control-white text-white"
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                            value={company_name}
                          />
                        </div>{" "}
                        <div className="form-group form-success-gone">
                          <label htmlFor="company-address">
                            What is your Company address?{" "}
                          </label>
                          <input
                            id="company-address"
                            name="company_address"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control-line form-control-white text-white"
                            type="text"
                            value={company_address}
                          />
                        </div>
                        {/*checks if phone number is verified */}
                        {this.props.isCodeVerified ? (
                          <>
                            {/* checks if customer exists then the button will update the customer */}
                            {this.state.isUpdate ? (
                              // if customer exists then update customer
                              <button
                                id="submit-num"
                                className="btn btn-white btn-round form-success-gone btn-full"
                                name="submit_num"
                                onClick={(e) => this.UpdateCustomer(e)}
                              >
                                Sign Up for fun
                              </button>
                            ) : (
                              // if customer does not exists then save customer
                              <button
                                id="submit-num"
                                className="btn btn-white btn-round form-success-gone btn-full"
                                name="submit_num"
                                onClick={(e) => this.SaveCustomer(e)}
                              >
                                Sign Up for fun
                              </button>
                            )}
                          </>
                        ) : (
                          //if customer does not verified number then show disabled button
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
