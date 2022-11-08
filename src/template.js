const fs = require('fs');
//TODO: Receive team array and create html page with cards//
function populateHTML(teams) {
    let htmlHead = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Page</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class= "card-group">`;
    let card =''

    for (let i=0; i < teams.length; i++) {
        card += `<div class="card">
        <div class="card-body">
        <h5 class="card-title">${teams[i].name}</h5>`;
        if (teams[i].officeNo) {
            card += `<p class= "card-text bi bi-award"> ${teams[i].getRole()}</p></div>`;
        }

        else if (teams[i].github) {
            card += `<p class= "card-text bi bi-tools"> ${teams[i].getRole()}</p></div>`;
        }

        else if (teams[i].school) {
            card += `<p class= "card-text bi bi-activity"> ${teams[i].getRole()}</p></div>`;
        }

        card += `<ul class = "list-group list-group-flush">
            <li class= "list-group-item">ID: ${teams[i].id}</li>
            <li class= "list-group-item">Email: <a href ="mailto: ${teams[i].email}">${teams[i].email}</a></li>`;

        if (teams[i].officeNo) {
            card += `<li class= "list-group-item">Office Number: ${teams[i].officeNo}</li></ul></div>`;
        }

        else if (teams[i].github) {
            card += `<li class= "list-group-item">Github: ${teams[i].github}</li></ul></div>`;
        }

        else if (teams[i].school) {
            card += `<li class= "list-group-item">School: ${teams[i].school}</li></ul></div>`;
        }
    }

    card += '</div> </body> </html>';

    htmlHead += card;

    return htmlHead;
}

function writeHTML(data) {
    fs.writeFile('./dist/index.html', data, (err) =>
    err ? console.error(err) : console.log('Success! HTML File Created.')
    );
}

module.exports = {populateHTML, writeHTML};

