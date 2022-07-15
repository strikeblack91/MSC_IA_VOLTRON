const { luminosityService } = require("../services/service.luminosity");
const exceptionHelper = require("../helpers/helper.exception");

exports.update = async function (req, res) {
  try {
    const { luminosity } = req.body;
    const mustBeColder = await luminosityService.update(luminosity);
    return res.status(200).json({
      message: mustBeColder ? "Diminution" : "Augmentation",
    });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.define = async function (req, res) {
  try {
    const { luminosity } = req.body;
    await luminosityService.define(luminosity);
    return res.status(200).json({ message: "Luminosité mise à jour" });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
