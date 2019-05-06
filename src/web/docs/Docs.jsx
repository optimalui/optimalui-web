/* eslint-disable */
import React, { Component } from 'react';
import { WebHeader } from './WebHeader';
import { WebSidebar } from './WebSidebar';
import DocContent from './DocContent';


export const Docs = () => (
    <div>
        <WebHeader/>
        <WebSidebar/>
        <DocContent/>
    </div>
)
