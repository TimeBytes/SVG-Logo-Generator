// import triangle, circle and square class
const { Triangle, Circle, Square } = require("./shapes");

// tests the circle class render function
describe("Circle", () => {
  it("it should return true when the constructor takes SVG,blue,green", () => {
    let circle = new Circle("SVG", "blue", "green");
    expect(circle.render()).toEqual(
      `<circle cx="150" cy="100" r="100" fill="green"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">SVG</text>`
    );
  });
});

//tests the triangle class render function
describe("Triangle", () => {
  it("it should return true when the constructor takes SVG,blue,green", () => {
    let triangle = new Triangle("SVG", "blue", "green");
    expect(triangle.render()).toEqual(
      `<polygon points="150 0 0 200 300 200" fill="green"/><text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">SVG</text>`
    );
  });
});

//tests the square class render function
describe("Square", () => {
  it("it should return true when the constructor takes SVG,blue,green", () => {
    let square = new Square("SVG", "blue", "green");
    expect(square.render()).toEqual(
      `<rect x="50" y="0" width="200" height="200" fill="green"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">SVG</text>`
    );
  });
});
