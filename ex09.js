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

console.log(boostedEvenAddition([4, 5, 6]));

/*      Test 2
    Appel à la fonction "boostedEvenAddition",
    prenant en paramètre le tableau [1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12],
    et nous attendons comme résultat 44;
*/

console.log(boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]));

//  écrire votre code sous ce commentaire

function boostedEvenAddition(arrayOfNumbers) {
    var arrayOfEvenNumbers =[];
    var add = 0;
    for ( i = 0; i < arrayOfNumbers.length ; i++ ) {
        if ( arrayOfNumbers[i] % 2 === 0 ) {
            arrayOfEvenNumbers.push(arrayOfNumbers[i]);
        }
    }
    for ( number of arrayOfEvenNumbers ) {
        add += number; 
    }
    return add;
}
