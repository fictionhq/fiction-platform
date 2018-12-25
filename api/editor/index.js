const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const mongoose = require("./mongoose");
const PORT = process.env.AUTH_PORT || 3002;
const socketIoController = require("./controllers/socket-io");

const mongooseInst = mongoose.getConnection();
const rootModel = require("./models/index")(mongooseInst);

socketIoController.initSocketIo(io, rootModel);

server.listen(PORT, err => {
  if (err) process.nextTick(err);

  console.log(`Editor service running at ${PORT}`);
});
