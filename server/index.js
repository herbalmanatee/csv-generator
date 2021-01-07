const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(express.static('dist'));
// app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(port, ()=> {
  console.log(`listening on ${port}`);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});



