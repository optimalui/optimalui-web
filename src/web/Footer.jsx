import React from "react";
import styles from "../assets/css/footer.module.css";
import cx from "classnames";
import { Link } from "react-router-dom";

var dt = new Date().getFullYear();

export const Footer = () => (
  <footer
    className={cx(
      "uk-margin-top uk-navbar-container tm-navbar-container uk-sticky uk-active uk-sticky-below uk-sticky-fixed uk-align-center",
      styles.footer
    )}
    uk-sticky
  >
      <nav className="uk-navbar-center">
        <ul className="uk-navbar-nav uk-navbar-center uk-navbar-transparent">
          <li>&copy; {dt}</li>
          <li><a href="http://tcetin.net" target="__blank ">tcetin.net</a></li>
        </ul>
      </nav>
  </footer>
);
