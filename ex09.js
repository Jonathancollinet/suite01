/*
    Ecrire une fonction "boostedEvenAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombres PAIRS du tableau

*/

/*      Test 1
    Appel à la fonction "boostedEvenAddition",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 10;
*/

boostedEvenAddition([4, 5, 6]);

/*      Test 2
    Appel à la fonction "boostedEvenAddition",
    prenant en paramètre le tableau [1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12],
    et nous attendons comme résultat 44;
*/

boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]);

//  écrire votre code sous ce commentaire

function isEven(nb) {
  let filter = nb % 2;
  if (filter == 0) {
    return nb;
  }
  else {
    return 0;
  }
}

function boostedEvenAddition(array) {
  let even = 0;
  for (let i in array) {
    even += isEven(array[i]);
      }
    return(even)
}

//test1
console.log(boostedEvenAddition([4, 5, 6]));

//test2
console.log(boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]));

//test3
console.log(boostedEvenAddition([1, 3, 7, 5, 55, 1, 19, 33, 11, 15, 11, 12]));
