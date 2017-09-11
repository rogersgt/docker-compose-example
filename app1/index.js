const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

app.get('/status', (req, res) => {
  const ok = !!process.env.VERSION_DESCRIPTION && !!process.env.NODE_ENV;
  res.send({
    status: ok,
    description: process.env.VERSION_DESCRIPTION,
    env: process.env.NODE_ENV
  });
});