import React, { Component } from 'react';

export default class Entry extends Component {
  render() {
    return (
        <div className="entry">
            <a href="" className="entry-title">{this.props.title}</a>
            <body>{this.props.date}</body>
            <body>{this.props.content}</body>
        </div>
    )
  };
};