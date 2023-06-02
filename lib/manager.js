const Employee = require('./employee');

class Manager extends Employee {
    constructor(type, certs, name) {
        super("themgmt", "678-988-9977");
        this.type = type;
        this.certs = certs;
        this.name = name;
      }
}

module.exports = Manager; 