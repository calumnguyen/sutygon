import React from "react";
import { verifyCode ,  sendCodeRequest} from "../../actions/customer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { OCAlert } from "@opuscapita/react-alerts";
import { OCAlertsProvider } from "@opuscapita/react-alerts";

class VerifyCode extends React.Component {
  state = {
    phonenumber: "",
    resendingCode: false,
    verifying:false,
    code: "",
  };
  sendCodeRequest = async (e) => {
    e.preventDefault();
    this.setState({resendingCode: true})
    const {phonenumber} = this.props;
    await this.props.sendCodeRequest(phonenumber);
    const {isReqSent} = this.props;
    if(isReqSent == "pending"){
      OCAlert.alertSuccess("Code sent to given phone number",{ timeOut: 3000 });
    }
    else{
        OCAlert.alertError("Phone Number is invalid, Try again",{ timeOut: 3000 });
    }
    this.setState({resendingCode: false})

  };
  verifyCode = async (e) => {
    e.preventDefault();
    this.setState({verifying: true})
    const code = this.state.code;
    const { phonenumber } = this.props;
    await this.props.verifyCode(code, phonenumber);
    const { isCodeVerified } = this.props;
    setTimeout(function(){
        if (isCodeVerified == true) {
            OCAlert.alertSuccess("Phone Number Verified.", { timeOut: 3000 });
          }
          else{
            OCAlert.alertSuccess("Verification failed, Resend the code.", { timeOut: 3000 });

          }
     }, 3000);

     this.setState({verifying: false})

  };
  showNumberError = (e) =>{
      e.preventDefault();
    OCAlert.alertError("Send Verification First", { timeOut: 3000 });

  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
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
                    <input
                      id="verify-number"
                      name="code"
                      style={{ color: "white" }}
                      className="form-control-line form-control-white"
                      type="number"
                      onChange={(e) => this.handleChange(e)}
                      min="0"
                      max="6"
                    />
                  </div>
                  <div className="">
                    {this.state.verifying == true ? 
                     <button
                     id="submit-num"
                     className="btn btn-white btn-round form-success-gone float-left"
                     name="submit_num"
                     onClick={(e) => this.verifyCode(e)}
                   >
                     Verifying...
                 </button>:
                    <button
                      id="submit-num"
                      className="btn btn-white btn-round form-success-gone float-left"
                      name="submit_num"
                      onClick={(e) => this.verifyCode(e)}
                    >
                      Verify Code
                  </button>}
                  {this.state.resendingCode ?
                    <button
                    id="submit-num"
                    className="btn btn-white btn-round form-success-gone float-right"
                    name="submit_num"
                  
                  >
                    Resending...
                  </button>:
                    <button
                      id="submit-num"
                      className="btn btn-white btn-round form-success-gone float-right"
                      name="submit_num"
                      onClick={(e) =>
                        this.sendCodeRequest(e, this.state.phonenumber)
                      }
                    >
                      Resend Code
                    </button>}
                  </div>{" "}
                </div>
              </form>
              <div className="" style={{ height: "200px", display: "block" }}>
              </div>
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
  isReqSent:state.customer.isReqSent
});
export default connect(mapStateToProps, {
  verifyCode,  sendCodeRequest
})(VerifyCode);
