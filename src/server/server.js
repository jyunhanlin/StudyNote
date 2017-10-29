const express = require('express');

const app = express();

app.use(express.static('dist'));


const port = 8080;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port ${port}...`);
});
