const chai = require("chai");
const assert = chai.assert;
const jwt = require("../jwt");

const username = "jessica";

describe("jwt", () => {
    it("should return a jwt", () => {
        const token = jwt.generate(username);
        assert.typeOf(token, "string");
    });

    it("should return the same username", async() => {
        try {
            const token = jwt.generate(username);
            const decrypted = await jwt.verify(token, username);
            assert.isTrue(decrypted);
        } catch (ex) {
            throw Error(ex);
        }
    });
});