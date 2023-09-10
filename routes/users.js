const { celebrate, Joi } = require('celebrate');
const usersRouter = require('express').Router();

const {
  getUser,
  updateUser,
} = require('../controllers/users');

usersRouter.get('/me', getUser);
usersRouter.patch('/me', celebrate({
  body: Joi.object()
    .keys({
      email: Joi.string()
        .required()
        .email(),
      name: Joi.string()
        .required()
        .min(2)
        .max(30),
    }),
}), updateUser);

module.exports = usersRouter;
