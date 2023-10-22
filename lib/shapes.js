class Shapes {
    text;
    textColor;
    shapeColor;
    constructor(text, textColor, shapeColor) {

        if (text == '' || text.length > 3) {
            throw new Error('Input must be between 1 and 3 characters');
        }

        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
    Super(text, textColor, shapeColor)
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        Super(text, textColor, shapeColor)
        }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        Super(text, textColor, shapeColor)
        }
}

module.exports = Shapes, Triangle, Circle, Square;
