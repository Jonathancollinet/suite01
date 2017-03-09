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

console.log(isEven(6));

/*      Test 2
    Appel à la fonction "isEven",
    prenant en paramètre le nombre 5,
    et nous attendons comme résultat 0;
*/

console.log(isEven(5));

//  écrire votre code sous ce commentaire
 
 function isEven(number) {
     if ( number % 2 === 0) {
         return 1;
     } else {
         return 0;
     }
 }

 // Je retourne les valeures demandées, pour le debug je fais un console.log dans l'appel. 
 // J'aurai pu faire un console.log dans la fonction mais il me semble que ce n'est pas ce qui est demandé.
