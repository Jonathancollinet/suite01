describe("Es6", () => {

  /* Import exercices */
  // const exo1 = require('../es6/exo1');
  // const exo2 = require('../es6/exo2');
  // const exo3 = require('../es6/exo3');
  // const exo4 = require('../es6/exo4');
  // const exo5 = require('../es6/exo5');
  // const exo6 = require('../es6/exo6');
  // const exo7 = require('../es6/exo7');

  /* Test Exercice 1 */
  xdescribe('Es6 - Exo 1', () => {
    it('should return ["John", "Judith", "Julia"]', () => {
      const spyedFun = spyOn(Array.prototype, "map").and.callThrough();
      expect(exo1.getAllLastnames([{name: 'John'}, {name: 'Judith'}, {name: 'Julia'}])).toEqual(["John", "Judith", "Julia"]);
      expect(spyedFun).toHaveBeenCalled();
    });

    it('should return ["Marc", "", "Robert"]', () => {
      expect(exo1.getAllLastnames([{name: 'Marc'}, {age: 18}, {name: 'Robert'}])).toEqual(["Marc", "", "Robert"]);
    });
  });

  /* Test Exercice 2 */
  xdescribe('Es6 - Exo 2', () => {
    it('should return [2, 6, 8]', () => {
      const spyedFun = spyOn(Array.prototype, "filter").and.callThrough();
      expect(exo2.filterEvenNumbers([2, 5, 6, 8])).toEqual([2, 6, 8]);
      expect(spyedFun).toHaveBeenCalled();
    });

    it('should return []', () => {
      expect(exo2.filterEvenNumbers([1, 3, 5, 7])).toEqual([]);
    });

    it('should return [0, 8]', () => {
      expect(exo2.filterEvenNumbers([0, 3, 8, 11])).toEqual([0, 8]);
    });
  });

  /* Test Exercice 3 */
  xdescribe('Es6 - Exo 3', () => {
    it('should return "banane"', () => {
      const spyedFun = spyOn(Array.prototype, "find").and.callThrough();
      const fruits = [{name: 'orange', color: 'orange'}, {name: 'banane', color: 'jaune'},{name: 'pomme', color: 'rouge'}];
      expect(exo3.findYellowFruit(fruits)).toEqual("banane");
      expect(spyedFun).toHaveBeenCalled();
    });

    it('should return ""', () => {
      const fruits = [{name: 'orange', color: 'orange'}, {name: 'pomme', color: 'vert'}];
      expect(exo3.findYellowFruit(fruits)).toEqual("");
    });
  });

  /* Test Exercice 4 */
  xdescribe('Es6 - Exo 4', () => {
    it('should return true', () => {
      const spyedFun = spyOn(Array.prototype, "includes").and.callThrough();
      const vehicules = ["subaru", "volkswagen", "mercedes", "peugeot"];
      expect(exo4.checkVehicles(vehicules, "mercedes")).toBeTruthy();
      expect(spyedFun).toHaveBeenCalled();
    });

    it('should return false', () => {
      const vehicules = ["suzuki", "honda", "ducati"];
      expect(exo4.checkVehicles(vehicules, "bmw")).toBeFalsy();
    });
  });

  /* Test Exercice 5 */
  xdescribe('Es6 - Exo 5', () => {
    it('should return 65', () => {
      const spyedFun = spyOn(Array.prototype, "reduce").and.callThrough();
      const users = [{name: 'Homer', time: 15}, {name: 'Bart', time: 28}, {name: 'Lisa', time: 22}];
      expect(exo5.countTotalTimeSpent(users)).toEqual(65);
      expect(spyedFun).toHaveBeenCalled();
    });
  });

  /* Test Exercice 6 */
  xdescribe('Es6 - Exo 6', () => {
    it('should return ["Thursday", "Friday"]', () => {
      const spyedFun = spyOn(String.prototype, "split").and.callThrough();
      expect(exo6.getTwoLastItems("Monday,Tuesday,Wednesday,Thursday,Friday", ",")).toEqual(["Thursday", "Friday"]);
      expect(spyedFun).toHaveBeenCalled();
    });

    it('should return ["02", "2018"]', () => {
      expect(exo6.getTwoLastItems("25/02/2018", "/")).toEqual(["02", "2018"]);
    });
  });

  /* Test Exercice 7 */
  xdescribe('Es6 - Exo 7', () => {
    it('should return "18/05/2018"', () => {
      const spyedFun = spyOn(Array.prototype, "join").and.callThrough();
      expect(exo7.joinDates(['18', '05', '2018'], "/")).toEqual("18/05/2018");
      expect(spyedFun).toHaveBeenCalled();
    });

    it('should return "10-12-2018"', () => {
      expect(exo7.joinDates(['10', '12', '2018'], "-")).toEqual("10-12-2018");
    });

    it('should return "15052017"', () => {
      expect(exo7.joinDates(['15', '05', '2017'], "")).toEqual("15052017");
    });
  });
});
