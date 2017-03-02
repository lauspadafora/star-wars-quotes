//Basic setup
const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://admin:123456@ds113680.mlab.com:13680/star-wars-quotes');

var Movie = require('./app/models/movie');

//Routes

//Creating a new Router object
var router = express.Router();

router.use((req, res, next) => {
	console.log('Something is happening...');
	next();
	//This middleware can be used to include validations, throw errors, etc.
});

router.get('/', function (req, res) {
	res.json({ message: 'Hooray! Welcome to our API!' });
});

router.route('/movie')
	//Creates a new movie
	.post((req, res) => {
		//Creating a new Movie instance
		var movie = new Movie();
		movie.title = req.body.title;
		movie.year = req.body.year;

		//Saving to DB
		movie.save(function (err) {
			if (err) console.log(err);
			res.json({ message: 'Movie successfully created!' });
		});
	})
	//Gets all movies
	.get((req, res) => {
		Movie.find((err, movies) => {
			if (err) console.log(err);
			res.json(movies);
		});
	});

//Registering routes
app.use('/api', router);

app.listen(3310, () => {
	console.log("Listening on 3310");
});



