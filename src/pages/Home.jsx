import React, { Component } from "react";

import Navigation from "../components/Navigation";
import About from "../components/About";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation title={"about"} />
        <About />
      </div>
    );
  }
}
export default Home;
