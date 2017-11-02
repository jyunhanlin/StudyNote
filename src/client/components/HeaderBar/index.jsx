import React from 'react';
import { connect } from 'react-redux';
import {
  Navbar, NavbarBrand, Nav, NavItem, Input,
} from 'reactstrap';

import { setQueryText, createNote } from '../../states/post-actions';

import HeaderBarItems from './HeaderBarItems';

class HeaderBar extends React.Component {
  handleQueryKeyPress(e) {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      this.props.dispatch(setQueryText(e.target.value));
    }
  }

  handlePost() {
    const note = {
      subject: this.subject,
      purpose: this.purpose,
      attachment: this.attachment,
      description: this.description,
    };
    this.props.dispatch(createNote(note));
    this.toggle();
  }
  render() {
    return (
      <Navbar color="faded" light expand>
        <NavbarBrand href="/">Study Notes</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem className="search-input">
            <Input onKeyPress={this.handleQueryKeyPress} placeholder="Search Subject" />
          </NavItem>
          <HeaderBarItems />
        </Nav>
      </Navbar>

    );
  }
}

export default connect()(HeaderBar);
