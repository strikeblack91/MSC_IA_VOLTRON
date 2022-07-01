const router = require("express").Router();
const controllers = require("../controllers/controller.recommendation");
const jwt = require("../middlewares/middleware.jwt");

router.get("/recommendation", jwt.verify, controllers.recommendation);

module.exports = router;
