const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the text you want for you logo (1-3 characters)",
      name: "logoText",
      validate: (logoText) => logoText.length >= 1 && logoText.length <= 3,
    },
    {
      type: "input",
      message: "Enter the color you would like your text to be",
      name: "textColor",
    },
    {
      type: "list",
      message: "Select the shape you want your logo to be",
      name: "logoShape",
      choices: ["triangle", "circle", "square"],
    },
    {
      type: "input",
      message: "Enter the color you would like your shape fill to be",
      name: "shapeColor",
    },
  ])
  .then((data) => {
    let generatedSVG = getShape(data);
    let template = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${generatedSVG}
    </svg>`;
    fs.writeFile("./example/logo.svg", template, (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  });

function getShape(data) {
  switch (data.logoShape) {
    case "triangle":
      const triangleSVG = new Triangle(
        data.logoText,
        data.textColor,
        data.shapeColor
      );
      return triangleSVG.render();
    case "circle":
      const circleSVG = new Circle(
        data.logoText,
        data.textColor,
        data.shapeColor
      );
      return circleSVG.render();
    case "square":
      const squareSVG = new Square(
        data.logoText,
        data.textColor,
        data.shapeColor
      );
      return squareSVG.render();
    default:
      console.log("None of the cases matched");
  }
}
