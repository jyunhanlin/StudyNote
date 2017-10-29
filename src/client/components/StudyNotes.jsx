import React from 'react';


import { Navbar, NavbarBrand, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';


import '../styles/bootstrap.min.css';

class StudyNotes extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarBrand href="/">Study Notes</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className="search-input">
              <Input placeholder="Search Subject" />
            </NavItem>
            <NavItem >
              <Button color="danger" onClick>+</Button>
              <Modal toggle >
                <ModalHeader toggle>Add a note</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label for="subject">Subject</Label>
                      <Input
                        name="subject"
                        id="subject"
                        placeholder="Enter subject"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="purpose">Purpose</Label>
                      <Input
                        name="purpose"
                        id="purpose"
                        placeholder="Enter purpose"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="attachment">Attachment</Label>
                      <Input
                        name="attachment"
                        id="attachment"
                        placeholder="Enter attachment"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="description">Description</Label>
                      <Input
                        type="textarea"
                        name="description"
                        id="description"
                      />
                    </FormGroup>
                    <Button>Submit</Button>
                  </Form>
                </ModalBody>
              </Modal>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default StudyNotes;
