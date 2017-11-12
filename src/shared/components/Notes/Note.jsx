import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';


function Note(props) {
  const allNotes = props.notes;
  const listNotes = allNotes.map(note => (
    <Card key={note.timestamp} className="note-card">
      <CardBody>
        <CardTitle>{note.subject}</CardTitle>
        <CardSubtitle>Purpose: {note.purpose}</CardSubtitle>
        <CardText>Description: {note.description}</CardText>
      </CardBody>
    </Card>
  ));

  return (
    <div>
      {listNotes}
    </div>
  );
}

Note.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Note;
