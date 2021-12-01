var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var app = express();




app.listen(8000);




app.use(bodyParser.json());



mongoose.connect('mongodb://localhost/fiddyFive');



require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);