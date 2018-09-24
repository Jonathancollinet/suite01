/*
  Retourner un élément d'un tableau

  La fonction returnElt(arr, pos) prend un tableau et un nombre en argument
  et retourne la valeur de l'élément du tableau à la position 'pos' donnée
  Attention, on prendra la position à partir de 0

  Prototype:
    returnElt(arr, pos)
*/


//  écrire votre code sous ce commentaire
function returnElt(arr, pos) {

}


/*
  Test 1:
  Résultat attendu : "Hi"
*/
returnElt(['Hello', 'Good morning', 'Hey', 'Hi'], 3);

/*
  Test 2:
  Résultat attendu : 1
*/
returnElt([1, 2, 3, 4], 0);

/*
  Test 3:
  Résultat attendu : "bananas"
*/
returnElt(['Mushrooms', 'bananas'], 1);

/*
  Test 4:
  Résultat attendu : 51
*/
returnElt([12, 34, 76, 43, 80, 51, 56, 41, 42], 5);


/* DO NOT TOUCH */
module.exports = {
  returnElt: returnElt
}

