import React from "react";
import LandingPage from "./LandingPage";
import SignUps from "./sources/sports/SignUps";
import NotFound from "./NotFound";
// import Login from "./Login";
// import withAuth from "./withAuth";
// import Verified from "./verified";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/" exact component={LandingPage} />
    //       <Route path="/signup" component={withAuth(SignUps)} />
    //       <Route path="/login" component={Login} />
    //       <Route path="/verified" component={Verified} />
    //       <Route path="*" component={NotFound} />
    //     </Switch>
    //   </div>
    // </Router>
    <div>
      <Router>
        <div className="app">
          <Route exact path="/" component={LandingPage} />
          <Navbar />
          <div className="container" id="back-end-container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={SignUps} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
