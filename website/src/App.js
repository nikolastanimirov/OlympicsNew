import React from "react";
import LandingPage from "./LandingPage";
import NotFound from "./NotFound";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Sports from "./sources/sports/Sports";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <Route exact path="/" component={LandingPage} />
          <Navbar />
          <div className="container" id="back-end-container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Sports} />
          </div>
          {/* <Route exact path="*" component={NotFound} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
