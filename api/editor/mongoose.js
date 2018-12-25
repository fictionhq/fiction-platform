const mongoose = require("mongoose");
const username = config.get("dbConfig.username");
const password = config.get("dbConfig.password");

const connect = (function() {
  let instance = false;

  function createConnection() {
    mongoose.connect(
      `mongodb://${username}:${password}@ds245277.mlab.com:45277/fiction-editor`,
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
