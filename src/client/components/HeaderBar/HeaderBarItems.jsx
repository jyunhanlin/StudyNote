import React from 'react';

import {
  NavItem,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, Input,
} from 'reactstrap';

class HeaderBarItems extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.subject = '';
    this.purpose = '';
    this.attachment = '';
    this.description = '';
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }


  render() {
    return (
      <NavItem >
        <Button color="danger" onClick={this.toggle}>+</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
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


export default HeaderBarItems;

