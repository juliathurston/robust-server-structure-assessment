const router = require("express").Router();
const controller = require("./uses.controller")
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:useId")
  .get(controller.read)
  .delete(controller.destroy)
  .all(methodNotAllowed)

router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed)

module.exports = router