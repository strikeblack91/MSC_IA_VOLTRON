const { recommendationService } = require("../services/service.recommendation");
const exceptionHelper = require("../helpers/helper.exception");

exports.recommendation = async function (req, res) {
  try {
    const { email } = req.body;
    const book = await recommendationService.recommendation(email);
    return res.status(200).json({
      message: "Succès",
      book: book,
    });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
