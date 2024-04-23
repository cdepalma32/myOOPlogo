// Imports classes from shapes.js
const { Circle, Triangle, Square } = require('./shapes');

// test blocks defined using describe for each class shape
// in each test block, a test case is defined using test to check the render() method of each shape class

// creates and describes a circle shape in SVG with a center at coordinates (150, 100), a radius of 99 units,
// filled with the color red with the specified center and radius on the canvas.
describe('Circle', () => {
    test('Test render Circle', () => {
        const shape = new Circle();
        shape.shapecolor = 'red';
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="99" fill="red" />');
    });
});

// for triangle: creates/describes a triangle shape in SVG with vertices at coordinates (150,0), (300, 200), and
// filled with the color red.  When rendered in SVG image, the specified vertices and color are displayed, as such.
describe('Triangle', () => {
    test('Test render Triangle', () => {
        const shape = new Triangle();
        shape.shapecolor = 'red';
        expect(shape.render()).toEqual('<polygon points="150 0, 300 200, 0 200" style="fill:red" />');
    });
});

// for square: creates/describes a rect/square shape in SVG with with a width of 300 units, a height of 200 units, and
// filled with the color red.  When rendered in SVG image, the specified dimensions and color are displayed, as such.
describe('Square', () => {
    test('Test render Square', () => {
        const shape = new Square();
        shape.shapecolor = 'red';
        expect(shape.render()).toEqual('<rect width="300" height="200" style="fill:red" />');
    });
}); 

