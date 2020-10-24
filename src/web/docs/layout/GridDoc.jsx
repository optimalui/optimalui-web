import React from "react";
import { TabStrip, Tab } from "../../../components/layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import MarkupButtons from "../MarkupButtons";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Grid from "../../../components/layout/Grid";
import GridItem from "../../../components/layout/GridItem";
import { Card } from "../../../components";

const src = `
import React from "react";
import {  Grid, GridItem } from "@optimalui/components/layout";
import {Card} from "@optimalui/components";
    
export const Sample = ()=>(
      <Grid className="uk-child-width-expand@s uk-text-center">
          <GridItem>
              <Card>
                <p>Item</p>
              </Card>
          </GridItem>
          <GridItem>
              <Card>
                <p>Item</p>
              </Card>
          </GridItem>
          <GridItem>
              <Card>
                <p>Item</p>
              </Card>
          </GridItem>
      </Grid>
)
`;

const srcWidth = `
import React from "react";
import {  Grid, GridItem } from "@optimalui/components/layout";
import {Card} from "@optimalui/components";
    
export const Sample = ()=>(
  <Grid className="uk-child-width-expand@s uk-text-center">
    <GridItem w_1_3>
        <Card>
          <p>Item</p>
        </Card>
    </GridItem>
    <GridItem w_2_3>
        <Card>
          <p>Item</p>
        </Card>
    </GridItem>
  </Grid>
)`;
const GridUsage = () => (
  <React.Fragment>
    {/** USAGE */}
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#usage">Usage</a>
    </h2>

    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid className="uk-child-width-expand@s uk-text-center">
            <GridItem>
              <Card>
                <p>Item</p>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <p>Item</p>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <p>Item</p>
              </Card>
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

const Width = () => (
  <React.Fragment>
    {/** width */}
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#width">Width</a>
    </h2>
    <p classname="uk-text-lead">
      you can set a width to <code>GridItem</code> component by giving one of
      following boolean props:
      <ul className="uk-list">
        <li><code>w_1_2, w_1_3, w_2_3</code></li>
        <li><code>w_1_4, w_3_4</code></li>
        <li><code>w_1_5, w_2_5, w_3_5, w_4_5</code></li>
        <li><code>w_1_6, w_5_6</code></li>
      </ul>
    </p>

    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid className="uk-child-width-expand@s uk-text-center">
            <GridItem _1_3>
              <Card>
                <p>Item</p>
              </Card>
            </GridItem>
            <GridItem w_2_3>
              <Card>
                <p>Item</p>
              </Card>
            </GridItem>
          </Grid>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {srcWidth}
          </SyntaxHighlighter>
          <MarkupButtons codeText={srcWidth} />
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
    <Width/>
  </div>
);
