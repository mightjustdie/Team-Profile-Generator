const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/engineer');

const objectsArr = [];

const renderHtml = (fill) => {
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
 <card> 
 <div> email: ${fill} </div>
 </card> 
    
</body>
</html>
    `;
};

const renderData = () => {
  objectsArr.forEach((element) => {
    const { name, certs, github, phone } = element;
    const fill = renderHtml(github);

    fs.appendFile("index.html", fill, (err) => {
      err ? console.log(err) : console.log("sucess");
    });
  });
};

const decide = ({ type }) => {
  if (type === "engineer") {
    qlForEng();
  } else if (type === "manager") {
    qlForMgmt();
  }
};

const createObject = ({ certs, name }) => {
  objectsArr.push(new Engineer(certs, name));
  moreEmp();
};

const qlForEng = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What certifications do you have?",
        name: "certs",
      },
      {
        type: "input",
        message: "What is your name? ",
        name: "name",
      },
    ])
    .then((data) => {
      createObject(data);
    });
};

const app = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee is this?",
        name: "type",
        choices: ["manager", "engineer"],
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