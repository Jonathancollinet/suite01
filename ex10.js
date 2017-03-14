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
    ["prune", "banane", "pamplemousse", "ananas"], ["poireau", "pain", "chouquette",]
]);

//  écrire votre code sous ce commentaire
function shoppingList(table) {

    var basket;
    var List = new Object;
    var itemTable = [];

    for (let basketIndex of table) {
        for (let item of basketIndex) {
            itemTable.push(item);
        }
    }
    for (let i = 0; i < itemTable.length; i++) {
        List[itemTable[i]] += 1;
        if (!List[itemTable[i]]) {
            List[itemTable[i]] = 0;
            ++List[itemTable[i]];
        }
    }
    console.log(List);
}