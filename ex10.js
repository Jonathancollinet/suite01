/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau

    [                                                        Le tout est un tableau de paniers:
        ["orange", "orange", "kiwi", "ananas"],              correspond à 1 panier
        ["kiwi", "ananas", "banane", "prune"],               1 panier
        ["orange", "orange", "orange", "orange"],            1 panier
        ["orange", "orange", "kiwi", "kiwi"],                1 panier
        ["prune", "banane", "pamplemousse", "ananas"]        1 panier
    ]

    et nous attendons comme résultat

    {
        "orange": 8,
        "kiwi": 4,
        "ananas": 3,
        "prune": 2,
        "banane": 2,
        "pamplemousse": 1
    }

*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

//  écrire votre code sous ce commentaire


function shoppingList(tabPanier){
    let obj = {};

    for (let i=0; i<tabPanier.length; i++){      // on parcourt le tableau de paniers
        for (let j=0; j<tabPanier.length -1; j++){  // on parcourt chaque paniers du tableau /// -1 pour ne pas compterle tableau de paniers comme 1 panier
            if (obj [tabPanier[i][j]]) {      // si dans le tableau de paniers à chaque paniers il y a une occurence
                obj [tabPanier[i][j]]++;     //on incrémente cette occurence dans l'objet
        } else{
            obj [tabPanier[i][j]] = 1;       // si c'est la première fois, on la rajoute dans l'objet
        }
      }
    }
return obj;
}



console.log (shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]));