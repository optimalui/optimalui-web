/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Menu,TabStrip,Tab,TabItem, MenuItem} from '../../components/layout';
import MarkupButtons from './MarkupButtons';
import _ from 'lodash'

const menuUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu,MenuItem } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Menu>
                <MenuItem text="Item1"/>
                <MenuItem text="Item2"/>
                <MenuItem text="Item3" parent>
                    <MenuItem text="item3.1"/>
                    <MenuItem text="item3.2"/>
                    <MenuItem text="item3.3"/>
                </MenuItem>
            </Menu>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const dataBindingSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 

        const items = [{
                "text": "Item1",
                "items": [
                    { "text": "Item1.1", "items": [{ "text": "Item1.1.0" }] },
                    {
                        "text": "Item1.2",
                        "items": [
                            {
                                "text": "Item1.2.1",
                                "items": [{ "text": "Item1.2.1.1" }]
                            },
                            { "text": "Item1.2.2" }
                        ]
                    }
                ]
            }, 
            {
                "text": "Item2",
                "items": [{ "text": "Item2.1" }, { "text": "Item2.2" }, { "text": "Item2.3" }]
            }, 
            {
                "text": "Item3"
            }]

            return (
                <Menu items={items}/>
            )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const items = [
{
    "text": "Item1",
    "items": [
        { "text": "Item1.1", "items": [{ "text": "Item1.1.0" }] },
        {
            "text": "Item1.2",
            "items": [
                {
                    "text": "Item1.2.1",
                    "items": [{ "text": "Item1.2.1.1" }]
                },
                { "text": "Item1.2.2" }
            ]
        }
    ]
}, 
{
    "text": "Item2",
    "items": [{ "text": "Item2.1" }, { "text": "Item2.2" }, { "text": "Item2.3" }]
}, 
{
    "text": "Item3"
}]



export const MenuDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Menu</h1>
        <p className="uk-text-lead">The React OptimalUI  Menu is a multi-level component for displaying hierarchical data.</p>

        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/layout</code> module to use <code>Menu</code> component. 
        To create menu items, set the <code>MenuItem</code> component as a child of the <code>Menu</code> component.</p>
        <p>To create nested menu items,set <code>parent</code> prop as <code>true</code> from <code>MenuItem</code> 
        and then add nested child menu items to inside of parent <code>MenuItem</code> component.</p>
        <TabStrip>
            <Tab title="Preview">
                        <Menu>
                            <MenuItem text="Item1"/>
                            <MenuItem text="Item2"/>
                            <MenuItem text="Item3" parent>
                                <MenuItem text="item3.1"/>
                                <MenuItem text="item3.2"/>
                                <MenuItem text="item3.3"/>
                            </MenuItem>
                        </Menu>
            </Tab> 
            <Tab title="Markup">
                <SyntaxHighlighter language='javascript' style={docco}>{menuUsage}</SyntaxHighlighter>
            </Tab>
        </TabStrip>
        <MarkupButtons codeText={menuUsage} />

        {/** DATA BINDING */}
        <h2 id="databinding" className="uk-h3 tm-heading-fragment"><a href="#databinding">Data Binding</a></h2>
        <p>
            The desired number of menu items can be created with local or remote data.
            To do this, the <code>Menu</code> component's <code>items</code> prop should be set to the local or remote data as an array object.
        </p>
        <TabStrip>
            <Tab title="Preview">
                    <Menu items={items}/>
            </Tab> 
            <Tab title="Markup">
                <SyntaxHighlighter language='javascript' style={docco}>{dataBindingSource}</SyntaxHighlighter>
            </Tab>
        </TabStrip>
        <MarkupButtons codeText={dataBindingSource} />

        {/** Click Mode */}
        <h2 id="mode" className="uk-h3 tm-heading-fragment"><a href="#mode">Click Mode</a></h2>
        <p>
        The <code>Menu</code> component's menu items can be shown by hovering and clicking the toggle. 
        Add the <code>mode="click"</code> prop to enable click mode.
        </p>
        <TabStrip>
            <Tab title="Preview">
                <div style={{ height: '200px' }}>
                        <Menu items={items} mode="click"/>
                </div>

            </Tab> 
            <Tab title="Markup">
                <SyntaxHighlighter language='javascript' style={docco}>{dataBindingSource}</SyntaxHighlighter>
            </Tab>
        </TabStrip>
        <MarkupButtons codeText={dataBindingSource} />





    </div>

)