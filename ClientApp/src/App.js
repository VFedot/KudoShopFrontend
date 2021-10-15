import React, { Component } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {Routes} from './navigation';
import {history} from './navigation/history';
import "./custom.scss";

export default class App extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Routes />
        </Router>
      </>
    );
  }
}
