import React from "react";
import { getCustomer } from "../../actions/customer";
import { connect } from "react-redux";
import { OCAlert } from "@opuscapita/react-alerts";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import $ from "jquery";
import { Link } from "react-router-dom";
import * as moment from "moment";

class Personal_Address extends React.Component {
  state = {
    address: "",
  };

async  componentDidMount() {
    this.forced_reload();
    setTimeout(function () {
      $("#page-loader").addClass("p-hidden");
    }, 100);
    if (this.props.location.state) {
      const { state } = this.props.location;
      this.setState({
        fullname: state.fullname,
        birthday: state.birthday,
        contact: state.contact,
        password: state.password,
      });
      await this.props.getCustomer(state.contact);
      const { customer } = this.props;

      if (customer) {
        this.setState({
          address: customer.address,
          isUpdate:true,
        });
      }
    }
    
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
  sendCodeRequest = async (e) => {
    e.preventDefault();
    const { customer_number } = this.props;
    this.setState({ resendingCode: true });
    await this.props.sendCodeRequest(customer_number);
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
  showError = (e) =>{
    e.preventDefault();
    OCAlert.alertError("Please Enter your Full Address.", {
      timeOut: 3000,
    });

  }
  render() {
    const { address } = this.state;
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
                            required
                          />
                        </div>
                      </div>
                      {this.state.address != "" ? (
                          <Link
                          to={{
                            pathname: `/otherinformation`,
                            state: this.state,
                          }}
                            className="btn btn-white btn-round btn-full form-success-gone text-center px-1"
                          >
                            Next
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={(e) =>this.showError(e)}
                            className="btn btn-white btn-round btn-full form-success-gone text-center px-1 disabled"
                          >
                            Next
                          </button>
                        )}
                    
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- End of section wrapper -->*/}
          </div>{" "}
        </main>
      </div>
    );
  }
}

Personal_Address.propTypes = {};

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
 getCustomer
})(Personal_Address);
