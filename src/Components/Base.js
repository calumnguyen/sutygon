import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import scrollToComponent from 'react-scroll-to-component';
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
// import Test from "./Test";
import Product from "./pages/Product/product";
import Register_Home from "./pages/Register/register_home";
import About from "./pages/About/about";
import HeaderComponentHome from "./header/headerhome";
import NavbarRightbar from "./navbar/nav";
import WalkthroughOverlayContainer from "./misc/WalkthroughOverlayContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLoader from "./misc/pageloader";
import { animateScroll as scroll, Link } from "react-scroll";

import "../index.css";
import "../main.css";

function Base() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 2200);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <main id="mainpage">
        
        <div className="main-container">
       
          <WalkthroughOverlayContainer />
          {loader && <PageLoader />}
          <Home/>
          <About />
          <Product />
          <Register_Home />
          <Contact />

        </div>
      </main>
    </div>
  );
}

export default Base;
