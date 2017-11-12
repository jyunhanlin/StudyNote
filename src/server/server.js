import renderApp from './render-app';

const express = require('express');
const postRouter = require('./router/posts.js');
const errorHandler = require('./middleware/error-handler.js');


const app = express();

// app.use(requestLogger);
app.use(express.static('dist', {
  setHeaders: (res, path, stat) => {
    res.set('Cache-Control', 'public, s-maxage=86400');
  },
}));

app.get('/', (req, res) => {
  res.send(renderApp(req.url, null));
});

app.use('/api', postRouter);
app.get('/*', (req, res) => res.redirect('/'));
app.use(errorHandler);

const port = 8080;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port ${port}...`);
});
