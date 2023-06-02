const Employee = require('./employee');

class Intern extends Employee {
    constructor(type, certs, name) {
        super("theintern", "678-988-9977");
        this.type = type;
        this.certs = certs;
        this.name = name;
      }
}

module.exports = Intern; 