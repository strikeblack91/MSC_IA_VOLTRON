const dotenv = require("dotenv");
const express = require("./config.express");

exports.init = async (app) => {
  dotenv.config();
  await express.init(app);
};
