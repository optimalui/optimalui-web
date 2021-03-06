/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const WebSidebar = () => (
    <div className="tm-sidebar-left uk-visible@m">
       <h3>Documentation</h3>
        <ul className="uk-nav uk-nav-default tm-nav">
            <li class="uk-nav-header">Getting started</li>
            <li className=""><Link to="/">Introduction</Link></li>
       </ul>
        <div className="uk-nav uk-nav-default tm-nav uk-margin-top">
            <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true">
                <li class="uk-nav-header">Components</li>
                <li className="uk-parent">
                    <Link to="/docs/buttons">Buttons</Link>
                    <ul className="uk-nav-sub">
                        <li><Link to="/docs/buttons/button">Button</Link></li>
                        <li><Link to="/docs/buttons/button-group">ButtonGroup</Link></li>
                        <li><Link to="/docs/buttons/dropdown-button">DropDownButton</Link></li>
                    </ul>
                </li>
                <li className="uk-parent">
                    <Link to="/docs/layout">Layout</Link>
                    <ul className="uk-nav-sub">
                        <li><Link to="/docs/layout/grid">Grid</Link></li>
                        <li><Link to="/docs/layout/menu">Menu</Link></li>
                        <li><Link to="/docs/layout/toolbar">Toolbar</Link></li>
                        <li><Link to="/docs/layout/offcanvas">OffCanvas</Link></li>
                        <li><Link to="/docs/layout/tabstrip">TabStrip</Link></li>
                        <li><Link to="/docs/layout/margin">Margin</Link></li>
                    </ul>
                </li>
                <li className="uk-parent">
                    <Link to="/docs/inputs">Inputs</Link>
                    <ul className="uk-nav-sub">
                        <li><Link to="/docs/inputs/input">Input</Link></li>
                        <li><Link to="/docs/inputs/checkbox">Checkbox</Link></li>
                        <li><Link to="/docs/inputs/radio">Radio</Link></li>
                        <li><Link to="/docs/inputs/select">Select</Link></li>
                    </ul>
                </li>
                <li><Link to="/docs/icon">Icon</Link></li>
                <li><Link to="/docs/card">Card</Link></li>
                <li><Link to="/docs/avatar">Avatar</Link></li>
            </ul>
        </div>
    </div>
)