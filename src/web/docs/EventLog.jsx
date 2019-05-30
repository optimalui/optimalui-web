/* eslint-disable */
import React from 'react';
import uuidv4 from 'uuid'
export default class EventLog extends React.Component {
    render() {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title">{this.props.title}</h3>
                <ul className="uk-list uk-list-divider" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {this.props.logs.map((log, index) =>
                        <li key={`event-${index}`}>{log}</li>
                    )}
                </ul>
            </div>
        )
    }
}