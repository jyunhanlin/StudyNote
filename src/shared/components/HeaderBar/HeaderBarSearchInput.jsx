import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Input } from 'reactstrap';

class HeaderBarSearchInput extends React.Component {
  constructor() {
    super();
    this.handleQueryKeyPress = this.handleQueryKeyPress.bind(this);
  }

  handleQueryKeyPress(e) {
    this.props.handleQueryKeyPress(e);
  }

  render() {
    return (
      <NavItem className="search-input">
        <Input onKeyPress={this.handleQueryKeyPress} placeholder="Search Subject" />
      </NavItem>
    );
  }
}

HeaderBarSearchInput.propTypes = {
  handleQueryKeyPress: PropTypes.func.isRequired,
};

export default HeaderBarSearchInput;
