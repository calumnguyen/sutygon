import React, { useEffect } from "react";
import Base from "../Components/Base";
import Register from "../Components/pages/Register/register";
import Login from "../Components/pages/Login/login";
import MyOrder from "../Components/pages/MyOrder/myorder";
import About from "../Components/pages/About/about";
import Point from "../Components/pages/Point/point";
import Store from "../Components/pages/Store.js/store";
import Team from "../Components/pages/Team/team";
import Contact from "../Components/pages/Contact/contact";
import Verification from "../Components/pages/Register/verifycode";
import PersonalForm1 from "../Components/pages/Register/personalform1";
import PersonalForm2 from "../Components/pages/Register/personalform2";
import PersonalForm3 from "../Components/pages/Register/personalform3";
import OtherInfo from "../Components/pages/Register/otherinfo";

// Redux
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./../store";
import Aos from "aos";
import "aos/dist/aos.css";
import "../index.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);
  return (
    <Provider store={store}>
    <Router >
    <div className="main-container">
      <div className="page-cover">
        <div className="cover-bg bg-img"></div>
        <div className="cover-bg-mask bg-color"></div>
      </div>
      <Switch>
        <Route path="/" component={Base} exact />
        <Route path="/home" component={Base} exact />
        <Route path="/about" component={About} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/verification" component={Verification} exact />
        <Route path="/personalinfo" component={PersonalForm1} exact />
        <Route path="/personalinfo2" component={PersonalForm2} exact />
        <Route path="/personalinfo3" component={PersonalForm3} exact />
        <Route path="/otherinfo" component={OtherInfo} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/store" component={Store} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/point" component={Point} exact />
        <Route path="/myorder" component={MyOrder} exact />
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default Main;
