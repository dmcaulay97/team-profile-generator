function generateManager(name, email, id, office) {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager <i class="fas fa-clipboard"></i></h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Office Number: ${office}</li>
    </ul>
</div>\n`
}

function generateEngineer(name, email, id, github) {
    return ` <div class="card">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer <i class="fas fa-code-branch"></i></h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Github Profile: ${github}</li>
    </ul>
</div>\n`
}

function generateIntern(name, email, id, school) {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern <i class="fas fa-graduation-cap"></i></h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">School: ${school}</li>
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