// class for constructor
class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName; // name
        this.id = id; // id
        this.email = email; // email
    }
    getName() {
        return this.employeeName; // print name
    }
    getId() {
        return this.id; // print id
    }
    getEmail() {
        return this.email; // print email
    }
    getRole() {
        return this.constructor.name; // print object
    }
}
module.exports = Employee; // export