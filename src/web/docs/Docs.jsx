/* eslint-disable */
import React, { Component } from 'react';
import { WebHeader } from './WebHeader';
import { WebSidebar } from './WebSidebar';
import DocContent from './DocContent';
import { Footer } from '../Footer';


export const Docs = () => (
    <div className="uk-section-primary uk-preserve-color">
        <WebHeader/>
        <WebSidebar/>
        <DocContent/>
        <Footer/>
    </div>
)
