/*
  Retourner le dernier élément d'un tableau

  La fonction returnLastElt(arr) prend un tableau en argument
  et doit retourner la valeur du dernier élément du tableau

  Prototype:
    returnLastElt(arr)
*/


//  écrire votre code sous ce commentaire
function returnLastElt(arr) {

}


/*
  Test 1:
  Résultat attendu : "Hi"
*/
returnLastElt(['Hello', 'Good morning', 'Hey', 'Hi']);

/*
  Test 2:
  Résultat attendu : 4
*/
returnLastElt([1, 2, 3, 4]);

/*
  Test 3:
  Résultat attendu : "bananas"
*/
returnLastElt(['Mushrooms', 'bananas']);

/*
  Test 4:
  Résultat attendu : 42
*/
returnLastElt([12, 34, 76, 43, 80, 51, 56, 41, 42]);


/* DO NOT TOUCH */
module.exports = {
    returnLastElt: returnLastElt
}
