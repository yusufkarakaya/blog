import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "../components/About";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Login from "../components/Login";
import Admin from "./Admin";
import Register from "../components/Register";
import PrivateRoutes from "../utils/PrivateRoutes";

class Pages extends Component {
  constructor() {
    super();
    this.state = {
      singin: "",
      isSignedIn: false,
    };
  }

  onRouteChange = (route) => {
    if (route === "admin") {
      this.setState({ isSignedIn: true });
    } else if (route === "signout") {
      this.setState({ isSignedIn: false });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<Admin />} exact />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />

        <Route
          path="/login"
          element={
            <Login
              onRouteChange={this.onRouteChange}
              isSignedIn={this.state.isSignedIn}
            />
          }
        />
      </Routes>
    );
  }
}

export default Pages;
