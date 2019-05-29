//jshint esversion:6
const express = require("express");
const app = express();

app.listen(3000);

app.get("/", function (req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(res, req) {
  console.log("success");
});
