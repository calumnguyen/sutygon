import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MyOrder from "./components/myorder/MyOrder";
import Team from "./components/team/Team";
import Store from "./components/store/Store";
import Point from "./components/point/Point";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {  } from "module";


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


      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
