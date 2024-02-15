const Student = require("./Student")
const Course = require("./Course")

Course.belongsToMany(Student, { through: "courseStudents" })
Student.belongsToMany(Course, { through: "courseStudents" })