import React from 'react';
import { Button } from '../../components/buttons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const buttonUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@optimalui/buttons'

class App extends React.Component {
    render() {
        return (
            <div>
                <Button>Button</Button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

export const ButtonsDocOverview = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Button Overview</h1>
        <p className="uk-text-lead">
            You can easily create a functional button with OptimalUI React button component.
        </p>
        <p>The Button is part of the optimalui-react-buttons NPM package.(todo:npm links)</p>

        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li><Button>Button</Button></li>
                <li>
                <SyntaxHighlighter language='javascript' style={docco}>{buttonUsage}</SyntaxHighlighter>
                </li>
            </ul>
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