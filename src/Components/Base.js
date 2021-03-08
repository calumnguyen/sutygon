import React,{ useState,useEffect} from "react";
import Nav from "./nav";
import Contact from "./contact";
import Home from "./home";
import Test from "./Test";
import Product from "./skills";
import About from "./about";
import HeaderComponentHome from "./header/headerhome";
import WalkthroughOverlayContainer from "./misc/WalkthroughOverlayContainer"
import "bootstrap/dist/css/bootstrap.min.css";
import PageLoader from "./misc/pageloader"

import "../index.css";
import "../main.css";

function Base() {
  const [loader,setLoader] = useState(true);
  useEffect(() => {
    setTimeout(function() {
      setLoader(false)     
  }, 5000)
  }, []);
  return (
    <div className="main-container">
      <WalkthroughOverlayContainer />
      {loader &&  <PageLoader />}

      <HeaderComponentHome />
      {/* <Nav /> */}
      <Home />
      <About />
      <Product />
      {/* <Register /> */}
      <Contact />
      <Test />
    </div>
  );
}

export default Base;
