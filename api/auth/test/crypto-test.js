const chai = require("chai");
const assert = chai.assert;
const crypto = require("../crypto");

const pwd = "subscribeToPewDiePie";

describe("crypto", () => {
    it("should return encrypted password", async () => {
        try {
            const hash  = await crypto.encrypt(pwd);
            assert.typeOf(hash, 'string');
        }
        catch(ex) {
            throw new Error(ex);
        }
    });

    it("should return true for matching pwd and hash", async() => {
        try {
            const hash  = await crypto.encrypt(pwd);
            const decrypted  = await crypto.decrypt(pwd, hash);
            assert.isTrue(decrypted);
        }
        catch(ex) {
            throw new Error(ex);
        }
    });
});