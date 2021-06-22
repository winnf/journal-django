import React from 'react';
import Entry from './entry-component';

const JournalEntries = (props) => (
    <div className="entries-container">
        {props.entries.map((entry) => (
            <Entry key={entry.id}
            id = {entry.id}
            title={entry.title}
            date={entry.date}
            content={entry.content}
            /> 
        ))}
    </div>
)

export default JournalEntries;