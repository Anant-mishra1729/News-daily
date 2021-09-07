import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newscarousle from "./components/Newscarousle";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="News Daily" />
        <Newscarousle />
        {/* <News /> */}
      </div>
    );
  }
}
