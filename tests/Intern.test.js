const Intern = require("../lib/Intern.js");

describe("Intern class", () => {
    describe("getSchool", () => {
        it("Should return the Intern's school", () => {
            expect(new Intern("name", "email", 1, "school").getSchool()).toBe("school");
        })
    });


    describe("getRole", () => {
        it("Should return the Intern's role", () => {
            expect(new Intern("name", "email", 1, "school").getRole()).toBe("Intern");
        })
    });
});