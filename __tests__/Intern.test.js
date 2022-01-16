const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UNCC";
  const ins = new Intern("A", 1, "test@test.com", testValue);
  expect(ins.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const ins = new Intern("A", 1, "test@test.com", "UNCC");
  expect(ins.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UNCC";
  const ins = new Intern("A", 1, "test@test.com", testValue);
  expect(ins.getSchool()).toBe(testValue);
});