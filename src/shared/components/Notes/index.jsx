import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import Note from './Note';

import { listNotes } from '../../states/post-actions';


class Notes extends React.Component {
  componentDidMount() {
    this.props.dispatch(listNotes());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.props.dispatch(listNotes(nextProps.query));
    }
  }

  render() {
    return (
      <div className="note-cards">
        <Note notes={this.props.notes} />
        {
          this.props.isLoading &&
          <Alert color="warning" className="loading">Loading...</Alert>
        }
      </div>
    );
  }
}

Notes.defaultProps = {
  query: '',
};

Notes.propTypes = {
  query: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  query: state.queryText,
  isLoading: state.notes.isLoading,
  notes: state.notes.notes,
});

export default connect(mapStateToProps)(Notes);
