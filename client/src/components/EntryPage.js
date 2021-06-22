import React, { Component } from 'react';
import axios from 'axios';
import EditModal from './EditModal';

class EntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          entry: {
            title: "",
            content: "",
            date: "",
            image: null,
          },
          imageStatus: "loading",
          modal: false,
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.fetchData(id);
    }

    fetchData = id => {
        axios
        .get("/api/entries/"+id)
        .then((res) => this.setState({entry: res.data}))
        .catch((err) => console.log(err));
    }

    editEntry = () => {
        const entry = { 
            title: this.state.entry.title, 
            content: this.state.entry.content, 
            image: this.state.entry.image,
            date: this.state.entry.date,
        };
        this.setState({ entry: entry, modal: !this.state.modal })
    }

    handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
    }

    handleImageErrored() {
        this.setState({ imageStatus: "failed to load" });
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };
    
    render() {
        return (
            <div className="entry-container">
                <h2 className="entry-title">{this.state.entry.title}</h2>
                <button className="btn btn-secondary" size="sm" onClick={ () => {this.editEntry()} }>Edit</button>
                <p className="entry-date">{this.state.entry.date}</p>
                <img 
                    src={this.state.entry.image}
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)}
                    alt="ikea chairs are awesome"
                />
                <div className="entry-content">{this.state.entry.content}</div>
                {this.state.modal ? (
                    <EditModal
                        activeEntry={this.state.entry}
                        modal = {this.state.modal}
                        toggle = {this.toggle}
                    />
                ) : null}
            </div>
        )    
    }
}

export default EntryPage