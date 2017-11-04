import React from 'react';

import HeaderBar from './HeaderBar';
import Notes from './Notes';


import '../styles/bootstrap.min.css';

function StudyNotes() {
  return (
    <div>
      <HeaderBar />
      <Notes />
    </div>
  );
}

export default StudyNotes;
