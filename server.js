//Basic setup
const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://admin:123456@ds113680.mlab.com:13680/star-wars-quotes');

//Routes
var router = require('./app/routes/routes');

//Registering routes
app.use('/api', router);

app.listen(3310, () => {
	console.log("Listening on 3310");
});



