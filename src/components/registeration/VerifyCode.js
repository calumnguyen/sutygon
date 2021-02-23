import React from "react";
import { verifyCode, sendCodeRequest } from "../../actions/customer";
import { connect } from "react-redux";
import { OCAlert } from "@opuscapita/react-alerts";
import InputOtp from '@onefifteen-z/react-input-otp';

class VerifyCode extends React.Component {
  state = {
    phonenumber: "",
    resendingCode: false,
    verifying: false,
    code: "",
    otpCode:'',
  };

  sendCodeRequest = async (e) => {
    e.preventDefault();
    const {customer_number} = this.props;
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
  handleChange = otpCode => {
    this.setState({ otpCode });
  };

  render() {
    return (
      <div className="section-wrapper">
        {/*<!-- title -->*/}
        <div className="section-title text-center">
          <h5 className="title-bg">Verify</h5>
        </div>

        {/*<!-- content -->*/}
        <div className="section-content anim text-center">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              {/*<!-- Registration form container-->*/}
              <form className="send_email_form form-container form-container-transparent form-container-white">
                <div className="form-desc" style={{ color: "white" }}>
                  <h2 className="display-6 display-title anim-2">
                    Verify Your Number
                  </h2>
                  <p className="invite text-center anim-3">
                    To ensure your privacy, we have sent you a code to the phone
                    number you registered with. Please provide the code below.
                  </p>
                </div>

                <div className="form-input  anim-4">
                  <div className="form-group form-success-gone">
                    <div className="col-md-12 text-center"> 
                  <InputOtp 
                  numberOnly={true}
                  autoFocus={true}
                  onChange={this.handleChange} 
                  style={{marginLeft:"76px" }}
                  className="form-control-line form-control-white text-white text-center"
                  id="verify-number"
                  name="code"


                   /></div>

                  </div>
                  <div className="">
                    {this.state.verifying == true ? (
                      <button
                        id="submit-num"
                        className="btn btn-white btn-round form-success-gone float-left"
                        name="submit_num"
                        onClick={(e) => this.verifyCode(e)}
                      >
                        Verifying...
                      </button>
                    ) : (
                      <button
                        id="submit-num"
                        className="btn btn-white btn-round form-success-gone float-left"
                        name="submit_num"
                        onClick={(e) => this.verifyCode(e)}
                      >
                        Verify Code
                      </button>
                    )}
                    {this.state.resendingCode ? (
                      <button
                        id="submit-num"
                        className="btn btn-white btn-round form-success-gone float-right"
                        name="submit_num"
                      >
                        Resending...
                      </button>
                    ) : (
                      <button
                        id="submit-num"
                        className="btn btn-white btn-round form-success-gone float-right"
                        name="submit_num"
                        onClick={(e) =>
                          this.sendCodeRequest(e, this.state.phonenumber)
                        }
                      >
                        Resend Code
                      </button>
                    )}
                  </div>{" "}
                </div>
              </form>
              <div
                className=""
                style={{ height: "200px", display: "block" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VerifyCode.propTypes = {};

const mapStateToProps = (state) => ({
  isCodeVerified: state.customer.isCodeVerified,
  isReqSent: state.customer.isReqSent,
  customer_number: state.customer.customer_number,
});
export default connect(mapStateToProps, {
  verifyCode,
  sendCodeRequest,
})(VerifyCode);
