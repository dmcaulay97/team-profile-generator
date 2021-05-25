const inquirer = require("inquirer");
const fs = require("fs");
const generator = require("./src/generator.js");
const { create } = require("domain");

let questions = [
    {
        type: "input",
        message: "Enter Employee's Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Employee's Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter Employee's ID Number:",
        name: "id"
    }
]

//These functions return the html snippits that make up the employee card on the web page

function makeManager() {
    questions.push({ type: "input", message: "Enter Employee's Office Number:", name: "office" });
    return inquirer.prompt(questions)
        .then(({ name, email, id, office }) => {
            return generator.generateManager(name, email, id, office)
        })
}

function makeEngineer() {
    questions.splice(3, 1, { type: "input", message: "Enter Employee's Github Username:", name: "github" });
    return inquirer.prompt(questions)
        .then(({ name, email, id, github }) => {
            return generator.generateEngineer(name, email, id, github)
        })
}

function makeIntern() {
    questions.splice(3, 1, { type: "input", message: "Enter Employee's School: ", name: "school" });
    return inquirer.prompt(questions)
        .then(({ name, email, id, school }) => {
            return generator.generateIntern(name, email, id, school);
        })
}

function createPage(str) {
    const team = generator.teamPage(str);
    fs.writeFile("./dist/index.html", team, (err) => {
        err ? console.error(err) : console.log("Success!");
    })
}

function askToContinue(codeString) {
    inquirer.prompt([{ type: "list", message: "Would you like to add another team member?", name: "add", choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, I'm done"] }])
        .then(({ add }) => {
            if (add == "Yes, add an Engineer") {
                makeEngineer()
                    .then((data) => {
                        codeString = codeString + data;
                        askToContinue(codeString)
                    })
            } else if (add == "Yes, add an Intern") {
                makeIntern()
                    .then((data) => {
                        codeString = codeString + data;
                        askToContinue(codeString)
                    })
            } else {
                createPage(codeString);
            }
        })
}

function init() {
    makeManager()
        .then((data) => {
            askToContinue(data)
        })
}

init();
