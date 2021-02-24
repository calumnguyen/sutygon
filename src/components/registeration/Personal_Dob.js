import React from "react";
import {getCustomer } from "../../actions/customer";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import $ from "jquery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";
import { Link } from "react-router-dom";
import { OCAlert } from "@opuscapita/react-alerts";

class Personal_Dob extends React.Component {
  state = {
    birthday: "",
  };

 async componentDidMount() {
    this.forced_reload();
    setTimeout(function () {
      $("#page-loader").addClass("p-hidden");
    }, 100);

    if (this.props.location.state) {
      const { state } = this.props.location;
      this.setState({ fullname: state.fullname,contact: state.contact,password: state.password});
      await this.props.getCustomer(state.contact);
      const { customer } = this.props;

      if (customer) {
        this.setState({
          birthday: customer.birthday && moment(customer.birthday).format("DD/MM/YYYY"),
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
  //handle change for datepicker's event
  handleChangeForDate = (date) => {
    this.setState({
      birthday: date,
    });
  };
  showError = (e) =>{
    e.preventDefault();
    OCAlert.alertError("Please Enter your Date of birth.", {
      timeOut: 3000,
    });

  }
  render() {
    const { fullname, birthday } = this.state;

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

                      <div className="form-input  anim-4">
                        <div className="form-input anim">
                          <div className="form-group form-success-gone anim-3">
                            <label htmlFor="login-number">
                              {fullname ? fullname : ""} ? Beautiful name! <b />
                              What is your Date of Birth?
                            </label>
                            {this.state.isUpdate ? (
                              <input
                                value={birthday}
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
                                required

                              />
                            )}
                          </div>
                        </div>
                        {this.state.birthday != "" ? (
                          <Link
                            to={{
                              pathname: `/personaladdress`,
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
                      </div>
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

Personal_Dob.propTypes = {};

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
})(Personal_Dob);
