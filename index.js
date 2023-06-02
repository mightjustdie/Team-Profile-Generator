const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const objectsArr = [];

const renderHtml = (element) => {
  const { type, name, certs, github, phone } = element;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel='stylesheet' href='./style.css'> 
</head>
<body>

 <div class="card"> 
  <h2> ${type} </h2>
  <h3> ${name} </h3>
  <h3> ${certs} </h3> 
  <a href='${github}' >  Github </a>
  <h3> ${phone} </h3>
</div>

</body>
</html>
    `;
};

const renderData = () => {
  objectsArr.forEach((element) => {
    const fill = renderHtml(element);

    const { type } = element;

    fs.appendFile("./dist/index.html", fill, (err) => {
      err ? console.log(err) : console.log(`Sucessfully made a ${type} card`);
    });
  });
};

const decide = ({ type }) => {
  if (type === "engineer") {
    qlForEng(type);
  } else if (type === "manager") {
    qlForMgmt(type);
  } else if (type === 'intern') {
    qlForIntern(type)
  }
};

const createObject = ({ certs, name }, type ) => {
  if(type === 'engineer') {
  objectsArr.push(new Engineer(type, certs, name));
  console.log('en')
  }
  if (type === 'manager') {
    objectsArr.push(new Manager(type, certs, name))
    console.log('mg')
  }
  if (type === 'intern') {
    objectsArr.push(new Intern(type, certs, name))
    console.log('it')
  }
  moreEmp();
};

const qlForEng = (type) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name? ",
        name: "name",
      },
      {
        type: "input",
        message: "What certifications do you have?",
        name: "certs",
      },
    ])
    .then((data) => {
      createObject(data, type);
    });
};

const qlForMgmt = (type) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name? ",
        name: "name",
      },
      {
        type: "input",
        message: "What certifications do you have?",
        name: "certs",
      },
    ])
    .then((data) => {
      createObject(data, type);
    });
};

const qlForIntern = (type) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name? ",
        name: "name",
      },
      {
        type: "input",
        message: "What certifications do you have?",
        name: "certs",
      },
    ])
    .then((data) => {
      createObject(data, type);
    });
};

const app = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee is this?",
        name: "type",
        choices: ["manager", "engineer", "intern" ],
      },
    ])
    .then((data) => {
      decide(data);
    });
};

const moreEmp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you have another employee to list?",
        name: "more",
        choices: ["Yes", "No"],
      },
    ])
    .then((data) => {
      const { more } = data;
      if (more === "Yes") {
        app();
      } else if (more === "No") {
        renderData();
      }
    });
};

app();