/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Menu, TabStrip, Tab, TabItem, MenuItem } from '../../components/layout';
import MarkupButtons from './MarkupButtons';
import menuItems from './menuItems.json'
import { Link, Route, Switch, BrowserRouter as Router, HashRouter } from "react-router-dom";
import MenuRouting from './MenuRouting'
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


const alignmentSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 

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

        return (
            <React.Fragment>
                <p className="uk-text-lead">Left Alignment</p> 
                <Menu items={items} mode="click" alignItems="left" />

                <p className="uk-text-lead">Right Alignment</p> 
                <Menu items={items} mode="click" alignItems="right" />

                <p className="uk-text-lead">Center Alignment</p> 
                <Menu items={items} mode="click" alignItems="center" />
            </React.Fragment>
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

const iconsUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 

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

        return (
            <Menu items={iconItems}/>
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
    text: "Video",
    icon: "video-camera",
    items: [{ text: 'Youtube', icon: 'youtube', url: "youtube.com", urlTarget: "_blank" },
    { text: 'Vimeo', icon: 'vimeo', url: "vimeo.com", urlTarget: "_blank" }]
}]

const disabledItems = [
    { text: 'Item1', disabled: true, items: [{ text: 'Item1.1' }] },
    { text: 'Item2', disabled: true }
];

const disabledUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        const disabledItems = [
            { text: 'Item1', disabled: true, items: [{ text: 'Item1.1' }] },
            { text: 'Item2', disabled: true }
        ];
        return (
            <Menu items={disabledItems}/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const bookCategories = [
    {
        text: 'Art & Music',
        items: [
            {
                text: 'Music',
                items: [
                    { text: 'Classical' },
                    { text: 'Country' },
                    { text: 'Dance' }
                ]
            },
            { text: 'Painting' },
            { text: 'Photography' },
        ]
    },
    {
        text: 'Ethnic & Cultural',
        items: [
            { text: 'Europe' },
            { text: 'Historical' },
            { text: 'Military' }]
    },
    {
        text: 'Business',
        items: [
            { text: 'Finance' },
            { text: 'Economics' },
            { text: 'Industries' }]
    },
    {
        text: 'Cooking',
        items: [
            { text: 'Baking' },
            { text: 'BBQ' },
            { text: 'Preserving' }]
    },
    {
        text: 'Health & Fitness',
        items: [
            { text: 'Aging' },
            { text: 'Alternative Medicine' },
            { text: 'Disease & Ailments' },
            {
                text: 'Fitness',
                items: [{ text: 'Acrobatics' }, { text: 'Barre' }, { text: 'Boxing' }, { text: 'Crossfit' }]
            },]
    },
]

const verticalMenu = `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Menu } from '@optimalui/components/layout'

    class App extends React.Component {
        render() { 

            const bookCategories = [
                {
                    text: 'Art & Music',
                    items: [
                        {
                            text: 'Music',
                            items: [
                                { text: 'Classical' },
                                { text: 'Country' },
                                { text: 'Dance' }
                            ]
                        },
                        { text: 'Painting' },
                        { text: 'Photography' },
                    ]
                },
                {
                    text: 'Ethnic & Cultural',
                    items: [
                        { text: 'Europe' },
                        { text: 'Historical' },
                        { text: 'Military' }]
                },
                {
                    text: 'Business',
                    items: [
                        { text: 'Finance' },
                        { text: 'Economics' },
                        { text: 'Industries' }]
                },
                {
                    text: 'Cooking',
                    items: [
                        { text: 'Baking' },
                        { text: 'BBQ' },
                        { text: 'Preserving' }]
                },
                {
                    text: 'Health & Fitness',
                    items: [
                        { text: 'Aging' },
                        { text: 'Alternative Medicine' },
                        { text: 'Disease & Ailments' },
                        { 
                            text: 'Fitness',
                            items: [
                                { text: 'Acrobatics' }, 
                                { text: 'Barre' }, 
                                { text: 'Boxing' }, 
                                { text: 'Crossfit' }
                            ]
                        },]
                },
            ]
            
            return (
                <Menu items={bookCategories}  mode="click" vertical/>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    )
    `;

const routeMenu = `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Menu,MenuItem } from '@optimalui/components/layout'
    import {Route, Switch, HashRouter } from "react-router-dom";


    const Home = () => (
        <React.Fragment>
            <p className="uk-text-lead">Home</p>
            <p>
                Nunc nulla. Praesent turpis.
    
                Praesent nonummy mi in odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    
                Donec vitae orci sed dolor rutrum auctor. Suspendisse feugiat.
            </p>
        </React.Fragment>
    )
    
    const Products = () => (
        <React.Fragment>
            <p className="uk-text-lead">Products</p>
            <p>
                Aliquam lobortis. Nam at tortor in tellus interdum sagittis. Fusce ac felis sit amet ligula pharetra condimentum. Aliquam lobortis.
            </p>
        </React.Fragment>
    )
    
    const About = () => (
        <React.Fragment>
            <p className="uk-text-lead">About</p>
            <p>
                Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam vitae tortor. Cras non dolor. 
                Duis leo. Proin faucibus arcu quis ante. In ut quam vitae odio lacinia tincidunt.
            </p>
        </React.Fragment>
    )
    
    const Team = () => (
        <React.Fragment>
            <p className="uk-text-lead">Team</p>
            <p>
                Donec posuere vulputate arcu. Fusce a quam.
            </p>
        </React.Fragment>
    )
    
    const MenuRoute = () => (
        <Switch>
            <Route exact={true} path="/home" component={Home} />
            <Route exact={true} path="/products" component={Products} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/about/team" component={Team} />
        </Switch>
    )

    class App extends React.Component {
        render() { 
            return (
                <HashRouter>
                    <Menu>
                        <MenuItem text="Home" route='/home' />
                        <MenuItem text="Products" route='/products' />
                        <MenuItem text="About" route='/about' parent>
                            <MenuItem text="Team" route='/about/team' />
                        </MenuItem>
                    </Menu>
                    <MenuRoute />
                </HashRouter>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    )
    `;

const Home = () => (
    <React.Fragment>
        <p className="uk-text-lead">Home</p>
        <p>
            Nunc nulla. Praesent turpis.

            Praesent nonummy mi in odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

            Donec vitae orci sed dolor rutrum auctor. Suspendisse feugiat.
                    </p>
    </React.Fragment>
)

const Products = () => (
    <React.Fragment>
        <p className="uk-text-lead">Products</p>
        <p>
            Aliquam lobortis. Nam at tortor in tellus interdum sagittis. Fusce ac felis sit amet ligula pharetra condimentum. Aliquam lobortis.
                </p>
    </React.Fragment>
)

const About = () => (
    <React.Fragment>
        <p className="uk-text-lead">About</p>
        <p>
            Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam vitae tortor. Cras non dolor. Duis leo. Proin faucibus arcu quis ante. In ut quam vitae odio lacinia tincidunt.
                </p>
    </React.Fragment>
)

const Team = () => (
    <React.Fragment>
        <p className="uk-text-lead">Team</p>
        <p>
            Donec posuere vulputate arcu. Fusce a quam.
                </p>
    </React.Fragment>
)

const MenuRoute = () => (
    <Switch>
        <Route exact={true} path="/home" component={Home} />
        <Route exact={true} path="/products" component={Products} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/about/team" component={Team} />
    </Switch>
)

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
                    <Menu items={items} mode="click" />
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
        
        {/** Alignment */}
        <h2 id="alignment" className="uk-h3 tm-heading-fragment"><a href="#alignment">Alignment</a></h2>
        <p>You can align the <code>MenuItem</code> components by giving the value of the <code>alignItems</code> prop, which is the property of the <code>Menu</code> component, left, right, or center.</p>
        <p>The default value of the <code>alignItems</code> prop is <code>left</code>.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                        <p className="uk-text-lead">Left Alignment</p> 
                        <Menu items={items} mode="click" alignItems="left" />
                        <p className="uk-text-lead">Right Alignment</p> 
                        <Menu items={items} mode="click" alignItems="right" />
                        <p className="uk-text-lead">Center Alignment</p> 
                        <Menu items={items} mode="click" alignItems="center" />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{alignmentSource}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={alignmentSource} />
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
                        <MenuItem text="Google" url="www.google.com" urlTarget="_blank" />
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

        {/** ICON */}
        <h2 id="icon" className="uk-h3 tm-heading-fragment"><a href="#icon">Icon</a></h2>
        <p>
            You can specify the name of a <Link to="/docs/icon">Icon</Link> that will be rendered for the item by using the icon property.
        </p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Menu items={iconItems} />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{iconsUsage}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={iconsUsage} />
        </div>

        {/** DISABLED */}
        <h2 id="disabled" className="uk-h3 tm-heading-fragment"><a href="#disabled">Disabled Item</a></h2>
        <p>
            You can specify that a <code>MenuItem</code> is disabled by using the <code>disabled</code> prop.
        </p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Menu items={disabledItems} />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{disabledUsage}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={disabledUsage} />
        </div>

        {/** VERTICAL */}
        <h2 id="vertical" className="uk-h3 tm-heading-fragment"><a href="#vertical">Vertical</a></h2>
        <p>Set the <code>vertical</code> prop as <code>true</code> to create a vertical <code>Menu</code> component.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Menu items={bookCategories} mode="click" vertical />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{verticalMenu}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={verticalMenu} />
        </div>

        {/** ROUTER */}
        <h2 id="route" className="uk-h3 tm-heading-fragment"><a href="#route">Routing</a></h2>
        <p>You can use the <code>Menu</code> as a navigational component by adding <code>route</code> prop with the react router.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <HashRouter>
                        <Menu>
                            <MenuItem text="Home" route='/home' />
                            <MenuItem text="Products" route='/products' />
                            <MenuItem text="About" route='/about' parent>
                                <MenuItem text="Team" route='/about/team' />
                            </MenuItem>
                        </Menu>
                        <MenuRoute />
                    </HashRouter>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{routeMenu}</SyntaxHighlighter>
                </Tab>
            </TabStrip>
            <MarkupButtons codeText={routeMenu} />
        </div>

        {/** MENUITEM */}
        <h2 id="menuitem" className="uk-h3 tm-heading-fragment"><a href="#menuitem">MenuItem Props</a></h2>
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
                        <td align="left"><code>{`''`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>icon</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`''`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>iconClassName</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`''`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>parent</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>url</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`''`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>urlTarget</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`''`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>className</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`''`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>route</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`''`}</code></td>
                    </tr>

                </tbody>
            </table>
        </div>

        
        {/** ACCESSIBILITY */}
        <h2 id="route" className="uk-h3 tm-heading-fragment"><a href="#route">Accessibility</a></h2>
        <p>The <code>Menu</code> component is accessible by screen readers and provides full <strong>WAI-ARIA</strong> support.</p>
        <p>The <code>MenuItem</code> component has the following props:</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">Aria</th>
                        <th align="left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>aria-orientation</code></td>
                        <td align="left">Shows the <code>Menu</code> is vertical or not</td>
                    </tr>
                    <tr>
                        <td align="left"><code>aria-label</code></td>
                        <td align="left">For the <code>MenuItem</code> text</td>
                    </tr>
                    <tr>
                        <td align="left"><code>aria-disabled</code></td>
                        <td align="left">For the disabled <code>MenuItem</code> text</td>
                    </tr>
                    <tr>
                        <td align="left"><code>aria-haspopup,aria-expanded</code></td>
                        <td align="left">For items with children</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>The <code>Menu</code> component uses the <code>menuitem</code>, and <code>menu</code> roles.</p>



    </div>

)