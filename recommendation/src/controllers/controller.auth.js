const { authService } = require("../services/service.auth");
const exceptionHelper = require("../helpers/helper.exception");

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;
    const accessToken = await authService.login(email, password);
    return res.status(200).json({
      message: "Utilisateur connecté",
      accessToken: accessToken,
    });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.signup = async function (req, res) {
  try {
    const { email, password} = req.body;
    await authService.signup(email, password);
    return res.status(200).json({ message: "Compte créé" });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};