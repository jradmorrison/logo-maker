//* Started to write what i think i'll need, work in progress obviously
// TODO: Write questions and figure out how to pass input for shape, color, and text to class constructor and make a new logo
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const question = [];

function init() {
    inquirer
    .prompt(questions).then((data) => writeToFile(data));
};

function writeToFile(fileName, data) {
    // let readMeContent = buildReadMe(data);
    fs.writeFile('fileName', 'readMeContent', (err) => err ? console.error(err) : console.log('Generated logo'));
}

init();
