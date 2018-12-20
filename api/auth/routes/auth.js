const express = require("express");
const router = express.Router();

const authRoutes = function(mongoose) {
    router.get('/', function (req, res) {
        const username = req.body.username;
        const password = req.body.password;
    
        // username and passowrd check return jwt
        res.send(true);
    });

    return router;
}

module.exports = authRoutes;