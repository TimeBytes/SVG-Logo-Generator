class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.width = 300;
    this.height = 200;
  }
}

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

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<polygon points="${this.width / 2} 0 0 ${this.height} ${
      this.width
    } ${this.height}"fill="${this.shapeColor}"/><text x="${
      this.width / 2
    }" y="${this.height / 2 + 50}" font-size="60" text-anchor="middle" fill="${
      this.textColor
    }">${this.text}</text>`;
  }
}

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

module.exports = { Triangle, Circle, Square };
