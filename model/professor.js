
const mongoose = require('mongoose')

const professorSchema = {
    prof_id: {type: Number, required:true},
    Name: {type: String, required:true},
    email: {type: String, required:true},
    ph_no: {type: Number, required:true},
    Dept: {type: String, required:true},
    Courses_taught: {type: String, required:true},
    Experience: {type: String, required:true},
    Salary: {type: Number, required:true},
}
module.exports = mongoose.model("Professor", professorSchema)
