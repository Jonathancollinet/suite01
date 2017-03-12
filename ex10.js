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

// shoppingList([
//     ["orange", "orange", "kiwi", "ananas"],
//     ["kiwi", "ananas", "banane", "prune"],
//     ["orange", "orange", "orange", "orange"],
//     ["orange", "orange", "kiwi", "kiwi"],
//     ["prune", "banane", "pamplemousse", "ananas"]
// ]);

//  écrire votre code sous ce commentaire

function basketList(table){
    var contentBasket= {
        "orange": nbOrange = 0,
        "kiwi": nbKiwi = 0,
        "ananas": nbAnanas= 0,
        "prune": nbPrune= 0,
        "banane": nbBanane = 0,
        "pamplemousse": nbPamplemouse= 0
    }

    for (let i = 0; i<table.length;i++){
        if(table[i] === "orange"){
            contentBasket.orange = nbOrange++;
        }
        else if (table[i] === "kiwi"){
            nbKiwi++;
            contentBasket.kiwi = nbKiwi;
        }
        else if (table[i] === "ananas"){
            nbAnanas++;
            contentBasket.ananas = nbAnanas;
        }
        else if (table[i] === "prune"){
            nbPrune++;
            contentBasket.prune = nbPrune;
        }
        else if (table[i] === "banane"){
            nbBanane++;
            contentBasket.banane = nbBanane;
        }
        else if (table[i] === "pamplemousse"){
            nbPamplemouse++;
            contentBasket.pamplemousse = nbPamplemouse;
        }
    } return contentBasket;
}

function shoppingList(test){
    
}

console.log(basketList(["orange", "orange", "kiwi", "ananas"]));