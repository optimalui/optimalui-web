import React from "react";
import { TabStrip, Tab } from "../../../components/layout";
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

const GridUsage = () => (
  <React.Fragment>
    {/** USAGE */}
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#usage">Usage</a>
    </h2>

    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem>
              <div class="uk-card uk-card-default uk-card-body"></div>
            </GridItem>
            <GridItem>
              <div class="uk-card uk-card-default uk-card-body"></div>
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

export const GridDoc = () => (
  <div className="uk-container uk-container-small uk-position-relative">
      <h1>Grid</h1>
      <p className="uk-text-lead">
        The Grid component creates a responsive, fluid and nestable grid layout.
      </p>

      {/** USAGE */}
      <GridUsage />
  </div>
);
