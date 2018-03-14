/*
  Ecrire une fonction "editArrayAt"
  qui prend en paramètre un tableau, une position et une valeur.
  La fonction modifie la valeur à la position du tableau demandée.

  Prototype:
      void editArrayAt(arr, position, value);
*/

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : ["bonjour", "ça", 5]
*/
var arr1 = ["bonjour", 4, 5];
editArrayAt(arr1, 1, "ça");

/*
  Test 2
  Résultat attendu : ["bonjour", "ça", "va?"]
*/
editArrayAt(arr1, 2, "va?");
