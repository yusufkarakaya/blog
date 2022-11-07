import "./App.css";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="w-2/3">
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
