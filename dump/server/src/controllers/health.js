const mongoose = require("mongoose");

function health(req, res) {
  const status = mongoose.connection.readyState === 1 ? 200 : 500;
  res.status(status).send();
}

module.exports = {
  health,
};
