import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Product from "./pages/Product/product";
import About from "./pages/About/about";
import WalkthroughOverlayContainer from "./misc/WalkthroughOverlayContainer";
import PageLoader from "./misc/pageloader";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../main.css";

function Base() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 2200);
    const home = document.querySelector("#nav-home");
    home && home.classList.add("active");
   
    window.addEventListener("keydown", function (e) {
      
       if (
        ["Space", "ArrowDown", "ArrowRight", "PageDown"].indexOf(e.code) > -1
      ) {
        e.preventDefault();      }
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <main id="mainpage">

        <div className="main-container">
        <ScrollUpButton />

          <WalkthroughOverlayContainer />
          {loader && <PageLoader />}
          <div id="_home">
            {" "}
            <Home tabindex="0" />
          </div>
          <div id="_about">
            {" "}
            <About tabindex="1" />
          </div>
          <div id="_product">
            {" "}
            <Product tabindex="2" />
          </div>
          <div id="_contact">
            {" "}
            <Contact tabindex="4" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Base;
