import React, { Component } from 'react';

export default class ActionButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeEntry: {
        title: "",
        content: "",
      },
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (entry) => {
    this.toggle();

    alert("save" + JSON.stringify(entry));
  };

  handleDelete = (entry) => {
    alert("delete" + JSON.stringify(entry));
  };
  
  createNew = () => {
    const entry = { title: "", content: "" };
    this.setState({ activeEntry: entry, modal: !this.state.modal })
  }

  editItem = (entry) => {
    this.setState({ activeEntry: entry, modal: !this.state.modal });
  };

  render() {
    return (
      <button className="btn btn-secondary" size="sm" onClick={ () => {this.createNew()} }>
          Create
      </button>
    )
  };
};

// const mapStateToProps = state => {
//   return { bet: state.data.bet }
// };

