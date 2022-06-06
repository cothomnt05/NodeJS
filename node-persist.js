var storage = require("node-persist");
//ham khoi tao
//load du lieu da luu tren o dia
storage.initSync({
  dir: "students",
});
//ham lay ds sinh vien
function getAllStudents() {
  //ham lay danh sach sinh vien
  var students = storage.getItemSync("students");
  //neu ko co sv tra ve mang rong
  if (typeof students === "undefined") {
    return [];
  }

  return students;
}

//ham lay chi tiet sinh vien
function getStudent(studentId) {
  //lay danh sach sinh vien
  var students = getAllStudents();

  // tao bien sinh vien
  var matchedStudent = null;

  //loop tim sinh vien
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      matchedStudent = students[i];
      break;
    }
  }
  return matchedStudent;
}

// ham them sinh vien
function addStudent(id, fullname) {
  var students = getAllStudents();

  students.push({
    id: id,
    fullname: fullname,
  });

  storage.setItemSync("students", students);
}
//ham xoa sinh vien
function removeStudent(studentId) {
  var students = getAllStudents();
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students.splice(i, 1);
    }
  }
  storage.setItemSync("students", students);
}

//ham sua sinh vien
function editStudent(studentId, studentName) {
  var students = getAllStudents();
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students[i].fullname = studentName;
    }
  }
  storage.setItemSync("students", students);
}

//ham hien thi danh sach sinh vien
function showStudents() {
  var students = getAllStudents();
  students.forEach((student) =>
    console.log("Student: " + student.fullname + " (" + student.id + ")")
  );
}
//xoa toan bo
function removeAll() {
  storage.setItem("students", []);
  console.log("data is removed");
}
removeAll();
showStudents();
