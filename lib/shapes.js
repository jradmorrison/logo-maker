// ============================== Shape class ====================================
class Shapes {
    text;
    textColor;
    shapeColor;
    constructor(text, textColor, shapeColor) {

        if (text == '' || text.length > 3) {
            throw new Error('Input must be between 1 and 3 characters');
        }

        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {

        const text = this.setText();
        const shape = this.setShape();

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

${shape}

${text}
        
</svg>`
    }

    setShape() { }

    setText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

// ============================== Triangle class ========================================
class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    setShape() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`
    }

    setText() {
        return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

// ============================== Circle class ========================================
class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    setShape() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`
    }
}

// ============================== Square class ========================================
class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    setShape() {
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}"/>`
    }
}

// ============================= Export classes ==============================================
module.exports = {Triangle, Circle, Square}
