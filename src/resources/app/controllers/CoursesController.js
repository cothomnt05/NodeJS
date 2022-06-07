const res = require("express/lib/response");
const Course = require("../Models/Courses");
const { multipleMongooseToObject } = require("../../../util/mongoose");

class CoursesController {
  //[GET]/show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((Course) => {
        res.json(Course);
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
