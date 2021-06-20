import React, { Component } from 'react';
import Entry from './entry-component';

export default class JournalEntries extends Component {
  render() {
    const entries = this.props.entries;

    return (
        <div className="entries-container">
            {this.props.entries.map((entry, index) => (
                <Entry key={entry.id} 
                title={entry.title} 
                date={entry.date} 
                content={entry.content}
                /> 
            ))}
        </div>
    );
  };
};