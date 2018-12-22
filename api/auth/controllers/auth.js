const crypto = require("../crypto");
const jwt = require("../jwt");

// create new user in Mongo
const saveUser = async (req, user) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  let password = req.body.password;

  password = await crypto.encrypt(password);
  const newUser = new user({ firstName, lastName, username, password });
  return newUser.save();
};

const retrieveUser = (req, user) => {
  const username = req.body.username;
  const password = req.body.password;

  return new Promise((resolve, reject) => {
    user.findOne({ username }, "password", async (err, userObj) => {
      if (err) throw new Error(err);
      try {
        const matching = await crypto.decrypt(password, userObj.password);

        if (matching) {
          resolve(true);
        }
        reject(false);
      } catch (ex) {
        reject(false);
      }
    });
  });
};

const createJwt = username => {
  const token = jwt.generate(username);
  return token;
};

module.exports.saveUser = saveUser;
module.exports.retrieveUser = retrieveUser;
module.exports.createJwt = createJwt;
