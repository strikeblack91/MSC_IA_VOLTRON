const router = require("express").Router();
const controllers = require("../controllers/controller.humidity");

router.post("/define", controllers.define);
router.post("/update", controllers.update);

module.exports = router;
