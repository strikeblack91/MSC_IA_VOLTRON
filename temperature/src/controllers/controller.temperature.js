const { temperatureService } = require("../services/service.temperature");
const exceptionHelper = require("../helpers/helper.exception");

// Update ppwer
exports.update = async function (req, res) {
  try {
    const { temperature } = req.body;
    const mustBeColder = await temperatureService.update(temperature);
    return res.status(200).json({
      message: mustBeColder
        ? "Refroidissement en cours"
        : "Chauffement en cours",
    });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

// Set the temperature wanted
exports.define = async function (req, res) {
  try {
    const { temperature } = req.body;
    await temperatureService.define(temperature);
    return res.status(200).json({ message: "Température mise à jour" });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
