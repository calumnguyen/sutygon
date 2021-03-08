import React from 'react';
import {Link} from "react-router-dom"
import "aos/dist/aos.css";
import '../index.css'

function Test() {
 
    return (
      <section
      data-aos="zoom-in"
      className="contact-container"
      name="test"
      id="test"
    >
      <div >
        <Link to="/test">Click me</Link>
        <br />
        <Link to="/home">Back</Link>

        <h1>Test</h1>
      </div>
      </section>
    );
  }
  
  export default Test;
  