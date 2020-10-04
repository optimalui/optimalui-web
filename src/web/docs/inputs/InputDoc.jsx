import React from "react";
import { TabStrip, Tab } from "../../../components/layout";
import Input from "../../../components/inputs/Input";
import SyntaxHighlighter from "react-syntax-highlighter";
import MarkupButtons from "../MarkupButtons";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Grid from "../../../components/layout/Grid";
import GridItem from "../../../components/layout/GridItem";

const src = `
import React from "react";
import {Input} from "@optimalui/components/inputs";
    
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
import {Input} from "@optimalui/components/inputs";
    
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
import {Input} from "@optimalui/components/inputs";
    
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

const InputUsage = () => (
  <React.Fragment>
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#usage">Usage</a>
    </h2>
    <p>
      Import <code>@optimalui/components/inputs</code> module to use input
      component.
    </p>
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

const InputSize = ()=>(
  <React.Fragment>
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#size">Size</a>
    </h2>
    <p>You can change <code>Input</code> size by setting <code>size</code> prop as <code>large</code> ,<code>medium</code> or <code>small</code>.</p>
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
const InputWidth = ()=>(
  <React.Fragment>
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#width">Width</a>
    </h2>
    <p>You can change <code>Input</code> width by setting <code>width</code> prop as <code>large</code> ,<code>medium</code>,<code>small</code> or <code>xsmall</code>.</p>
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

  </div>
);
