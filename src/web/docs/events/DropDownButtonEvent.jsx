/* eslint-disable */
import React,{Component} from 'react';
import EventLog from '../EventLog';
import { DropDownButton } from '../../../components/buttons';


class DropDownButtonEvents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: []
        };
    }

    handleDomEvent = (event) => {
        let logs = this.state.logs.slice();

        logs.unshift(event.type)

        this.setState({logs: logs})
    }

    render() { 
        const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
        return (
            [
                <DropDownButton
                    text="Events"
                    items={items}
                    onItemClick={() => this.handleDomEvent('item click')}
                    onMouseEnter={this.handleDomEvent}
                    onClick={this.handleDomEvent}
                    onFocus={this.handleDomEvent}
                    onBlur={this.handleDomEvent}
                    onOpen={this.handleDomEvent}
                    onClose={this.handleDomEvent}

                />,
                <EventLog title="Event Log" logs={this.state.logs}/>
            ]
        );
    }
}
 
export default DropDownButtonEvents;