/*eslint-disable */
import React from 'react';
import { Icon } from '../../components'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkupButtons from './MarkupButtons';
import IconLibrary from './IconLibrary';

const iconUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@optimalui/components/Icon'

class App extends React.Component {
    render() { 
        return (
            <div>
                <Icon name="check"/>
                <Icon name="heart"/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`

const linkSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@optimalui/components/Icon'

class App extends React.Component {
    render() { 
        return (
            <div>
                <Icon name="google" isLink to="www.google.com" target="_blank"/>
                <Icon name="facebook" isLink to="www.facebook.com" target="_blank"/>
                <Icon name="linkedin" isLink to="www.linkedin.com" target="_blank"/>
                <Icon name="github" isLink to="www.github.com" target="_blank" />
                <Icon name="twitter" isLink to="www.twitter.com" target="_blank"/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`

const sizeSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@optimalui/components/Icon'

class App extends React.Component {
    render() { 
        return (
            <div>
                <Icon name="check" size={2}/>
                <Icon name="check" size={3.5}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`

export const IconDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Icon</h1>
        <p className="uk-text-lead">
            You can use Icon component anywhere in your content.
        </p>
        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/Icon</code> module to use Icon component. </p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <p>
                        <Icon name="check" />
                        <Icon name="heart" style={{ marginLeft: '10px' }} />
                    </p>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{iconUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={iconUsage} />
        </div>
        {/** SIZE*/}
        <h2 id="size" className="uk-h3 tm-heading-fragment"><a href="#size">Size Modifier</a></h2>
        <p>To change default size ,set <code>size</code> property as number.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <p>
                        <Icon name="check" size={2} />
                        <Icon name="check" size={3.5} style={{ marginLeft: '10px' }} />
                    </p>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{sizeSource}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={sizeSource} />
        </div>
        {/** LINK*/}
        <h2 id="link" className="uk-h3 tm-heading-fragment"><a href="#link">Link</a></h2>
        <p>Add <code>isLink</code> prop to Icon component to set the component as a link property at external or inside your content.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <p>
                        <Icon name="google" isLink to="www.google.com" target="_blank" ratio={2} />
                        <Icon name="facebook" isLink to="www.facebook.com" target="_blank" style={{ marginLeft: '10px' }} />
                        <Icon name="linkedin" isLink to="www.linkedin.com" target="_blank" style={{ marginLeft: '10px' }} />
                        <Icon name="github" isLink to="www.github.com" target="_blank" style={{ marginLeft: '10px' }} />
                        <Icon name="twitter" isLink to="www.twitter.com" target="_blank" style={{ marginLeft: '10px' }} />
                    </p>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{linkSource}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={linkSource} />
        </div>

        {/** LIBRARY*/}
        <h2 id="library" className="uk-h3 tm-heading-fragment"><a href="#library">Icon Library</a></h2>
        <p>Here is an overview of all currently available icons.</p>
        <IconLibrary/>


        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className=""><a href="#size">Size Modifier</a></li>
                    <li className=""><a href="#link">Link</a></li>
                    <li className=""><a href="#library">Icon Library</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>

    </div>
)