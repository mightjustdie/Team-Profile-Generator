const fs = require("fs");

const writeHtml = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My App</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>

    ${data}
    
    </body>
  </html>
    `;
};
const execute = async (param) => {
  const fill = writeHtml(param);
  fs.writeFile("./dist/index.html", fill, (err) => {
    err ? console.log(err) : console.log("sucess");
  });
};

module.exports = execute;