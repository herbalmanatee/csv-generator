const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
import toCSV from '../model/toCSV';
const app = express();
const port = 8080;

app.use(express.static('dist'));
// app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.listen(port, ()=> {
  console.log(`listening on ${port}`);
});

app.post('/', (req, res) => {
  let data = req.body.jsonData;
  let template = toCSV(data);
  res.status(200);
  res.send(template);
});



