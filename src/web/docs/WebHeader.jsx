import React from 'react';

export const WebHeader = () => (
    <nav uk-sticky="media: 960" className="uk-navbar-container tm-navbar-container uk-sticky" uk-navbar="" style={{ background: 'linear-gradient(to left, #28a5f5, #1e87f0)' }}>
        <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
                <li><a href="#">React Optimal UI LOGO</a></li>
            </ul>
        </div>
        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
            <div className="uk-navbar-item uk-visible@m">
                <a href="#download" className="uk-button uk-button-default tm-button-default uk-icon">
                    Get Now
                </a>
            </div>
        </div>
    </nav>
)