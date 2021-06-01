// this function generated the html code sniippet that represents the employee card depending on which employee type is passed to it.
function generateEmployee(employee) {
    let icon;
    let attr;
    if (employee.getRole() == "Manager") {
        icon = `<i class="fas fa-clipboard"></i>`
        attr = `Office Number: ${employee.getOffice()}`
    } else if (employee.getRole() == "Engineer") {
        icon = `<i class="fas fa-code-branch"></i>`
        attr = `Github Profile: <a href="https://github.com/${employee.getGithub()}">Github Profile</a>`
    } else {
        icon = `<i class="fas fa-graduation-cap"></i>`
        attr = `School: ${employee.getSchool()}`
    }
    return `
<div class="card">
    <div class="card-body">
        <h5 class="card-title">${employee.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()} ${icon}</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email: ${employee.getEmail()} <a href="mailto:${employee.getEmail()}">Send Email</a> </li>
        <li class="list-group-item">${attr}</li>
    </ul>
</div>\n`
}

//This function takes the final list of team members and inserts it into the greater html structure.
function teamPage(str) {
    return `
<!DOCTYPE html>
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
    generateEmployee,
    teamPage
}