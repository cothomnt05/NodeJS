//Client nhap todoList sau đó sẽ lưu và server bằng REST API , mô hình MVC, localhost:3000/api/todos/id
//sự khác nhau REST(protocol)/RPC

const path = require("path");
const express = require("express");
// const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 8000;

const route = require("./routes/index");

//dẫn trực tiếp tới các file tĩnh như hình ảnh CSS file hoặc JS file cú pháp express.static
app.use(express.static(path.join(__dirname, "public")));
//json và urlcoded là 1 phần của bodyparser
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
