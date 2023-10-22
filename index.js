// TODO: Write questions and figure out how to pass input for shape, color, and text to class constructor and make a new logo
const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes.js')
const Triangle = require('./lib/shapes.js')
const Circle = require('./lib/shapes.js')
const Square = require('./lib/shapes.js')

const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters for the text of the logo:',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color do you want to the text to be?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Select a shape for your logo:',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color do you want the shape?',
        name: 'shapeColor'
    }
];

function init() {
    inquirer
    .prompt(questions).then((data) => writeToFile(data));
};

function writeToFile(data) {

    let newLogo = {};
    const {text, textColor, shape, shapeColor} = data

    if (shape == 'Triangle') {
        newLogo = new Triangle(`${text}`, `${textColor}`, `${shapeColor}`);
    } else if (shape == 'Circle') {
        newLogo = new Circle(`${text}`, `${textColor}`, `${shapeColor}`)
    } else if (shape == 'Square') {
        newLogo = new Square(`${text}`, `${textColor}`, `${shapeColor}`)
    }

    console.log(newLogo);

    // fs.writeFile(`./examples/${text}.svg`, newLogo, (err) => err ? console.error(err) : console.log('Generated logo'));
}

init();
