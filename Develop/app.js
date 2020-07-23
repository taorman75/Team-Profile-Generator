const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function addEngineer() {
        inquirer.prompt([
            {
            type: "input",
            message: "Please enter the engineer's name.",
            name: "engineerName"
            },
            {
            type: "input",
            message: "What is the engineer's id?",
            name: "engineerID"
            },
            {
            type: "input",
            message: "What is the engineer's email address?",
            name: "engineerEmail"
            },
            {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "engineerGitHub"
            }
        ]).then(responses => {
            const engineer = new Engineer(responses.engineerName, responses.engineerID, responses.engineerEmail, responses.engineerGitHub);
            teamMembers.push(engineer);
            idArray.push(responses.engineerID);
            createTeam();
        })
    };

 function addIntern() {
        inquirer.prompt([
            {
            type: "input",
            message: "Please enter the intern's name.",
            name: "internName"
            },
            {
            type: "input",
            message: "What is the intern's id?",
            name: "internID"
            },
            {
            type: "input",
            message: "What is the intern's email address?",
            name: "internEmail"
            },
            {
            type: "input",
            message: "What is the intern's current school?",
            name: "internSchool"
            }
        ]).then(responses => {
            const intern = new Intern(responses.internName, responses.internID, responses.internEmail, responses.internSchool);
            teamMembers.push(intern);
            idArray.push(responses.internID);
            createTeam();
        })
    };

function createTeam() {
        inquirer.prompt([
            {
              type: "list",
              message: "What team member would you like to add?",
              name: "teamMember",
              choices: ["Engineer", "Intern", "No More Members"]
            }
        ]).then(responses => {
            //{ teamMember: 'Engineer' }
            if (responses.teamMember === "Engineer") {
                addEngineer();
            } else if (responses.teamMember === "Intern") {
                addIntern();
            } else if (responses.teamMember === "No More Members") {
                console.log("Writing the team!")
            }   
        })
    };


function menu() {
    console.log("Please enter your team information.");
    
        inquirer.prompt([
            {
             type: "input",
             message: "Please enter your manager's name." ,
             name: "managerName",
            //  validate:  
            }, 
            {
            type: "input",
            message: "What is the manager's id?",
            name: "managerID"
            },
            {
            type: "input",
            message: "What is the manager's email address?",
            name: "managerEmail"
            },
            {
            type: "input",
            message: "What is the manager's office number?",
            name: "mgrOffNum"
            }
        ]).then(responses => {
            const manager = new Manager(responses.managerName, responses.managerID, responses.managerEmail, responses.mgrOffNum);
            teamMembers.push(manager);
            idArray.push(responses.managerID);
            createTeam();
        })
    

};

menu();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
