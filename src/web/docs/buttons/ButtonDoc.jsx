/* eslint-disable */
import React from "react";
import { Button,TabStrip,Tab } from "optimalui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MarkupButtons from "../MarkupButtons";
import ButtonEvents from "../events/ButtonEvents";
import sample_img_icon from "../../../assets/web/img/sample_img_icon.png";
import "../../../assets/web/css/font-awesome-v4.7.0.css";

const buttonUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@optimalui/components/buttons'

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
import { Button } from '@optimalui/components/buttons'

class App extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <Button active>Active</Button>
                    <Button>Default</Button>
                    <Button primary>Primary</Button>
                </p>
                <p>
                    <Button secondary>Secondary</Button>
                    <Button danger>Danger</Button>
                    <Button text>Text</Button>
                    <Button link>Link</Button>
                </p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const sizeProps = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@optimalui/components/buttons'

class App extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <Button small>Small Button</Button>
                    <Button primary small>Small Button</Button>
                    <Button secondary small>Small Button</Button>
                </p>
                <p>
                    <Button large>Small Button</Button>
                    <Button primary large>Large Button</Button>
                    <Button secondary large>Large Button</Button>
                </p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const widthProps = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@optimalui/components/buttons'

class App extends React.Component {
    render() {
        return (
            <div>
                <Button fullWidth>Button</Button>
                <Button primary fullWidth>Button</Button>
                <Button secondary fullWidth>Button</Button>
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

const iconWithButton = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@optimalui/components/buttons'
import sample_img_icon from '../assets/img/sample_img_icon.png'

class App extends React.Component {
    render() {
        return (
            <div>
                <Button icon="heart">OptimalUI Icon</Button>
                <Button imageUrl={sample_img_icon} imageWidth={15} imageHeight={15}>Image Icon</Button>
                <Button iconClass="fa fa-thumbs-o-up" iconStyle={{fontSize:'18px'}}>FontAwesome Icon</Button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

export const ButtonDoc = () => (
  <div className="uk-container uk-container-small uk-position-relative">
    <h1>Button</h1>
    <p className="uk-text-lead">
      You can easily create functional buttons with OptimalUI React button
      component.
    </p>
    <p>
      The Button is part of the optimalui-react-buttons NPM package.(todo:npm
      links)
    </p>

    {/** USAGE */}
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#usage">Usage</a>
    </h2>
    <p>
      Import <code>@optimalui/components/buttons</code> module to use button
      component. Add the <code>disabled</code> prop to a button component to
      disable.
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <p>
            <Button>Button</Button>
            <Button disabled style={{ marginLeft: "2px" }}>
              Disabled
            </Button>
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {buttonUsage}
          </SyntaxHighlighter>
          <MarkupButtons codeText={buttonUsage} />
        </Tab>
      </TabStrip>
    </div>
    {/** STYLE PROPS  */}
    <h2 id="style-props" className="uk-h3 tm-heading-fragment">
      <a href="#style-props">Style Props</a>
    </h2>
    <p>
      There are many style props to change appearance a button. Add one of them
      to a button component to give different style .{" "}
    </p>
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
            <td align="left">
              <code>active</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>danger</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>primary</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>secondary</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>link</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>text</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="preview">
          <p>
            <Button active>Active</Button>
            <Button style={{ marginLeft: "2px" }}>Default</Button>
            <Button primary style={{ marginLeft: "2px" }}>
              Primary
            </Button>
          </p>
          <p>
            <Button secondary style={{ marginLeft: "2px" }}>
              Secondary
            </Button>
            <Button danger style={{ marginLeft: "2px" }}>
              Danger
            </Button>
            <Button text style={{ marginLeft: "2px" }}>
              Text
            </Button>
            <Button link style={{ marginLeft: "2px" }}>
              Link
            </Button>
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {styleProps}
          </SyntaxHighlighter>
        </Tab>
      </TabStrip>
      <MarkupButtons codeText={styleProps} />
    </div>

    {/** SIZE PROPS  */}
    <h2 id="size-props" className="uk-h3 tm-heading-fragment">
      <a href="#size-props">Size Props</a>
    </h2>
    <p>
      Add <code>small</code> and <code>large</code> props to a button component
      to change size.
    </p>
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
            <td align="left">
              <code>small</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>large</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <p>
            <Button small>Small Button</Button>
            <Button primary small style={{ marginLeft: "2px" }}>
              Small Button
            </Button>
            <Button secondary small style={{ marginLeft: "2px" }}>
              Small Button
            </Button>
          </p>
          <p>
            <Button large>Small Button</Button>
            <Button primary large style={{ marginLeft: "2px" }}>
              Large Button
            </Button>
            <Button secondary large style={{ marginLeft: "2px" }}>
              Large Button
            </Button>
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {sizeProps}
          </SyntaxHighlighter>
          <MarkupButtons codeText={sizeProps} />
        </Tab>
      </TabStrip>
    </div>
    {/** WIDTH PROPS  */}
    <h2 id="width-props" className="uk-h3 tm-heading-fragment">
      <a href="#width-props">Width Props</a>
    </h2>
    <p>
      Add <code>fullWidth</code> prop to a button component to make full width.
    </p>
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
            <td align="left">
              <code>fullWidth</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <p>
            <Button fullWidth>Button</Button>
            <Button primary fullWidth style={{ marginTop: "2px" }}>
              Button
            </Button>
            <Button secondary fullWidth style={{ marginTop: "2px" }}>
              Button
            </Button>
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {widthProps}
          </SyntaxHighlighter>
          <MarkupButtons codeText={widthProps} />
        </Tab>
      </TabStrip>
    </div>
    {/** ICON */}
    <h2 id="icon" className="uk-h3 tm-heading-fragment">
      <a href="#icon">Icon Props</a>
    </h2>
    <p>
      Add <code>iconStyle</code> prop the button component as style object to
      change style of icon.
    </p>
    <p>
      <ul className="uk-list uk-list-bullet">
        <li>
          The built-in icons are applied through the <code>icon</code>prop. Add{" "}
          <code>iconClassName</code> to add custom css class.
        </li>
        <li>
          Adding image icons. They are applied through the <code>imageUrl</code>{" "}
          property of the component. To change image size ,add{" "}
          <code>imageWidth</code> and <code>imageHeight</code> props. Add{" "}
          <code>iconClassName</code> to add custom css class.
        </li>
        <li>
          Adding FontAwesome and other font icons. They are implemented by
          setting the required third-party CSS classes through the{" "}
          <code>iconClass</code> prop.
        </li>
      </ul>
    </p>
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
            <td align="left">
              <code>icon</code>
            </td>
            <td align="left">
              <code>string</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>''</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>iconClassName</code>
            </td>
            <td align="left">
              <code>string</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>''</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>iconStyle</code>
            </td>
            <td align="left">
              <code>object</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>{`{}`}</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>imageUrl</code>
            </td>
            <td align="left">
              <code>string</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>''</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>imageWidth</code>
            </td>
            <td align="left">
              <code>number</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>15</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>imageHeight</code>
            </td>
            <td align="left">
              <code>number</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>15</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>iconClass</code>
            </td>
            <td align="left">
              <code>string</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>''</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <p>
            <Button icon="heart">OptimalUI Icon</Button>
            <Button
              imageUrl={sample_img_icon}
              style={{ marginLeft: "2px" }}
              imageWidth={15}
              imageHeight={15}
            >
              Image Icon
            </Button>
            <Button
              iconClass="fa fa-thumbs-o-up"
              style={{ marginLeft: "2px" }}
              iconStyle={{ fontSize: "18px" }}
            >
              FontAwesome Icon
            </Button>
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {iconWithButton}
          </SyntaxHighlighter>
          <MarkupButtons codeText={iconWithButton} />
        </Tab>
      </TabStrip>
    </div>
    {/** EVENTS  */}
    <h2 id="events" className="uk-h3 tm-heading-fragment">
      <a href="#events">Events</a>
    </h2>
    <p>The following example demonstrates basic Button events.</p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <ButtonEvents />
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {eventLogs}
          </SyntaxHighlighter>
          <MarkupButtons codeText={eventLogs} />
        </Tab>
      </TabStrip>
    </div>

    <div className="tm-sidebar-right uk-visible@l">
      <div
        uk-sticky="offset: 160"
        className="uk-sticky uk-active uk-sticky-fixed"
      >
        <ul
          uk-scrollspy-nav="closest: li; scroll: true; offset: 100"
          className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon"
        >
          <li className="uk-active">
            <a href="#usage">Usage</a>
          </li>
          <li className="">
            <a href="#style-props">Style Props</a>
          </li>
          <li className="">
            <a href="#size-props">Size Props</a>
          </li>
          <li className="">
            <a href="#width-props">Width Props</a>
          </li>
          <li className="">
            <a href="#icon">Icon Props</a>
          </li>
          <li className="">
            <a href="#events">Events</a>
          </li>
        </ul>
      </div>
      <div
        className="uk-sticky-placeholder"
        style={{ height: "249px", margin: "0px" }}
      ></div>
    </div>
  </div>
);
