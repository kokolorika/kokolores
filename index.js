var express = require('express')
var app = express()

var kokolores = require('./kokolores.js')

app.get('/', function (req, res) {
  res.send({ kokolores: kokolores() });
})

app.listen(3000)