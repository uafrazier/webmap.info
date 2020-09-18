var express = require("express");
var path = require("path");
var app = express();
var port = 8001;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//app.use(express.static(path.join(__dirname, "public")));

app.listen(port, "localhost", function () {
  console.log("Listening on port " + port);
});
