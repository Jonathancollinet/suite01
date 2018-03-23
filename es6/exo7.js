/*
  Entraînement String.prototype.join

  Ecrire une fonction "joinDates"
  qui permet de créer une chaîne de caractère représentant une date
  à partir d'un tableau et d'un séparateur passés en paramètre.

  Prototype:
      str joinDates(_arr, _pattern);
*/

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : "18/05/2018"
*/

joinDates(['18', '05', '2018'], "/");

/*
  Test 2
  Résultat attendu : "10-12-2018"
*/

joinDates(['10', '12', '2018'], "-");

/* DO NOT TOUCH */
module.exports = {
  joinDates: joinDates
}
