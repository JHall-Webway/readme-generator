const generateMarkdown = require('./utils/generateMarkdown');

const testObj = {
    title: "README Generator",
    tableConfirm: true,
    description: "This readme generator has the ability to dynamically create readme files with minimal user input",
    installConfirm: true,
    installation: "Follow the instructions on the npm website in order to install",
    usage: "Use this application to dynamically generate professional README files using minimal user input, README will generate when all inputs are finished",
    license: 'other(manual entry)',
    licenseTitle: 'Custom Title',
    licenseYear: 1992,
    licenseBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    testConfirm: true,
    testInstructions: 'Make your you have your terminal navigated to this file and type in "node test" ',
    email: 'mr.sl3go.jh@gmail.com',
    github: "https://github.com/JHallUofA/readme-generator",
    extraContactInfo: 'Twitter: twitter.com/jack'
};

console.log(generateMarkdown(testObj));