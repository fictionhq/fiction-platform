const text = function(mongoose) {
  const Text = mongoose.model("Text", {
    docName: String,
    text: String,
    username: String
  });

  return Text;
};

module.exports = text;
