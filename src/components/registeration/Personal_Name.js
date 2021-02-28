import React from "react";
import { getCustomer } from "../../actions/customer";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import $ from "jquery";
import { OCAlert } from "@opuscapita/react-alerts";
import { Link,Redirect } from "react-router-dom";
class Personal_Name extends React.Component {
  state = {
    fullname: "",
    contact: "",
  };

  async componentDidMount() {
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
      const {
        password,
        contactnumber,
        isCustomerExist,
        fullname,
      } = this.props.location.state;
      if (isCustomerExist) {
        await this.props.getCustomer(contactnumber);
        const { customer } = this.props;
        if (customer) {
          this.setState({
            fullname: customer.name,
            isUpdate: true,
            contactnumber: customer.contactnumber,
            password: password,
          });
        }
      } else {
        this.setState({
          fullname: fullname,
          password: password,
          contactnumber: contactnumber,
        });
      }
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  showError = (e) => {
    e.preventDefault();
    OCAlert.alertError("Please Enter your Full Name.", {
      timeOut: 3000,
    });
  };

  render() {
    const { fullname } = this.state;
    const { isCodeVerified } = this.props;
    if(this.props.isCodeVerified == false){
    return <Redirect to={"/register"} />
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
            {/*<!-- Begin of section wrapper -->*/}
            <div className="section-wrapper">
              {/*<!-- title -->*/}
              <div className="section-title section-title_custom text-center">
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
                          {this.state.isUpdate ? (
                            <input
                              id="fullname"
                              name="fullname"
                              className="form-control-line form-control-white text-white"
                              type="text"
                              value={fullname}
                              onChange={(e) => this.handleChange(e)}
                              readOnly
                            />
                          ) : (
                            <input
                              id="fullname"
                              name="fullname"
                              required="required"
                              className="form-control-line form-control-white text-white"
                              type="text"
                              value={fullname}
                              onChange={(e) => this.handleChange(e)}
                            />
                          )}
                        </div>
                        {this.state.fullname != "" ? (
                          <Link
                            to={{
                              pathname: `/personaldob`,
                              state: {
                                fullname: this.state.fullname,
                                contactnumber: this.state.contactnumber,
                                password: this.state.password,
                              },
                            }}
                            className="btn btn-white btn-round btn-full form-success-gone text-center px-1"
                          >
                            Next
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={(e) => this.showError(e)}
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

Personal_Name.propTypes = {};

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
  getCustomer,
})(Personal_Name);
