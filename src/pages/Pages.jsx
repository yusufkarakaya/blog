import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "../components/About";
import Blog from "./Blog";
import Portfolio from "./Portfolio";

class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    );
  }
}

export default Pages;
