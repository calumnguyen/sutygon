import React, { useEffect } from "react";
import Base from "../Components/Base";
import Register from "../Components/register/register";
import Contact from "../Components/contact";
import Test from "../Components/Test";
import { Route, Switch } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../index.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);
  return (
    <div className="main-container">
       <div className="page-cover">
          <div
            className="cover-bg bg-img"
          ></div>
          <div
            className="cover-bg-mask bg-color"
          ></div>
        </div>
      <Switch>
        <Route path="/" component={Base} exact />
        <Route path="/home" component={Base} exact />
        <Route path="/test" component={Test} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </div>
  );
}

export default Main;
