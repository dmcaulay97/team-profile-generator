const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

function generateManager(name, email, id, office) {
    const manager = new Manager(name, email, id, office);
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager <i class="fas fa-clipboard"></i></h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: ${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
    </ul>
</div>\n`
}

function generateEngineer(name, email, id, github) {
    const engineer = new Engineer(name, email, id, github);
    return ` <div class="card">
    <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer <i class="fas fa-code-branch"></i></h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
        <li class="list-group-item">Github Profile: ${engineer.getGithub()}</li>
    </ul>
</div>\n`
}

function generateIntern(name, email, id, school) {
    const intern = new Intern(name, email, id, school);
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern <i class="fas fa-graduation-cap"></i></h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: ${intern.getEmail()}</li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>\n`
}

function teamPage(str) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header>
            <h1>Team Members</h1>
        </header>
        <div class="container">
            <div class="row">
                ${str}
            </div>
        </div>
    
    </body>
    
    </html>`
}

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern,
    teamPage
}