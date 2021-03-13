
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import MarkupButtons from "../MarkupButtons";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {Grid,GridItem,Checkbox,TabStrip,Tab} from "optimalui-react";

const src = `
import React from "react";
import { Checkbox } from "optimalui/components/inputs";
import { Grid,GridItem } from "optimalui/components/layout";
    
class App extends React.Component {
        render() { 
          return (
            <React.Fragment>
                <Grid>
                    <GridItem>
                        <Checkbox value="Checked" checked />
                    </GridItem>
                    <GridItem>
                        <Checkbox value="Unchecked" />
                    </GridItem>
                    <GridItem>
                        <Checkbox value="Disabled" disabled />
                    </GridItem>
                </Grid>
            </React.Fragment>
            )
        }
    }
    
    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
`;


export const CheckboxProps = () => (
  <React.Fragment>
    <h2 id="props" className="uk-h3 tm-heading-fragment"><a href="#props">Checkbox Props</a></h2>
    <p>The Checkbox component has the following props.</p>
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
            <td align="left"><code>value</code></td>
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
            <td align="left"><code>disabled</code></td>
            <td align="left"><code>bool</code></td>
            <td align="left">no</td>
            <td align="left"><code>false</code></td>
          </tr>
          
          <tr>
            <td align="left"><code>checked</code></td>
            <td align="left"><code>bool</code></td>
            <td align="left">no</td>
            <td align="left"><code>false</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
)


const Usage = () => (
    <React.Fragment>
        <h2 id="usage" className="uk-h3 tm-heading-fragment">
            <a href="#usage">Usage</a>
        </h2>
        
        <div className="uk-position-relative uk-margin-medium">
            <TabStrip>
                <Tab title="Preview">
                    <Grid>
                        <GridItem>
                            <Checkbox value="Checked" checked />
                        </GridItem>
                        <GridItem>
                            <Checkbox value="Unchecked" />
                        </GridItem>
                        <GridItem>
                            <Checkbox value="Disabled" disabled />
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

export const CheckboxDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Checkbox</h1>
        <p className="uk-text-lead">
            The CheckBox component is type of input that provides boolean selection field.
    </p>

        {/** USAGE */}
        <Usage />

        {/** PROPS */}
        <CheckboxProps />

        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className="uk-active"><a href="#props">Props</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>

    </div>
);
