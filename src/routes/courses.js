const express = require("express");
const route = express.Router();

const courseController = require("../resources/app/controllers/CoursesController");
//newsController.index

route.use("/:slug", courseController.show);

module.exports = route;
