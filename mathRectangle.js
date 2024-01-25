class MathRectangle {

    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
        this.checkLado(altura);
        this.checkLado(largura);
    }

    area() {
        return this.altura * this.largura;
    }

    perimetro() {
        return 2 * this.altura + 2 * this.largura;
    }

    hipotenusa() {
        return Math.sqrt(this.altura * this.altura + this.largura * this.largura);
    }

    //Quantos quadrados com lado menor que o do retangulo cabem no retangulo
    numeroQuadrados(lado) {
        this.checkLado(lado);
        return Math.floor(this.area() / (lado * lado));
    }

    checkLado(lado) {
        if (lado < 0) {
            throw new Error('Lados geometricos não podem ser negativos')
        }
        if (lado === undefined || typeof lado !== 'number') {
            throw new Error('Lados devem ser definidos como numeros.')
        }
        return true
    }
    /*Quantos triangulos equilateros com lado menor que o retangulo cabem no retangulo*/
    numeroTriangulos(lado) {
        this.checkLado(lado);
        const areaTriangulo = (Math.sqrt(3) / 4) * lado * lado;
        return Math.floor(this.area() / areaTriangulo);
    }
}

module.exports = MathRectangle;