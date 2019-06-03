/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Margin } from '../../components/layout';
import MarkupButtons from './MarkupButtons';

const marginUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Margin } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Margin>
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </Margin>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;


export const MarginDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Margin</h1>
        <p className="uk-text-lead">Margin component provides to give space between components.</p>
        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/layout</code> module to use Margin component. Set <code>Margin</code> component as a parent to give  margin to any component.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    {/**TODO:Develop card component */}
                    <Margin type="left">
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </Margin>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{marginUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={marginUsage}/>
        </div>

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