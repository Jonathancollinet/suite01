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

function boostedAddition(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}



function isEven(n) {
    if (n % 2 != 0) {
        return 0;
    }
    else {
        return 1;
    }
}

function boostedEvenAddition(table) {
    var array = [];
    for (let i = 0; i < table.length; i++) {
        if (isEven(table[i]) == 1) {
            array.push(table[i]);
        }
    }
return boostedAddition(array);
}





console.log(boostedEvenAddition([4, 5, 6]));
console.log(boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]));


//  Beaucoup plus simple, méthode Stéph: 

function simple(table) {
let sumpair= 0;
for (i=0; i<table.length;i++) {
    if(table[i] % 2 == 0) {
        sumpair = sumpair + table[i];
    }
}
return sumpair;
}

console.log(simple([4, 5, 6]));
console.log(simple([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]));