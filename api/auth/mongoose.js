const mongoose = require("mongoose");

const connect = function(username, password) {
  mongoose.connect(
    `mongodb://${username}:${password}@ds139944.mlab.com:39944/fiction`,
    {
      useNewUrlParser: true
    }
  );

  return mongoose;
};

module.exports = connect;
