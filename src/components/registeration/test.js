import React, { Component } from 'react';
import '../../App.css';
import scrollToComponent from 'react-scroll-to-component';
 
class Test extends React.Component {
 
  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
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
   <main className="page-main page-fullpage main-anim">
        <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>Go To Violet</button>
          <button onClick={() => scrollToComponent(this.Indigo, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>Go To Indigo</button>
          <button onClick={() => scrollToComponent(this.Blue, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>Go To Blue</button>
          <button onClick={() => scrollToComponent(this.Green, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>Go To Green</button>
          <button onClick={() => scrollToComponent(this.Yellow, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Go To Yellow</button>
          <button onClick={() => scrollToComponent(this.Orange, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>Go To Orange</button>
          <button onClick={() => scrollToComponent(this.Red, { offset: 0, align: 'top', duration: 500})}>Go To Red</button>
        <section className='violet'style={{height:'600px'}} ref={(section) => { this.Violet = section; }}>Violet</section>
        <section className='indigo'style={{height:'600px'}} ref={(section) => { this.Indigo = section; }}>Indigo</section>
        <section className='blue' style={{height:'600px'}} ref={(section) => { this.Blue = section; }}>
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
                        {this.props.isCodeVerified ? (
                          <>
                            {/* checks if customer exists then the button will update the customer */}
                            {this.state.isUpdate ? (
                              // if customer exists then update customer
                              <button
                                id="submit-num"
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
                                className="btn btn-white btn-round form-success-gone btn-full"
                                name="submit_num"
                                onClick={(e) => this.SaveCustomer(e)}
                              >
                                Sign Up for fun
                              </button>
                            )}
                          </>
                        ) : (
                          //if customer does not verified number then show disabled button
                          <button
                            id="submit-num"
                            className="btn btn-white btn-round form-success-gone btn-full disabled"
                            name="submit_num"
                            onClick={(e) => this.showVerificationError(e)}
                          >
                            Sign Up for fun
                          </button>
                        )}
                      </div>{" "}
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className='green'style={{height:'600px'}} ref={(section) => { this.Green = section; }}>Green</section>
        <section className='yellow' ref={(section) => { this.Yellow = section; }}>Yellow</section>
        <section className='orange' ref={(section) => { this.Orange = section; }}>Orange</section>
        <section className='red' ref={(section) => { this.Red = section; }}>Red</section>
        <b>Inspired By <a href="https://hopechen1028.github.io/hopechen.me/" target="_blank">Hope</a> with Love and Peace</b>
      </main>
    
    </div>
    )
  }
}
 
export default Test;