import React from "react";
import { TabStrip, Tab, Grid, GridItem} from "../../components/layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import MarkupButtons from "./MarkupButtons";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardMedia,
  Avatar,
} from "../../components";
import { Button } from "../../components/buttons";
import avatarImg from "../../assets/web/img/avatar_.jpg";

const src = `
import React from "react";
import {  Grid, GridItem } from "optimalui-react";
import {Card} from "@optimalui/components";
    
export const CardSample = ()=>(
    <Grid>
       <GridItem w_1_3>
            <Card title="Default">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Card>
            </GridItem>
        <GridItem w_1_3>
            <Card color="primary" title="Primary">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Card>
        </GridItem>
        <GridItem w_1_3>
            <Card color="secondary" title="Secondary">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Card>
        </GridItem>
     </Grid>
)
`;

const srcSize = `
import React from "react";
import {  Grid, GridItem } from "optimalui-react";
import {Card} from "@optimalui/components";
    
export const CardSize = ()=>(
        <Grid>
            <GridItem w_1_2>
              <Card title="Default" size="small">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Card>
            </GridItem>
            <GridItem w_1_2>
              <Card color="primary" title="Primary" size="large">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Card>
            </GridItem>
        </Grid>
)
`;

const srcHeader = `
import React from "react";
import {  Grid, GridItem } from "optimalui-react";
import {Card,CardHeader,CardBody,CardFooter} from "@optimalui/components";
import { Button } from "@optimalui/components/buttons";
    
export const Sample = ()=>(
          <Grid>
            <GridItem w_1_2>
              <Card>
                <CardHeader
                  title="Header"
                  subheader="Subheader"
                  avatar={
                    <Avatar
                      aria-label="profile"
                      src={avatarImg}
                      width={40}
                      height={40}
                    />
                  }
                />
                <CardBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
                <CardFooter>
                  <p>
                    <Button>Button</Button>
                    <Button text style={{ marginLeft: "30px" }}>
                      Button
                    </Button>
                  </p>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>
)`;

const srcMedia = `
import React from "react";
import {  Grid, GridItem } from "optimalui-react";
import {Card,CardHeader,CardBody,CardFooter} from "@optimalui/components";
import { Button } from "@optimalui/components/buttons";

export const Sample = ()=>(
          <Grid>
            <GridItem w_1_2>
              <Card>
                <CardMedia
                  align="top"
                  src="https://getuikit.com/docs/images/light.jpg"
                />
                <CardBody>
                  <h3 className="uk-card-title">Media Top</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem w_1_2>
              <Card>
                <CardBody>
                  <h3 className="uk-card-title">Media Bottom</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
                <CardMedia
                  align="bottom"
                  src="https://getuikit.com/docs/images/light.jpg"
                />
              </Card>G
            </GridItem>
          </Grid>

          <Grid>
            <GridItem>
              <Card>
                <CardMedia
                  align="left"
                  src="https://getuikit.com/docs/images/light.jpg"
                />
                <CardBody>
                  <h3 className="uk-card-title">Media Left</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
          
          <Grid>
            <GridItem>
              <Card>
                <CardBody>
                  <h3 className="uk-card-title">Media Right</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
                <CardMedia
                  align="left"
                  src="https://getuikit.com/docs/images/light.jpg"
                />
              </Card>
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
      You can change background-color by <code>color</code> prop.
    </p>
    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem w_1_3>
              <Card title="Default">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Card>
            </GridItem>
            <GridItem w_1_3>
              <Card color="primary" title="Primary">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Card>
            </GridItem>
            <GridItem w_1_3>
              <Card color="secondary" title="Secondary">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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

export const Size = () => (
  <React.Fragment>
    <h2 id="size" className="uk-h3 tm-heading-fragment">
      <a href="#size">Size</a>
    </h2>
    <p>
      You can increase or decrease the component padding by <code>size</code>{" "}
      prop.
    </p>

    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem w_1_2>
              <Card title="Default" size="small">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Card>
            </GridItem>
            <GridItem w_1_2>
              <Card color="primary" title="Primary" size="large">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Card>
            </GridItem>
          </Grid>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {srcSize}
          </SyntaxHighlighter>
          <MarkupButtons codeText={srcSize} />
        </Tab>
      </TabStrip>
    </div>
  </React.Fragment>
);

export const Header = () => (
  <React.Fragment>
    <h2 id="header" className="uk-h3 tm-heading-fragment">
      <a href="#header">Header & Footer</a>
    </h2>
    <p>
      You can divide a Card component by <code>CardHeader,CardFooter</code> and{" "}
      <code>CardBody</code>.
    </p>

    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem w_1_2>
              <Card>
                <CardHeader
                  title="Header"
                  subheader="Subheader"
                  avatar={
                    <Avatar
                      aria-label="profile"
                      src={avatarImg}
                      width={40}
                      height={40}
                    />
                  }
                />
                <CardBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
                <CardFooter>
                  <p>
                    <Button>Button</Button>
                    <Button text style={{ marginLeft: "30px" }}>
                      Button
                    </Button>
                  </p>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {srcHeader}
          </SyntaxHighlighter>
          <MarkupButtons codeText={srcHeader} />
        </Tab>
      </TabStrip>
    </div>
  </React.Fragment>
);

export const Media = () => (
  <React.Fragment>
    <h2 id="media" className="uk-h3 tm-heading-fragment">
      <a href="#media">Media</a>
    </h2>
    <p>
      You can set an image in <code>CardMedia</code> component.You can change
      media direction with <code>align</code> prop.
      <code>align</code> prop takes value as one of{" "}
      <code>top,bottom,left,right</code> values.
    </p>

    <div className="uk-position-relative uk-margin-medium">
      <TabStrip>
        <Tab title="Preview">
          <Grid>
            <GridItem w_1_2>
              <Card>
                <CardMedia
                  align="top"
                  src="https://getuikit.com/docs/images/light.jpg"
                />
                <CardBody>
                  <h3 className="uk-card-title">Media Top</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem w_1_2>
              <Card>
                <CardBody>
                  <h3 className="uk-card-title">Media Bottom</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
                <CardMedia
                  align="bottom"
                  src="https://getuikit.com/docs/images/light.jpg"
                />
              </Card>
            </GridItem>
          </Grid>

          <Grid>
            <GridItem>
              <Card>
                <CardMedia
                  align="left"
                  src="https://getuikit.com/docs/images/light.jpg"
                />
                <CardBody>
                  <h3 className="uk-card-title">Media Left</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>

          <Grid>
            <GridItem>
              <Card>
                <CardBody>
                  <h3 className="uk-card-title">Media Right</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </CardBody>
                <CardMedia
                  align="left"
                  src="https://getuikit.com/docs/images/light.jpg"
                />
              </Card>
            </GridItem>
          </Grid>
        </Tab>
        <Tab title="Markup">
          <SyntaxHighlighter language="javascript" style={docco}>
            {srcMedia}
          </SyntaxHighlighter>
          <MarkupButtons codeText={srcMedia} />
        </Tab>
      </TabStrip>
    </div>
  </React.Fragment>
);

export const Props = () => (
  <React.Fragment>
    <h2 id="props" className="uk-h3 tm-heading-fragment"><a href="#props">Props</a></h2>
    <p>The <code>Card</code> component has the following props.</p>
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
            <td align="left"><code>color</code></td>
            <td align="left"><code>string</code></td>
            <td align="left">no</td>
            <td align="left"><code>default</code></td>
          </tr>
          <tr>
            <td align="left"><code>title</code></td>
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
            <td align="left"><code>size</code></td>
            <td align="left"><code>string</code></td>
            <td align="left">no</td>
            <td align="left"><code>''</code></td>
          </tr>
        </tbody>
    </table>
    </div>

  </React.Fragment>
)


export const CardDoc = () => (
  <div className="uk-container uk-container-small uk-position-relative">
    <h1>Card</h1>
    <p className="uk-text-lead">
      The Card component provides a layout for content and actions.
    </p>
    <Usage />
    <Size />
    <Header />
    <Media />
    <Props/>

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
            <a href="#size">Size</a>
          </li>
          <li className="">
            <a href="#header">Header & Footer</a>
          </li>
          <li className="">
            <a href="#media">Media</a>
          </li>
          <li className="">
            <a href="#props">Props</a>
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
