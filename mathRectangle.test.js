const MathRectangle = require('./mathRectangle');




describe('Testar a classe que faz operacoes matematicas com retangulos', () => {
    const lado10 = new MathRectangle(10, 10);
    const quad = new MathRectangle(3, 4);
    it('Deveria retornar uma area de 100 para um retangulo de lados 10 10', () => {

        expect(lado10.area()).toBe(100)

    })

    it('Deveria retornar 40 para o perimetro de um quadrado de lados 10', () => {
        expect(lado10.perimetro()).toBe(40);
    })

    it('Deveria retornar 5 para um retangulo de lados 3 e 4', () => {
        expect(quad.hipotenusa()).toBe(5);
    })

    it('Deveria caber 100 quadrados de lados 1 no retangulo de lados 10', () => {
        expect(lado10.numeroQuadrados(1)).toBe(100);
    })
    it('Deveria caber no maximo 2 triangulos equilateros de lados 10 em um quadrado de lado 10', () => {
        expect(lado10.numeroTriangulos(10)).toBe(2);
    })

    it('Deveria retornar um erro ao tentar usar um forma geometrica com lados negativos', () => {
        expect(() => { lado10.numeroQuadrados(-1) }).toThrowError('Lados geometricos não podem ser negativos');
    })

    it('Deveria retornar um erro ao criar um retangulo sem lados', () => {
        expect(() => { new MathRectangle() }).toThrowError('Lados devem ser definidos como numeros.');
    })

    it('Deveria retornar um erro ao criar um retangulo passando uma string ao inves de numeros.', () => {
        expect(() => { new MathRectangle("a", "b") }).toThrowError('Lados devem ser definidos como numeros.');
    })
})