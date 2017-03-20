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

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

//  écrire votre code sous ce commentaire

function shoppingList(table) {
        var kiwi= 0;
        var ananas= 0;
        var prune= 0;
        var banane= 0;
        var pamplemousse= 0;
        var orange= 0;

for (let i = 0; i<table.length; i++) {
    for (let j = 0; j<table[i].length; j++){

        switch (table[i][j]) {
                    case "kiwi": kiwi++;
                    break;
                    case "ananas": ananas++;
                    break;
                    case "prune": prune++;
                    break;
                    case "banane": banane++;
                    break;
                    case "pamplemousse": pamplemousse++;
                    break;
                    case "orange": orange++;
                    break;
                    } 
        }
}
        return "kiwi:" + kiwi + "  ananas:" + ananas + " prune:" + prune + " banane:" + banane + " pamplemousse:" + pamplemousse + " orange:" + orange;
}


console.log(shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]));