import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Registeration from "./components/Registeration";
import About from "./components/About";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="left-navbar">
          <Link className="logo" to="/">
            Kalvium❤️
          </Link>
        </div>
        <div className="right-navbar">
          <Link to="/about">About</Link>

          <Link to="/Registeration">Registeration</Link>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/Registeration" element={<Registeration />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;