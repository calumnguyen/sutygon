import React, { Component } from 'react';
import '../../App.css';
import ReactFlagsSelect from "react-flags-select";
import scrollToComponent from 'react-scroll-to-component';
import VerifyCode from "./VerifyCode";

class Test extends React.Component {
 
  state={show:false}
  componentDidMount() {
    scrollToComponent(this.Violet, { offset: 0, align: 'bottom', duration: 500, ease:'inCirc'});
  }
 onClickYellow = () =>{
   this.setState({show:true}); 
  scrollToComponent(this.Yellow, { offset: -10, align: 'middle', duration: 500, ease:'inExpo'})
 }
  render() {
    return (
        <div>

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
      <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>Go To Violet</button>
          <button onClick={() => scrollToComponent(this.Indigo, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>Go To Indigo</button>
          <button onClick={() => scrollToComponent(this.Blue, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>Go To Blue</button>
          <button onClick={() => scrollToComponent(this.Green, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>Go To Green</button>
          <button onClick={() => scrollToComponent(this.Yellow, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Go To Yellow</button>
          <button onClick={() => scrollToComponent(this.Orange, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>Go To Orange</button>
          <button onClick={() => scrollToComponent(this.Red, { offset: 0, align: 'top', duration: 500})}>Go To Red</button>
     
   <main className="page-main page-fullpage main-anim">
           <section className=''style={{height:'600px'}} ref={(section) => { this.Violet = section; }}>
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
                      // onSubmit={(e) =>
                      //   this.sendCodeRequest(e, this.state.contact)
                      // }
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
                                maxlength={11}
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
                          <button onClick={() => scrollToComponent(this.Indigo, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>Go To Indigo</button>

                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
           </section>
        <section className='indigo'style={{height:'600px'}} ref={(section) => { this.Indigo = section; }}><VerifyCode phonenumber={"0987654321"} /></section>
        <section className='' style={{height:'600px'}} ref={(section) => { this.Blue = section; }}>
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
                            // value={fullname}
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
        </section>
        <section className='green'style={{height:'600px'}} ref={(section) => { this.Green = section; }}>Green</section>
        <section className='yellow' ref={(section) => { this.Yellow = section; }}>    
</section>
        <section className='orange' ref={(section) => { this.Orange = section; }}>Orange</section>
        <section className='red' ref={(section) => { this.Red = section; }}> <div className="section-wrapper">
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
                            // value={email}
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
                            // value={company_name}
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
                            // value={company_address}
                          />
                        </div>
                        {/*checks if phone number is verified */}
                        <button type="button" onClick={() => this.onClickYellow()}>Go To Yellow</button>

                      </div>{" "}
                    </form>
                  </div>
                </div>
              </div>
            </div></section>
      </main>
    
    </div>
    )
  }
}
 
export default Test;