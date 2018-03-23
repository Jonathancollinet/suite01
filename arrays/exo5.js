/*
  Ecrire une fonction "mergeArrays"
  qui prend deux tableaux et qui renvoie un tableau constitué du contenu des deux tableaux.

  Prototype:
      arr mergeArrays(arr1, arr2);

  Fonctions interdites:
      - Array.prototype.concat

  La fonction ne doit pas modifier les tableaux sources.
*/

//  écrire votre code sous ce commentaire
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2]

/*
  Test 1
  Résultat attendu : ["bonjour", "ça", "va?", 3, 4]
*/
mergeArrays(["bonjour"], ["ça", "va?", 3, 4]);

/*
  Test 2
  Résultat attendu : ["enchanté", "je", "m'appelle", "comment?"]
*/
mergeArrays(["enchanté", "je"], ["m'appelle", "comment?"]);

/* DO NOT TOUCH */
module.exports = {
  mergeArrays: mergeArrays
}
