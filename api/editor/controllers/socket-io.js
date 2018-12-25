const textHelper = require("./helpers/");

const initSocketIo = function(io, models) {
  const textModel = models.text;

  io.on("connection", socket => {
    console.log("onConnection");

    socket.on("text", data => {
      textHelper.saveText(data.docName, data.text, data.username, textModel);
      // emit to other clients
      console.log(`onText ${text}`);
    });

    socket.on("disconnect", () => {
      console.log("onDisconnect");
    });
  });
};

module.exports = {
  initSocketIo
};
