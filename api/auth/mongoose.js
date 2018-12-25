const mongoose = require("mongoose");
const username = config.get("dbConfig.username");
const password = config.get("dbConfig.password");

const connect = (function() {
  let instance = false;

  function createConnection() {
    mongoose.connect(
      `mongodb://${username}:${password}@ds139944.mlab.com:39944/fiction`,
      {
        useNewUrlParser: true
      }
    );

    instance = true;
  }

  return {
    getConnection: function() {
      if (!instance) {
        createConnection();
      }

      return mongoose;
    }
  };
})();

module.exports = connect;
