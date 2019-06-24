/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Menu,TabStrip,Tab,TabItem, MenuItem} from '../../components/layout';
import MarkupButtons from './MarkupButtons';

const usageSource = `
`;

const items = [{
    "text": "Item1",
    "items": [{ "text": "Item1.1" }, { "text": "Item1.2", "items": [{ "text": "Item1.2.1" }, { "text": "Item1.2.2" }] }]
}, {
    "text": "Item2",
    "items": [{ "text": "Item2.1" }, { "text": "Item2.2" }, { "text": "Item2.3" }]
}, {
    "text": "Item3"
}]

export const MenuDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Menu</h1>
        <p className="uk-text-lead">The Optimal UI Menu is a multi-level component for displaying hierarchical data.</p>

        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/layout</code> module to use Menu component.</p>
        <TabStrip>
            <Tab title="Preview">
                <div style={{ height: '400px' }}>
                    <Menu>
                        <MenuItem text="items" parent>
                            <MenuItem text="item-1" />
                            <MenuItem text="item-2" />
                            <MenuItem text="item-3" />
                            <MenuItem text="item-4" />
                        </MenuItem>
                    </Menu>
                </div>

            </Tab>
            <Tab title="Markup">
                <SyntaxHighlighter language='javascript' style={docco}>{usageSource}</SyntaxHighlighter>
            </Tab>
        </TabStrip>
        <MarkupButtons codeText={usageSource} />




    </div>

)