// ============================= Imports ===================================
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js')

// ======================= Questions for prompt ============================
const questions = [
    {
        type: 'input',
        message: 'TEXT: Enter up to (3) characters for the text of the logo',
        name: 'text'
    },
    {
        type: 'input',
        message: 'TEXT COLOR: Enter a color keyword or a HEX # for the text color',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'SHAPE: Select a shape for your logo',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'SHAPE COLOR: Enter a color keyword or a HEX # for the shape color',
        name: 'shapeColor'
    }
];

// ======================== Init Function ================================
function init() {
    inquirer
        .prompt(questions).then((data) => writeToFile(data));
};

// ======================== write file ===================================
function writeToFile(data) {

    let newLogo = {};
    const { text, textColor, shape, shapeColor } = data

    if (shape == 'Triangle') {
        newLogo = new Triangle(`${text}`, `${textColor}`, `${shapeColor}`);
    } else if (shape == 'Circle') {
        newLogo = new Circle(`${text}`, `${textColor}`, `${shapeColor}`)
    } else if (shape == 'Square') {
        newLogo = new Square(`${text}`, `${textColor}`, `${shapeColor}`)
    }

    const newSVG = newLogo.render();

    fs.writeFile(`./examples/${text}-${shape}.svg`, newSVG, (err) => err ? console.error(err) : console.log('Generated logo'));
}

init();
