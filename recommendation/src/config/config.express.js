const express = require("express");
const cors = require("cors");

exports.init = async (app) => {
  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/", require("../routes/route.auth"));
  app.use("/recommendation", require("../routes/route.recommendation"));
  console.log("Express Initialized.");
};
