import React from 'react';
import { Button } from '../../components/buttons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkupButtons from './MarkupButtons';


const buttonUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@optimalui/buttons'

class App extends React.Component {
    render() {
        return (
            <div>
                <Button>Button</Button>
                <Button disabled>Disabled</Button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const styleProps = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@optimalui/buttons'

class App extends React.Component {
    render() {
        return (
            <div>
                <Button active>Active</Button>
                <Button>Default</Button>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
                <Button danger>Danger</Button>
                <Button text>Text</Button>
                <Button link>Link</Button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;


export const ButtonsDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Buttons</h1>
        <p className="uk-text-lead">
            You can easily create  functional buttons with OptimalUI React button component.
        </p>
        <p>The Button is part of the optimalui-react-buttons NPM package.(todo:npm links)</p>

        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/buttons</code> module to use button component. Add the <code>disabled</code> prop to a button component to disable.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <p>
                        <Button>Button</Button>
                        <Button disabled style={{marginLeft:'2px'}}>Disabled</Button>
                    </p>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{buttonUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={buttonUsage}/>
        </div>
        {/** STYLE PROPS  */}
        <h2 id="style-props" className="uk-h3 tm-heading-fragment"><a href="#style-props">Style Props</a></h2>
        <p>There are many style props to change appearance a button. Add one of them to a button component to give different style . </p>
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
                        <td align="left"><code>active</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>danger</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>primary</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>secondary</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>link</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>text</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <p>
                        <Button active>Active</Button>
                        <Button style={{marginLeft:'2px'}}>Default</Button>
                        <Button primary style={{marginLeft:'2px'}}>Primary</Button>
                        <Button secondary style={{marginLeft:'2px'}}>Secondary</Button>
                        <Button danger style={{marginLeft:'2px'}}>Danger</Button>
                        <Button text style={{marginLeft:'2px'}}>Text</Button>
                        <Button link style={{marginLeft:'2px'}}>Link</Button>
                    </p>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{styleProps}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={styleProps}/>
        </div>
        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className=""><a href="#style-props">Style Props</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>
    </div>
)