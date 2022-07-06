const Employee = require("./Employee")
//require employee
class Manager extends Employee {
    //manager name, id, email, office
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber;
    }
}

module.exports = Manager;