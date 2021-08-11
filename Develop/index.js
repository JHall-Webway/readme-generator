// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?:',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'tableConfirm',
        message: 'Would you like a table of contents?',
        default: true
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project!:',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'installConfirm',
        message: 'Does your project need to be installed?',
        default: false
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project:',
        when: ({ installConfirm }) => {
            if (installConfirm) {
                return true;
            }
            return false;
        },
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how an end user might use your project for themselves:',
    },
    {
        type: 'confirm',
        name: 'contributerConfirm',
        message: 'Would you like to list any contributers other than yourself?',
        default: false
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Please enter in any individual contributers seperated by a comma ",":',
        when: ({ contributerConfirm }) => {
            if (contributerConfirm) {
                return true;
            }
            return false;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license that you would like to attach to your project',
        choices: ['ISC', 'MIT', 'GNU GPLv3.0', 'other(manual entry)', 'none']
    },
    {
        type: 'input',
        name: 'licenseTitle',
        message: 'Please enter in the title of your license:',
        when: ({ license }) => {
            if (license === 'other(manual entry)') {
                return true;
            }
            return false;
        },
        validate: licenseTitle => {
            if (licenseTitle) {
                return true;
            } else {
                console.log('Please enter the title of your license!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'licenseYear',
        message: 'Would you like to manually enter a copyright year?(Defaults to now):',
        default: new Date().getFullYear(),
        when: ({ license }) => {
            if (license === 'other(manual entry)') {
                return true;
            }
            return false;
        }
    },
    {
        type: 'input',
        name: 'licenseBody',
        message: 'Please enter in the body of your license:',
        when: ({ license }) => {
            if (license === 'other(manual entry)') {
                return true;
            }
            return false;
        },
        validate: licenseBody => {
            if (licenseBody) {
                return true;
            } else {
                console.log('Please enter the body of your license!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'testConfirm',
        message: 'Does your application have a test function?',
        default: false
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please input your desired instructions on how to run the test function:',
        when: ({ testConfirm }) => {
            if (testConfirm) {
                return true;
            }
            return false;
        },
        validate: testInstructions => {
            if (testInstructions) {
                return true;
            } else {
                console.log('Please input your desired instructions!');
            }
        }
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your name?(or the name you would like to attach as the author)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter any email you would like attached to your name'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter any GitHub link you would like attached to your name'
    },
    {
        type: 'input',
        name: 'extraContactInfo',
        message: 'Please enter (if any) any extra contact info that you would like to include'
    }])
.then(answers => generateMarkdown(answers))



