import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import MarkupButtons from './MarkupButtons';
import { TabStrip, Tab,OffCanvas,OffCanvasBody,OffCanvasCloseButton,OffCanvasOverlay } from '../../components/layout'; 
import { Button } from '../../components/buttons'; 
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import logoSrc from '../../assets/web/img/react-logo.png'
import UIKitLogo from '../../assets/web/img/uikit-logo.svg'


const OffCanvasUsage = () => {

    const [open,setOpen] = useState(false);

    const toggleCanvas = () => {
        setOpen(!open)
    }

    const closeCanvas = () => {
        setOpen(false)
    }
    
    

    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Logo } from '@optimalui/components'
    
    class App extends React.Component {
        render() { 
            return ( 
                <Logo>My Fancy Logo</Logo>
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
        <p>Import <code>@optimalui/components</code> module to use <code>Logo</code> component.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Button onClick={toggleCanvas}>Open</Button>
                    <OffCanvasOverlay onClick={closeCanvas}>
                        <OffCanvas open={open}>
                            <OffCanvasCloseButton onClick={closeCanvas} />
                            <OffCanvasBody>
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
}

export const OffCanvasDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>OffCanvas</h1>
        <p className="uk-text-lead">The React OptimalUI Logo component sets styling a logo.</p>

        {/**USAGE */}
        <OffCanvasUsage />

        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>

    </div>

)