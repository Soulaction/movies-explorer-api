require('dotenv').config();
const express = require('express');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('./middlewares/cors');
const appRouter = require('./routes/index');
const handlerError = require('./middlewares/handler-errors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { NODE_ENV, HOST_DB, PORT = 3000 } = process.env;
const app = express();

mongoose.connect(NODE_ENV === 'production' ? HOST_DB : 'mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

app.use(cors);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(requestLogger);
app.use('/api', appRouter);

app.use(errorLogger);
app.use(errors());
app.use(handlerError);

app.listen(PORT, () => {
});
