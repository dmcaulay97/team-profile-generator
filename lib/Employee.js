//This is the parent class that ill be extended to diferentiate between different types of employees. It contains basic emplyee info.
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = "Employee"
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;