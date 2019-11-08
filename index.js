var express = require('express')
var app = express()

var kokolores = require('./kokolores.js')

app.get('/', function (req, res) {
  var kokoloresStatement = kokolores();
  console.log(kokoloresStatement);
  res.send({ kokolores: kokoloresStatement });
})

app.listen(process.env.PORT)