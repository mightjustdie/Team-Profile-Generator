const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should get the name of the employee obj", () => {
      const obj = new Employee("Steve", 3141, "test@testmail.com");
      expect(obj.getName()).toEqual("Steve");
    })
  });

  describe("getId", () => {
    it("should get the id of the employee obj", () => {
      const obj = new Employee("Steve", 3141, "test@testmail.com");
      expect(obj.getId()).toEqual(1063);
    })
  });

  describe("getEmail", () => {
    it("should get the email of the employee obj", () => {
      const obj = new Employee("Steve", 3141, "test@testmail.com");
      expect(obj.getEmail()).toEqual("test@testmail.com");
    })
  });

  describe("getRole", () => {
    it("should return the string Employee", () => {
      const obj = new Employee("Steve", 3141, "test@testmail.com");
      expect(obj.getRole()).toEqual("Employee");
    })
  });
});