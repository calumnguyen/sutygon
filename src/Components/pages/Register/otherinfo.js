import React from "react";
import HeaderComponentHome from "../../header/headerhome";
import PageLoader from "../../misc/pageloader";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { addNewCustomer,updateCustomer } from "../../../actions/customer";
import { OCAlert } from "@opuscapita/react-alerts";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";
import "./registeration.css";
import "../../../index.css";
import "../../../main.css";

class OtherInfo extends React.Component {
  state = {
    contactNumber: "",
    password: "",
    fullname: "",
    birthday: "",
    address: "",
    email: "",
    companyName: "",
    companyAddress: "",
    block_account: "",
  };

  async componentDidMount() {
    const register = document.querySelector(".nav-register");
    const navRightbar = document.querySelector(".navbar-rightbar");
    navRightbar && navRightbar.classList.add("n-hidden")
    register && register.classList.add("active");
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
        address: state.address,
        birthday: state.birthday,
        fullname: state.fullname,
      });
      if (this.props.propsIsCustomerExist == true) {
        const { propsCustomer } = this.props;
        if (propsCustomer) {
          this.setState({
            isUpdate:true,
            id:propsCustomer._id,
            email: propsCustomer.email,
            companyName: propsCustomer.company,
            companyAddress: propsCustomer.company_address,
          });
        }
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  _SaveCustomer = async (e) => {
    e.preventDefault();
    this.setState({saving:true});
    //modifying online account details
    let m_oc = {
      exist: "yes",
      membership: this.state.membership === "" ? null : this.state.membership,
      username: this.state.fullname,
      email: "unverified",
      deactivate: false,
    };
    var customerData = {
      name: this.state.fullname,
      email: this.state.email,
      contactnumber: this.state.contactNumber,
      address: this.state.address,
      birthday: this.state.birthday,
      company: this.state.companyName,
      company_address: this.state.companyAddress,
      online_account: m_oc,
      password: this.state.password,
      block_account: this.state.block_account == "" ? false: this.state.block_account ,
    };
    //api action call for adding new customer
    await this.props.addNewCustomer(customerData);
    this.setState({saving:true});
    this.setState({
      fullname: "",
      address: "",
      birthday: "",
      email: "",
      companyName: "",
      companyAddress: ""
    });
  };
  _UpdateCustomer = async (e) => {
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

    if (this.props.propsSaved == true) {
      OCAlert.alertSuccess("Account details updated successfully", {
        timeOut: 3000,
      });
      this.setState({
        fullname: "",
        address: "",
        birthday: "",
        email: "",
        companyName: "",
        companyAddress: "",
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
          <main className="page-main page-fullpage main-anim" id="mainpage">
            <div
              className="section section-register fp-auto-height-responsive "
              data-section="register"
            >
              {/*<!-- Begin of section wrapper -->*/}
              <div className="section-wrapper">
                {/*<!-- title -->*/}
                <div className="section-title-personalinfo text-center">
                  <h5 className="title-bg">Other</h5>
                </div>

                {/*<!-- content -->*/}

                <div className="section-content anim text-center">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-lg-10 col-md-8 col-lg-6">
                      {/*<!-- Registration form container-->*/}
                      <form
                        className="send_email_form form-container form-container-transparent form-container-white"
                        method="get"
                      >
                        <div className="form-desc">
                          <h2 className="display-6 display-title anim-2 text-white custom_h1">
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
                              type="email"
                              value={this.state.email}
                              onChange={(e) => this.handleChange(e)}
                            />
                          </div>
                          <div className="form-group form-success-gone">
                            <label htmlFor="company_name">
                              What is your Company?{" "}
                            </label>
                            <input
                              id="companyName"
                              name="companyName"
                              className="form-control-line form-control-white text-white"
                              type="text"
                              value={this.state.companyName}
                              onChange={(e) =>this.handleChange(e)}
                            />
                          </div>{" "}
                          <div className="form-group form-success-gone">
                            <label htmlFor="company-address">
                              What is your Company address?{" "}
                            </label>
                            <input
                              id="company-address"
                              name="companyAddress"
                              type="submit"
                              className="form-control-line form-control-white text-white"
                              type="text"
                              value={this.state.companyAddress}
                              onChange={(e) => this.handleChange(e)}
                            />
                          </div>
                          {/*checks if phone number is verified */}
                          <>
                            {/* checks if customer exists then the button will update the customer */}
                            {this.state.isUpdate ? (
                              <button
                                id="submit-num"
                                type="submit"
                                className="btn btn-white btn-round form-success-gone btn-full"
                                name="submit_num"
                                onClick={(e) => this._UpdateCustomer(e)}
                              >
                                Update My Account
                              </button>
                            ) : (
                              <button
                                id="submit-num"
                                type="submit"
                                className="btn btn-white btn-round form-success-gone btn-full"
                                name="submit_num"
                                onClick={(e) => this._SaveCustomer(e)}
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
              {/*<!-- End of section wrapper -->*/}
            </div>{" "}
          </main>
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

export default connect(mapStateToProps, { addNewCustomer,updateCustomer })(OtherInfo);
