// shape class, paret of triangle, cirlce and square
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.width = 300;
    this.height = 200;
  }
}

// triangle class, child of the shape class with added render function for triangle svg
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<polygon points="${this.width / 2} 0 0 ${this.height} ${
      this.width
    } ${this.height}" fill="${this.shapeColor}"/><text x="${
      this.width / 2
    }" y="${this.height / 2 + 50}" font-size="60" text-anchor="middle" fill="${
      this.textColor
    }">${this.text}</text>`;
  }
}

// circle class, child of the shape class with modified render function for circle svg
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="${this.width / 2}" cy="${this.height / 2}" r="${
      this.height / 2
    }" fill="${this.shapeColor}"/><text x="${this.width / 2}" y="${
      this.height / 2 + 20
    }" font-size="60" text-anchor="middle" fill="${this.textColor}">${
      this.text
    }</text>`;
  }
}

// square class, child of the shape class with modified render function for square svg
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect x="${(this.width - this.height) / 2}" y="0" width="${
      this.height
    }" height="${this.height}" fill="${this.shapeColor}"/><text x="${
      this.width / 2
    }" y="${this.height / 2 + 20}" font-size="60" text-anchor="middle" fill="${
      this.textColor
    }">${this.text}</text>`;
  }
}

// export triangle, circle and square as an opject
module.exports = { Triangle, Circle, Square };
