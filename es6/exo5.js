/*
  Entraînement Array.prototype.reduce

  Ecrire une fonction "countTotalTimeSpent"
  qui permet de calculer le temps total passé sur le développement d'une
  application par tous les élèves passés en paramètre.

  Prototype:
      arr countTotalTimeSpent(arr);
*/

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : 65
*/

countTotalTimeSpent([{name: 'Homer', time: 15}, {name: 'Bart', time: 28}, {name: 'Lisa', time: 22}]);

/* DO NOT TOUCH */
module.exports = {
  countTotalTimeSpent: countTotalTimeSpent
}
