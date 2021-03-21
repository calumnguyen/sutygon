import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Product from "./pages/Product/product";
import Register_Home from "./pages/Register/register_home";
import About from "./pages/About/about";
import WalkthroughOverlayContainer from "./misc/WalkthroughOverlayContainer";
import PageLoader from "./misc/pageloader";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../main.css";

function Base() {
  const [loader, setLoader] = useState(true);
  const [about, setAbout] = useState(false);
  useEffect(() => {
    window.scrollTo(0,0);
    setTimeout(function () {
      setLoader(false);
    }, 2200);
    const home = document.querySelector("#nav-home");
    home && home.classList.add("active");

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
          <Home tabindex="0"/>
          <About tabindex="0"/>
          <Product tabindex="0"/>
          <Register_Home tabindex="0"/>
          <Contact tabindex="0"/>
        </div>
      </main>
    </div>
  );
}

export default Base;
