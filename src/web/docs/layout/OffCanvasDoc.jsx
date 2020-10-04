import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import MarkupButtons from '../MarkupButtons';
import { TabStrip, Tab,OffCanvas,OffCanvasBody,Menu, MenuItem } from '../../../components/layout'; 
import { Button } from '../../../components/buttons'; 
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Icon} from '../../../components'
import {  Route, Switch, HashRouter } from "react-router-dom";

/**for menu offcanvas */

const closeButtonStyle={
    position: 'absolute',
    zIndex: 1000,
    top: '20px',
    right: '20px',
    padding: '5px',
    cursor:'pointer',
    color: '#999',
}

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


const Team = () => (
    <React.Fragment>
        <p className="uk-text-lead">Our Team</p>
        <p>
            Donec posuere vulputate arcu. Fusce a quam.
        </p>
    </React.Fragment>
)

const ContactUs = () => (
    <React.Fragment>
        <p className="uk-text-lead">Contact Us</p>
        <p>
        Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam vitae tortor. Cras non dolor. 
            Duis leo. Proin faucibus arcu quis ante. In ut quam vitae odio lacinia tincidunt.
        </p>
    </React.Fragment>
)

const Services = () => (
    <React.Fragment>
        <p className="uk-text-lead">Services</p>
        <p>
        Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam vitae tortor. Cras non dolor. 
            Duis leo. Proin faucibus arcu quis ante. In ut quam vitae odio lacinia tincidunt.
        </p>
    </React.Fragment>
)

const Support = () => (
    <React.Fragment>
        <p className="uk-text-lead">Support</p>
        <p>
        Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam vitae tortor. Cras non dolor. 
            Duis leo. Proin faucibus arcu quis ante. In ut quam vitae odio lacinia tincidunt.
        </p>
    </React.Fragment>
)

const Portfolio = () => (
    <React.Fragment>
        <p className="uk-text-lead">Our Portfolio</p>
        <p>
        Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam vitae tortor. Cras non dolor. 
            Duis leo. Proin faucibus arcu quis ante. In ut quam vitae odio lacinia tincidunt.
        </p>
    </React.Fragment>
)

const MenuRoute = () => (
    <Switch>
        <Route exact={true} path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about/team" component={Team} />
        <Route path="/about/services" component={Services} />
        <Route path="/about/portfolio" component={Portfolio} />
        <Route path="/support" component={Support} />
        <Route path="/contact-us" component={ContactUs} />
        
    </Switch>
)

const OffCanvasUsage = () => {

    const [open,setOpen] = useState(false);

    const toggleOffCanvas = () => {
        setOpen(!open)
    }

    const closeOffCanvas = () => {
        setOpen(false)
    }
    

    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { OffCanvas,OffCanvasBody,OffCanvasCloseButton } from '@optimalui/components/layout'
    import { Button } from '@optimalui/components/buttons'; 
    import {Icon} from '@optimalui/components'

    const closeButtonStyle={
        position: 'absolute',
        zIndex: 1000,
        top: '20px',
        right: '20px',
        padding: '5px',
        cursor:'pointer',
        color: '#999',
    }


    const OffCanvasApp = () => {
        const [open,setOpen] = useState(false);
        const toggleOffCanvas = () => {
            setOpen(!open)
        }
        const closeOffCanvas = () => {
            setOpen(false)
        }
        return(
            <React.Fragment>
                <Button onClick={toggleOffCanvas}>Open</Button>
                <OffCanvas open={open}>
                    <OffCanvasBody>
                        <Icon name="close" style={closeButtonStyle} onClick={closeOffCanvas} />
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </OffCanvasBody>
                </OffCanvas>
            </React.Fragment>
        )
    }

    ReactDOM.render(
        <OffCanvasApp />,
        document.querySelector('my-app')
    ) 
    `;
    return <React.Fragment>
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/layout</code> module to use <code>OffCanvas</code> component. You can control the open and close event of the <code>OffCanvas</code> component with setting <code>open</code> prop as <code>true</code> or <code>false</code>.</p>
        <p>You can create a button with a close button style by creating the <code>OffCanvasCloseButton</code> component as a child component of the <code>OffCanvas</code> component.</p>
        <p>The <code>OffCanvasBody</code> component is used to create the contents of the <code>OffCanvas</code> component.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Button onClick={toggleOffCanvas}>Open</Button>
                    <OffCanvas open={open} >
                        <OffCanvasBody>
                            <Icon name="close" style={closeButtonStyle} onClick={closeOffCanvas} />
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </OffCanvasBody>
                    </OffCanvas> 
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
    </React.Fragment>
}

const OffCanvasOverlayDoc = () => {
    const [open,setOpen] = useState(false);
    const [openOverlay,setOpenOverlay] = useState(false);

    const toggleOffCanvas = () => {
        setOpen(!open)
    }

    const closeOffCanvas = () => {
        setOpen(false)
    }
    const toggleOffCanvasOverlay = () => {
        setOpenOverlay(!openOverlay)
    }

    const closeOffCanvasOverlay = () => {
        setOpenOverlay(false)
    }
    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { OffCanvas,OffCanvasBody,OffCanvasCloseButton } from '@optimalui/components/layout'
    import { Button } from '@optimalui/components/buttons'; 
    import {Icon} from '@optimalui/components'

    const closeButtonStyle={
        position: 'absolute',
        zIndex: 1000,
        top: '20px',
        right: '20px',
        padding: '5px',
        cursor:'pointer',
        color: '#999',
    }

    const OffCanvasApp = () => {
        const [open,setOpen] = useState(false);
        const [openOverlay,setOpenOverlay] = useState(false);
        const toggleOffCanvas = () => {
            setOpen(!open)
        }
        const closeOffCanvas = () => {
            setOpen(false)
        }
        const toggleOffCanvasOverlay = () => {
            setOpenOverlay(!openOverlay)
        }
    
        const closeOffCanvasOverlay = () => {
            setOpenOverlay(false)
        }
        return(
            <React.Fragment>
                <Button onClick={toggleOffCanvas} className="uk-margin-small-right">Open</Button>
                <Button onClick={toggleOffCanvasOverlay}>Overlay</Button>

                <OffCanvas open={open} overlay={open} overlayClick={closeOffCanvas}>
                    <OffCanvasBody>
                        <Icon name="close" style={closeButtonStyle} onClick={closeOffCanvas} />
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </OffCanvasBody>
                </OffCanvas>

                <OffCanvas open={openOverlay} overlay={openOverlay} overlayBackground overlayClick={closeOffCanvasOverlay}>
                    <OffCanvasBody>
                        <Icon name="close" style={closeButtonStyle} onClick={closeOffCanvas} />
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </OffCanvasBody>
                </OffCanvas>
            </React.Fragment>
        )
    }

    ReactDOM.render(
        <OffCanvasApp />,
        document.querySelector('my-app')
    ) 
    `;

    return <React.Fragment>
        <h2 id="overlay" className="uk-h3 tm-heading-fragment"><a href="#overlay">Overlay</a></h2>
        <p>To create an overlay for the <code>OffCanvas</code> component, the <code>overlay</code> prop should be set as <code>true</code>. The <code>OffCanvas</code>'s <code>overlayBackground</code> prop provides overlay background color by setting as true.</p>
        <p>You can manage open or close state by using <code>overlayClick</code> functional prop.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">

                    <Button onClick={toggleOffCanvas} className="uk-margin-small-right">Open</Button>
                    <Button onClick={toggleOffCanvasOverlay}>Overlay</Button>

                        <OffCanvas  open={open} overlay={open} overlayClick={closeOffCanvas}>
                            <OffCanvasBody>
                                <Icon name="close" style={closeButtonStyle} onClick={closeOffCanvas} />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </OffCanvasBody>
                        </OffCanvas>

                        <OffCanvas open={openOverlay} overlay={openOverlay} overlayBackground overlayClick={closeOffCanvasOverlay}>
                            <OffCanvasBody>
                                <Icon name="close" style={closeButtonStyle} onClick={closeOffCanvasOverlay} />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </OffCanvasBody>
                        </OffCanvas>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
        <p className="uk-text-lead">Overlay Props</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">prop</th>
                        <th align="left">propType</th>
                        <th align="left">reqiured</th>
                        <th align="left">default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>overlay</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>overlayBackground</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>overlayClick</code></td>
                        <td align="left"><code>func</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>null</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
        

    </React.Fragment>
}

const OffCanvasPosition = ()=>{
    const [open,setOpen] = useState(false);

    const toggleOffCanvas = () => {
        setOpen(!open)
    }

    const closeOffCanvas = () => {
        setOpen(false)
    }

    const src=`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { OffCanvas,OffCanvasBody,OffCanvasCloseButton } from '@optimalui/components/layout'
    import { Button } from '@optimalui/components/buttons';
    import {Icon} from '@optimalui/components'
    
    const closeButtonStyle={
        position: 'absolute',
        zIndex: 1000,
        top: '20px',
        right: '20px',
        padding: '5px',
        cursor:'pointer',
        color: '#999',
    }

    const OffCanvasApp = () => {
        const [open,setOpen] = useState(false);
        const toggleOffCanvas = () => {
            setOpen(!open)
        }
        const closeOffCanvas = () => {
            setOpen(false)
        }
        return(
            <React.Fragment>
                <Button onClick={toggleOffCanvas}>Open</Button>
                <OffCanvas open={open} overlay={open} overlayBackground overlayClick={closeOffCanvas} position="right">
                    <OffCanvasBody>
                        <Icon name="close" style={closeButtonStyle} onClick={this.closeOffCanvas} />
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </OffCanvasBody>
               </OffCanvas>
            </React.Fragment>
        )
    }

    ReactDOM.render(
        <OffCanvasApp />,
        document.querySelector('my-app')
    )`

    return (
        <React.Fragment>
        <h2 id="position" className="uk-h3 tm-heading-fragment"><a href="#position">Position</a></h2>
        <p>By default, the position of the <code>OffCanvas</code> component opens on the left edge of the screen. You can change the position of the component by setting the <code>position</code> prop as <code>left</code> or <code>right</code>.
        </p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                        <Button onClick={toggleOffCanvas}>Open</Button>
                        <OffCanvas  open={open} overlay={open} overlayBackground overlayClick={closeOffCanvas} position="right">
                            <OffCanvasBody>
                                <Icon name="close" style={closeButtonStyle} onClick={closeOffCanvas} />
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </OffCanvasBody>
                        </OffCanvas>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
        </React.Fragment>
    )
}





const OffcanvasMenu = ()=>{
    const [open,setOpen] = useState(false);

    const toggleOffCanvas = () => {
        setOpen(!open)
    }

    const closeOffCanvas = () => {
        setOpen(false)
    }

    const src = ``

    return (
        <React.Fragment>
        <h2 id="menu" className="uk-h3 tm-heading-fragment"><a href="#menu">Menu in OffCanvas</a></h2>
        <p>You can use <code>Menu</code> component inside a <code>OffCanvas</code> component with setting <code>Menu</code>'s <code>collapsible</code> prop as <code>true</code>.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                        <Button onClick={toggleOffCanvas}>Open</Button>
                        <HashRouter>
                            <OffCanvas  open={open} overlay={open} overlayBackground overlayClick={closeOffCanvas} width={250}>
                                <OffCanvasBody>
                                    <Icon name="close" style={closeButtonStyle} onClick={closeOffCanvas} />
                                    <Menu collapsible>
                                        <MenuItem header text="Header" />
                                        <MenuItem text="Home" route='/home' icon='home' />
                                        <MenuItem text="Products" route='/products' icon='thumbnails' />
                                        <MenuItem text="About" parent icon='info'>
                                            <MenuItem text="Our Team" route='/about/team' icon='users' />
                                            <MenuItem text="Our Portfolio" route='/about/portfolio' icon='grid' />
                                            <MenuItem text="Services" route='/about/services' icon='list' />
                                        </MenuItem>
                                        <MenuItem text="Support" route='/support' icon='lifesaver'/>
                                        <MenuItem divider/>
                                        <MenuItem text="Contact Us" route='/contact-us' icon='mail'/>
                                    </Menu>
                                </OffCanvasBody>
                            </OffCanvas>
                            <MenuRoute />
                        </HashRouter>
                        
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
        </React.Fragment>
    )
}

export const OffCanvasDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>OffCanvas</h1>
        <p className="uk-text-lead">You can manage and display your content by opening and closing on the left or right edge of the screen 
        by using the React Optimal UI OffCanvas component.</p>

        {/**USAGE */}
        <OffCanvasUsage />

        {/**OVERLAY */}
        <OffCanvasOverlayDoc />

        {/**POSITION */}
        <OffCanvasPosition />

        {/**MENU OFFCANVAS */}
        <OffcanvasMenu/>

        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className="uk-active"><a href="#overlay">Overlay</a></li>
                    <li className="uk-active"><a href="#position">Position</a></li>
                    <li className="uk-active"><a href="#menu">Menu in OffCanvas</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>

    </div>

)