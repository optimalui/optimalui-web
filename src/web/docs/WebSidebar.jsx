import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const WebSidebar = () => (
    <div className="tm-sidebar-left uk-visible@m">
        <h3>Documentation</h3>
        <ul className="uk-nav uk-nav-default tm-nav">
            <li className="uk-nav-header">Getting started</li>
            <li className=""><Link to="/docs/introduction">Introduction</Link></li>

        </ul>
        <ul className="uk-nav uk-nav-default tm-nav uk-margin-top">
            <li className="uk-nav-header">Components</li>
            <li className=""><Link to="/docs/button">Button</Link></li>
            <li className=""><Link to="/docs/menu">Menu</Link></li>
        </ul>
    </div>
)