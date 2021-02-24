import React from "react";
import {
  getAllCustomers,
  addNewCustomer,
  getCustomer,
  updateCustomer,
} from "../../actions/customer";
import { connect } from "react-redux";
import { OCAlert } from "@opuscapita/react-alerts";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import $ from "jquery";
import * as moment from "moment";
import { Link, Redirect } from "react-router-dom";

class OtherInfo extends React.Component {
  state = {
    id: "",
    email: "",
    company_name: "",
    company_address: "",
    block_account: "",
    isUpdate: false,
  };
  async componentDidMount() {
    await this.props.getAllCustomers();
    this.forced_reload();
    setTimeout(function () {
      $("#page-loader").addClass("p-hidden");
    }, 100);
    if (this.props.location.state) {
      const { state } = this.props.location;
      this.setState({
        fullname: state.fullname,
        birthday: state.birthday,
        address: state.address,
        password: state.password,
        contact: state.contact,
      });
      await this.props.getCustomer(state.contact);
      const { customer } = this.props;

      if (customer) {
        this.setState({
          id: customer._id,
          email: customer.email,
          company_name: customer.company,
          company_address: customer.company_address,
          isUpdate: true,
        });
      }
    }
    //get all customers email array.
    this.getEmailArray();
  }
  getEmailArray() {
    let emails = [];
    const { customers } = this.props;
    if (customers) {
      //filter email from all customers.
      customers &&
        customers.filter((customer) => {
          emails.push(customer.email);
        });
    }
    this.setState({
      customerEmailArray: emails,
    });
  }

  forced_reload() {
    setTimeout(() => {
      if (window.localStorage) {
        if (!localStorage.getItem("firstLoad")) {
          localStorage["firstLoad"] = true;
          window.location.reload();
        } else localStorage.removeItem("firstLoad");
      }
    }, 50);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //validate customer email. show error if same email already exist or format of email is not valid
  validateCustomerEmail = (e) => {
    const { customerEmailArray } = this.state;
    const e_email = e.target.value;
    if (e_email.length > 0) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      var isInclude = customerEmailArray.includes(e_email);
      if (re.test(e_email) && !isInclude) {
        this.setState({ email: e_email });
      } else if (re.test(e_email) && isInclude) {
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
      contactnumber: state.contact,
      address: state.address,
      birthday: state.birthday,
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
  render() {
    const { email, company_name, company_address } = this.state;
    if (this.props.saved == true) {
       setTimeout(function(){return <Redirect exact to={"/login"} />; }, 3000);
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
            className="section section-register fp-auto-height-responsive "
            data-section="register"
          >
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
                    <form
                      className="send_email_form form-container form-container-transparent form-container-white"
                      method="get"
                    >
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
                            type="submit"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control-line form-control-white text-white"
                            type="text"
                            value={company_address}
                          />
                        </div>
                        <div className="form-group form-success-gone">
                        <label>Signed In?<Link to={"/login"} onClick={(e)=>this.forced_reload(e)}><u>Đăng ký nhanh.</u></Link>
                        </label>
                      </div>
                        {/*checks if phone number is verified */}
                        <>
                          {/* checks if customer exists then the button will update the customer */}
                          {this.state.isUpdate ? (
                            // if customer exists then update customer
                            <button
                              id="submit-num"
                              type="submit"
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
                              type="submit"
                              className="btn btn-white btn-round form-success-gone btn-full"
                              name="submit_num"
                              onClick={(e) => this.SaveCustomer(e)}
                            >
                              Sign Up for fun
                            </button>
                          )}
                        </>
                      </div>{" "}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

OtherInfo.propTypes = {};

const mapStateToProps = (state) => ({
  saved: state.customer.saved,
  isCodeVerified: state.customer.isCodeVerified,
  isReqSent: state.customer.isReqSent,
  customer_number: state.customer.customer_number,
  customers: state.customer.customers,
  customer: state.customer.customer,
});
export default connect(mapStateToProps, {
  getAllCustomers,
  addNewCustomer,
  getCustomer,
  updateCustomer,
})(OtherInfo);
