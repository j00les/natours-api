const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('this is message from the server side');
});

const port = 3000;
app.listen(port, () => {
  console.log(`we're on port ${port}`);
});
