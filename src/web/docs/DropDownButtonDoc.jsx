/* eslint-disable */
import React from 'react';
import { ButtonGroup,Button } from '../../components/buttons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkupButtons from './MarkupButtons';
import {DropDownButton} from '../../components/buttons';

const dropDownUsage = `
import React from 'react'; 
import ReactDOM from 'react-dom';
import { DropDownButton } from '@optimalui/components/buttons'

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];

class App extends React.Component {
    render() { 
        return (
            <div>
                <DropDownButton text="User Settings" items={items} />
                <DropDownButton text="Disabled" items={items} buttonProps={{ disabled: true }}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('my-app')
);
`; 

const dropDownStyle = `
import React from 'react'; 
import ReactDOM from 'react-dom';
import { DropDownButton } from '@optimalui/components/buttons'

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];

class App extends React.Component {
    render() { 
        return (
            <div>
                <DropDownButton text="Settings" items={items} buttonProps={{primary:true}} />
                <DropDownButton text="Settings" items={items} buttonProps={{secondary:true}} />
                <DropDownButton text="Settings" items={items} buttonProps={{danger:true}} />
                <DropDownButton text="Settings" items={items} buttonProps={{text:true}} />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('my-app')
);
`; 

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];

export const DropDownButtonDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>DropDownButton</h1>
        <p className="uk-text-lead">The  DropDownButton component looks like the Button and it displays a popup list with action items.</p>
        
        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/buttons</code> module to use DropDownButton component.</p>
        <p>DropDownButton component can be enabled by hovering and clicking the toggle. Just add the <code>mode="click"</code> prop to enable click mode. </p>
        <p>By default, the DropDownButton component is enabled. To disable , add <code>disabled:true</code> to <code>buttonProps</code> prop.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <DropDownButton mode="hover" text="Hover" items={items} />
                    <DropDownButton mode="click" text="Click" items={items} style={{ marginLeft: '3px' }}  />
                    <DropDownButton text="Disabled" items={items} style={{ marginLeft: '3px' }} buttonProps={{ disabled: true }} />
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{dropDownUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={dropDownUsage}/>
        </div>

        {/** BUTTON STYLE */}
        <h2 id="button-props" className="uk-h3 tm-heading-fragment"><a href="#button-props">Button Style Props</a></h2>
        <p>To use different DropDownButton style ,set Button component props with <code>buttonProps</code> prop.</p>
        <div className="uk-position-relative uk-margin-medium" style={{height:'100%'}}>
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <DropDownButton text="Settings" items={items} buttonProps={{primary:true}}/>
                    <DropDownButton text="Settings" items={items} buttonProps={{secondary:true}} style={{marginLeft:'3px'}}  />
                    <DropDownButton text="Settings" items={items} buttonProps={{danger:true}} style={{marginLeft:'3px'}}  />
                    <DropDownButton text="Settings" items={items} buttonProps={{text:true}} style={{marginLeft:'3px'}}  />
                    
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{dropDownStyle}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={dropDownStyle}/>
        </div>

        {/** ANIMATION */}
        <h2 id="button-props" className="uk-h3 tm-heading-fragment"><a href="#button-props">Animation</a></h2>
        <p>To use different DropDownButton style ,set Button component props with <code>buttonProps</code> prop.</p>
        <div className="uk-position-relative uk-margin-medium" style={{height:'400px'}}>
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <DropDownButton text="Settings" items={items} buttonProps={{primary:true}} animation="bounceInDown"/>
                    <DropDownButton text="Settings" items={items} buttonProps={{secondary:true}} style={{marginLeft:'3px'}}  />
                    <DropDownButton text="Settings" items={items} buttonProps={{danger:true}} style={{marginLeft:'3px'}}  />
                    <DropDownButton text="Settings" items={items} buttonProps={{text:true}} style={{marginLeft:'3px'}}  />
                    
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{dropDownStyle}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={dropDownStyle}/>
        </div>


        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className=""><a href="#button-props">Button Style Props</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>
    </div>
)