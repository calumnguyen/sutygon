import './App.css';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/registeration/Register";
import VerifyCode from "./components/registeration/VerifyCode";
import Test from "./components/registeration/test";
import OtherInfo from "./components/registeration/OtherInfo";
import Personal_Name from "./components/registeration/Personal_Name";
import Personal_Dob from "./components/registeration/Personal_Dob";
import Personal_Address from "./components/registeration/Personal_Address";
import MyOrder from "./components/myorder/MyOrder";
import Team from "./components/team/Team";
import Store from "./components/store/Store";
import Point from "./components/point/Point";
import { BrowserRouter, Route, Switch } from "react-router-dom";
 // Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App" style={{textAlign: 'left'}}>
 <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
          <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
          <Route exact path={`${process.env.PUBLIC_URL}/VerifyCode`} component={VerifyCode}/>
          <Route exact path={`${process.env.PUBLIC_URL}/otherinformation`} component={OtherInfo}/>
          <Route exact path={`${process.env.PUBLIC_URL}/personalname`} component={Personal_Name}/>
          <Route exact path={`${process.env.PUBLIC_URL}/personaldob`} component={Personal_Dob}/>
          <Route exact path={`${process.env.PUBLIC_URL}/personaladdress`} component={Personal_Address}/>
          <Route exact path={`${process.env.PUBLIC_URL}/myorder`} component={MyOrder}/>
          <Route exact path={`${process.env.PUBLIC_URL}/test`} component={Test}/>
          <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
          <Route exact path={`${process.env.PUBLIC_URL}/store`} component={Store}/>
          <Route exact path={`${process.env.PUBLIC_URL}/point`} component={Point}/>

        </Switch>
      </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
