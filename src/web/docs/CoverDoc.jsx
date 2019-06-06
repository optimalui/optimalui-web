/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Height } from '../../components/layout';
import MarkupButtons from './MarkupButtons';
import {Cover} from '../../components'
import coverImg from  '../../assets/web/img/cover.jpg'

const coverUsage = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Cover } from '@optimalui/components'

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


export const CoverDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Cover</h1>
        <p className="uk-text-lead">
            Expand images, videos or iframes to cover their entire container and place your own content on top.
        </p>
        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components</code> module to use Cover component.</p>
        <div className="uk-position-relative uk-margin-medium">
            <ul uk-tab="swiping: false" className="uk-tab">
                <li className="uk-active"><a href="#" aria-expanded="true">Preview</a></li>
                <li className=""><a href="#" aria-expanded="false">Markup</a></li>
            </ul>
            <ul className="">
                <li>
                    <Height size="medium">
                        <Cover>
                            <img src={coverImg}/>
                        </Cover>
                    </Height>
                </li>
                <li>
                    <SyntaxHighlighter language='javascript' style={docco}>{coverUsage}</SyntaxHighlighter>
                </li>
            </ul>
            <MarkupButtons codeText={coverUsage}/>
        </div>

        {/**SMALL MARGIN */}
    </div>
)