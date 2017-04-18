var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// this will require all routes in index js which will require all of the other controllers. Index js is master controller
app.use(require('./controllers/index.js'));

// this is how node knows to look here for index.html
app.use(express.static('client/build'));

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
