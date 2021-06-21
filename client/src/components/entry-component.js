import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Entry extends Component {
  render() {
    return (
        <div className="entry">
            <a href={"http://localhost:8000/api/entries/"+this.props.id} className="entry-title">{this.props.title}</a>
            <p>{this.props.date}</p>
            <p>{this.props.content}</p>
        </div>
    )
  };
};