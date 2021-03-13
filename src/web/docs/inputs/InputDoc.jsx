import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import MarkupButtons from "../MarkupButtons";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {Grid,GridItem,Input,TabStrip,Tab} from "optimalui-react";

const src = `
import React from "react";
import {Input} from "optimalui-react";
    
class App extends React.Component {
        render() { 
          return (
            <React.Fragment>
              <Input type="text" placeHolder="Input"/>
              <Input type="text" placeHolder="Disabled Input" disabled />
            </React.Fragment>
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
`;

const sizeSrc = `
import React from "react";
import {Input} from "optimalui-react";
    
class App extends React.Component {
        render() { 
          return (
            <React.Fragment>
              <Input type="text" placeHolder="Large Input" size="large" />
              <Input type="text" placeHolder="Medium Input" size="medium" />
              <Input type="text" placeHolder="Small Input" size="small" />
            </React.Fragment>  
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
`;

const widthSrc = `
import React from "react";
import {Input} from "optimalui-react";
    
class App extends React.Component {
        render() { 
          return (
            <React.Fragment>
              <Input type="text" placeHolder="Large Input" width="large" />
              <Input type="text" placeHolder="Medium Input" width="medium" />
              <Input type="text" placeHolder="Small Input" width="small" />
              <Input type="text" placeHolder="Small Input" width="xsmall" />
            </React.Fragment>  
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
`;

const multilineSrc = `
import React from "react";
import {Input} from "optimalui-react";
    
class App extends React.Component {
        render() { 
          return (
            <React.Fragment>
              <Input type="text" multiline placeHolder="Multiline" width="large"/>
            </React.Fragment>  
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
`;

const InputUsage = () => (
  <React.Fragment>
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#usage">Usage</a>
    </h2>
    
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem>
              <Input type="text" placeHolder="Input" />
            </GridItem>
            <GridItem>
              <Input type="text" placeHolder="Disabled Input" disabled />
            </GridItem>
          </Grid>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {src}
          </SyntaxHighlighter>
          <MarkupButtons codeText={src} />
        </Tab>
      </TabStrip>
    </div>
  </React.Fragment>
);

const InputSize = () => (
  <React.Fragment>
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#size">Size</a>
    </h2>
    <p>
      You can change <code>Input</code> size by setting <code>size</code> prop
      as <code>large</code> ,<code>medium</code> or <code>small</code>.
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem>
              <Input type="text" placeHolder="Large Input" size="large" />
              <Input type="text" placeHolder="Medium Input" size="medium" />
              <Input type="text" placeHolder="Small Input" size="small" />
            </GridItem>
          </Grid>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {sizeSrc}
          </SyntaxHighlighter>
          <MarkupButtons codeText={sizeSrc} />
        </Tab>
      </TabStrip>
    </div>
  </React.Fragment>
);
const InputWidth = () => (
  <React.Fragment>
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#width">Width</a>
    </h2>
    <p>
      You can change <code>Input</code> width by setting <code>width</code> prop
      as <code>large</code> ,<code>medium</code>,<code>small</code> or{" "}
      <code>xsmall</code>.
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem>
              <Input type="text" placeHolder="Large Input" width="large" />
              <Input type="text" placeHolder="Medium Input" width="medium" />
              <Input type="text" placeHolder="Small Input" width="small" />
              <Input type="text" placeHolder="X-Small Input" width="xsmall" />
            </GridItem>
          </Grid>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {widthSrc}
          </SyntaxHighlighter>
          <MarkupButtons codeText={widthSrc} />
        </Tab>
      </TabStrip>
    </div>
  </React.Fragment>
);

export const InputProps = () => (
  <React.Fragment>
    <h2 id="props" className="uk-h3 tm-heading-fragment">
      <a href="#props">Input Props</a>
    </h2>
    <p>The Input component has the following props.</p>
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
              <code>value</code>
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
              <code>type</code>
            </td>
            <td align="left">
              <code>string</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>'text'</code>
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
              <code>placeHolder</code>
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
              <code>disabled</code>
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
              <code>size</code>
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
              <code>width</code>
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
              <code>multiline</code>
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
  </React.Fragment>
);

const Multiline = () => (
  <React.Fragment>
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#multiline">Multiline</a>
    </h2>
    <p>
      You can use multiline text input by setting <code>multiline</code> prop as true.
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
              <Input type="text" multiline placeHolder="Multiline" width="large"/>
          </Grid>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {multilineSrc}
          </SyntaxHighlighter>
          <MarkupButtons codeText={multilineSrc} />
        </Tab>
      </TabStrip>
    </div>
  </React.Fragment>
);

export const InputDoc = () => (
  <div className="uk-container uk-container-small uk-position-relative">
    <h1>Input</h1>
    <p className="uk-text-lead">You can enter a text with input component</p>

    {/** USAGE */}
    <InputUsage />

    {/** SIZE */}
    <InputSize />

    {/** WIDTH */}
    <InputWidth />

    {/** MULTILINE */}
    <Multiline />

    {/** PROPS */}
    <InputProps />

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
            <a href="#usage">usage</a>
          </li>
          <li className="">
            <a href="#size">size</a>
          </li>
          <li className="">
            <a href="#width">width</a>
          </li>
          <li className="">
            <a href="#multiline">multiline</a>
          </li>
          <li className="">
            <a href="#props">props</a>
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
