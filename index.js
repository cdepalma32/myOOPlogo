const inquirer = require("inquirer"); // Import inquirer
const fs = require("fs"); // Import fs
const { Shape, Circle, Triangle, Square } = require('./lib/shapes'); // Imports Shape, Circle, Triangle and Square classes from shapes.js

// Line of questioning // defines the questions that will be presented to the user during the inquirer prompt.
// Questions include: type, name, message & validation function to ensure valid input.
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 text characters. \n NOTE: text will be capatilized automatically.",
    validate: (input) => {
      if (input === "" || input.length < 3 || input.length > 3) {
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
      "What text color would you like? Enter a color keyword or a hexadecimal number (example: #2471A3).",
    validate: (input) => {
      if (input == "") {
        return console.log(
          "\n This is required! Please provide a color keyword or a hexadecimal number for your text color (example: #2471A3)."
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
      "What color would you like your shape to be? Enter a color keyword or a hexadecimal number (example:#2471A3).",
    validate: (input) => {
      if (input == "") {
        return console.log(
          "\n This is required! Please provide a color keyword or a hexadecimal number for your shape (example: #2471A3)."
        );
      } else {
        return true;
      }
    },
  }
]

// Takes the user's answers from the prompt and generates an SVG image based on the selected shape, shape color,
// text and text color.  Then it writes the SVG content to a file named logo.svg in the examples directory.
function writeToFile(answers) {
  let finalProduct;
  let svgEl = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"> 
    <style>.svg { font: 50px sans-serif }</style>
    <rect width="100%" height="100%" fill="white"/>`;

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
    svgEl += `<text x="60" y="115" class="svg" fill="${answers.textcolor}">${text}</text></svg>`;
    finalProduct = svgEl;
  }

  // Logs messgae indicating whether the file was successfully generated or if there was an error.
  // Writes the generated SVG content stored in finalProduct to a file named logo.svg in examples directory.
  fs.writeFile('./examples/logo.svg', finalProduct, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
  );
}

// Initiates the inquirer prompt by calling inquirer.prompt(questions) and passes the user's ansers
// to the writeToFile function
function init() {
  inquirer.prompt(questions)
    .then(answers => writeToFile(answers))
}

// Starts the app, calling init function
init(); 