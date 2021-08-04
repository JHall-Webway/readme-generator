const generateMarkdown = require('./utils/generateMarkdown');

const testObj = {
    name: "README Generator",
    repo: "https://github.com/JHallUofA/readme-generator",
    description: "This readme generator has the ability to dynamically create readme files with minimal user input",
    table: true,
    installConfirm: true,
    install: "Follow the instructions on the npm website in order to install",
    usage: "Use this application to dynamically generate professional README files using minimal user input, README will generate when all inputs are finished",
    languages: ['Javascript', 'ES6', 'Node'],
    screenshotConfirm: true,
    screenshotDirectory: './images/screenshot.png',
    license: 'Other',
    licenseInput: 'Custom Title',
    licenseCopyRightDate: 2021,
    licenseBodyInput: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    githubLink: 'https://github.com/JHallUofA',
    email: 'mr.sl3go.jh@gmail.com'
};

console.log(generateMarkdown(testObj));