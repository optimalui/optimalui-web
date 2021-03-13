/* eslint-disable */
import React,{Component} from 'react';
import EventLog from '../EventLog';
import { Button } from 'optimalui-react';


class ButtonEvents extends Component {
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
        return (
            [
                <Button
                    onClick={this.handleDomEvent}
                    onMouseDown={this.handleDomEvent}
                    onMouseUp={this.handleDomEvent}
                    onFocus={this.handleDomEvent}
                    onBlur={this.handleDomEvent}
                    onKeyPress={this.handleDomEvent}
                >
                    My Button
                </Button>,
                <EventLog title="Event Log" logs={this.state.logs}/>
            ]
        );
    }
}
 
export default ButtonEvents;