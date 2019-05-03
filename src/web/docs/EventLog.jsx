import React from 'react';

export default class EventLog extends React.Component {
    renderLogs = () => {
        return this.props.logs.map((log, index)=> {
            return(<li key={index}>{log}</li>)
        })
    }
    render() {
        return(
            <div className="example-config">
              <h5>{this.props.title}</h5>
              <ul className="event-log">
                {this.renderLogs()}
              </ul>
            </div>
        )
    }
}