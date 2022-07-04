const Employee = require("./Employee")
//require employee
class Intern extends Employee {
    //intern name, id, email, school
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;