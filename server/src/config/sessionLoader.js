const MongoStore = require('connect-mongo');

module.exports = {
  run: (databaseURL) => MongoStore.create({
    mongoUrl: databaseURL,
    stringify: false,
    autoRemove: 'interval',
    autoRemoveInterval: 1,
  }),
};
