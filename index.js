const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const execute = require("./src/helper");

const objectsArr = [];

let html = "";

const renderData = () => {
  objectsArr.forEach((element) => {
    const { type, name, certs, github, phone } = element;
    html += `<div class="card"> 
    <h2> ${type} </h2>
    <h3> ${name} </h3>
    <h3> ${certs} </h3> 
    <a href='${github}' >  Github </a>
    <h3> ${phone} </h3>
  </div>`;
  });
  execute(html);
};

const decide = ({ type }) => {
  if (type === "engineer") {
    qlForEng(type);
  } else if (type === "manager") {
    qlForMgmt(type);
  } else if (type === "intern") {
    qlForIntern(type);
  }
};

const createObject = ({ certs, name }, type) => {
  if (type === "engineer") {
    objectsArr.push(new Engineer(type, certs, name));
    console.log("en");
  }
  if (type === "manager") {
    objectsArr.push(new Manager(type, certs, name));
    console.log("mg");
  }
  if (type === "intern") {
    objectsArr.push(new Intern(type, certs, name));
    console.log("it");
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
        choices: ["manager", "engineer", "intern"],
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