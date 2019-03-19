const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js'))
);

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

const { syncAndSeed } = require('./db/index');

syncAndSeed()
  .then(() => {
    console.log('Data seeded');
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch(error => console.log(error));
