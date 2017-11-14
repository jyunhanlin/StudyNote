const fs = require('fs');
const moment = require('moment');

function list(queryText = '') {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync('notes.json')) {
      fs.writeFileSync('notes.json', '');
    }

    fs.readFile('notes.json', 'utf8', (err, data) => {
      if (err) reject(err);

      let notes = data ? JSON.parse(data) : [];
      if (notes.length > 0 && queryText) {
        notes = notes.filter(note =>
          note.subject.toLowerCase().match(queryText.toLowerCase()) ||
            note.purpose.toLowerCase().match(queryText.toLowerCase()) ||
            note.description.toLowerCase().match(queryText.toLowerCase()));
      }
      resolve(notes);
    });
  });
}

function create(note) {
  return new Promise((resolve, reject) => {
    const newNote = {
      timestamp: moment().unix(),
      subject: note.subject,
      purpose: note.purpose,
      description: note.description,
      attachments: note.attachments,
    };

    list().then((notes) => {
      const allNotes = [newNote, ...notes];
      fs.writeFile('notes.json', JSON.stringify(allNotes), (err) => {
        if (err) reject(err);

        resolve(newNote);
      });
    });
  });
}

module.exports = { list, create };
