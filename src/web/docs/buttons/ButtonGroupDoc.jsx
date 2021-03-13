/* eslint-disable */
import React from "react";
import { ButtonGroup, Button,TabStrip,Tab,Margin} from "optimalui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MarkupButtons from "../MarkupButtons";

const buttonGroupUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button,ButtonGroup } from '@optimalui/components/buttons'

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
    <p className="uk-text-lead">
      You can configure each Button in the ButtonGroup separately depending on
      the requirements of your project.
    </p>
    {/** USAGE */}
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#usage">Usage</a>
    </h2>
    <p>
      Import <code>@optimalui/components/buttons</code> module to use
      ButtonGroup component.
    </p>
    <p>
      By default, the ButtonGroup component is enabled. To disable the all group
      of buttons, set the <code>disabled</code> prop of the{" "}
      <code>ButtonGroup</code> to true.
    </p>

    <TabStrip>
      <Tab title="Preview">
        <Margin type="small">
          <p>
            <ButtonGroup>
              <Button secondary>Button</Button>
              <Button secondary>Button</Button>
              <Button secondary>Button</Button>
            </ButtonGroup>
          </p>
          <p>
            <ButtonGroup>
              <Button primary>Button</Button>
              <Button primary>Button</Button>
              <Button primary>Button</Button>
            </ButtonGroup>
          </p>
          <p>
            <ButtonGroup>
              <Button danger>Button</Button>
              <Button danger>Button</Button>
              <Button danger>Button</Button>
            </ButtonGroup>
          </p>
          <p>
            <ButtonGroup disabled>
              <Button danger>Button</Button>
              <Button danger>Button</Button>
              <Button danger>Button</Button>
            </ButtonGroup>
          </p>
        </Margin>
      </Tab>
      <Tab title="Markup">
        <SyntaxHighlighter language="javascript" style={docco}>
          {buttonGroupUsage}
        </SyntaxHighlighter>
      </Tab>
    </TabStrip>

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
        </ul>
      </div>
      <div
        className="uk-sticky-placeholder"
        style={{ height: "249px", margin: "0px" }}
      ></div>
    </div>
  </div>
);
