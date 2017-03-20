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

function isEvenConcat(n){
 if (n % 2 == 0) {
    return "Le nombre " + n + " est pair et ";}

 if (n % 2 != 0) { 
    return "le nombre " + n + " est impair.";}
}

console.log(isEvenConcat(6));
console.log(isEvenConcat(5));