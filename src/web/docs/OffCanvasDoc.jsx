import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import MarkupButtons from './MarkupButtons';
import { TabStrip, Tab,OffCanvas,OffCanvasBody,OffCanvasCloseButton,OffCanvasOverlay } from '../../components/layout'; 
import { Button } from '../../components/buttons'; 
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


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
                    <OffCanvasCloseButton onClick={closeOffCanvas} />
                    <OffCanvasBody>
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
                    <OffCanvas open={open}>
                        <OffCanvasCloseButton onClick={closeOffCanvas} />
                        <OffCanvasBody>
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
    import { OffCanvas,OffCanvasBody,OffCanvasCloseButton,OffCanvasOverlay } from '@optimalui/components/layout'
    import { Button } from '@optimalui/components/buttons'; 

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

                <OffCanvasOverlay overlay={open} onClick={closeOffCanvas}>
                    <OffCanvas open={open}>
                        <OffCanvasCloseButton onClick={closeOffCanvas} />
                        <OffCanvasBody>
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </OffCanvasBody>
                    </OffCanvas>
                </OffCanvasOverlay>

                <OffCanvasOverlay overlay={openOverlay} overlayBackground onClick={closeOffCanvasOverlay}>
                    <OffCanvas open={openOverlay}>
                        <OffCanvasCloseButton onClick={closeOffCanvasOverlay} />
                        <OffCanvasBody>
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </OffCanvasBody>
                    </OffCanvas>
                </OffCanvasOverlay>
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
        <p>To create an overlay for the <code>OffCanvas</code> component, the <code>OffCanvasOverlay</code> component should be created as the parent component.</p>
        <p>To use the overlay property in the <code>OffCanvasOverlay</code> component, the <code>overlay</code> prop should be set to true. 
        The <code>OffCanvasOverlay</code>'s <code>overlayBackground</code> prop provides overlay background color by setting as true.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">

                    <Button onClick={toggleOffCanvas} className="uk-margin-small-right">Open</Button>
                    <Button onClick={toggleOffCanvasOverlay}>Overlay</Button>

                    <OffCanvasOverlay overlay={open} onClick={closeOffCanvas}>
                        <OffCanvas open={open}>
                            <OffCanvasCloseButton onClick={closeOffCanvas} />
                            <OffCanvasBody>
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </OffCanvasBody>
                        </OffCanvas>
                    </OffCanvasOverlay>

                    <OffCanvasOverlay overlay={openOverlay} overlayBackground onClick={closeOffCanvasOverlay}>
                        <OffCanvas open={openOverlay}>
                            <OffCanvasCloseButton onClick={closeOffCanvasOverlay} />
                            <OffCanvasBody>
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </OffCanvasBody>
                        </OffCanvas>
                    </OffCanvasOverlay>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
        <p className="uk-text-lead">OffCanvasOverlay Props</p>
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
                <OffCanvas open={open} position="right">
                    <OffCanvasCloseButton onClick={closeOffCanvas} />
                    <OffCanvasBody>
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
                        <OffCanvasOverlay overlay={open} overlayBackground onClick={closeOffCanvas}>
                        <OffCanvas open={open} position="right">
                            <OffCanvasCloseButton onClick={closeOffCanvas} />
                            <OffCanvasBody>
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </OffCanvasBody>
                        </OffCanvas>
                        </OffCanvasOverlay>
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

const OffCanvasMode = () => {
    const [open,setOpen] = useState(false);
    const [openReveal,setOpenReveal] = useState(false);

    /**Slide */
    const toggleOffCanvas = () => {
        setOpen(!open)
    }

    const closeOffCanvas = () => {
        setOpen(false)
    }

    /***Reveal */
    const toggleOffCanvasReveal = () => {
        setOpenReveal(!openReveal)
    }

    const closeOffCanvasReveal = () => {
        setOpenReveal(false)
    }

    const src=``
    return <React.Fragment>
        <h2 id="mode" className="uk-h3 tm-heading-fragment"><a href="#mode">Animation Mode</a></h2>
        <p>
            You can change the <code>OffCanvas</code> animation mode with the <code>mode</code> prop. By default, the <code>mode</code> prop is <code>slide</code>. 
        </p> 
        <p>The <code>mode</code> prop should be set with one of the following values.</p>
        <div className="uk-overflow-auto">
        <table className="uk-table uk-table-divider"><thead><tr>
            <th align="left">Value</th>
            <th align="left">Description</th>
        </tr>
        </thead><tbody><tr>
            <td align="left"><code>slide</code></td>
            <td align="left">The <code>OffCanvas</code> slides out and overlays the content. This is the default mode.</td>
        </tr>
                <tr>
                    <td align="left"><code>push</code></td>
                    <td align="left">The <code>OffCanvas</code> slides out and pushes the site.</td>
                </tr>
                <tr>
                    <td align="left"><code>reveal</code></td>
                    <td align="left">The <code>OffCanvas</code> slides out and reveals its content while pushing the site.</td>
                </tr>
                <tr>
                    <td align="left"><code>none</code></td>
                    <td align="left">The <code>OffCanvas</code> appears and overlays the content without an animation.</td>
                </tr>
            </tbody></table>
        </div>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Button onClick={toggleOffCanvas} className="uk-margin-small-right">Slide</Button>
                    <Button onClick={toggleOffCanvasReveal}>Reveal</Button>
                    <OffCanvasOverlay overlay={open} overlayBackground onClick={closeOffCanvas}>
                        <OffCanvas open={open}>
                            <OffCanvasCloseButton onClick={closeOffCanvas} />
                            <OffCanvasBody>
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </OffCanvasBody>
                        </OffCanvas>
                    </OffCanvasOverlay> 
                    {/* <OffCanvasOverlay overlay={openReveal} overlayBackground onClick={closeOffCanvasReveal}> */}
                        <OffCanvas open={openReveal} mode="reveal">
                            <OffCanvasCloseButton onClick={closeOffCanvasReveal} />
                            <OffCanvasBody>
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </OffCanvasBody>
                        </OffCanvas>
                    {/* </OffCanvasOverlay> */}
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
    </React.Fragment>
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

        {/**MODE */}
        <OffCanvasMode />

        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className="uk-active"><a href="#overlay">Overlay</a></li>
                    <li className="uk-active"><a href="#position">Position</a></li>
                    <li className="uk-active"><a href="#mode">Animation Mode</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>

    </div>

)