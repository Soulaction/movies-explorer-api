const router = require('express')
  .Router();
const {
  celebrate,
  Joi,
} = require('celebrate');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const {
  login,
  createUser,
} = require('../controllers/users');
const NotFoundError = require('../errors/not-found-error');

router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);

router.get('/signout', (req, res) => {
  res.clearCookie('token')
    .send({ message: 'Выход' });
});

router.post('/signin', celebrate({
  body: Joi.object()
    .keys({
      email: Joi.string()
        .required()
        .email(),
      password: Joi.string()
        .required(),
    }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object()
    .keys({
      email: Joi.string()
        .required()
        .email(),
      password: Joi.string()
        .required(),
      name: Joi.string()
        .required()
        .min(2)
        .max(30),
    }),
}), createUser);

router.use('/*', auth, (req, res, next) => {
  next(new NotFoundError('Задан некорректный URL'));
});

module.exports = router;
