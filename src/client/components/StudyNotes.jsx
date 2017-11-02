import React from 'react';

import HeaderBar from './HeaderBar';
import Notes from './Notes';


import '../styles/bootstrap.min.css';

class StudyNotes extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Notes />
      </div>
    );
  }
}

export default StudyNotes;
