const chai = require("chai");
const assert = chai.assert;
const authController = require("../controllers/auth");

const userModel = function(obj) {
  return {
    save: () => {
      return Promise.resolve(obj);
    }
  };
};

userModel.findOne = (query, filter, cb) => {
  if (query != null) {
    cb(null, { _id: "123", password: "#adj1123" });
  } else {
    cb("error");
  }
};

describe("User controller", () => {
  it("should return new user object firstName", async () => {
    try {
      const req = {
        body: {
          username: "test",
          firstName: "test",
          lastName: "test",
          password: "test"
        }
      };
      const userCreated = await authController.saveUser(req, userModel);
      assert.equal(userCreated.firstName, "test");
    } catch (ex) {
      throw new Error(ex);
    }
  });

  it("should return a false for invalid pwd hash", async () => {
    try {
      const req = {
        body: {
          username: "test",
          firstName: "test",
          lastName: "test",
          password: "test"
        }
      };
      await authController.retrieveUser(req, userModel);
    } catch (ex) {
      assert.isFalse(ex);
    }
  });

  it("should return a jwt", async () => {
    try {
      const username = "test";
      const jwt = await authController.createJwt(username);
      assert.typeOf(jwt, "String");
    } catch (ex) {
      throw new Error(ex);
    }
  });
});
