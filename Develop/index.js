// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?(required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the link to your repository?(if public available)'
        },
        {
            type: 'confirm',
            name: 'featuresConfirm',
            message: 'Would you like to list seperate features?',
            default: false
        },
        {
            type: 'input',
            name: 'description',
            message: 'Generally describe your project(required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            
            when: ({ featuresConfirm }) => {
                if (featuresConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like a table of contents?',
            default: false
        },
        {
            type: 'confirm',
            name: 'installConfirm',
            message: 'Does your project need to be installed?',
            default: false
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide detailed installation instructions',
            when: ({ installConfirm }) => {
                if (installConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use this project(required)',
            validate: useDescription => {
                if (useDescription) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'confirm',
            name: 'screenshotConfirm',
            message: 'Would you like to include a screenshot in your usage description?',
            default: false
        },
        {
            type: 'input',
            name: 'screenshotDirectory',
            message: 'Please enter in the location of your screenshot',
            when: ({ screenshotConfirm }) => {
                if (screenshotConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license you would like to use',
            choices: ['ISC', 'MIT', 'GNU GPLv3', 'Other']
        },
        {
            type: 'input',
            name: 'licenseInput',
            message: 'Please enter a Title for your custom license',
            when: ({ license }) => {
                if (license === 'Other') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'licenseCopyRightDate',
            message: 'What year are we marking the Copyright year for?',
            default: new Date().getFullYear(),
            when: ({ licenseInput }) => {
                if (licenseInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'licenseBodyInput',
            message: 'Please enter the body of your custom license',
            when: ({ licenseInput }) => {
                if (licenseInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubLink',
            message: 'Please enter the link to your GitHub profile(if you have one)',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input an Email that you would like anyone to contact you at(if you have one)'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return questions();
}

// Function call to initialize app
init()
    .then(answers => console.log(answers));
