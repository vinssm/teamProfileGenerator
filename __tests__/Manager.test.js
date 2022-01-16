const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const manag = new Manager("A", 1, "test@test.com", testValue);
  expect(manag.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const manag = new Manager("A", 1, "test@test.com", 100);
  expect(manag.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const manag = new Manager("A", 1, "test@test.com", testValue);
  expect(manag.getOfficeNumber()).toBe(testValue);
});