import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/registeration/Register";
import VerifyCode from "./components/registeration/VerifyCode";
import OtherInfo from "./components/registeration/OtherInfo";
import Personal_Name from "./components/registeration/Personal_Name";
import Personal_Dob from "./components/registeration/Personal_Dob";
import Personal_Address from "./components/registeration/Personal_Address";
import MyOrder from "./components/myorder/MyOrder";
import Team from "./components/team/Team";
import Store from "./components/store/Store";
import Point from "./components/point/Point";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/login`} component={Login} />
          <Route exact path={`/register`} component={Register} />
          <Route exact path={`/VerifyCode`} component={VerifyCode} />
          <Route exact path={`/otherinformation`} component={OtherInfo} />
          <Route exact path={`/personalname`} component={Personal_Name} />
          <Route exact path={`/personaldob`} component={Personal_Dob} />
          <Route exact path={`/personaladdress`} component={Personal_Address} />
          <Route exact path={`/myorder`} component={MyOrder} />
          <Route exact path={`/team`} component={Team} />
          <Route exact path={`/store`} component={Store} />
          <Route exact path={`/point`} component={Point} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
