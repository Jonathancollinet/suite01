xdescribe("Basics", () => {

  /* Import exercices */
  // const exo2 = require('../basics/ex02');
  // const exo3 = require('../basics/ex03');
  // const exo4 = require('../basics/ex04');
  // const exo5 = require('../basics/ex05');
  // const exo6 = require('../basics/ex06');
  // const exo7 = require('../basics/ex07');
  // const exo8 = require('../basics/ex08');
  // const exo9 = require('../basics/ex09');
  // const exo10 = require('../basics/ex10');

  /* Test Exercice 2 */
  xdescribe('Basics - Exo 2', () => {
    it('should return 5', () => {
      expect(exo2.retParam(5)).toEqual(5);
    });

    it('should return 10', () => {
      expect(exo2.retParam(10)).toEqual(10);
    });
  });

  /* Test Exercice 3 */
  xdescribe('Basics - Exo 3', () => {
    it('should return 15', () => {
      expect(exo3.addition(6, 9)).toEqual(15);
    });

    it('should return 444444', () => {
      expect(exo3.addition(98766, 345678)).toEqual(444444);
    });
  });

  /* Test Exercice 4 */
  xdescribe('Basics - Exo 4', () => {
    it('should return 1', () => {
      expect(exo4.isEven(6)).toEqual(1);
    });

    it('should return 0', () => {
      expect(exo4.isEven(5)).toEqual(0);
    });
  });

  /* Test Exercice 5 */
  xdescribe('Basics - Exo 5', () => {
    it('should return "6 est pair"', () => {
      expect(exo5.isEvenConcat(6)).toEqual("6 est pair");
    });

    it('should return "5 est impair"', () => {
      expect(exo5.isEvenConcat(5)).toEqual("5 est impair");
    });
  });

  /* Test Exercice 6 */
  xdescribe('Basics - Exo 6', () => {
    it('should return "impossible... ou encore jamais vu"', () => {
      expect(exo6.getHumanTypeByAge(-5)).toEqual("impossible... ou encore jamais vu");
    });

    it('should return "enfant"', () => {
      expect(exo6.getHumanTypeByAge(6)).toEqual("enfant");
    });

    it('should return "ado"', () => {
      expect(exo6.getHumanTypeByAge(17)).toEqual("ado");
    });

    it('should return "adulte"', () => {
      expect(exo6.getHumanTypeByAge(33)).toEqual("adulte");
    });

    it('should return "impossible... ou encore jamais vu"', () => {
      expect(exo6.getHumanTypeByAge(140)).toEqual("impossible... ou encore jamais vu");
    });
  });

  /* Test Exercice 7 */
  xdescribe('Basics - Exo 7', () => {
    it('should return 15', () => {
      expect(exo7.boostedAddition([4, 5, 6])).toEqual(15);
    });

    it('should return 44', () => {
      expect(exo7.boostedAddition([4, 4, 6, 8, 10, 12])).toEqual(44);
    });
  });

  /* Test Exercice 8 */
  xdescribe('Basics - Exo 8', () => {
    it('should return 0', () => {
      expect(exo8.isAllEven([4, 5, 6])).toEqual(0);
    });

    it('should return 1', () => {
      expect(exo8.isAllEven([4, 4, 6, 8, 10, 12])).toEqual(1);
    });
  });

  /* Test Exercice 9 */
  xdescribe('Basics - Exo 2', () => {
    it('should return 10', () => {
      expect(exo9.boostedEvenAddition([4, 5, 6])).toEqual(10);
    });

    it('should return 44', () => {
      expect(exo9.boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12])).toEqual(44);
    });
  });

  /* Test Exercice 10 */
  xdescribe('Basics - Exo 10', () => {
    it('should return an object with the correct number of fruits', () => {
      expect(exo10.shoppingList([
          ["orange", "orange", "kiwi", "ananas"],
          ["kiwi", "ananas", "banane", "prune"],
          ["orange", "orange", "orange", "orange"],
          ["orange", "orange", "kiwi", "kiwi"],
          ["prune", "banane", "pamplemousse", "ananas"]
      ])).toEqual({
        "orange": 8,
        "kiwi": 4,
        "ananas": 3,
        "prune": 2,
        "banane": 2,
        "pamplemousse": 1
      });
    });
  });
});
