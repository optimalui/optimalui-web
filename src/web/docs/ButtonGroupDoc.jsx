/* eslint-disable */
import React from 'react';
import { ButtonGroup,Button } from '../../components/buttons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkupButtons from './MarkupButtons';

const buttonGroupUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button,ButtonGroup } from '@optimalui/buttons'

class App extends React.Component {
    render() { 
        return (
            <div>
                <ButtonGroup>
                    <Button secondary>Button</Button>
                    <Button secondary>Button</Button>
                    <Button secondary>Button</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button primary>Button</Button>
                    <Button primary>Button</Button> 
                    <Button primary>Button</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button danger>Button</Button>
                    <Button danger>Button</Button>
                    <Button danger>Button</Button>
                </ButtonGroup>
                <ButtonGroup disabled>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </ButtonGroup>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('my-app')
);
`; 

export const ButtonGroupDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Button Group</h1>
        <p className="uk-text-lead">You can configure each Button in the ButtonGroup separately depending on the requirements of your project.</p>
        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>By default, the ButtonGroup component is enabled. To disable the all group of buttons, set the <code>disabled</code> prop of the <code>ButtonGroup</code> to true.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                        <ButtonGroup style={{marginTop:'2px'}}>
                            <Button secondary>Button</Button>
                            <Button secondary>Button</Button>
                            <Button secondary>Button</Button>
                        </ButtonGroup>
                        <br/>
                        <ButtonGroup style={{marginTop:'2px'}}>
                            <Button primary>Button</Button>
                            <Button primary>Button</Button>
                            <Button primary>Button</Button>
                        </ButtonGroup>
                        <br/>
                        <ButtonGroup style={{marginTop:'2px'}}>
                            <Button danger>Button</Button>
                            <Button danger>Button</Button>
                            <Button danger>Button</Button>
                        </ButtonGroup>
                        <br/>
                        <ButtonGroup disabled>
                            <Button danger>Button</Button>
                            <Button danger>Button</Button>
                            <Button danger>Button</Button>
                        </ButtonGroup>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{buttonGroupUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={buttonGroupUsage}/>
        </div>
    </div>
)