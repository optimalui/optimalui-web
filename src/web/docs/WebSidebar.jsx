import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const WebSidebar = () => (
    <div className="tm-sidebar-left uk-visible@m">
        <h3>Documentation</h3>
        <ul className="uk-nav uk-nav-default tm-nav">
            <li className="uk-nav-header">Getting started</li>
            <li className=""><Link to="/docs/introduction">Introduction</Link></li>
        </ul>
        <h3>Components</h3>
        <hr/>
        <div className="uk-nav uk-nav-default tm-nav">
            <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true">
               <li className="">
                    <Link to="/docs/button">Buttons</Link>
                </li>
                <li className="uk-parent">
                    <Link to="/docs/layout">Layout</Link>
                    <ul className="uk-nav-sub">
                        <li><Link to="/docs/layout">Overview</Link></li>
                        <li><a>Menu</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
)