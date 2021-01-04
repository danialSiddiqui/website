import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link , withRouter
} from "react-router-dom";

function Admissions() {
  return (
   <div><Router>  <Switch>
          <Route exact path="/Admissions">
            <Home />
          </Route>
          <Route exact  path="/Admission/Index">
            <Test />
          </Route>
          <Route exact  path="/dashboard" >
            <Dashboard />
          </Route>
        </Switch>  </Router></div>
  );
}

function Home() {
  return (
    <div>
      <h2>test</h2>
    </div>
  );
}


function Test() {
  return (
    <div>
      <h2>test</h2>
    </div>
  );
}

export default  Admissions;
