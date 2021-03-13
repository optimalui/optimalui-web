/* eslint-disable */
import React,{Component} from 'react';
import EventLog from '../EventLog';
import { DropDownButton } from 'optimalui-react';


class DropDownButtonEvents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: []
        };
    }

    handleDomEvent = (eventType) => {
        this.setState((state, props) => {
          let logs = state.logs.slice();
          logs.unshift(eventType);
          return { logs };
        });
    }
    handleItemClick = (event) => {
        if (event.item) {

            const key = event.item._reactInternalFiber.key,
                text = event.item._reactInternalFiber.pendingProps.text


            this.setState((state, props) => {
                let logs = state.logs.slice();
                logs.unshift(`item click {key:${key},text:${text}}`);
                return { logs };
            });
        }
    }

    render() { 
        const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
        return (
            [
                <DropDownButton
                    key="evnt-1"
                    text="Events"
                    items={items}
                    onItemClick={(e) => this.handleItemClick(e)}
                    onMouseEnter={() =>this.handleDomEvent('mouseenter')}
                    onFocus={() =>this.handleDomEvent('focus')}
                    onBlur={() =>this.handleDomEvent('blur')}

                />,
                <EventLog key="evnt-2" title="Event Log" logs={this.state.logs}/>
            ]
        );
    }
}
 
export default DropDownButtonEvents;