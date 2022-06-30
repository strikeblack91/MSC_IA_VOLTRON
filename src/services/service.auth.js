const jwt = require("jsonwebtoken");

exports.authService = class AuthService {
  static async signup(email, password) {}

  static async login(email, password) {
    const accessToken = this.generateAccessToken(user);
    return accessToken;
  }

  static generateAccessToken = function (user) {
    return jwt.sign(
      { id: user._id, type: user.type },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "30d",
      }
    );
  };
};
