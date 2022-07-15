const jwt = require("jsonwebtoken");

exports.authService = class AuthService {
  static users = [];

  static async signup(email, password, tags) {
    this.users.push({
      email,
      password,
      tags,
    });
  }
};
