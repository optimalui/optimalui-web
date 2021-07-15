/* eslint-disable */
import { Icon } from "optimalui-react";
import React from "react";
import { Link } from "react-router-dom";

export const WebHeader = () => (
  <nav
    uk-sticky="media: 960"
    className="uk-navbar-container tm-navbar-container uk-sticky uk-navbar-transparent uk-navbar"
    uk-navbar=""
  >
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li>
          <Link to="/" style={{ color: "#fff" }}>
            OptimalUI-React
          </Link>
        </li>
      </ul>
    </div>

    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
        <li>
          <a href="https://github.com/optimalui/optimalui-react" target="__blank" style={{ color: "#fff" }}>
            <Icon name="github"/>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
