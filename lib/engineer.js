const Employee = require('./employee')

class Engineer extends Employee {
    constructor(type, certs, name) {
      super("brenthomas02", "678-988-9977");
      this.type = type;
      this.certs = certs;
      this.name = name;
    }
  }

module.exports = Engineer;