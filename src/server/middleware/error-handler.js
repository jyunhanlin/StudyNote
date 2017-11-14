const fs = require('fs');
const moment = require('moment');

/* eslint-disable */
function errorHandler(err, req, res, next) {
  console.error(err);

  const log = `${moment().unix()} ERROR  ${err.stack}\n`;
  fs.appendFile('logs.txt', log, err => {
    if (err) console.error(err);
  });

  res.sendStatus(err.status ? err.status : 500);
  // next(err);
}
/* eslint-enable */

module.exports = errorHandler;
