const user = require("../models/user");

const root = mongoose => {
  return {
    user: user(mongoose)
  };
};

module.exports = root;
