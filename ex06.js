/*
    Ecrire une fonction "getHumanTypeByAge",
    qui prend un paramètre un nombre,
    et qui retourne une chaine de caractère:
        - "enfant" si le nombre est strictement inférieur à 12
        - "ado" si le nombre est supérieur ou égal à 12 et strictement inférieur à 18
        - "adulte" si le nombre est supérieur ou égal à 18 et strictement inférieur à 124
        - "impossible... ou encore jamais vu" si le nombre est supérieur ou égal à 124
            ou si le nombre est strictement inférieur à 1;

*/

/*      Test 1
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 6,
    et nous attendons comme résultat "enfant";
*/

getHumanTypeByAge(-5);

/*      Test 2
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 6,
    et nous attendons comme résultat "enfant";
*/

getHumanTypeByAge(6);

/*      Test 3
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 17,
    et nous attendons comme résultat "ado";
*/

getHumanTypeByAge(17);

/*      Test 4
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 33,
    et nous attendons comme résultat "adulte";
*/

getHumanTypeByAge(33);

/*      Test 5
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 140,
    et nous attendons comme résultat "impossible... ou encore jamais vu";
*/

getHumanTypeByAge(140);

//  écrire votre code sous ce commentaire

function getHumanTypeByAge(nb){

    if (nb < 12 && nb >= 1){
        return "enfant";

    } else if (nb >= 12 && nb < 18){
        return "ado";

    } else if (nb >= 18 && nb < 124){
        return "adulte";

    } else if (nb >= 124 || nb < 1){
        return "impossible ... ou encore jamais vu";
    }
}

console.log(getHumanTypeByAge(-5));

console.log(getHumanTypeByAge(6));

console.log(getHumanTypeByAge(17));

console.log(getHumanTypeByAge(33));

console.log (getHumanTypeByAge(140));


