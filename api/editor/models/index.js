const text = require("../models/text");

const root = mongoose => {
  return {
    text: text(mongoose)
  };
};

module.exports = root;
