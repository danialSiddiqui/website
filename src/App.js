import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link , withRouter
} from "react-router-dom";

function App() {
  return (
   <div> <Router>  <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact  path="/Login">
            <About />
          </Route>
          <Route exact  path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>  </Router></div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
   <h2>Home</h2>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


export default  App;
