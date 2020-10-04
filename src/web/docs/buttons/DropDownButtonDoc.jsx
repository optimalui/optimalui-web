/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkupButtons from '../MarkupButtons';
import {DropDownButton,DropDownButtonItem} from '../../../components/buttons';
import { Icon } from '../../../components';
import sample_img_icon from '../../../assets/web/img/sample_settings_icon.png'
import DropDownButtonEvents from '../events/DropDownButtonEvent';
import { TabStrip, Tab,TabItem } from '../../../components/layout';

const dropDownUsage = `
import React from 'react'; 
import ReactDOM from 'react-dom';
import { DropDownButton } from '@optimalui/components/buttons'

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];

class App extends React.Component {
    render() { 
        return (
            <div>
                <DropDownButton text="Hover" items={items} />
                <DropDownButton text="Click" items={items} />
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
const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
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
    handleItemClick = (event) => {
        if (event.item) {

            const key = event.item._reactInternalFiber.key,
                text = event.item._reactInternalFiber.pendingProps.text


            this.setState((state, props) => {
                let logs = state.logs.slice();
                logs.unshift(`.concat('`item click {key:${key},text:${text}`').concat(`);
                return { logs };
            });
        }
    }
    render() {
        return ([
            <DropDownButton
                text="Events"
                items={items}
                onItemClick={(e) => this.handleItemClick(e)}
                onMouseEnter={() =>this.handleDomEvent('mouseenter')}
                onFocus={() =>this.handleDomEvent('focus')}
                onBlur={() =>this.handleDomEvent('blur')}

            />,
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
`);

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

const itemClick = `
import React from 'react';
import ReactDOM from 'react-dom';
import { DropDownButton } from '@optimalui/components/buttons'

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];

class App extends React.Component {
    render() {
        return (
            <div>
                <DropDownButton text="File Settings" items={items} onItemClick={(info)=>{alert(info.item._reactInternalFiber.pendingProps.text)}}/>
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
            <TabStrip>
                <Tab title="Preview"> 
                    <DropDownButton mode="hover" text="Hover" items={items} />
                    <DropDownButton mode="click" text="Click" items={items} style={{ marginLeft: '3px' }}  />
                    <DropDownButton text="Disabled" items={items} style={{ marginLeft: '3px' }} buttonProps={{ disabled: true }} />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{dropDownUsage}</SyntaxHighlighter>
                    <MarkupButtons codeText={dropDownUsage}/>
                </Tab>
            </TabStrip>
        </div>

        {/** BUTTON STYLE */}
        <h2 id="button-props" className="uk-h3 tm-heading-fragment"><a href="#button-props">Button Style Props</a></h2>
        <p>To use different DropDownButton style ,set Button component props with <code>buttonProps</code> prop.</p>
        <div className="uk-position-relative uk-margin-medium" style={{ height: '100%' }}>
            <TabStrip>
                <Tab title="Preview">
                    <DropDownButton text="Settings" items={items} buttonProps={{ primary: true }} />
                    <DropDownButton text="Settings" items={items} buttonProps={{ secondary: true }} style={{ marginLeft: '3px' }} />
                    <DropDownButton text="Settings" items={items} buttonProps={{ danger: true }} style={{ marginLeft: '3px' }} />
                    <DropDownButton text="Settings" items={items} buttonProps={{ text: true }} style={{ marginLeft: '3px' }} />                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{dropDownStyle}</SyntaxHighlighter>
                    <MarkupButtons codeText={dropDownStyle} />
                </Tab>
            </TabStrip>
        </div>

        {/** ANIMATION */}
        <h2 id="animation" className="uk-h3 tm-heading-fragment"><a href="#animation">Animation</a></h2>
        <p>DropButtonComponent uses <code><a href="https://www.npmjs.com/package/react-animations" target="_blank">react-animations</a></code> react module. To implement an animation, set <code>animation</code> prop and set <code>duration</code> prop to change animation duration time.</p>
        <p>All animation collection should be inspect at this <code><a href="http://react-animations.herokuapp.com/" target="_blank">link</a></code></p>
        <div className="uk-position-relative uk-margin-medium" style={{height:'100%'}}>
            <TabStrip>
                <Tab title="Preview">
                    <DropDownButton text="slide-In-Down" items={items} buttonProps={{ primary: true }} animation="slideInDown" />
                    <DropDownButton text="slide-In-Up" items={items} buttonProps={{ secondary: true }} animation="slideInUp" style={{ marginLeft: '3px' }} />
                    <DropDownButton text="bounce" items={items} buttonProps={{ danger: true }} animation="bounce" style={{ marginLeft: '3px' }} />
                    <DropDownButton text="fade-In-Down" items={items} buttonProps={{ text: true }} animation="fadeInDown" style={{ marginLeft: '3px' }} />

                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{animationSource}</SyntaxHighlighter>
                    <MarkupButtons codeText={animationSource} />
                </Tab>
            </TabStrip>
        </div>

        {/** ICON PROPS */}
        <h2 id="icon" className="uk-h3 tm-heading-fragment"><a href="#icon">Icon Props</a></h2>
        <p>Add <code>buttonProps</code> prop   the DropDownButton component and give Button component icon props as object.</p>
        <p>Button icon properties:</p>
            <ul className="uk-list uk-list-bullet">
                <li>The built-in icons are applied through the <code>icon</code>prop. Add <code>iconClassName</code> to add custom css class.</li>
                <li>Adding image icons. They are applied through the <code>imageUrl</code> property of the component. To change image size ,add <code>imageWidth</code> and <code>imageHeight</code> props. Add <code>iconClassName</code> to add custom css class.</li>
                <li>Adding FontAwesome and other font icons.  They are implemented by setting the required third-party CSS classes through the <code>iconClass</code> prop.</li>
            </ul>
        <div className="uk-position-relative uk-margin-medium" style={{height:'100%'}}>
            <TabStrip>
                <Tab title="Preview">
                    <DropDownButton text="OptimalUI" items={items} buttonProps={{ icon: "cog" }} mode="click" />
                    <DropDownButton text="Image" items={items} buttonProps={{ imageUrl: sample_img_icon, imageWidth: 24, imageHeight: 24 }} style={{ marginLeft: '3px' }} mode="click" />
                    <DropDownButton text="FontAwesome" items={items} buttonProps={{ iconClass: "fa fa-cog", iconStyle: { fontSize: '20px' } }} style={{ marginLeft: '3px' }} mode="click" />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{iconWithButton}</SyntaxHighlighter>
                    <MarkupButtons codeText={iconWithButton} />
                </Tab>
            </TabStrip>        
        </div>

        {/** PROPS  */}
        <h2 id="props" className="uk-h3 tm-heading-fragment"><a href="#props">DropDownButton Props</a></h2>
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
                        <td align="left"><code>text</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>className</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>items</code></td>
                        <td align="left"><code>array</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>[]</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>listClassName</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>disabled</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>buttonProps</code></td>
                        <td align="left"><code>object</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>{`{}`}</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>mode</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>hover</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>animation</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>duration</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>textField</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>onItemClick</code></td>
                        <td align="left"><code>func</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>null</code></td>
                    </tr>
                </tbody>
            </table>
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
            <TabStrip>
                <Tab title="Preview">
                    <DropDownButton mode="hover" text="Settings" items={items} />
                    <DropDownButton textField="actionName" items={objectItems} text="Edit" style={{ marginLeft: '3px' }} mode="click" />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{dataBinding}</SyntaxHighlighter>
                    <MarkupButtons codeText={dataBinding} />
                </Tab>
            </TabStrip>         
        </div>
        {/** CHILD COMPONENTS */}
        <p className="uk-text-lead">Child Components</p>
        <p>Set <code>DropDownButtonItem</code> component as child to create custom list. </p>
        <p>The following example shows how to use the <code>DropDownButtonItem</code> child components to populate the dropdown list.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <DropDownButton text="File Settings">
                        <DropDownButtonItem text="Edit" icon="file-edit" />
                        <DropDownButtonItem text="Upload" icon="cloud-upload" />
                        <DropDownButtonItem text="Save As PDF" icon="file-pdf" />
                    </DropDownButton>
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{itemSource}</SyntaxHighlighter>
                    <MarkupButtons codeText={itemSource} />
                </Tab>
            </TabStrip>           
        </div>
        <p className="uk-text-lead">DropDownButtonItem Props</p>
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
                        <td align="left"><code>text</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">yes</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>className</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>disabled</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>link</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>linkTarget</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>icon</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>imageUrl</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>imageWidth</code></td>
                        <td align="left"><code>number</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>15</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>imageHeight</code></td>
                        <td align="left"><code>number</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>15</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>iconClass</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>iconClassName</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>listClassName</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>
                    <tr>
                        <td align="left"><code>iconStyle</code></td>
                        <td align="left"><code>object</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>{`{}`}</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
        

        {/** EVENTS  */}
        <h2 id="events" className="uk-h3 tm-heading-fragment"><a href="#events">Events</a></h2>
        <p>The following example demonstrates basic DropDownButton events.</p>
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <DropDownButtonEvents />
                </Tab>
                <Tab title="Markup">
                    <SyntaxHighlighter language='javascript' style={docco}>{eventLogs}</SyntaxHighlighter>
                    <MarkupButtons codeText={eventLogs} />
                </Tab>
            </TabStrip>  
        </div>
        {/**TODO:Change onItemClick */}
        <p><code>onItemClick</code> function prop is getting with default object variables which is <code>item</code> and <code>domEvent</code>.You can inspect this when create a custom item click function.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Example</a></li>
                <li className=""><a href="#" aria-expanded="false">View Source</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    <DropDownButton text="File Settings" 
                        items={items} 
                        onItemClick={(info)=>{alert(info.item._reactInternalFiber.pendingProps.text)}}/>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{itemClick}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={itemClick}/>
        </div>

        {/** KEYBOARD-NAVIGATIONS */}
        <h2 id="keyboard" className="uk-h3 tm-heading-fragment"><a href="#keyboard">Keyboard Navigations</a></h2>
        <p>The DropDownButton supports the following keyboard shortcuts:</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">Shortcut</th>
                        <th align="left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>Alt+Down Arrow</code></td>
                        <td align="left">Open the popup</td>
                    </tr>
                    <tr>
                        <td align="left"><code>Esc</code></td>
                        <td align="left">Closes the popup</td>
                    </tr>
                    <tr>
                        <td align="left"><code>Up Arrow</code></td>
                        <td align="left">Sets the focus on the previously available item.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>Down Arrow</code></td>
                        <td align="left">Sets the focus on the next available item.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>Enter</code></td>
                        <td align="left">Activates the highlighted item and closes the popup.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/** ACCESSIBILITY */}
        <h2 id="accessibility" className="uk-h3 tm-heading-fragment"><a href="#accessibility">Accessibility</a></h2>
        <p>The DropDownButton is accessible by screen readers and provides full <strong>WAI-ARIA</strong> support.</p>
        <p>The DropDownButton uses the <code>role="menu"</code>, <code>aria-haspopup="true"</code>, <code>aria-expanded</code>, <code>aria-owns</code>  attributes. </p>
        
        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className=""><a href="#button-props">Button Style Props</a></li>
                    <li className=""><a href="#animation">Animation</a></li>
                    <li className=""><a href="#icon">Icon</a></li>
                    <li className=""><a href="#props">DropDownButton Props</a></li>
                    <li className=""><a href="#data-binding">Data Binding</a></li>
                    <li className=""><a href="#events">Events</a></li>
                    <li className=""><a href="#keyboard">Keyboard Navigation</a></li>
                    <li className=""><a href="#accessibility">Accesibility</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>
    </div>
)