import React from "react";
import "./static/App.css";
import Header from "./sources/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./sources/Home";
import Contact from "./sources/Contact";
import Footer from "./sources/Footer";
import SignUps from "./sources/sports/SignUps";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
      <Footer />
      <SignUps />
    </div>
  );
}

export default App;
