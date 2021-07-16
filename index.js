// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer.prompt ([
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'Emailaddress',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? (use arrow keys)',
        choices: ['MIT', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
    type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about contributing to the repo?'
    },
])
   


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile('readMe.md');
    })
}

// Function call to initialize app
init();
