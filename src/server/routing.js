import renderApp from './render-app';

export default (app) => {
  app.get('/', (req, res) => {
    res.send(renderApp(req.url, null));
  });

  app.get('/about', (req, res) => {
    res.send(renderApp(req.url, null));
  });

  app.get('/notes', (req, res) => {
    res.send(renderApp(req.url, null));
  });
};
