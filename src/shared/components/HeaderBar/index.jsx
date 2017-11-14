import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, Nav, Button } from 'reactstrap';

import { Link } from 'react-router-dom';

import { setModal, setQueryText, createNote } from '../../states/post-actions';

import HeaderBarSearchInput from './HeaderBarSearchInput';
import HeaderBarAddNote from './HeaderBarAddNote';

class HeaderBar extends React.Component {
  constructor() {
    super();
    this.handleQueryKeyPress = this.handleQueryKeyPress.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleQueryKeyPress(e) {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      this.props.dispatch(setQueryText(e.target.value));
    }
  }

  handlePost(note) {
    this.props.dispatch(createNote(note));
  }

  handleModal() {
    this.props.dispatch(setModal());
  }

  render() {
    return (
      <Navbar color="faded" light expand>
        <NavbarBrand href="/">Study Notes</NavbarBrand>
        <Button outline color="primary">
          <Link color="white" to="/about">
            About
          </Link>
        </Button>
        {'  '}
        <Button outline color="primary">
          <Link to="/notes">Notes</Link>
        </Button>
        <Nav className="ml-auto" navbar>
          <HeaderBarSearchInput handleQueryKeyPress={this.handleQueryKeyPress} />
          <HeaderBarAddNote
            modal={this.props.modal}
            handleModal={this.handleModal}
            handlePost={this.handlePost}
          />
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

HeaderBar.propTypes = {
  modal: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(HeaderBar);
