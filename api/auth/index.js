const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authRoutes = require('./routes/auth');
const PORT = process.env.AUTH_PORT || 3001;

// JSON body parser
app.use(bodyParser.json());
// register routes
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, (err) => {
    if (err) 
        throw new Error(err);
    
    console.log(`Auth service running at ${PORT}`);
});