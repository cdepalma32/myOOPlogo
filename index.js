const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Circle, Triangle, Square } = require('./lib/shapes');

// Line of questioning
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 text characters. \n NOTE: text will be capatilized automatically.",
    validate: (input) => {
      if (input == "" || input > 3) {
        return console.log(
          "\n Cannot proceed without at least 1-3 text characters!"
        );
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "textcolor",
    message:
      "What text color would you like? Enter a color keyword or a hexadecimal number.",
    validate: (input) => {
      if (input == "") {
        return console.log(
          "\n This is required! Please provide a color keyword or a hexadecimal number for your text color."
        );
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would like behind/around your shape.",
    choices: ['Circle', 'Triangle', 'Square'],
    validate: (list) => {
      if (list == "") {
        return console.log(
          "\n Cannot proceed without choosing a shape! Please select from list."
        );
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "shapecolor",
    message:
      "What color would you like your shape to be? Enter a color keyword or a hexadecimal number.",
    validate: (input) => {
      if (input == "") {
        return console.log(
          "\n This is required! Please provide a color keyword or a hexadecimal number for your shape."
        );
      } else {
        return true;
      }
    },
  }
]

function writeToFile(answers) {
  let finalProduct;
  let svgEl = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"> <style> .svg { font: 50px sans-serif }</style>`;

  let text = `${answers.text}`;
  text = text.toUpperCase();

  if (answers.shape === 'Circle') {
    const newShape = new Circle(`${answers.shapecolor}`, text, `${answers.textcolor}`);
    svgEl += newShape.render();
    svgEl += `<text x="105" y="115" class="svg" fill="${answers.textcolor}">${text}</text></svg>`;
    finalProduct = svgEl;
  } else if (answers.shape === "Triangle") {
    const newShape = new Triangle(`${answers.shapecolor}`, text, `${answers.textcolor}`);
    svgEl += newShape.render();
    svgEl += `<text x="105" y="140" class="svg" fill="${answers.textcolor}">${text}</text></svg>`;
    finalProduct = svgEl;
  } else {
    const newShape = new Square(`${answers.shapecolor}`, text, `${answers.textcolor}`);
    svgEl += newShape.render();
    svgEl += `<text x="100" y="115" class="svg" fill="${answers.textcolor}">${text}</text></svg>`;
    finalProduct = svgEl;
  }

  fs.writeFile('./examples/logo.svg', finalProduct, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
  );
}

function init() {
  inquirer.prompt(questions)
    .then(answers => writeToFile(answers))
}

// Start on load
init(); 