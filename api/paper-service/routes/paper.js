const express = require("express");
const router = express.Router();

const paperRoutes = function(logger) {
  router.use(function timeLog(req, res, next) {
    logger.info(`Request recieved {req}`);
    next();
  });

  router.get("/all", (req, res) => {});

  router.get("/:paperId", (req, res) => {});

  return router;
};

module.exports = paperRoutes;
