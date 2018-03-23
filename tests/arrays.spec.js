describe("Arrays", () => {

  /* Import exercices */
  // const exo1 = require('../arrays/exo1');
  // const exo2 = require('../arrays/exo2');
  // const exo3 = require('../arrays/exo3');
  // const exo4 = require('../arrays/exo4');
  const exo5 = require('../arrays/exo5');
  // const exo6 = require('../arrays/exo6');
  // const exo7 = require('../arrays/exo7');

  /* Test Exercice 1 */
  xdescribe('Arrays - Exo 1', () => {
    it('should return "j"', () => {
      const spyedFun = spyOn(String.prototype, "charAt").and.callThrough();
      expect(exo1.getCharAt("bonjour", 3)).toEqual("j");
      expect(spyedFun).not.toHaveBeenCalled();
    });

    it('should return "v"', () => {
      expect(exo1.getCharAt("comment ça va?", 11)).toEqual("v");
    });
  });

  /* Test Exercice 2 */
  xdescribe('Arrays - Exo 2', () => {
    it('should return the array modified with "ça"', () => {
      let arr1 = ["bonjour", 4, 5];
      exo2.editArrayAt(arr1, 1, "ça");
      expect(arr1).toEqual(["bonjour", "ça", 5]);
    });

    it('should return the array modified with "va"', () => {
      let arr1 = ["bonjour", "ça", 5];
      exo2.editArrayAt(arr1, 2, "va?");
      expect(arr1).toEqual(["bonjour", "ça", "va?"]);
    });
  });

  /* Test Exercice 3 */
  xdescribe('Arrays - Exo 3', () => {
    it('should return "bondour"', () => {
      expect(exo3.editStringAt("Bonjour", 3, "d")).toEqual("Bondour");
    });

    it('should return "Hello World"', () => {
      expect(exo3.editStringAt("Hello world", 6, "W")).toEqual("Hello World");
      });
  });

  /* Test Exercice 4 */
  xdescribe('Arrays - Exo 4', () => {
    it('should return 2', () => {
      const spyedFun = spyOn(Array.prototype, "indexOf").and.callThrough();
      expect(exo4.searchOcc(["Salut", "ça", "va", "?"], "va")).toEqual(2);
      expect(spyedFun).not.toHaveBeenCalled();
    });

    it('should return -1', () => {
      expect(exo4.searchOcc(["Salut", "ça", "va", "?"], "Ahahahah")).toEqual(-1);
      });
  });

  /* Test Exercice 5 */
  describe('Arrays - Exo 5', () => {
    it('should return arrays merged - 1', () => {
      const spyedFun = spyOn(Array.prototype, "concat").and.callThrough();
      const arr1 = ["bonjour"];
      const arr2 = ["ça", "va?", 3, 4];
      const result = exo5.mergeArrays(arr1, arr2);

      expect(spyedFun).not.toHaveBeenCalled();
      expect(result).toEqual(["bonjour", "ça", "va?", 3, 4]);
      expect(arr1).toEqual(["bonjour"]);
      expect(arr2).toEqual(["ça", "va?", 3, 4]);
    });

    xit('should return arrays concatenated - 2', () => {
      expect(exo5.concatArrays(["enchanté", "je"], ["m'appelle", "comment?"])).toEqual(["enchanté", "je", "m'appelle", "comment?"]);
    });
  });

  /* Test Exercice 4 */
  xdescribe('Arrays - Exo 6', () => {
    it('should return sorted array - 1', () => {
      const spyedFun = spyOn(Array.prototype, "sort").and.callThrough();
      expect(exo6.sortNumbers([4, 3, 5, 2])).toEqual([2, 3, 4, 5]);
      expect(spyedFun).not.toHaveBeenCalled();
    });

    it('should return sorted array - 2', () => {
      expect(exo6.sortNumbers([10, 2, 28, -10])).toEqual([-10, 2, 10, 28]);
      });
  });

  /* Test Exercice 7 */
  xdescribe('Arrays - Exo 7', () => {
    it('should return splitted string - 1', () => {
      const spyedFun = spyOn(String.prototype, "split").and.callThrough();
      expect(exo7.splitStr("Bonjour comment tu vas ? ça va merci.", " ")).toEqual(["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]);
      expect(spyedFun).not.toHaveBeenCalled();
    });

    it('should return -1', () => {
      expect(exo7.splitStr("06-20-42-18-54", "-")).toEqual(["06", "20", "42", "18", "54"]);
      });
  });
});
