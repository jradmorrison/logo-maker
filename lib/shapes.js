class Shapes {
    text;
    textColor;
    shapeColor;
    constructor(text, textColor, shapeColor) {
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

let newLogo = new `${shape}`(`text`, `textColor`, `shapeColor`)
