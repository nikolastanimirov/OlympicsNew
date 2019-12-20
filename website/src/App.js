import React from "react";
import "./static/App.css";
import Header from "./sources/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./sources/Carousel";
import Home from "./sources/Home";
import Contact from "./sources/Contact";
import Footer from "./sources/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
