const Engineer = require("../lib/Engineer");

test("sets GitHUb account", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("A", 1, "test@test.com", testValue);
  expect(eng.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const eng = new Engineer("A", 1, "test@test.com", "GitHubUser");
  expect(eng.getRole()).toBe(testValue);
});

test("gets GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("A", 1, "test@test.com", testValue);
  //expect(eng.getGitHub()).toBe(testValue);
});