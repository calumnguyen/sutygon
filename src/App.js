import './App.css';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MyOrder from "./components/myorder/MyOrder";
import Team from "./components/team/Team";
import Store from "./components/store/Store";
import Point from "./components/point/Point";
import { BrowserRouter, Route, Switch } from "react-router-dom";
 
// using CommonJS modules
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Switch = require("react-router-dom").Switch;

function App() {
  return (
    <div className="App" style={{textAlign: 'left'}}>

      <BrowserRouter basename={'/'}>
        <Switch>

          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
          <Route exact path={`${process.env.PUBLIC_URL}/myorder`} component={MyOrder}/>
          <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
          <Route exact path={`${process.env.PUBLIC_URL}/store`} component={Store}/>
          <Route exact path={`${process.env.PUBLIC_URL}/point`} component={Point}/>

        </Switch>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
