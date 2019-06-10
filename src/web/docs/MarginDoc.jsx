/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Margin } from '../../components/layout';
import MarkupButtons from './MarkupButtons';

const marginUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Margin } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Margin>
            <div className="uk-card uk-card-default uk-card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="uk-card uk-card-default uk-card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            </Margin>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const smallMarginUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Margin } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Margin type="small">
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </Margin>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const mediumMarginUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Margin } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Margin type="medium">
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </Margin>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const largeMarginSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Margin } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Margin type="large">
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </Margin>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const xlargeMarginSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Margin } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Margin type="xlarge">
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="uk-card uk-card-default uk-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </Margin>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const removeMarginSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Margin } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Margin type="remove">
                <div className="uk-card uk-card-default uk-card-body" style={{margin:'10px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="uk-card uk-card-default uk-card-body" style={{margin:'10px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </Margin>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

const autoMarginSource = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Margin } from '@optimalui/components/layout'

class App extends React.Component {
    render() { 
        return (
            <Margin type="auto-left">
                <div className="uk-flex uk-card uk-card-default uk-card-body uk-width-1-2@s">
                    Lorem ipsum dolor sit amet
                </div>
            </Margin>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
)
`;

export const MarginDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Margin</h1>
        <p className="uk-text-lead">Margin component provides to give space between components.</p>
        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/layout</code> module to use Margin component. Set <code>Margin</code> component as a parent to give  margin to any component.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    {/**TODO:Develop card component */}
                    <Margin>
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </Margin>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{marginUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={marginUsage}/>
        </div>
        <p>Change <code>type</code> prop when it needs to set a margin. The <code>type</code> prop takes this following values:</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">value</th>
                        <th align="left">description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>default</code></td>
                        <td align="left">It is default margin value. Adds margin to all sides of component. </td>
                    </tr>
                    <tr>
                        <td align="left"><code>top</code></td>
                        <td align="left">Adds top margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>bottom</code></td>
                        <td align="left">Adds bottom margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>left</code></td>
                        <td align="left">Adds left margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>right</code></td>
                        <td align="left">Adds right margin.</td>
                    </tr>

                </tbody>
            </table>
        </div>

        {/**SMALL MARGIN */}
        <h2 id="small" className="uk-h3 tm-heading-fragment"><a href="#small">Small Margin</a></h2>
        <p>Add following props to set small spacing between of components.</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">value</th>
                        <th align="left">description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>small</code></td>
                        <td align="left"> Adds small margin to all sides of component. </td>
                    </tr>
                    <tr>
                        <td align="left"><code>small-top</code></td>
                        <td align="left">Adds small top margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>small-bottom</code></td>
                        <td align="left">Adds small bottom margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>small-left</code></td>
                        <td align="left">Adds small left margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>small-right</code></td>
                        <td align="left">Adds small right margin.</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    {/**TODO:Develop card component */}
                    <Margin type="small">
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </Margin>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{smallMarginUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={smallMarginUsage}/>
        </div>

        {/**MEDIUM MARGIN */}
        <h2 id="medium" className="uk-h3 tm-heading-fragment"><a href="#medium">Medium Margin</a></h2>
        <p>Add following props to set medium spacing between of components.</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">value</th>
                        <th align="left">description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>medium</code></td>
                        <td align="left"> Adds medium margin to all sides of component. </td>
                    </tr>
                    <tr>
                        <td align="left"><code>medium-top</code></td>
                        <td align="left">Adds medium top margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>medium-bottom</code></td>
                        <td align="left">Adds medium bottom margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>medium-left</code></td>
                        <td align="left">Adds medium left margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>medium-right</code></td>
                        <td align="left">Adds medium right margin.</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    {/**TODO:Develop card component */}
                    <Margin type="medium">
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </Margin>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{mediumMarginUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={mediumMarginUsage}/>
        </div>

         {/**LARGE MARGIN */}
        <h2 id="large" className="uk-h3 tm-heading-fragment"><a href="#large">Large Margin</a></h2>
        <p>Add following props to set large spacing between of components.</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">value</th>
                        <th align="left">description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>large</code></td>
                        <td align="left"> Adds large margin to all sides of component. </td>
                    </tr>
                    <tr>
                        <td align="left"><code>large-top</code></td>
                        <td align="left">Adds large top margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>large-bottom</code></td>
                        <td align="left">Adds large bottom margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>large-left</code></td>
                        <td align="left">Adds large left margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>large-right</code></td>
                        <td align="left">Adds large right margin.</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    {/**TODO:Develop card component */}
                    <Margin type="large">
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </Margin>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{largeMarginSource}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={largeMarginSource}/>
        </div>

        {/**XLARGE MARGIN */}
        <h2 id="xlarge" className="uk-h3 tm-heading-fragment"><a href="#xlarge">XLarge Margin</a></h2>
        <p>Add following props to set very large spacing between of components.</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">value</th>
                        <th align="left">description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>xlarge</code></td>
                        <td align="left"> Adds larger margin to all sides of component. </td>
                    </tr>
                    <tr>
                        <td align="left"><code>xlarge-top</code></td>
                        <td align="left">Adds larger top margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>xlarge-bottom</code></td>
                        <td align="left">Adds larger bottom margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>xlarge-left</code></td>
                        <td align="left">Adds larger left margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>xlarge-right</code></td>
                        <td align="left">Adds larger right margin.</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    {/**TODO:Develop card component */}
                    <Margin type="xlarge">
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="uk-card uk-card-default uk-card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </Margin>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{xlargeMarginSource}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={xlargeMarginSource}/>
        </div>

        {/**REMOVE MARGIN */}
        <h2 id="remove" className="uk-h3 tm-heading-fragment"><a href="#remove">Remove Margin</a></h2>
        <p>Add following props to remove spacing between of components.</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">value</th>
                        <th align="left">description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>remove</code></td>
                        <td align="left"> Remove margin to all sides of component. </td>
                    </tr>
                    <tr>
                        <td align="left"><code>remove-top</code></td>
                        <td align="left">Remove top margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>remove-bottom</code></td>
                        <td align="left">Remove bottom margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>remove-left</code></td>
                        <td align="left">Remove left margin.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>remove-right</code></td>
                        <td align="left">Remove right margin.</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    {/**TODO:Develop card component */}

                    <Margin type="remove">
                            <div className="uk-card uk-card-default uk-card-body" style={{ margin: '10px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="uk-card uk-card-default uk-card-body" style={{ margin: '10px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </Margin>

                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{removeMarginSource}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={removeMarginSource}/>
        </div>


        {/**AUTO MARGIN */}
        <h2 id="auto" className="uk-h3 tm-heading-fragment"><a href="#auto">Auto Margin</a></h2>
        <p>Add following props to set auto margin. This can be useful to center or otherwise align components with a fixed width as well as flex components.</p>
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th align="left">value</th>
                        <th align="left">description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left"><code>auto</code></td>
                        <td align="left"> 	Sets left and right margin to auto, horizontally centering block and flex elements. </td>
                    </tr>
                    <tr>
                        <td align="left"><code>auto-top</code></td>
                        <td align="left">Sets top margin to auto, pushing block and flex components to the bottom.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>auto-bottom</code></td>
                        <td align="left">Sets bottom margin to auto, pushing block and flex components to the top.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>auto-left</code></td>
                        <td align="left">Sets left margin to auto, pushing block and flex components to the right.</td>
                    </tr>
                    <tr>
                        <td align="left"><code>auto-right</code></td>
                        <td align="left">Sets right margin to auto, pushing block and flex components to the left</td>
                    </tr>
                    <tr>
                        <td align="left"><code>auto-vertical</code></td>
                        <td align="left">Sets top and bottom margin to auto, vertically centering only flex components.</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="uk-switcher uk-margin">
                <li>
                    {/**TODO:Develop card component */}
                    <Margin type="auto-left">
                        <div className="uk-flex uk-card uk-card-default uk-card-body uk-width-1-2@s">
                            Lorem ipsum dolor sit amet
                        </div>
                    </Margin>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{autoMarginSource}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={autoMarginSource}/>
        </div>



        <div className="tm-sidebar-right uk-visible@l">
            <div uk-sticky="offset: 160" className="uk-sticky uk-active uk-sticky-fixed">
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100" className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-active"><a href="#usage">Usage</a></li>
                    <li className="uk-active"><a href="#small">Small Margin</a></li>
                    <li className="uk-active"><a href="#medium">Medium Margin</a></li>
                    <li className="uk-active"><a href="#large">Large Margin</a></li>
                    <li className="uk-active"><a href="#xlarge">XLarge Margin</a></li>
                    <li className="uk-active"><a href="#remove">Remove Margin</a></li>
                    <li className="uk-active"><a href="#auto">Auto Margin</a></li>
                </ul>
            </div>
            <div className="uk-sticky-placeholder" style={{ height: '249px', margin: '0px' }}></div>
        </div>



    </div>
)