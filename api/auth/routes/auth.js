const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // username and passowrd check return jwt always for now
    if (true) {
        const generatedToken = jwt.sign({
            data: 'username'
        }, 'secret', {expiresIn: '6h'});

        res.json({status: true, token: generatedToken});
    } else {
        res.json({status: false, message: "Invalid credentials"});
    }
});

module.exports = router;