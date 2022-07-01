const express = require("express");
const cors = require("cors");

exports.init = async (app) => {
  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/", require("../routes/route.temperature"));
  console.log("Express Initialized.");
};
