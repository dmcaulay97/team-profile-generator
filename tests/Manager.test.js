const Manager = require("../lib/Manager.js")

describe("Manager class", () => {
    describe("getOffice", () => {
        it("should return the manager's office number", () => {
            expect(new Manager("name", "email", 1, 12).getOffice()).toBe(12);
        })
    });

    describe("getRole", () => {
        it("Should return the manager's role", () => {
            expect(new Manager("name", "email", 1, 12).getRole()).toBe("Manager");
        })
    });
});