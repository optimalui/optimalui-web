/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Menu,TabStrip,Tab,TabItem, MenuItem} from '../../components/layout';
import MarkupButtons from './MarkupButtons';
import menuItems from './menuItems.json'
import _ from 'lodash'

const menuUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu,MenuItem } from '@optimalui/components/layout'
import menuItems from './menuItems.json'

class App extends React.Component {
    render() { 
        return (
            <Menu items={menuItems}/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const menuItemsSource = `
    [{
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
    }]`

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

const clickModeSource = `
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
                <Menu items={items} mode="click"/>
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

const menuItemsUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu,MenuItem } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Menu>
                <MenuItem text="Item1" />
                <MenuItem text="Item2" parent>
                    <MenuItem text="Item2.1" />
                    <MenuItem text="Item2.2" />
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

const itemUrl = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu,MenuItem } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Menu>
                <MenuItem text="Google" url="www.google.com" urlTarget="_blank"/>
                <MenuItem text="Social" parent>
                    <MenuItem text="Twitter" url="twitter.com" urlTarget="_blank" />
                    <MenuItem text="Facebook" url="www.facebook.com" urlTarget="_blank" />
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

const iconItems = [{
    text: 'Social',
    icon: 'social',
    items: [{ text: 'Facebook', icon: 'facebook', url: "facebook.com", urlTarget: "_blank" },
    { text: 'Twitter', icon: 'twitter', url: "twitter.com", urlTarget: "_blank" },
    { text: 'Instagram', icon: 'instagram', url: "instagram.com", urlTarget: "_blank" },
    { text: 'Linkedin', icon: 'linkedin', url: "linkedin.com", urlTarget: "_blank" },
    { text: 'Pinterest', icon: 'pinterest', url: "pinterest.com", urlTarget: "_blank" }]
},
{
    text:"Video",
    icon:"video-camera",
    items: [{ text: 'Youtube', icon: 'youtube', url: "youtube.com", urlTarget: "_blank" },
    { text: 'Vimeo', icon: 'vimeo', url: "vimeo.com", urlTarget: "_blank" }]
}]



export const MenuDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Menu</h1>
        <p className="uk-text-lead">The React OptimalUI  Menu is a multi-level component for displaying hierarchical data.</p>

        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>
        Import <code>@optimalui/components/layout</code> module to use <code>Menu</code> component. 
        </p>
        <p>You can describe the <code>Menu</code> items with <code>items</code> prop or <code>MenuItem</code> component.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Menu items={menuItems} />
                </Tab>
                <Tab title="Markup">
                    <TabStrip>
                        <Tab title="App.jsx" style={{ textTransform: 'none' }}>
                            <div className="uk-position-relative uk-margin-medium">
                                <SyntaxHighlighter language='javascript' style={docco}>{menuUsage}</SyntaxHighlighter>
                                <MarkupButtons codeText={menuUsage} />
                            </div>

                        </Tab>
                        <Tab title="menuItems.json" style={{ textTransform: 'none' }}>
                            <div className="uk-position-relative uk-margin-medium">
                                <SyntaxHighlighter language='javascript' style={docco}>{menuItemsSource}</SyntaxHighlighter>
                                <MarkupButtons codeText={menuItemsSource} />
                            </div>
                        </Tab>
                    </TabStrip>

                </Tab>
            </TabStrip>
        </div>

        {/** DATA BINDING */}
        <h2 id="databinding" className="uk-h3 tm-heading-fragment"><a href="#databinding">Data Binding</a></h2>
        <p>
            The desired number of menu items can be created with local or remote data.
            To do this, the <code>Menu</code> component's <code>items</code> prop should be set to the local or remote data as an array object.
        </p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Menu items={items} />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{dataBindingSource}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={dataBindingSource} />
        </div>

        {/** Click Mode */}
        <h2 id="mode" className="uk-h3 tm-heading-fragment"><a href="#mode">Click Mode</a></h2>
        <p>
        The <code>Menu</code> component's menu items can be shown by hovering and clicking the toggle. 
        Add the <code>mode="click"</code> prop to enable click mode.
        </p>
        <div>
        <TabStrip>
            <Tab title="Preview">
                <Menu items={items} mode="click"/>
            </Tab> 
            <Tab title="Markup">
                <SyntaxHighlighter language='javascript' style={docco}>{clickModeSource}</SyntaxHighlighter>
            </Tab>
        </TabStrip>
        <MarkupButtons codeText={clickModeSource} /> 
        </div>
        {/** Items */}
        <h2 id="items" className="uk-h3 tm-heading-fragment"><a href="#items">Items</a></h2>
        <p>You can set also <code>MenuItem</code> components inside <code>Menu</code> component to create custom nested menu items.</p>
        <p>Set <code>text</code> prop to create menu item text. 
        You can create nested menu items inside <code>MenuItem</code> component by setting <code>parent</code> prop as <code>true</code>.
        </p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Menu>
                        <MenuItem text="Item1" />
                        <MenuItem text="Item2" parent>
                            <MenuItem text="Item2.1" />
                            <MenuItem text="Item2.2" />
                        </MenuItem>
                    </Menu>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{menuItemsUsage}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={menuItemsUsage} />
        </div>
        {/** URL */}
        <h2 id="url" className="uk-h3 tm-heading-fragment"><a href="#url">Url</a></h2>
        <p>
        You can set the url of the items by using the <code>url</code> prop. 
        The url will be rendered as a href attribute on the item link.
        </p>
        <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
                <Tab title="Preview">
                    <Menu>
                        <MenuItem text="Google" url="www.google.com" urlTarget="_blank"/>
                        <MenuItem text="Social" parent>
                            <MenuItem text="Twitter" url="twitter.com" urlTarget="_blank" />
                            <MenuItem text="Facebook" url="www.facebook.com" urlTarget="_blank" />
                        </MenuItem>
                    </Menu>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{itemUrl}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={itemUrl} />
        </div>

        <h2 id="icon" className="uk-h3 tm-heading-fragment"><a href="#url">Icon</a></h2>
        <p>
        You can set the url of the items by using the <code>url</code> prop. 
        The url will be rendered as a href attribute on the item link.
        </p>
        <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
                <Tab title="Preview">
                    <Menu items={iconItems}/>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{itemUrl}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={itemUrl} />
        </div>


        <p>The <code>MenuItem</code> component has the following props:</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">Prop</th>
                        <th align="left">PropType</th>
                        <th align="left">Required</th>
                        <th align="left">Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>text</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>yes</code></td>
                        <td align="left"><code>null</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>parent</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>className</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`''`}</code></td>
                    </tr>
                
                </tbody>
            </table>
        </div>



    </div>

)