const router = require("express").Router();
const controllers = require("../controllers/controller.auth");

router.post("/signup", controllers.signup);

module.exports = router;
