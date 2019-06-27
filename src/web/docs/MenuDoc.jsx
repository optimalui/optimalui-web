/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Menu,TabStrip,Tab,TabItem, MenuItem} from '../../components/layout';
import MarkupButtons from './MarkupButtons';
import _ from 'lodash'

const usageSource = `
`;

const items = [
{
    "text": "Item1",
    "items": [
        { "text": "Item1.1" },
        {
            "text": "Item1.2",
            "items": [
                {
                    "text": "Item1.2.1",
                    "items": [{ "text": "Item1.2.1.1" }]
                },
                { "text": "Item1.2.2" }
            ]
        }
    ]
}, 
{
    "text": "Item2",
    "items": [{ "text": "Item2.1" }, { "text": "Item2.2" }, { "text": "Item2.3" }]
}, 
{
    "text": "Item3"
}]

const items2 = [{
    "text": "Item1",
    "items": [
        { "text": "Item1.1" },
        { 
            "text": "Item1.1.2",
            "items":[{"text": "Item1.1.2.1"}]
        },
    ]
}]

var flattenObject = function(ob) {
	var toReturn = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};


export const MenuDoc = () => (
    <div className="uk-container uk-container-small uk-position-relative">
        <h1>Menu</h1>
        <p className="uk-text-lead">The Optimal UI Menu is a multi-level component for displaying hierarchical data.</p>

        {/** USAGE */}
        <h2 id="usage" className="uk-h3 tm-heading-fragment"><a href="#usage">Usage</a></h2>
        <p>Import <code>@optimalui/components/layout</code> module to use Menu component.</p>
        <TabStrip>
            <Tab title="Preview">
                <div style={{ height: '400px' }}>
                    <Menu items={items2}/>
                    {/* <Menu>
                        {items.map((item,index)=>{
                            item.items && item.items.length ? item.items.map()
                            <MenuItem text={item.text} items= />
                        })}
                    </Menu> */}

                </div>

            </Tab>
            <Tab title="Markup">
                <SyntaxHighlighter language='javascript' style={docco}>{usageSource}</SyntaxHighlighter>
            </Tab>
        </TabStrip>
        <MarkupButtons codeText={usageSource} />




    </div>

)