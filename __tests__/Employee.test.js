const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("sets Employee name", () => {
  const name = "Vinss";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("sets the Employee ID", () => {
  const testValue = 100;
  const emp = new Employee("A", testValue);
  expect(emp.id).toBe(testValue);
});

test("sets the Employee Email", () => {
  const testValue = "test@test.com";
  const emp = new Employee("A", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("get name via getName()", () => {
  const testValue = "Vinss";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("get id via getId()", () => {
  const testValue = 100;
  const emp = new Employee("A", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("get email via getEmail()", () => {
  const testValue = "test@test.com";
  const emp = new Employee("A", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const emp = new Employee("Vinss", 1, "test@test.com");
  expect(emp.getRole()).toBe(testValue);
});