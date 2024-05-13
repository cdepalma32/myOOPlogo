// Imports the index.js file
const index = require('../index');

// Parent class - intitializes the shape's color, text and text color
// has a method setColor(color) to set the shape color
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

// Extends the Shape class and represents a circle shape -- overriding the render() method to return an SVG<circle>
// element with the specified shape color.
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="99" fill="${this.shapecolor}" />`;
        
    }
}

// Extends the Shape class and represents a triangle shape -- overriding the render() method to return an SVG<polygon>
// element with the specified shape color.
class Triangle extends Shape {
    render() {
        return `<polygon points="150 0 300 200 0 200" fill="${this.shapecolor}" />`; 
    }
}

// Extends the Shape class and represents a square shape -- overriding the render() method to return an SVG<rect>
// element with the specified shape color, width, height, x & y-coordinates.
class Square extends Shape {
    render() { 
        return `<rect width="200" height="200" x="10" y="10" fill="${this.shapecolor}" />`;
        
    }
}

// Exports the Shape, Circle, Triangle and Square classes, making them accessible in other files.
module.exports = { Shape, Circle, Triangle, Square }; 