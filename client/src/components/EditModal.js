import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeEntry: this.props.activeEntry,
        modal: this.props.modal
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    const activeEntry = { ...this.state.activeEntry, [name]: value };
    this.setState({ activeEntry });
  };

  handleImageChange = (e) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    console.log(e.target.files[0])
    this.setState( prevState => ({
        activeEntry: {
            ...prevState.activeEntry,
            image: e.target.files[0],
            date: date,
        }
    }))
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.activeEntry.image);
    form_data.append('title', this.state.activeEntry.title);
    form_data.append('date', this.state.activeEntry.date);
    form_data.append('content', this.state.activeEntry.content);
    console.log(form_data)
    let url = 'http://localhost:8000/api/entries/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
    this.props.toggle()
  };

  render() {
    const { toggle } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Entry</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="entry-title">Title</Label>
              <Input
                type="text"
                id="entry-title"
                name="title"
                onChange={this.handleChange}
                placeholder={this.state.activeEntry.title}
              />
            </FormGroup>
            <FormGroup>
              <Label for="entry-content">Content</Label>
              <Input
                type="text"
                id="entry-content"
                name="content"
                onChange={this.handleChange}
                placeholder={this.state.activeEntry.content}
              />
            </FormGroup>
            <FormGroup>
                <Label for="entry-image">Image</Label>
                <Input
                    type="file"
                    id="entry-image"
                    name="image"
                    accept="image/png, image/jpg"
                    onChange={this.handleImageChange}
                />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={this.handleSubmit}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}