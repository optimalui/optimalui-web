import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import MarkupButtons from './MarkupButtons';
import { TabStrip, Tab } from '../../components/layout'; 
import { Logo } from '../../components'; 
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import logoSrc from '../../assets/web/img/react-logo.png'
import UIKitLogo from '../../assets/web/img/uikit-logo.svg'


const LogoUsage = () => {
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
                    <Logo>My Fancy Logo</Logo>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
    </React.Fragment>
}

const LogoSrc = () => {
    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Logo } from '@optimalui/components'
    import logoSrc from '../img/react-logo.png'
    
    
    class App extends React.Component {
        render() { 
            return ( 
                <Logo src={logoSrc}/>
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
    `;
    return <React.Fragment>
        <h2 id="src" className="uk-h3 tm-heading-fragment"><a href="#src">Src Prop</a></h2>
        <p>Import <code>@optimalui/components</code> module to use <code>Logo</code> component.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Logo src={logoSrc}/>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{src}</SyntaxHighlighter>
                    <MarkupButtons codeText={src} />
                </Tab>
            </TabStrip>
        </div>
    </React.Fragment>
}

const LogoSize = () => {
    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Logo } from '@optimalui/components'
    import logoSrc from '../img/react-logo.png'
    
    
    class App extends React.Component {
        render() { 
            return ( 
                <div className="uk-flex uk-flex-center">
                    <Logo src={logoSrc} size="small" />
                    <Logo src={logoSrc} size="medium" />
                    <Logo src={logoSrc} size="large" />
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
        <h2 id="size" className="uk-h3 tm-heading-fragment"><a href="#size">Size Prop</a></h2>
        <p>You can set a <code>Logo</code> size with <code>size</code> prop. The <code>size </code> props should be set one of <code>small</code>,<code>medium</code> and <code>large</code> values</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <div className="uk-flex uk-flex-center">
                        <Logo src={logoSrc} size="small" />
                        <Logo src={logoSrc} size="medium" />
                        <Logo src={logoSrc} size="large" />
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

const LogoLink = () => {
    const src =  `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Logo } from '@optimalui/components'
    import logoSrc from '../img/react-logo.png'
    import UIKitLogo from '../img/uikit-logo.svg'
    
    
    class App extends React.Component {
        render() { 
            return ( 
                <div className="uk-flex uk-flex-center">
                    <Logo src={logoSrc}  link="https://reactjs.org/"/>
                    <Logo src={UIKitLogo}  link="https://getuikit.com/"/>
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
        <h2 id="size" className="uk-h3 tm-heading-fragment"><a href="#size">Link Prop</a></h2>
        <p>You can set a <code>Logo</code> link with <code>link</code> prop.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <div className="uk-flex">
                        <Logo src={logoSrc} link="https://reactjs.org/"/>
                        <Logo src={UIKitLogo} link="https://getuikit.com/"/>
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

export const LogoDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Logo</h1>
        <p className="uk-text-lead">The React OptimalUI Logo component sets styling a logo.</p>

        {/**USAGE */}
        <LogoUsage />

        {/**LOGO SRC */}
        <LogoSrc />

        {/**LOGO SIZE */}
        <LogoSize />

        
        {/**LOGO Link */}
        <LogoLink />

        {/** LOGO PROPS */}
        <h2 id="props" className="uk-h3 tm-heading-fragment"><a href="#props">Logo Props</a></h2>
        <p>The <code>Logo</code> component has the following props:</p>
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
                        <td align="left"><code>className</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`''`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>link</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`#`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>src</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>null</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>size</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left"><code>no</code></td>
                        <td align="left"><code>{`small`}</code></td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className="uk-active"><a href="#src">Src Prop</a></li>
                    <li className="uk-active"><a href="#size">Size Prop</a></li>
                    <li className="uk-active"><a href="#link">Link Prop</a></li>
                    <li className="uk-active"><a href="#props">Logo Props</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>

    </div>

)