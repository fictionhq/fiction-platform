const express = require("express");
const { check, oneOf, validationResult } = require("express-validator/check");
const router = express.Router();
const authController = require("../controllers/auth");

const authRoutes = models => {
  router.get(
    "/",
    [
      check("username")
        .exists()
        .isString(),
      check("password", "password no")
        .exists()
        .isString()
        .isLength({ min: 5 })
    ],
    async (req, res) => {
      const username = req.query.username;

      try {
        const dbUser = await authController.retrieveUser(req, models.user);
        if (dbUser) {
          const jwt = authController.createJwt(username);
          res.status(200);
          res.set("Authorization", jwt);
          res.send({
            status: true
          });
        } else {
          res.status(401);
          res.send({
            status: false
          });
        }
      } catch (ex) {
        res.status(500);
        res.send({
          status: false
        });
      }
    }
  );

  router.post("/", async (req, res) => {
    try {
      const userCreated = await authController.saveUser(req, models.user);
      res.status(200);
      res.send({
        status: true,
        message: "User created"
      });
    } catch (ex) {
      res.status(503);
    }
  });

  return router;
};

module.exports = authRoutes;
