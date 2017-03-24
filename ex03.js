/*
    Ecrire une fonction "addition",
    qui prend en paramètre deux nombres,
    et qui retourne un nombre étant le résultat de l'addition;

    Tips:
    Nous appelons déjà la fonction;
    Vous n'avez plus qu'a coder la fonction;

    Utilisez la fonction console.log
    pour afficher la valeur de retour de la fonction;
*/

/*      Test 1
    Appel à la fonction "addition",
    prenant en paramètre les nombre 6 et 9,
    et nous attendons comme résultat 15;
*/

addition(6, 9);

/*      Test 2
    Appel à la fonction "addition",
    prenant en paramètre les nombre 98766 et 345678,
    et nous attendons comme résultat 444444;
*/

addition(98766, 345678);

//  écrire votre code sous ce commentaire

function addition(nb1,nb2){
    return (nb1+nb2);
}
console.log(addition(6, 9));
console.log(addition(98766, 345678));