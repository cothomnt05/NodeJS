const express = require("express");
const route = express.Router();

const newsController = require("../resources/app/controllers/NewsController");
//newsController.index

newsController.index;
route.use("/:slug", newsController.show);
route.use("/", newsController.index);

module.exports = route;
