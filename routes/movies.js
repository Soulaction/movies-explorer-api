const moviesRouter = require('express').Router();
const {
  celebrate,
  Joi,
} = require('celebrate');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.post('/', celebrate({
  body: Joi.object().keys({
    movieId: Joi.number().required(),
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(/https?:\/\/(www.)?[-a-zA-Z0-9_~:/?#@!$&'()*,.+;=]+\.[-a-zA-Z0-9_~:/?#@!$&'()*,+;=]+#?/),
    trailerLink: Joi.string().required().pattern(/https?:\/\/(www.)?[-a-zA-Z0-9_~:/?#@!$&'()*,.+;=]+\.[-a-zA-Z0-9_~:/?#@!$&'()*,+;=]+#?/),
    thumbnail: Joi.string().required().pattern(/https?:\/\/(www.)?[-a-zA-Z0-9_~:/?#@!$&'()*,.+;=]+\.[-a-zA-Z0-9_~:/?#@!$&'()*,+;=]+#?/),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovie);

moviesRouter.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
}), deleteMovie);

module.exports = moviesRouter;
