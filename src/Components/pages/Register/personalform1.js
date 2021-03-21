import React, { useState, useEffect } from "react";
import HeaderComponentHome from "../../header/headerhome";
import PageLoader from "../../misc/pageloader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCustomer } from "../../../actions/customer";
import { Redirect } from "react-router-dom";
import "./registeration.css";
import "../../../index.css";
import "../../../main.css";

class PersonalForm1 extends React.Component {
  state = {
    loader: true,
    contactNumber: "",
    password: "",
    fullname: "",
  };
  async componentDidMount() {
    const register = document.querySelector(".nav-register");
    register && register.classList.add("active");
    // const navRightbar = document.querySelector(".navbar-rightbar");
    // navRightbar && navRightbar.classList.add("n-hidden")
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
      });
      if(this.props.propsIsCustomerExist == true){
        await this.props.getCustomer(state.contactNumber);
        const {propsCustomer} = this.props;
        if(propsCustomer){
        this.setState({fullname: propsCustomer.name})
        }
      }
   
    }
    
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ fullname: event.target.value });
  };
  render() {
    if (!this.props.propsIsCodeVerified) {
      return (
        <Redirect
          to={{
            pathname: `/register`,

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
          <main className="page-main page-fullpage main-anim" id="mainpage">
            <div
              className="section section-register fp-auto-height-responsive "
              data-section="register"
            >
              {/*<!-- Begin of section wrapper -->*/}
              <div className="section-wrapper">
                {/*<!-- title -->*/}
                <div className="section-title-personalinfo text-center">
                  <h5 className="title-bg">Personal</h5>
                </div>

                {/*<!-- content -->*/}

                <div className="section-content anim text-center">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-lg-10 col-md-8 col-lg-6">
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
                              onChange={(e)=>this.handleChange(e)}
                              value={this.state.fullname}
                            />
                          </div>
                          <Link
                            to={{
                              pathname: `/personalinfo2`,
                              state: this.state,
                            }}
                            className="btn btn-white btn-round btn-full form-success-gone text-center px-1"
                          >
                            Next
                          </Link>
                        </div>
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

export default connect(mapStateToProps, {getCustomer})(PersonalForm1);
