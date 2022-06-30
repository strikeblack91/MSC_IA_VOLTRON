const router = require("express").Router();
const controllers = require("../controllers/controller.auth");

router.post("/login", controllers.login);
router.post("/signup", controllers.signup);

module.exports = router;