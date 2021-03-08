import React,{useState,useEffect} from "react";
import HeaderComponentHome from "./header/headerhome";
import PageLoader from "./misc/pageloader"

import "../index.css";


const Contact = () => {
  const [loader,setLoader] = useState(true);
  useEffect(() => {
    setTimeout(function() {
      setLoader(false)     
  }, 3000)
  }, []);
  return (
    <React.Fragment>
      <HeaderComponentHome />
      {loader &&  <PageLoader />}

    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >
<h1>Contact</h1>
    </section>
    </React.Fragment>
  );
};

export default Contact;
