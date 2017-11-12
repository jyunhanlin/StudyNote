import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import initStore from './init-store';
import StudyNote from '../shared/components/StudyNotes';

const renderApp = (location, plainPartialState, routerContext = {}) => {
  const store = initStore(plainPartialState);

  const rootElement = (
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <StudyNote />
      </StaticRouter>
    </Provider>
  );

  const appHtml = ReactDOMServer.renderToString(rootElement);


  return (
    `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Study Notes</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
      </head>
      <body>
        <div id="app">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="js/bundle.js"></script>
      </body>
    </html>`
  );
};

export default renderApp;
