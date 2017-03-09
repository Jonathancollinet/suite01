/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 0;
*/

console.log(isAllEven([4, 5, 6]));

/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 4, 6, 8, 10, 12],
    et nous attendons comme résultat 1;
*/

console.log(isAllEven([4, 4, 6, 8, 10, 12]));

//  écrire votre code sous ce commentaire

function isEven(number) {
     if ( number % 2 === 0) {
         return 1;
     } else {
         return 0;
     }
 }

 function isAllEven(arrayOfNumbers) {
     for ( i = 0; i < arrayOfNumbers.length ; i++) {
         if ( isEven(arrayOfNumbers[i]) != 1) {
             return 0;
         }
     }
     return 1;
 }

