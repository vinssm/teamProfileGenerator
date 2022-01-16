const Engineer = require("./lib/Engineer"); // classes
const Intern = require("./lib/Intern");    // classes
const Manager = require("./lib/Manager");   // classes
const inquirer = require("inquirer");
const fs = require("fs");

const teamGenerator = require("./src/createHtml.js");

// Questions Array
const empInfo = [];

// CLI prompt questions
const questions = async () => {
  const prompt = await inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter Name? (Required)',
        name: 'name',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter your Name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        message: 'Enter ID? (Required)',
        name: 'id',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('You need to enter your ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        message: 'E-mail? (Required)',
        name: 'email',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to enter your E-mail address!');
            return false;
          }
        }
      },
      {
        type: 'list',
        message: 'Choose Role? (Required)',
        name: 'role',
        choices: ['Engineer', 'Intern', 'Manager'],
      },
    ])


    
      console.log(`
    =================================================
    Add an additional team option for the generator..
    =================================================
    `);
    
    
      // Role based prompt's
      if (prompt.role === 'Manager') {
        const managerAns = await inquirer
          .prompt([
            {
              type: 'input',
              message: 'Office Number: ',
              name: 'officeNumber',
              validate: officeNumberInput => {
                if (officeNumberInput) {
                  return true;
                } else {
                  console.log('You need to enter your ID!');
                  return false;
                }
              }
            },
          ])
          const manager = new Manager(prompt.name, prompt.id, prompt.email, managerAns.officeNumber);
          empInfo.push(manager);
          
      // Engineer
      } else if (prompt.role === 'Engineer') {
        const githubAns = await inquirer
          .prompt([
            {
              type: 'input',
              message: 'GitHub Name: ',
              name: 'github',
              validate: gitInput => {
                if (gitInput) {
                  return true;
                } else {
                  console.log('You need to enter a project GitHub link!');
                  return false;
                }
              }
            }
          ])
            const engineer = new Engineer(prompt.name, prompt.id, prompt.email, githubAns.github);
            empInfo.push(engineer);
          
      //  Intern
      } else if (prompt.role === 'Intern') {
        const internAns = await inquirer
          .prompt([
            {
              type: 'input',
              message: 'School Name: ',
              name: 'school',
              validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log('You need to enter a your School/University!');
                  return false;
                }
              }
            },
          ])
          
          const intern = new Intern(prompt.name, prompt.id, prompt.email, internAns.school);
          empInfo.push(intern);          
      } 

}; 

async function promptQuestions() {
  await questions()
    
  
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Append new employee', 'Create New Team'],
        message: 'Choose One: '
      }
    ])

    if (addMemberAns.addMember === 'Append new employee') {
      return promptQuestions()
    }
    return generateHTML();
}  

promptQuestions();

function generateHTML () {
  console.log("new employee", empInfo)
  return new Promise((resolve, reject) => {
  fs.writeFileSync(
    "./dist/index.html",
    teamGenerator(empInfo), function (err) {
      if (err) {
        throw err;
      }
      console.log("File created");
    });
    
  });
}




