const express = require('express');

//Models
var Movie = require('../models/movie');
var Character = require('../models/character');

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

//Movie Routes
router.route('/movie')
    //Creates a new movie
    .post((req, res) => {
        //Creating a new Movie instance
        var movie = new Movie();
        movie.title = req.body.title;
        movie.year = req.body.year;

        //Saving to DB
        movie.save(function (err) {
            if (err) res.send(err);
            res.json({ message: 'Movie successfully created!' });
        });
    })
    //Gets all movies
    .get((req, res) => {
        Movie.find((err, movies) => {
            if (err) res.send(err);
            res.json(movies);
        });
    });

router.route('/movie/:movie_id')
    //Gets a single movie
    .get((req, res) => {
        Movie.findById(req.params.movie_id, (err, movie) => {
            if (err) res.send(err);
            res.json(movie);
        });
    })
    //Updates a single movie
    .put((req, res) => {
        Movie.findById(req.params.movie_id, (err, movie) => {
            if (err) res.send(err);

            movie.title = req.body.title;
            movie.year = req.body.year;

            movie.save(function (err) {
                if (err) res.send(err);
                res.json({ message: 'Movie successfully updated!' });
            });
        });
    })
    //Deletes a single movie
    .delete((req, res) => {
        Movie.remove({ _id: req.params.movie_id }, (err, movie) => {
            if (err) res.send(err);
            res.json({ message: 'Movie successfully deleted!' });
        });
    });

//Character Routes
router.route('/character')
    //Creates a new character
    .post((req, res) => {
        //Creating a new Character instance
        var character = new Character();
        character.first_name = req.body.first_name;
        character.last_name = req.body.last_name;

        //Saving to DB
        character.save(function (err) {
            if (err) res.send(err);
            res.json({ message: 'Character successfully created!' });
        });
    })
    //Gets all characters
    .get((req, res) => {
        Character.find((err, characters) => {
            if (err) res.send(err);
            res.json(characters);
        });
    });

router.route('/character/:character_id')
    //Gets a single character
    .get((req, res) => {
        Character.findById(req.params.character_id, (err, character) => {
            if (err) res.send(err);
            res.json(character);
        });
    })
    //Updates a single character
    .put((req, res) => {
        Character.findById(req.params.character_id, (err, character) => {
            if (err) res.send(err);

            character.first_name = req.body.first_name;
            character.last_name = req.body.last_name;

            character.save(function (err) {
                if (err) res.send(err);
                res.json({ message: 'Character successfully updated!' });
            });
        });
    })
    //Deletes a single character
    .delete((req, res) => {
        Character.remove({ _id: req.params.character_id }, (err, character) => {
            if (err) res.send(err);
            res.json({ message: 'Character successfully deleted!' });
        });
    });

module.exports = router;