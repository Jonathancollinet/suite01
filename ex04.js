/*
    Ecrire une fonction "isEven",
    qui prend un paramètre un nombre,
    et qui retourne un nombre:
        - 1 si le nombre est pair
        - 0 si le nombre est impair

*/

/*      Test 1
    Appel à la fonction "isEven",
    prenant en paramètre le nombre 6,
    et nous attendons comme résultat 1;
*/

isEven(6);

/*      Test 2
    Appel à la fonction "isEven",
    prenant en paramètre le nombre 5,
    et nous attendons comme résultat 0;
*/

isEven(5);

//  écrire votre code sous ce commentaire

//test1
function isEven(nb) {
  let filter = nb % 2;
  if filter == 0 {
    return 1;
  }
  else {
    return 0;
  }
}
console.log(isEven(6));

//test2
console.log(isEven(5));

//test3
console.log(isEven(13.6));
