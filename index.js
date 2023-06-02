const inquirer = require("inquirer");

const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const execute = require("./src/helper");

const objectsArr = [];

let html = "";

const renderData = () => {
  objectsArr.forEach((element) => {
    const { name, id, email } = element;
    console.log(element);
    html += (
    `<div class="${element.getRole() === 'Manager' ? `cardlg col-lg-10 col-10` : ` cardsm col-lg-2 col-10`}"> 
      <h2> ${element.getRole()} </h2>
      <br>
      <h4> ${name} </h4>
      <h4> ${id} </h4> 
      <button> <a href="mailto:${email}">  Send Email  </a> </button>
      ${
        element.getRole() === "Engineer"
          ? ` <button> <a href='${element.getGithub()}'  target='_blank'>  - Github -  </a> </button>`
          : ""
      }
      ${
        element.getRole() === "Manager"
          ? `<h3> ${element.getOfficeNumber()} </h3>`
          : ""
      }
      ${element.getRole() === "Intern" 
          ? `<h3> ${element.getSchool()} </h3>` 
          : ""
      }
  </div>`);
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

const createObject = (
  { name, id, email, github, officeNumber, school },
  type
) => {
  if (type === "engineer") {
    objectsArr.push(new Engineer(name, id, email, github));
    console.log("en");
  }
  if (type === "manager") {
    objectsArr.push(new Manager(name, id, email, officeNumber));
    console.log("mg");
  }
  if (type === "intern") {
    objectsArr.push(new Intern(name, id, email, school));
    console.log("it");
  }
  moreEmp();
};

const qlForEng = (type) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this engineers name?  ",
        name: "name",
      },
      {
        type: "input",
        message: "What is this engineers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this engineers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is this engineers full github URL?",
        name: "github",
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
        message: "What is the managers name?  ",
        name: "name",
      },
      {
        type: "input",
        message: "What is the managers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the managers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the managers office number?",
        name: "officeNumber",
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
        message: "What is this interns name?  ",
        name: "name",
      },
      {
        type: "input",
        message: "What is this interns id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this interns email?",
        name: "email",
      },
      {
        type: "input",
        message: "Where is this intern going to school?",
        name: "school",
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