import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logo from '../../img/visma-logo.png';
export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header
          className="navbar navbar-default navbar-custom"
          id="nc4navTopMain"
          role="navigation"
        >
          <div className="navbar-header navbar-header-border d-flex flex-column d-md-flex flex-md-row justify-content-md-between align-items-xs-center">
            <div className="navbar-brand">
              <Link to="/" role="button" aria-label="Kudos Shop" className="d-flex align-items-center">
                <img src={logo} alt="Logo" width="70px" className="logo" />
                <span className="logo__title">Kudos Shop</span>
              </Link>
            </div>
            <nav className="collapse navbar-collapse d-md-flex d-flex justify-content-center justify-content-md-end flex-xs-row" aria-label="Menu" >
              <ul className="nav navbar-nav nav-tabs first-level  d-flex flex-column d-xs-flex flex-xs-row d-sm-flex" role="menubar">
                <li>
                  <Link
                    className="nav-item fl-menu-item"
                    to="/"
                    role="menuitem"
                    aria-selected="false"
                  >
                    Home
                  </Link>
                </li>
                <li className="second-level-children">
                  <Link
                    className="nav-item fl-menu-item has-children"
                    to="/shop"
                    role="menuitem"
                    aria-selected="true"
                  >
                    Shop
                  </Link>
                </li>
                <li className="second-level-children">
                  <Link
                    className="nav-item fl-menu-item has-children"
                    to="/adminlog"
                    role="menuitem"
                    aria-selected="true"
                  >
                    Admin's History Log
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
