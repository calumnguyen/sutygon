import React from "react";
import HeaderComponentHome from "../header/headerhome";

function Register() {
  return (
    <React.Fragment>
      <HeaderComponentHome />

      <section
        data-aos="zoom-in"
        className="contact-container"
        name="contact"
        id="contact"
      >
        <h1>Register</h1>
      </section>
    </React.Fragment>
  );
}

export default Register;
