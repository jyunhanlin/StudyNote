import React from 'react';
import PropTypes from 'prop-types';

import {
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class HeaderBarAddNote extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.toggle = this.toggle.bind(this);

    this.toggle = this.toggle.bind(this);
    this.subject = '';
    this.purpose = '';
    this.attachment = '';
    this.description = '';
  }
  toggle() {
    this.props.handleModal();
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  handlePost() {
    const note = {
      subject: this.subject,
      purpose: this.purpose,
      attachment: this.attachment,
      description: this.description,
    };
    this.props.handlePost(note);
    this.toggle();
  }

  render() {
    return (
      <NavItem>
        <Button color="danger" onClick={this.toggle}>
          +
        </Button>
        <Modal isOpen={this.props.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a note</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input
                  name="subject"
                  id="subject"
                  placeholder="Enter subject"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="purpose">Purpose</Label>
                <Input
                  name="purpose"
                  id="purpose"
                  placeholder="Enter purpose"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="attachment">Attachment</Label>
                <Input
                  name="attachment"
                  id="attachment"
                  placeholder="Enter attachment"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button onClick={this.handlePost}>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </NavItem>
    );
  }
}

HeaderBarAddNote.propTypes = {
  modal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  handlePost: PropTypes.func.isRequired,
};

export default HeaderBarAddNote;
