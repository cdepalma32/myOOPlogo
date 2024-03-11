
const index = require('../index');

class Shape {
    constructor(shapecolor, text, textcolor) {
        this.shapecolor = shapecolor;
        this.text = text;
        this.textcolor = textcolor;
    }

    setColor(color) {
        this.shapecolor = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="99" fill="${this.shapecolor}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150 0, 300 200, 0 200" style="fill${this.shapecolor}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="300" height="200" style="fill${this.shapecolor}" />`;
    }
}

module.exports = { Shape, Circle, Triangle, Square }; 