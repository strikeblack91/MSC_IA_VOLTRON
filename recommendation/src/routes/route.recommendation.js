const router = require("express").Router();
const controllers = require("../controllers/controller.recommendation");

router.get("/recommendation", controllers.recommendation);

module.exports = router;
