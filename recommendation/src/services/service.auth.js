const jwt = require("jsonwebtoken");

exports.authService = class AuthService {
  static async signup(email, password) {}

  static async login(email, password) {
    const accessToken = this.generateAccessToken();
    return accessToken;
  }

  static generateAccessToken = function () {
    console.log(process.env.ACCESS_TOKEN);
    return jwt.sign(
      {},
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "30d",
      }
    );
  };
};
