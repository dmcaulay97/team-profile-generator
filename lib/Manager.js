const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, email, id, office) {
        super(name, email, id);
        this.office = office;
        this.role = "Manager"
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;