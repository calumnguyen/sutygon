import './App.css';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MyOrder from "./components/myorder/MyOrder";
import Team from "./components/team/Team";
import Store from "./components/store/Store";
import Point from "./components/point/Point";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{textAlign: 'left'}}>

      <BrowserRouter basename={'/'}>
        <Switch>

          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/login'} component={Login}/>
          <Route exact path={'/myorder'} component={MyOrder}/>
          <Route exact path={'/team'} component={Team}/>
          <Route exact path={'/store'} component={Store}/>
          <Route exact path={'/point'} component={Point}/>

          {/*<Route exact path={`${process.env.PUBLIC_URL}/point`} component={Point}/>*/}

        </Switch>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
