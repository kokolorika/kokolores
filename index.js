var express = require('express')
var app = express()

var kokolores = require('./kokolores.js')

app.get('/', function (req, res) {
  var kokoloresStatement = kokolores();
  res.append('Access-Control-Allow-Origin', ['https://kokolorika.github.io/timesheet/']);
  res.append('Access-Control-Allow-Methods', 'GET');
  console.log(kokoloresStatement);
  res.send({ kokolores: kokoloresStatement });
})

app.listen(process.env.PORT)
