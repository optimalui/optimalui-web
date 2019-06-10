/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TabStrip,Tab } from '../../components/layout';
import MarkupButtons from './MarkupButtons';


export const TabStripDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>TabStrip</h1>
        <TabStrip selected={2}>
            <Tab title="Deneme">
            </Tab>
            <Tab title="Deneme">
            </Tab>
            <Tab title="Deneme">
            </Tab>
        </TabStrip>
    </div>
)