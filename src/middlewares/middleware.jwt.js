const jwt = require("jsonwebtoken");

module.exports.verify = function (req, res, next) {
  try {
    const bearerHeader = req.headers["authorization"];
    const accessToken = bearerHeader.split(" ")[1];
    req.decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
    req.accessToken = accessToken;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token invalide ou Expiré" });
  }
};
