const Engineer = require("../lib/Engineer.js");

describe("Engineer class", () => {
    describe("getGithub", () => {
        it("should return Engineer's github username", () => {
            expect(new Engineer("name", "email", 1, "github").getGithub()).toBe("github");
        })
    });

    describe("getRole", () => {
        it("should retrn the Engineer's role", () => {
            expect(new Engineer("name", "email", 1, "github").getRole()).toBe("Engineer");
        })
    });
});