import React from "react";
import { TabStrip, Tab, Grid, GridItem} from "../../components/layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import MarkupButtons from "./MarkupButtons";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Avatar } from "../../components";

const src = `
import React from "react";
import {  Grid, GridItem } from "@optimalui/components/layout";
import {Avatar} from "@optimalui/components";
    
export const Sample = ()=>(
        <Grid>
            <GridItem>
              <Avatar
                aria-label="profile"
                src="https://getuikit.com/docs/images/avatar.jpg"
                width={40}
                height={40}
              />
            </GridItem>
            <GridItem>
              <Avatar
                aria-label="profile"
                src="https://getuikit.com/docs/images/avatar.jpg"
                width={60}
                height={60}
              />
            </GridItem>
        </Grid>
)
`;

const Usage = () => (
  <React.Fragment>
    {/** USAGE */}
    <h2 id="usage" className="uk-h3 tm-heading-fragment">
      <a href="#usage">Usage</a>
    </h2>
    <p>
      You can set a image source with <code>src</code> prop. If it needed to
      change size then you can <code>width</code> and <code>height</code> props.
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem>
              <Avatar
                aria-label="profile"
                src="https://getuikit.com/docs/images/avatar.jpg"
                width={40}
                height={40}
              />
            </GridItem>
            <GridItem>
              <Avatar
                aria-label="profile"
                src="https://getuikit.com/docs/images/avatar.jpg"
                width={60}
                height={60}
              />
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

export const AvatarDoc = () => (
  <div className="uk-container uk-container-small uk-position-relative">
    <h1>Avatar</h1>
    <p className="uk-text-lead">
      You can create a image avatar by this component.
    </p>
    <Usage />
  </div>
);
