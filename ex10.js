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

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
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

// console.log(shoppingList([
//     ["orange", "orange", "kiwi", "ananas"],
//     ["kiwi", "ananas", "banane", "prune"],
//     ["orange", "orange", "orange", "orange"],
//     ["orange", "orange", "kiwi", "kiwi"],
//     ["prune", "banane", "pamplemousse", "ananas"]
// ]));

//  écrire votre code sous ce commentaire

var table1 = ["orange","kiwi","banane"];
var table2=["pomme","fraise","abricot"];
var grosTableau = [table1, table2];




function shoppingList(table){
    var list = new Object ();
    var basket;
    for (let basketIndex =0; basketIndex<table.length; basketIndex++){
        basket = table[basketIndex];
        

        for(i=0;i<basket.length;i++){
            /*if (){*/
                list[basket[i]] = i;
            // }
            
        }
    }
    console.log (list);
}

shoppingList(grosTableau);
