import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import About from '../pages/About/About';
import CostAccounting from '../pages/СostAccounting/СostAccounting';
import CADetails from '../pages/СostAccounting/CADetails';
import LogIn from '../pages/Authentication/LogIn';
import NotFound from '../pages/NotFound/NotFound';
import Diagram from '../pages/Diagram/Diagram';
import LineChartCA from '../pages/LineChart/LineChart';
import Home from '../pages/Home/Home';
import PrivateRoute from './PrivateRoute';


const Main = () => {
  return (
  <main className="text-center col-10">
      <Switch>
          <Redirect exact from="/" to="/Home"/>
          <Route path="/Home" component={Home} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/About" component={About} />

          <PrivateRoute path="/CostAccounting/:id" component={() => <CADetails/>} />
          <PrivateRoute path="/CostAccounting" component={()=> <CostAccounting/>} />
          <PrivateRoute path="/IncomeDiagram" component={()=> <Diagram income={true} />} />
          <PrivateRoute path="/СostDiagram" component={() => <Diagram income={false}/>} />
          <PrivateRoute path="/LineChart" component={() => <LineChartCA/>} />

          <Route path="" component={NotFound} />
      </Switch>
    </main>
  );
};

export default Main;
