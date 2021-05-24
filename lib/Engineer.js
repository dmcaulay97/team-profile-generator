const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
        this.role = "Engineer"
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;