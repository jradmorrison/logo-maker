const { Triangle, Circle, Square } = require('./shapes.js');

// ============================ Tests for Triangle ===========================
describe('Triangle', () => {
    it('should construct a new object with the properties passed', () => {
        const shape = new Triangle(
            'jam',
            'white',
            'blue'
        )
        expect(shape.text).toEqual('JAM');
        expect(shape.textColor).toEqual('white');
        expect(shape.shapeColor).toEqual('blue');
    })
});

// ============================ Tests for Circle =============================
describe('Circle', () => {
    it('should construct a new object with the properties passed', () => {
        const shape = new Circle(
            'jam',
            'white',
            'blue'
        )
        expect(shape.text).toEqual('JAM');
        expect(shape.textColor).toEqual('white');
        expect(shape.shapeColor).toEqual('blue');
    })
});

// =========================== Tests for Square ===============================
describe('Square', () => {
    it('should construct a new object with the properties passed', () => {
        const shape = new Square(
            'jam',
            'white',
            'blue'
        )
        expect(shape.text).toEqual('JAM');
        expect(shape.textColor).toEqual('white');
        expect(shape.shapeColor).toEqual('blue');
    })
});
