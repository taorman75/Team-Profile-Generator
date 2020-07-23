# Team-Profile-Generator (https://github.com/taorman75/Team-Profile-Generator)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

## Description

This app allows the user, prompted by a series of Node prompts created by Inquirer, to dynamically create an HTML page that displays information about a team of managers, engineers, and interns.

Included in the repository are a series of tests, which were used to check that the Employee.js, Engineer.js, Intern.js, and Manager.js files were working properly.

## Installation

To use this application, the user must install the "Inquirer" npm for the prompts to work. Please enter "npm install inquirer"; see more information at https://www.npmjs.com/package/inquirer.

## Usage

To use the application, the user must open the "Team Profile Generator" file in the command line, then change directory to "Develop." Then enter "node app.js" to begin the program.

![run Team Generator screen shot](https://github.com/taorman75/Team-Profile-Generator/blob/master/Assets/openTGfile.jpg)

The program will begin by asking for the manager's information - including name, id, email address, and office number. Then, from a list, the user may select to add another team member (either an engineer or an intern) or select "no more members."

![manager info screen shot](https://github.com/taorman75/Team-Profile-Generator/blob/master/Assets/ManagerInfo.jpg)

If the user selects either "engineer" or "intern", the user is prompted to add the team member's information, including name, id, email address, and either GitHub name (engineers) or school (interns). After completing the questions, the user has an opportunity to enter another team member.

![team info screen shot](https://github.com/taorman75/Team-Profile-Generator/blob/master/Assets/TeamAdd.jpg)

When all team members' information has been entered, the user should select "no more members." At that point, a file called "team.html" will be automatically generated. It will be located in the "Output" folder.

![team html screen shot](https://github.com/taorman75/Team-Profile-Generator/blob/master/Assets/teamHTML.jpg)

If the user opens the "team.html" file in the browser, the resulting page will look like this example.

![browser screen shot](https://github.com/taorman75/Team-Profile-Generator/blob/master/Assets/TeamPage.jpg)

## Questions

Please direct any questions to *tana.owens@gmail.com* or visit my GitHub profile at https://github.com/taorman75.