/*eslint-disable */
import React from "react";
import { Icon } from "optimalui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MarkupButtons from "./MarkupButtons";
import IconLibrary from "./IconLibrary";
import { TabStrip } from "optimalui-react";
import { Tab } from "optimalui-react";

const iconUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@optimalui/components'

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
`;

const linkSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@optimalui/components'

class App extends React.Component {
    render() { 
        return (
            <div>
                <Icon name="google" link="www.google.com" target="_blank"/>
                <Icon name="facebook" link="www.facebook.com" target="_blank"/>
                <Icon name="linkedin" link="www.linkedin.com" target="_blank"/>
                <Icon name="github" link="www.github.com" target="_blank" />
                <Icon name="twitter" link="www.twitter.com" target="_blank"/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const sizeSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@optimalui/components'

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
`;

const iconButton = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@optimalui/components'

class App extends React.Component {
    render() { 
        return (
            <div>
                <Icon name="twitter" isButton link="www.twitter.com" target="_blank"/>
                <Icon name="facebook" isButton link="www.facebook.com" target="_blank" />
                <Icon name="google" isButton link="www.google.com" target="_blank"/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

export const IconDoc = () => (
  <div className="uk-container uk-container-small uk-position-relative">
    <h1>Icon</h1>
    <p className="uk-text-lead">
      You can use Icon component anywhere in your content.
    </p>
    {/** USAGE */}
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#usage">Usage</a>
    </h2>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <p>
            <Icon name="check" />
            <Icon name="heart" style={{ marginLeft: "10px" }} />
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {iconUsage}
          </SyntaxHighlighter>
          <MarkupButtons codeText={iconUsage} />
        </Tab>
      </TabStrip>
    </div>
    {/** SIZE*/}
    <h2 id="size" className="uk-h3 tm-heading-fragment">
      <a href="#size">Size Modifier</a>
    </h2>
    <p>
      To change default size ,set <code>size</code> property as number.
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <p>
            <Icon name="check" size={2} />
            <Icon name="check" size={3.5} style={{ marginLeft: "10px" }} />
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {sizeSource}
          </SyntaxHighlighter>
          <MarkupButtons codeText={sizeSource} />
        </Tab>
      </TabStrip>
    </div>
    {/** LINK*/}
    <h2 id="link" className="uk-h3 tm-heading-fragment">
      <a href="#link">Link</a>
    </h2>
    <p>
      Set <code>link</code> prop to Icon component to set the component as a
      link property at external or inside your content. Add{" "}
      <code>linkClassName</code> prop to the Icon component to use custom link
      css class{" "}
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <p>
            <Icon name="google" link="www.google.com" target="_blank" />
            <Icon
              name="facebook"
              link="www.facebook.com"
              target="_blank"
              style={{ marginLeft: "10px" }}
            />
            <Icon
              name="linkedin"
              link="www.linkedin.com"
              target="_blank"
              style={{ marginLeft: "10px" }}
            />
            <Icon
              name="github"
              link="www.github.com"
              target="_blank"
              style={{ marginLeft: "10px" }}
            />
            <Icon
              name="twitter"
              link="www.twitter.com"
              target="_blank"
              style={{ marginLeft: "10px" }}
            />
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {linkSource}
          </SyntaxHighlighter>
          <MarkupButtons codeText={linkSource} />
        </Tab>
      </TabStrip>
    </div>

    {/** BUTTON*/}
    <h2 id="button" className="uk-h3 tm-heading-fragment">
      <a href="#button">Icon Button</a>
    </h2>
    <p>
      Use <code>isButton</code> prop to change Icon as the button style.
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <p>
            <Icon
              name="twitter"
              isButton
              link="www.twitter.com"
              target="_blank"
            />
            <Icon
              name="facebook"
              isButton
              link="www.facebook.com"
              target="_blank"
            />
            <Icon
              name="google"
              isButton
              link="www.google.com"
              target="_blank"
            />
          </p>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {iconButton}
          </SyntaxHighlighter>

          <MarkupButtons codeText={iconButton} />
        </Tab>
      </TabStrip>
    </div>

    {/** LIBRARY*/}
    <h2 id="library" className="uk-h3 tm-heading-fragment">
      <a href="#library">Icon Library</a>
    </h2>
    <p>Here is an overview of all currently available icons.</p>
    <IconLibrary />

    {/** PROPS*/}
    <h2 id="props" className="uk-h3 tm-heading-fragment">
      <a href="#props">Icon Props</a>
    </h2>
    <p>The Icon component has the following props.</p>
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
              <code>name</code>
            </td>
            <td align="left">
              <code>string</code>
            </td>
            <td align="left">yes</td>
            <td align="left">
              <code>''</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>size</code>
            </td>
            <td align="left">
              <code>number</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>1</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>link</code>
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
              <code>isButton</code>
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
              <code>className</code>
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
              <code>linkClassName</code>
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
            <a href="#size">Size Modifier</a>
          </li>
          <li className="">
            <a href="#link">Link</a>
          </li>
          <li className="">
            <a href="#button">Icon Button</a>
          </li>
          <li className="">
            <a href="#library">Icon Library</a>
          </li>
          <li className="">
            <a href="#props">Icon Props</a>
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
