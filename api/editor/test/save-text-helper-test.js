const chai = require("chai");
const assert = chai.assert;
const saveHelper = require("../controllers/helpers/index");

const textModel = function(obj) {
  this._obj = obj;

  return {
    save: () => {
      return obj;
    }
  };
};

const docName = "sample";
const text = "Random text";
const username = "rajikaimal";

describe("Save helper", () => {
  it("should save new text", async () => {
    try {
      const res = saveHelper.saveText(docName, text, username, textModel);
      assert.typeOf(res, "Object");
    } catch (ex) {
      throw new Error(ex);
    }
  });
});
