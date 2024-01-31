const express = require("express");
const router = express.Router();
const {
  getAllFunction,
  postFunction,
  getbyidFunction,
  updateFunction,
  deleteFunction,
} = require("../controller/admin.controller");

router.route("/").get(getAllFunction);

router.route("/:id").get(getbyidFunction);

router.route("/").post(postFunction);

router.route("/:id").patch(updateFunction);

router.route("/:id").delete(deleteFunction);

module.exports = router;
