const res = require("express/lib/response");
const Course = require("../Models/Courses");
const { multipleMongooseToObject } = require("../../../util/mongoose");

class SiteController {
  //[GET]/
  index(req, res, next) {
    // Course.find({}, function (err, Courses) {
    //   if (!err) {
    //     res.json(Courses);
    //   } else {
    //     next();
    //     res.status(400).json({ error: "ERROR!!!" });
    //   }
    // });
    Course.find({})
      .then((courses) => {
        // courses = courses.map((course) => course.toObject());
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
    // res.render("home");
  }
  //[GET]/search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
