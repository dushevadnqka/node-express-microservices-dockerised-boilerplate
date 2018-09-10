const express = require('express');
const app = express();

var api = require('./http/routes/api');

/*
app.get('/api', function (req, res) {
  res.send('root')
});

app.get('/govno', function (req, res) {
  res.send('govno')
});

app.get('/laino', function (req, res) {
  res.send('laino')
});
*/

app.use('/api/v1', api)

app.listen(8080, () => {
    console.log('App Successful listening on port 8080');
});