const newsRoute = require("./news");
const courseRoute = require("./courses");
const siteRoute = require("./site");

function route(app) {
  app.use("/news", newsRoute);
  app.use("/courses", courseRoute);
  app.use("/", siteRoute);
}

module.exports = route;
