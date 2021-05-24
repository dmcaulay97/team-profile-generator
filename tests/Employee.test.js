const Employee = require("../lib/Employee.js");

describe("Employee class", () => {
    describe("getName", () => {
        it("Should return the employee's name", () => {
            expect(new Employee("name", "email", 1).getName()).toBe("name");
        })
    });

    describe("email", () => {
        it("Should return the employee's email", () => {
            expect(new Employee("name", "email", 1).getEmail()).toBe("email");
        })
    });

    describe("getId", () => {
        it("Should return the employee's Id", () => {
            expect(new Employee("name", "email", 1).getId()).toBe(1);
        })
    });

    describe("getRole", () => {
        it("Should return the employee's role", () => {
            expect(new Employee("name", "email", 1).getRole()).toBe("Employee");
        })
    });
});