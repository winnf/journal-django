import React from 'react';
import { Link } from 'react-router-dom';

const Entry = (props) => (
    <div className="entry">
        <Link 
            to={'/entry/'+props.id} 
            className="entry-link"
            >{props.title}</Link>
        <p>{props.date}</p>
        <p>{props.content}</p>
    </div>
)
export default Entry