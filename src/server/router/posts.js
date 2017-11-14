const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');
const postModel = require('../model/posts.js');

const router = express.Router();
router.use(bodyParser.json());
router.use(accessController); // Allows cross-origin HTTP requests

// List notes
router.get('/posts', (req, res, next) => {
  postModel
    .list(req.query.queryText)
    .then((posts) => {
      res.json(posts);
    })
    .catch(next);
});

// Create note
router.post('/posts', (req, res, next) => {
  const note = req.body;

  if (!note) {
    const err = new Error('note are required');
    err.status = 400;
    throw err;
  }
  postModel
    .create(note)
    .then((post) => {
      res.json(post);
    })
    .catch(next);
});

module.exports = router;
