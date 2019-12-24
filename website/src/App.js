import React from "react";
import LandingPage from "./LandingPage";
import SignUps from "./sources/sports/SignUps";
import NotFound from "./NotFound";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" component={SignUps} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
