/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Toolbar,ToolbarItem, TabStrip, Tab,Menu,MenuItem } from '../../components/layout'; 
import { Button} from '../../components/buttons'; 
import MarkupButtons from './MarkupButtons';
import backgroundImg from '../../assets/web/img/light.jpg'

const ToolBarUsage = () => {
    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { ToolBar,ToolbarItem,Menu,MenuItem } from '@optimalui/components/layout'
    
    class App extends React.Component {
        render() { 
            return ( 
                <Toolbar>
                    <ToolbarItem>
                        <Menu>
                            <MenuItem text="Active" active />
                            <MenuItem text="Parent" parent>
                                <MenuItem text="Active" active />
                            </MenuItem>
                            <MenuItem text="Item" />
                        </Menu>
                    </ToolbarItem>
                </Toolbar>
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
    `;
    return <React.Fragment>
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/layout</code> module to use <code>Toolbar</code> component.</p>
        <p>
            <code>Toolbar</code> component accepts only <code>ToolbarItem</code> child component. 
            You can create <code>Toolbar</code> contents  with <code>ToolbarItem</code> component.
        </p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Toolbar>
                        <ToolbarItem>
                            <Menu>
                                <MenuItem text="Active" active />
                                <MenuItem text="Parent" parent>
                                    <MenuItem text="Active" active />
                                </MenuItem>
                                <MenuItem text="Item" />
                            </Menu>
                        </ToolbarItem>
                    </Toolbar>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
    </React.Fragment>
}

const MultipleNavigation = () => {
    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { ToolBar,ToolbarItem,Menu,MenuItem } from '@optimalui/components/layout'
    
    class App extends React.Component {
        render() { 
            return ( 
                <Toolbar>
                    <ToolbarItem align="left">
                        <Menu>
                            <MenuItem text="Active" active />
                            <MenuItem text="Parent" parent>
                                <MenuItem text="Active" active />
                            </MenuItem>
                            <MenuItem text="Item" />
                        </Menu>
                    </ToolbarItem>
                    <ToolbarItem align="right">
                        <Menu>
                            <MenuItem text="Active" active />
                            <MenuItem text="Parent" parent>
                                <MenuItem text="Active" active />
                            </MenuItem>
                            <MenuItem text="Item" />
                        </Menu>
                    </ToolbarItem>
                </Toolbar>
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
    `;
    return <React.Fragment>
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Multiple Navigation</a></h2>
        <p>
        You can use <code>Menu</code> component to create navigation inside a <code>Toolbar</code> componet. 
        You can place more than one <code>Menu</code> component inside a <code>Toolbar</code> component by setting <code>ToolbarItem</code>'s
        <code>align</code> prop. 
        The <code>align</code> prop should take <code>left</code>,<code>right</code> and <code>center</code> values. 
        </p>
        
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Toolbar>
                        <ToolbarItem align="left">
                            <Menu>
                                <MenuItem text="Active" active />
                                <MenuItem text="Parent" parent>
                                    <MenuItem text="Active" active />
                                </MenuItem>
                                <MenuItem text="Item" />
                            </Menu>
                        </ToolbarItem>
                        <ToolbarItem align="right">
                            <Menu>
                                <MenuItem text="Active" active />
                                <MenuItem text="Parent" parent>
                                    <MenuItem text="Active" active />
                                </MenuItem>
                                <MenuItem text="Item" />
                            </Menu>
                        </ToolbarItem>
                    </Toolbar>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
    </React.Fragment>
}

const TransparentToolbar = () => {
    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { ToolBar,ToolbarItem,Menu,MenuItem } from '@optimalui/components/layout'
    import backgroundImg from '../images/light.jpg'
    
    class App extends React.Component {
        render() { 
            return ( 
                <div class="uk-position-relative">
                    <img src={backgroundImg} alt="" />
                    <div class="uk-position-top">
                        <Toolbar transparent>
                            <ToolbarItem>
                                <Menu>
                                    <MenuItem text="Active" active />
                                    <MenuItem text="Item" />
                                    <MenuItem text="Parent" parent>
                                        <MenuItem text="Active" active />
                                    </MenuItem>
                                </Menu>
                            </ToolbarItem>
                        </Toolbar>
                    </div>
                </div>
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
    `;
    return <React.Fragment>
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Transparent Prop</a></h2>
        <p>When using an image or colored background for the hero section of your website, you might want to turn the <code>Toolbar</code> transparent. 
        You can set <code>transparent</code> prop of <code>Toolbar</code> as <code>true</code> to make transparent the <code>Toolbar</code>.</p>
        
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <div class="uk-position-relative">
                        <img src={backgroundImg} alt="" />
                        <div class="uk-position-top">
                            <Toolbar transparent>
                                <ToolbarItem>
                                    <Menu>
                                        <MenuItem text="Active" active />
                                        <MenuItem text="Item" />
                                        <MenuItem text="Parent" parent>
                                            <MenuItem text="Active" active />
                                        </MenuItem>
                                    </Menu>
                                </ToolbarItem>
                            </Toolbar>
                        </div>
                    </div>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
    </React.Fragment>
}

const ToolbarContent = () => {
    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { ToolBar,ToolbarItem,Menu,MenuItem } from '@optimalui/components/layout'
    import backgroundImg from '../images/light.jpg'
    
    class App extends React.Component {
        render() { 
            return ( 
                <div class="uk-position-relative">
                    <img src={backgroundImg} alt="" />
                    <div class="uk-position-top">
                        <Toolbar transparent>
                            <ToolbarItem>
                                <Menu>
                                    <MenuItem text="Active" active />
                                    <MenuItem text="Item" />
                                    <MenuItem text="Parent" parent>
                                        <MenuItem text="Active" active />
                                    </MenuItem>
                                </Menu>
                            </ToolbarItem>
                        </Toolbar>
                    </div>
                </div>
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
    `;
    return <React.Fragment>
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Transparent Prop</a></h2>
        <p>When using an image or colored background for the hero section of your website, you might want to turn the <code>Toolbar</code> transparent. 
        You can set <code>transparent</code> prop of <code>Toolbar</code> as <code>true</code> to make transparent the <code>Toolbar</code>.</p>
        
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                            <Toolbar>
                                <ToolbarItem>
                                <div className="uk-navbar-item">
                                    <form action="javascript:void(0)">
                                        <input className="uk-input uk-form-width-small" type="text" placeholder="Input"/>{/**TODO:Input component */}
                                        <Button>Button</Button>
                                     </form>
                                     </div>
                                </ToolbarItem>
                            </Toolbar>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
    </React.Fragment> 
}

export const ToolbarDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Toolbar</h1>
        <p className="uk-text-lead">The React OptimalUI ToolBar provides content for navigation and actions.</p>

        {/**USAGE */}
        <ToolBarUsage />

        {/**MULTIPLE NAVIGATION */}
        <MultipleNavigation/>

        {/**TRANSPARENT PROP */}
        <TransparentToolbar/>

        {/**CONTENT ITEM */}
        <ToolbarContent/>


    </div>

)