import React from "react";
import { getCustomer } from "../../actions/customer";
import { connect } from "react-redux";
import { OCAlert } from "@opuscapita/react-alerts";
import { Helmet } from "react-helmet";
import HeaderComponentLogin from "../header/HeaderComponentLogin";
import PageLoader from "../miscellaneous/PageLoader";
import { OCAlertsProvider } from "@opuscapita/react-alerts";
import $ from "jquery";
import { Link, Redirect } from "react-router-dom";
import * as moment from "moment";

class Personal_Address extends React.Component {
  state = {
    address: "",
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
  
    const { isCustomerExist } = this.props;
    if (isCustomerExist) {
      const { customer } = this.props;

      if (customer) {
        this.setState({
          birthday:
            customer.birthday && moment(customer.birthday).format("DD/MM/YYYY"),
          isUpdate: true,
          fullname: customer.fullname,
          contactnumber: customer.contactnumber,
          password: customer.password,
          address:customer.address
        });
      }
    } else {
      const { state } = this.props.location;
      if (state) {
        const { fullname, contactnumber, password ,birthday} = state;
        this.setState({
          fullname: fullname,
          contactnumber: contactnumber,
          password: password,
          birthday: birthday,
        });
      }
    }
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

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
 
  render() {
    const { address } = this.state;
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
                          onClick={(e) => this.showError(e)}
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
  getCustomer,
})(Personal_Address);
