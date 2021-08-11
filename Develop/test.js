const generateMarkdown = require('./utils/generateMarkdown');

const testObj = {
    title: "README Generator",
    tableConfirm: true,
    description: "This readme generator has the ability to dynamically create readme files with minimal user input",
    installConfirm: true,
    installation: "Follow the instructions on the npm website in order to install",
    usage: "Use this application to dynamically generate professional README files using minimal user input, README will generate when all inputs are finished",
    contributerConfirm: true,
    contributers: 'Person 1, Person 2, Person 3',
    license: 'ISC',
    testConfirm: true,
    testInstructions: 'Make your you have your terminal navigated to this file and type in "node test" ',
    userName: 'James Hall',
    email: 'mr.sl3go.jh@gmail.com',
    github: "https://github.com/JHallUofA/readme-generator",
    extraContactInfo: 'Twitter: twitter.com/jack'
};

generateMarkdown(testObj)
    .then(data => console.log(data))