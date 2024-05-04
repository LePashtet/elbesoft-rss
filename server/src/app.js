const express = require('express');
const passport = require('passport');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');
const prometheus = require('express-prom-bundle');
const cors = require('cors');
const docs = require('./routes/docs');
const health = require('./routes/health');
const v1 = require('./routes/v1');
const { errorHandler } = require('./middlewares/error');
const logger = require('./middlewares/logger');

const app = express();

// passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  process.nextTick(() => {
    done(null, user._id);
  });
});
passport.deserializeUser((id, done) => {
  process.nextTick(() => {
    User.findById(id, (err, user) => {
      if (!err) done(null, user);
      else done(err, null);
    });
  });
});

// service
app.use(prometheus());
app.use(express.json());

// logger
app.use(logger);

app.use(cors());

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// compress all responses
app.use(compression());

// docs
app.use('/docs', docs);

// health API
app.use('/health', health);
// V1 API
app.use('/api/v1', v1);

// error handler
app.use(errorHandler);

module.exports = app;
