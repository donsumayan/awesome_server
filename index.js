var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.json({'msg':'Holy shit! This is awesome!'});
});

app.listen(3000, function () {
  console.log('=> redis endpoint active on port', 3000);
});
