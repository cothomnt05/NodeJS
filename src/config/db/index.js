const monogoose = require("mongoose");

async function connect() {
  try {
    await monogoose.connect("mongodb://localhost:27017/edu_dev");
    console.log("Connect Successfully!!!");
  } catch (error) {
    console.log("Connect Failure!!!");
  }
}

module.exports = { connect };
