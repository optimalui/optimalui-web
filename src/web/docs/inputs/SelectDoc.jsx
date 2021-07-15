import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import MarkupButtons from "../MarkupButtons";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Select, Tab, TabStrip, Grid, Margin, GridItem } from "optimalui-react";

const src = `
import React,{useState} from "react";
import {Select,Grid,GridItem} from "optimalui-react";
    
export const SelectSample = ()=>{
          const [value, setValue] = useState("");
          const handleChange = (val) => {
            if (val) setValue(val);
          };
          return (
            <React.Fragment>
              <Grid>
                <GridItem w_1_2>
                  <Select
                    onChange={handleChange}
                    placeholder="Select Items"
                    options={[
                      { text: "Item-1", value: "item-1" },
                      { text: "Item-2", value: "item-2" },
                      { text: "Item-3", value: "item-3" },
                    ]}
                  />
                </GridItem>
                <GridItem w_1_2>
                  <Select
                    onChange={handleChange}
                    disabled
                    placeholder="Select Items"
                    options={[
                      { text: "Item-1", value: "item-1" },
                      { text: "Item-2", value: "item-2" },
                      { text: "Item-3", value: "item-3" },
                    ]}
                  />
                </GridItem>
              </Grid>
              <Grid>
                <GridItem w_1_2>
                  <Select
                    helperText="Some important text!"
                    onChange={handleChange}
                    placeholder="Select Items"
                    options={[
                      { text: "Item-1", value: "item-1" },
                      { text: "Item-2", value: "item-2" },
                      { text: "Item-3", value: "item-3" },
                    ]}
                  />
                </GridItem>
                <GridItem w_1_2>
                  <Select
                    error
                    helperText="Some important error!"
                    onChange={handleChange}
                    placeholder="Select Items"
                    options={[
                      { text: "Item-1", value: "item-1" },
                      { text: "Item-2", value: "item-2" },
                      { text: "Item-3", value: "item-3" },
                    ]}
                  />
                </GridItem>
              </Grid>
              <Grid>
                    <p style={{marginLeft:"10px"}}>
                      <code>selected item : {JSON.stringify(value)}</code>
                    </p>
              </Grid>
            </React.Fragment>
           )
        }
      }
`;

const groupSrc = `
import React,{useState} from "react";
import {Select,Grid,GridItem} from "optimalui-react";
    
export const SelectSample = ()=>{
          const [value, setValue] = useState("");
          const handleChange = (val) => {
            if (val) setValue(val);
          };
          return (
            <React.Fragment>
              <Grid>
                <GridItem w_1_2>
                  <Select
                    onChange={handleChange}
                    placeholder="Select Items"
                    options={[
                      {
                        text: "Group-items-1",
                        group: [
                          { text: "Item-1.1", value: "item-1.1" },
                          { text: "Item-1.2", value: "item-1.2" },
                          { text: "Item-1.3", value: "item-1.3" },
                        ],
                      },
                      {
                        text: "Group-items-2",
                        group: [
                          { text: "Item-2.1", value: "item-2.1" },
                          { text: "Item-2.2", value: "item-2.2" },
                          { text: "Item-2.3", value: "item-2.3" },
                        ],
                      },
                    ]}
                  />
                </GridItem>
            </Grid>
            <Grid>
                <p>
                  <code>selected item : {JSON.stringify(value)}</code>
                </p>
            </Grid>
            </React.Fragment>
           )
        }
      }
`;

const multipleSrc = `
import React,{useState} from "react";
import {Select,Grid,GridItem} from "optimalui-react";
    
export const SelectSample = ()=>{
          const [values, setValues] = useState([]);
          
          const handleMultipleChange = (e) => {
            setValues(e);
          };

          return (
            <React.Fragment>
            <Grid>
                <GridItem w_1_2>
              <Select
                multiple
                onChange={handleMultipleChange}
                placeholder="Select Items"
                options={[
                  { text: "Item-1", value: "item-1" },
                  { text: "Item-2", value: "item-2" },
                  { text: "Item-3", value: "item-3" },
                ]}
              />
              </GridItem>
            </Grid>
            <Grid>
                <p>
                  <code>selected items : {JSON.stringify(values)}</code>
                </p>
            </Grid>
            </React.Fragment>
           )
        }
      }
`;

const filterSrc = `
import React,{useState} from "react";
import {Select,Grid,GridItem} from "optimalui-react";
    
export const SelectSample = ()=>{
          const [values, setValues] = useState([]);
          const [value, setValue] = useState("");

          const handleChange = (val) => {
            if (val) setValue(val);
          };
          const handleMultipleChange = (e) => {
            setValues(e);
          };

          return (
            <React.Fragment>
            <Grid>
              <GridItem w_1_2>
                <Select
                  filterable
                  onChange={handleChange}
                  placeholder="Filter Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
              <GridItem w_1_2>
                <Select
                  filterable
                  multiple
                  onChange={handleMultipleChange}
                  placeholder="Filter Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
            </Grid>
            <Grid>
              <GridItem w_1_2>
                <Select
                  filterable
                  onChange={handleChange}
                  placeholder="Filter Items"
                  options={[
                    {
                      text: "Group-items-1",
                      group: [
                        { text: "Item-1.1", value: "item-1.1" },
                        { text: "Item-1.2", value: "item-1.2" },
                        { text: "Item-1.3", value: "item-1.3" },
                      ],
                    },
                    {
                      text: "Group-items-2",
                      group: [
                        { text: "Item-2.1", value: "item-2.1" },
                        { text: "Item-2.2", value: "item-2.2" },
                        { text: "Item-2.3", value: "item-2.3" },
                      ],
                    },
                  ]}
                />
              </GridItem>
            </Grid>
            <Grid>
                <p>
                  <code>selected items : {JSON.stringify(values)}</code>
                </p>
                <p>
                  <code>selected item : {JSON.stringify(value)}</code>
                </p>
            </Grid>
            </React.Fragment>
           )
        }
      }
`;
const SelectUsage = () => {
  const [value, setValue] = useState("");
  const [values, setValues] = useState([]);
  const handleChange = (val) => {
    if (val) setValue(val);
  };
  const handleMultipleChange = (e) => {
    setValues(e);
  };
  return (
    <React.Fragment>
      <h2 id="usage" className="uk-h3 tm-heading-fragment">
        <a href="#usage">Usage</a>
      </h2>
      <p>
        Give an array to <code>options</code> prop by setting with{" "}
        <code>text</code> and <code>value</code> keys.{" "}
      </p>
      <p>
        You can set a disabled <code>Select</code> by giving{" "}
        <code>disabled</code> prop as true.{" "}
      </p>
      <p>
        If you want to use custom text to indicate some message then you can set{" "}
        <code>helperText</code> prop by writing your message. Also if the
        message is about an error then you should set an <code>error</code> prop
        as <code>true</code>.
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <Grid>
              <GridItem w_1_2>
                <Select
                  onChange={handleChange}
                  placeholder="Select Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
              <GridItem w_1_2>
                <Select
                  onChange={handleChange}
                  disabled
                  placeholder="Select Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
            </Grid>
            <Grid>
              <GridItem w_1_2>
                <Select
                  helperText="Some important text!"
                  onChange={handleChange}
                  placeholder="Select Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
              <GridItem w_1_2>
                <Select
                  error
                  helperText="Some important error!"
                  onChange={handleChange}
                  placeholder="Select Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
            </Grid>
            <Grid>
              <Margin type="top">
                <p>
                  <code>selected item : {JSON.stringify(value)}</code>
                </p>
              </Margin>
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
      <h2 id="group" className="uk-h3 tm-heading-fragment">
        <a href="#group">Group</a>
      </h2>
      <p>
        If you want to group a <code>Select</code> options then you should set
        an array in a <code>group</code> key.
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <Grid>
              <GridItem w_1_2>
                <Select
                  onChange={handleChange}
                  placeholder="Select Items"
                  options={[
                    {
                      text: "Group-items-1",
                      group: [
                        { text: "Item-1.1", value: "item-1.1" },
                        { text: "Item-1.2", value: "item-1.2" },
                        { text: "Item-1.3", value: "item-1.3" },
                      ],
                    },
                    {
                      text: "Group-items-2",
                      group: [
                        { text: "Item-2.1", value: "item-2.1" },
                        { text: "Item-2.2", value: "item-2.2" },
                        { text: "Item-2.3", value: "item-2.3" },
                      ],
                    },
                  ]}
                />
              </GridItem>
            </Grid>
            <Grid>
              <p>
                <code>selected item : {JSON.stringify(value)}</code>
              </p>
            </Grid>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {groupSrc}
            </SyntaxHighlighter>
            <MarkupButtons codeText={groupSrc} />
          </Tab>
        </TabStrip>
      </div>
      <h2 id="multiple" className="uk-h3 tm-heading-fragment">
        <a href="#multiple">Multiple</a>
      </h2>
      <p>
        You can handle multiple the <code>Select</code> component with setting{" "}
        <code>multiple</code> prop as <code>true</code>.
      </p>
      <p>
        You can get selected values with <code>onChange</code> method. It
        returns last selected values.
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <Grid>
              <GridItem w_1_2>
                <Select
                  multiple
                  onChange={handleMultipleChange}
                  placeholder="Select Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
            </Grid>
            <Grid>
              <p>
                <code>selected items : {JSON.stringify(values)}</code>
              </p>
            </Grid>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {multipleSrc}
            </SyntaxHighlighter>
            <MarkupButtons codeText={multipleSrc} />
          </Tab>
        </TabStrip>
      </div>
      <h2 id="filter" className="uk-h3 tm-heading-fragment">
        <a href="#filter">Filter</a>
      </h2>
      <p>
        You can filter options by setting a <code>filterable</code> prop as{" "}
        <code>true</code>.
      </p>
      <div className="uk-position-relative uk-margin-medium">
        <TabStrip>
          <Tab title="Preview">
            <Grid>
              <GridItem w_1_2>
                <Select
                  filterable
                  onChange={handleChange}
                  placeholder="Filter Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
              <GridItem w_1_2>
                <Select
                  filterable
                  multiple
                  onChange={handleMultipleChange}
                  placeholder="Filter Items"
                  options={[
                    { text: "Item-1", value: "item-1" },
                    { text: "Item-2", value: "item-2" },
                    { text: "Item-3", value: "item-3" },
                  ]}
                />
              </GridItem>
            </Grid>
            <Grid>
              <GridItem w_1_2>
                <Select
                  filterable
                  onChange={handleChange}
                  placeholder="Filter Items"
                  options={[
                    {
                      text: "Group-items-1",
                      group: [
                        { text: "Item-1.1", value: "item-1.1" },
                        { text: "Item-1.2", value: "item-1.2" },
                        { text: "Item-1.3", value: "item-1.3" },
                      ],
                    },
                    {
                      text: "Group-items-2",
                      group: [
                        { text: "Item-2.1", value: "item-2.1" },
                        { text: "Item-2.2", value: "item-2.2" },
                        { text: "Item-2.3", value: "item-2.3" },
                      ],
                    },
                  ]}
                />
              </GridItem>
            </Grid>
            <Grid>
              <p>
                <code>selected items : {JSON.stringify(values)}</code>
              </p>
              <p style={{ marginLeft: "10px" }}>
                <code>selected item : {JSON.stringify(value)}</code>
              </p>
            </Grid>
          </Tab>
          <Tab title="Markup">
            <SyntaxHighlighter language="javascript" style={docco}>
              {filterSrc}
            </SyntaxHighlighter>
            <MarkupButtons codeText={filterSrc} />
          </Tab>
        </TabStrip>
      </div>
    </React.Fragment>
  );
};

export const SelectProps = () => (
  <React.Fragment>
    <h2 id="props" className="uk-h3 tm-heading-fragment">
      <a href="#props">Props</a>
    </h2>
    <p>The Select component has the following props.</p>
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
            <td align="left">
              <code>helperText</code>
            </td>
            <td align="left">
              <code>string</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>''</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>placeholder</code>
            </td>
            <td align="left">
              <code>string</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>''</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>error</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>

          <tr>
            <td align="left">
              <code>disabled</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>

          <tr>
            <td align="left">
              <code>multiple</code>
            </td>
            <td align="left">
              <code>bool</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>onChange</code>
            </td>
            <td align="left">
              <code>func</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>null</code>
            </td>
          </tr>
          <tr>
            <td align="left">
              <code>options</code>
            </td>
            <td align="left">
              <code>array</code>
            </td>
            <td align="left">no</td>
            <td align="left">
              <code>[]</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
);

export const SelectDoc = () => (
  <div className="uk-container uk-container-small uk-position-relative">
    <h1>Select</h1>
    <p className="uk-text-lead">
      This component is used to define available options in a list.
    </p>
    {/** USAGE */}
    <SelectUsage />
    {/** PROPS */}
    <SelectProps />

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
            <a href="#group">Group</a>
          </li>
          <li className="">
            <a href="#multiple">Multiple</a>
          </li>
          <li className="">
            <a href="#filter">Filter</a>
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
