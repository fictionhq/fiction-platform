const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const logger = require("./logger");
const routeFactory = require("./routes/index");

app.use(bodyParser.json());
app.use("/v1/paper", routeFactory.paperRoute);

app.set("port", port);

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${3000}`);
});
