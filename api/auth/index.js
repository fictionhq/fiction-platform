const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authRoutes = require("./routes/auth");
const mongoose = require("./mongoose");
const config = require("config");
const expressValidator = require("express-validator");
const PORT = process.env.AUTH_PORT || 3001;

// connect to mongoose
const mongooseInst = mongoose.getConnection();

const rootModel = require("./models/index")(mongooseInst);
// JSON body parser
app.use(bodyParser.json());
// register routes
app.use("/api/v1/auth", authRoutes(rootModel));

app.listen(PORT, err => {
  if (err) throw new Error(err);

  console.log(`Auth service running at ${PORT}`);
});
