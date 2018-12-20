const jwt = require("jsonwebtoken");

const jwtGenerator = (function () {
    // generate jwt
    const generate = function (username) {
        const generatedToken = jwt.sign({
            data: username
        }, 'secret', {expiresIn: '6h'});

        return generatedToken;
    }

    // verify jwt is valid or not
    const verify = function (token, userObj) {
        return new Promise((resolve, reject) => {
            jwt
                .verify(token, 'secret', function (err, decoded) {
                    userObj == decoded.data
                        ? resolve(true)
                        : reject(err, false);
                });
        });
    }

    return {generate, verify}
})();

module.exports = jwtGenerator;