const { humidityService } = require("../services/service.humidity");
const exceptionHelper = require("../helpers/helper.exception");

exports.update = async function (req, res) {
  try {
    const { humidity } = req.body;
    const mustBeColder = await humidityService.update(humidity);
    return res.status(200).json({
      message: mustBeColder ? "Diminution" : "Augmentation",
    });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.define = async function (req, res) {
  try {
    const { humidity } = req.body;
    await humidityService.define(humidity);
    return res.status(200).json({ message: "Humidité mis à jour" });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
