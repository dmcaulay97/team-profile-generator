const Manager = require("../lib/Manager.js")

describe("Manager class", () => {
    describe("getRole", () => {
        it("Should return the manager's role", () => {
            expect(new Manager("name", "email", 1, 12).getRole()).toBe("Manager");
        })
    });
});