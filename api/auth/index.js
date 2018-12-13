const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = process.env.AUTH_PORT || 3001;

app.use(bodyParser.json());

app.get("/api/v1/auth", (req, res) => {
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

app.listen(PORT, (err) => {
    if (err) 
        throw new Error(err);
    
    console.log(`Auth service running at ${PORT}`);
});