var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Holy shit! This is awesome!');
});

app.listen(3000);