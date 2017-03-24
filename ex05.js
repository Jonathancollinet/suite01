/*
    Ecrire une fonction "isEvenConcat",
    qui prend un paramètre un nombre,
    et qui retourne une chaine de caractère:
        - "<le nombre> est pair" si le nombre est pair
        - "<le nombre> est impair" si le nombre est impair

*/

/*      Test 1
    Appel à la fonction "isEvenConcat",
    prenant en paramètre le nombre 6,
    et nous attendons comme résultat "6 est pair";
*/

isEvenConcat(6);

/*      Test 2
    Appel à la fonction "isEvenConcat",
    prenant en paramètre le nombre 5,
    et nous attendons comme résultat "5 est impair";
*/

isEvenConcat(5);

//  écrire votre code sous ce commentaire

function isEvenConcat(nb){
  let filter = nb % 2;
  if (filter == 0) {
    return(nb + " est pair");
  }
  else {
    return(nb + " est impair");
  }
}

//test1
console.log(isEvenConcat(6));

//test2
console.log(isEvenConcat(5));
