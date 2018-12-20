const bcrypt = require('bcrypt');

const crypto = (function () {
    // encrypt password
    const encrypt = function (password) {
        return new Promise((resolve, reject) => {
            bcrypt
                .genSalt(10, function (err, salt) {
                    if (err) 
                        reject(err);
                    
                    bcrypt
                        .hash(password, salt, function (err, hash) {
                            if (err) 
                                reject(err);
                            resolve(hash);
                        });
                });
        });
    }

    // decrypt given password in plain and hash password
    const decrypt = function (textPass, hashword) {
        return new Promise((resolve, reject) => {
            bcrypt
                .compare(textPass, hashword, function (err, isPasswordMatch) {
                    return err == null
                        ? resolve(isPasswordMatch)
                        : reject(err);
                });
        });
    }

    return {encrypt, decrypt}
})();

module.exports = crypto;
