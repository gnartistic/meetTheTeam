const Employee = require("./Employee");
// require employee

class Engineer extends Employee {
    constructor(employeeName, id, email, github) {
        super(employeeName, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer