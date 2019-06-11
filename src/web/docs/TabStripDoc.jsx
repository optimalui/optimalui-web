/* eslint-disable */
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TabStrip, Tab } from '../../components/layout';
import MarkupButtons from './MarkupButtons';


export const TabStripDoc = () => {
    const [selected, setSelected] = useState(2);
    const handleSelect = (e) => {
        setSelected(e.selectedTabIndex)
    }
    console.log(selected)
    return (<div className="uk-container uk-container-small uk-position-relative">
        <h1>TabStrip</h1>
        <TabStrip selected={selected} onSelect={handleSelect}>
            <Tab title="Deneme1" onClick={(e)=>{console.log(e)}}>
                dfdf
                Etiam feugiat lorem non metus. Morbi ac felis. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Cras varius.

    Nulla sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Sed aliquam ultrices mauris.

    Praesent ac massa at ligula laoreet iaculis. Praesent ac sem eget est egestas volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue.
            </Tab>
            <Tab title="Deneme2">
                hhhh
                Etiam feugiat lorem non metus. Morbi ac felis. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Cras varius.

    Nulla sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Sed aliquam ultrices mauris.

    Praesent ac massa at ligula laoreet iaculis. Praesent ac sem eget est egestas volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue.
            </Tab>
            <Tab title="Deneme3" onClick={(e) => { console.log(e) }}>
                DENEE
                Etiam feugiat lorem non metus. Morbi ac felis. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Cras varius.

    Nulla sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Sed aliquam ultrices mauris.

    Praesent ac massa at ligula laoreet iaculis. Praesent ac sem eget est egestas volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue.
            </Tab>
        </TabStrip>
    </div>)
}