import React from "react";
import { TabStrip, Tab, Margin } from "../../../components/layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import MarkupButtons from "../MarkupButtons";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Grid from "../../../components/layout/Grid";
import GridItem from "../../../components/layout/GridItem";
import RadioGroup from "../../../components/inputs/RadioGroup";
import Radio from "../../../components/inputs/Radio";

const src = `
import React from "react";
import { Radio,RadioGroup} from "optimalui/components/inputs";
import { Grid,GridItem } from "optimalui/components/layout";
    
export const App = () => {

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
            <React.Fragment>
                    <Grid>
                        <GridItem>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <label><Radio value="male" /> Male</label>
                                <label><Radio value="female" /> Female</label>
                            </RadioGroup>
                        /GridItem>
                    </Grid>
            </React.Fragment>
        )
}
    
ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    ) 
`;


export const RadioProps = () => (
    <React.Fragment>
        <h2 id="props" className="uk-h3 tm-heading-fragment"><a href="#props">Radio Props</a></h2>
        <p>The Radio component has the following props.</p>
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
                        <td align="left">yes</td>
                        <td align="left"><code>''</code></td>
                    </tr>

                    <tr>
                        <td align="left"><code>required</code></td>
                        <td align="left"><code>bool</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>false</code></td>
                    </tr>

                    <tr>
                        <td align="left"><code>onChange</code></td>
                        <td align="left"><code>func</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>null</code></td>
                    </tr>

                    <tr>
                        <td align="left"><code>name</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
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



        <h2 id="r_group_props" className="uk-h3 tm-heading-fragment"><a href="#r_group_props">RadioGroup Props</a></h2>
        <p>The RadioGroup component has the following props.</p>
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
                        <td align="left"><code>defaultValue</code></td>
                        <td align="left"><code>string | number</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>null</code></td>
                    </tr>

                    <tr>
                        <td align="left"><code>name</code></td>
                        <td align="left"><code>string</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
                    </tr>

                    <tr>
                        <td align="left"><code>onChange</code></td>
                        <td align="left"><code>func</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>null</code></td>
                    </tr>

                    <tr>
                        <td align="left"><code>value</code></td>
                        <td align="left"><code>any</code></td>
                        <td align="left">no</td>
                        <td align="left"><code>''</code></td>
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


const Usage = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <React.Fragment>
            <h2 id="usage" className="uk-h3 tm-heading-fragment">
                <a href="#usage">Usage</a>
            </h2>
            <p>
                Import <code>@optimalui/components/inputs</code> module to use Radio and RadioGroup
      components.
    </p>
            <div className="uk-position-relative uk-margin-medium">
                <TabStrip>
                    <Tab title="Preview">
                        <Grid>
                            <GridItem>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <label><Radio value="male" /> Male</label>
                                    <label><Radio value="female" /> Female</label>
                                </RadioGroup>
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
    )
}

export const RadioDoc = () => {

    return (
        <div className="uk-container uk-container-small uk-position-relative">
            <h1>Radio</h1>
            <p className="uk-text-lead">
                The Radio component allows a selection from a set of options.
            </p>

            {/** USAGE */}
            <Usage />


            {/** PROPS */}
            <RadioProps />


            <div className="tm-sidebar-right uk-visible@l">
                <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                    <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                        <li className="uk-active"><a href="#usage">Usage</a></li>
                        <li className="uk-active"><a href="#props">Radio Props</a></li>
                        <li className="uk-active"><a href="#r_group_props">RadioGroup Props</a></li>
                    </ul>
                </div>
                <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
            </div>

        </div>)
};
