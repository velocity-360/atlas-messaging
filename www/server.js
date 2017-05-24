/*  Development server for testing relative links and filepaths: */

var express = require('express')

var app = express()
app.use('/', express.static(__dirname+'/../'))

app.listen(3000, function() { console.log('Turbo dev server running on http://localhost:3000')})

