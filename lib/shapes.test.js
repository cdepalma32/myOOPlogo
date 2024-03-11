
const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('Test render Circle', () => {
        const shape = new Circle();
        shape.shapecolor = 'red';
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="99" fill="red" />');
    });
});

describe('Triangle', () => {
    test('Test render Triangle', () => {
        const shape = new Triangle();
        shape.shapecolor = 'red';
        expect(shape.render()).toEqual('<polygon points="150 0, 300 200, 0 200" style="fill:red" />');
    });
});

describe('Square', () => {
    test('Test render Square', () => {
        const shape = new Square();
        shape.shapecolor = 'red';
        expect(shape.render()).toEqual('<rect width="300" height="200" style="fill:red" />');
    });
}); 

