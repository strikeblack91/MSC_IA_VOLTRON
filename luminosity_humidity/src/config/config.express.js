const express = require("express");
const cors = require("cors");

exports.init = async (app) => {
  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/humidity", require("../routes/route.humidity"));
  app.use("/luminosity", require("../routes/route.luminosity"));
  console.log("Express Initialized.");
};
