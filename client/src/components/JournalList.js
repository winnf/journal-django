import React, { Component } from "react";
import axios from "axios";
import JournalEntries from './journal-entries-component';
import Modal from './Modal';

class JournalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entriesList: [],
      modal: false,
      activeEntry: {
        title: "",
        content: "",
        date: "",
        image: null,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
    .get("/api/entries/")
    .then((res) => this.setState({entriesList: res.data}))
    .catch((err) => console.log(err));
  }

  createNew = () => {
    const entry = { title: "", content: "", image: null };
    this.setState({ activeEntry: entry, modal: !this.state.modal })
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
    this.refreshList();
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Journal by Winnie
          </a>
        </header>
        <div className="action-buttons">
        <button className="btn btn-secondary" size="sm" onClick={ () => {this.createNew()} }>
          Create
        </button>
        </div>
        <div className="container journal-main">
          <JournalEntries entries={this.state.entriesList}/>
        </div>
        {this.state.modal ? (
          <Modal
            activeEntry={this.state.activeEntry}
            modal = {this.state.modal}
            toggle = {this.toggle}
          />
        ) : null}
      </div>
    );  
  }
}

const mapStateToProps = state => ({
  ...state
});

export default JournalList;
