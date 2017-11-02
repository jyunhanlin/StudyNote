import axios from 'axios';

const postBaseUrl = 'http://localhost:8080/api';

// const postBaseUrl = 'http://studynotes-server-dev.us-west-2.elasticbeanstalk.com/api';

export function listNotes(queryText = '') {
  let url = `${postBaseUrl}/posts`;
  if (queryText) {
    url += `?queryText=${queryText}`;
  }
  // eslint-disable-next-line no-console
  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then((res) => {
    if (res.status !== 200) {
      throw new Error(`Unexpected response code: ${res.status}`);
    }

    return res.data;
  });
}

export function createNote(note) {
  const url = `${postBaseUrl}/posts`;
  const {
    subject, purpose, description, attachments,
  } = note;
  // eslint-disable-next-line no-console
  console.log(`Making POST request to: ${url}`);

  return axios.post(url, {
    subject,
    purpose,
    description,
    attachments,
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error(`Unexpected response code: ${res.status}`);
    }

    return res.data;
  });
}
