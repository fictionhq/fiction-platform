const user = function(mongoose) {
  const User = mongoose.model("User", {
    firstName: String,
    lastName: String,
    username: String,
    password: String
  });

  return User;
};

module.exports = user;
