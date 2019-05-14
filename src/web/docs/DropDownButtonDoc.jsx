/* eslint-disable */
import React from 'react';
import { ButtonGroup,Button } from '../../components/buttons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkupButtons from './MarkupButtons';
import {DropDownButton,DropDownButtonItem} from '../../components/buttons';
import { Icon } from '../../components';
import sample_img_icon from '../../assets/web/img/sample_settings_icon.png'
import DropDownButtonEvents from './events/DropDownButtonEvent';

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

const animationSource = `
import React from 'react'; 
import ReactDOM from 'react-dom';
import { DropDownButton } from '@optimalui/components/buttons'

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];

class App extends React.Component {
    render() { 
        return (
            <div>
                <DropDownButton text="slide-In-Down" items={items} buttonProps={{primary:true}} animation="slideInDown"/>
                <DropDownButton text="slide-In-Up" items={items} buttonProps={{secondary:true}} animation="slideInUp"  />
                <DropDownButton text="bounce" items={items} buttonProps={{danger:true}} animation="bounce"  />
                <DropDownButton text="fade-In-Down" items={items} buttonProps={{text:true}} animation="fadeInDown"  />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('my-app')
);
`; 

const iconWithButton = `
import React from 'react';
import ReactDOM from 'react-dom';
import { DropDownButton } from '@optimalui/components/buttons'
import sample_img_icon from '../assets/img/sample_img_icon.png'

class App extends React.Component {
    render() {
        return (
            <div>
                <DropDownButton text="OptimalUI" items={items} buttonProps={{ icon: "cog" }} mode="click" />
                <DropDownButton text="Image" items={items} buttonProps={{ imageUrl: sample_img_icon, imageWidth: 24, imageHeight: 24 }}  mode="click" />
                <DropDownButton text="FontAwesome" items={items} buttonProps={{ iconClass: "fa fa-cog", iconStyle: { fontSize: '20px' } }}  mode="click" />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const eventLogs = `
class EventLog extends React.Component {
    renderLogs = () => {
        return this.props.logs.map((log, index)=> {
            return(<li key={index}>{log}</li>)
        })
    }
    render() {
        return(
            <div>
              <h5>{this.props.title}</h5>
              <ul>
                {this.renderLogs()}
              </ul>
            </div>
        )
    }
}
class ButtonEvents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: []
        };
    }

    handleDomEvent = (event) => {
        let logs = this.state.logs.slice();

        logs.unshift(event.type)

        this.setState({logs: logs})
    }
    render() {
        return ([
            <Button
                onClick={this.handleDomEvent}
                onMouseDown={this.handleDomEvent}
                onMouseUp={this.handleDomEvent}
                onFocus={this.handleDomEvent}
                onBlur={this.handleDomEvent}
                onKeyPress={this.handleDomEvent}
            >
                My Button
            </Button>,
            <EventLog title="Event Log" logs={this.state.logs}/>
        ])
    }
}
ReactDOM.render(
    <ButtonEvents/>,
    document.querySelector('my-app')
);
`;

const dataBinding = `
import React from 'react';
import ReactDOM from 'react-dom';
import { DropDownButton } from '@optimalui/components/buttons'

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
const objectItems = [{
    actionName: 'Undo', icon: 'reply',
}, {
    actionName: 'Redo', icon: 'forward', disabled: true
}, {
    actionName: 'Copy', icon: 'copy'
},{
    actionName: 'Delete', icon: 'trash'
}];

class App extends React.Component {
    render() {
        return (
            <div>
                <DropDownButton mode="hover" text="Settings" items={items} />
                <DropDownButton textField="actionName" items={objectItems} text="Edit" mode="click" />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`

const itemSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { DropDownButton } from '@optimalui/components/buttons'

class App extends React.Component {
    render() {
        return (
            <div>
                <DropDownButton text="File Settings">
                    <DropDownButtonItem text="Edit" icon="file-edit" />
                    <DropDownButtonItem text="Upload" icon="cloud-upload" />
                    <DropDownButtonItem text="Save As PDF" icon="file-pdf" />
                </DropDownButton>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
const objectItems = [{
    actionName: 'Undo', icon: 'reply'
}, {
    actionName: 'Redo', icon: 'forward', disabled: true
}, {
    actionName: 'Copy', icon: 'copy'
},{
    actionName: 'Delete', icon: 'trash'
}];

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
        <h2 id="animation" className="uk-h3 tm-heading-fragment"><a href="#animation">Animation</a></h2>
        <p>DropButtonComponent uses <code><a href="https://www.npmjs.com/package/react-animations" target="_blank">react-animations</a></code> react module. To implement an animation set <code>animation</code> prop and set <code>duration</code> prop to set animation duration time.</p>
        <p>All animation collection should be inspect at this <code><a href="http://react-animations.herokuapp.com/" target="_blank">link</a></code></p>
        <div className="uk-position-relative uk-margin-medium" style={{height:'100%'}}>
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <DropDownButton text="slide-In-Down" items={items} buttonProps={{primary:true}} animation="slideInDown"/>
                    <DropDownButton text="slide-In-Up" items={items} buttonProps={{secondary:true}} animation="slideInUp" style={{marginLeft:'3px'}}  />
                    <DropDownButton text="bounce" items={items} buttonProps={{danger:true}} animation="bounce" style={{marginLeft:'3px'}}  />
                    <DropDownButton text="fade-In-Down" items={items} buttonProps={{text:true}} animation="fadeInDown" style={{marginLeft:'3px'}}  />
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{animationSource}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={animationSource}/>
        </div>

        {/** ANIMATION */}
        <h2 id="icon" className="uk-h3 tm-heading-fragment"><a href="#icon">Icon Props</a></h2>
        <p>Add <code>buttonProps</code> prop   the DropDownButton component and give Button component icon props as object.</p>
        <p>Button icon properties:</p>
        <p>
            <ul className="uk-list uk-list-bullet">
                <li>The built-in icons are applied through the <code>icon</code>prop. Add <code>iconClassName</code> to add custom css class.</li>
                <li>Adding image icons. They are applied through the <code>imageUrl</code> property of the component. To change image size ,add <code>imageWidth</code> and <code>imageHeight</code> props. Add <code>iconClassName</code> to add custom css class.</li>
                <li>Adding FontAwesome and other font icons.  They are implemented by setting the required third-party CSS classes through the <code>iconClass</code> prop.</li>
            </ul>
        </p>
        <div className="uk-position-relative uk-margin-medium" style={{height:'100%'}}>
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                        <DropDownButton text="OptimalUI" items={items} buttonProps={{ icon: "cog" }} mode="click" />
                        <DropDownButton text="Image" items={items} buttonProps={{ imageUrl: sample_img_icon, imageWidth: 24, imageHeight: 24 }} style={{ marginLeft: '3px' }} mode="click" />
                        <DropDownButton text="FontAwesome" items={items} buttonProps={{ iconClass: "fa fa-cog", iconStyle: { fontSize: '20px' } }} style={{ marginLeft: '3px' }} mode="click" />
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{iconWithButton}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={iconWithButton}/>
        </div>

         {/** DATA BINDING */}
         <h2 id="data-binding" className="uk-h3 tm-heading-fragment"><a href="#data-binding">Data Binding</a></h2>
         <p>If DropDownButton list item consists of only plain text,it is sufficient giving only array of text items. </p>
         <p className="uk-text-lead">Array of Objects</p>
         <p>When the DropDownButton is bound to an array of objects, the component extracts the <code>text</code> value from the data items and,
              in this way, sets the <code>text</code> of the items in the dropdown list.</p>

         <p>If the text field in the data objects is named <code>text</code>, the component gets its value automatically. 
             If the name of the property in the data source is different,it is necessary to the <code>textField</code> property.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <DropDownButton mode="hover" text="Settings" items={items} />
                    <DropDownButton textField="actionName" items={objectItems} text="Edit" style={{ marginLeft: '3px' }} mode="click" />
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{dataBinding}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={dataBinding}/>
        </div>
        <p className="uk-text-lead">Child Components</p>
        <p>Set <code>DropDownButtonItem</code> component as child to create custom list. </p>
        <p>The following example shows how to use the <code>DropDownButtonItem</code> child components to populate the dropdown list.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Example</a></li>
                <li className=""><a href="#" aria-expanded="false">ViewSource</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <DropDownButton text="File Settings">
                        <DropDownButtonItem text="Edit" icon="file-edit" />
                        <DropDownButtonItem text="Upload" icon="cloud-upload" />
                        <DropDownButtonItem text="Save As PDF" icon="file-pdf" />
                    </DropDownButton>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{itemSource}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={itemSource}/>
        </div>

        {/** EVENTS  */}
        <h2 id="events" className="uk-h3 tm-heading-fragment"><a href="#events">Events</a></h2>
        <p>The following example demonstrates basic DropDownButton events.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Example</a></li>
                <li className=""><a href="#" aria-expanded="false">View Source</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <DropDownButtonEvents/>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{eventLogs}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={eventLogs}/>
        </div>


        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className=""><a href="#button-props">Button Style Props</a></li>
                    <li className=""><a href="#animation">Animation</a></li>
                    <li className=""><a href="#icon">Icon</a></li>
                    <li className=""><a href="#data-binding">Data Binding</a></li>
                    <li className=""><a href="#events">Events</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>
    </div>
)