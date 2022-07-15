const { authService } = require("../services/service.auth");
const exceptionHelper = require("../helpers/helper.exception");

exports.signup = async function (req, res) {
  try {
    const { email, password, tags } = req.body;
    await authService.signup(email, password, tags);
    return res.status(200).json({ message: "Compte créé" });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
