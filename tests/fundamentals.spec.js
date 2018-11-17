describe("Fundamentals", () => {

    /* Import exercices */
    // const exo5 = require('../fundamentals/exo05');
    // const exo7 = require('../fundamentals/exo07');
    // const exo8 = require('../fundamentals/exo08');
    // const exo9 = require('../fundamentals/exo09');
    // const exo10 = require('../fundamentals/exo10');

  
    /* Test Exercice 5 */
    xdescribe('Fundamentals - Exo 5', () => { 
      it('should return "Hello"', () => {
        expect(exo5.returnArg("Hello")).toEqual("Hello");
      });

      it('should return 3', () => {
        expect(exo5.returnArg(3)).toEqual(3);
      });

      it('should return false', () => {
        expect(exo5.returnArg(false)).toEqual(false);
      });
    });

    /* Test Exercice 7 */
    xdescribe('Fundamentals - Exo 7', () => { 
      it('should return the array of variables', () => {
        expect(exo7.returnArray()).toEqual(["Dan Smith", "Helga Ollens", "Mark Johns", "Mika Kelt", "Maria Hellins"]);
      });
    });

    /* Test Exercice 8 */
    xdescribe('Fundamentals - Exo 8', () => { 
      it('should return "Hello"', () => {
        expect(exo8.returnFirstEtl(['Hello', 'Good morning', 'Hey', 'Hi'])).toEqual("Hello");
      });

      it('should return 1', () => {
        expect(exo8.returnFirstEtl([1, 2, 3, 4])).toEqual(1);
      });
    });

    /* Test Exercice 9 */
    xdescribe('Fundamentals - Exo 9', () => { 
      it('should return "Hi"', () => {
        expect(exo9.returnLastElt(['Hello', 'Good morning', 'Hey', 'Hi'])).toEqual("Hi");
      });

      it('should return 4', () => {
        expect(exo9.returnLastElt([1, 2, 3, 4])).toEqual(4);
      });

      it('should return "bananas"', () => {
        expect(exo9.returnLastElt(['Mushrooms', 'bananas'])).toEqual("bananas");
      });

      it('should return 42', () => {
        expect(exo9.returnLastElt([12, 34, 76, 43, 80, 51, 56, 41, 42])).toEqual(42);
      });
    });

    /* Test Exercice 10 */
    xdescribe('Fundamentals - Exo 10', () => { 
      it('should return "Hi"', () => {
        expect(exo10.returnElt(['Hello', 'Good morning', 'Hey', 'Hi'], 3)).toEqual("Hi");
      });

      it('should return 1', () => {
        expect(exo10.returnElt([1, 2, 3, 4], 0)).toEqual(1);
      });

      it('should return "bananas"', () => {
        expect(exo10.returnElt(['Mushrooms', 'bananas'], 1)).toEqual("bananas");
      });

      it('should return 51', () => {
        expect(exo10.returnElt([12, 34, 76, 43, 80, 51, 56, 41, 42], 5)).toEqual(51);
      });
    });
  });
  