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
function shoppingList(fruitArray) {
    let objectOfFruits = {
        orange: 0,
        kiwi: 0,
        ananas: 0,
        prune: 0,
        banane: 0,
        pamplemousse: 0
    }

    for(let i=0; i<fruitArray.length; i++) {
        for(let j=0; j<fruitArray[i].length; j++) {
            switch (fruitArray[i][j]) {
                case 'orange':
                    objectOfFruits.orange += 1 ;
                    break;
                case 'kiwi':
                    objectOfFruits.kiwi += 1;
                    break;
                case 'ananas':
                    objectOfFruits.ananas += 1;
                    break;
                case 'banane':
                    objectOfFruits.banane += 1;
                    break;
                case 'prune':
                    objectOfFruits.prune += 1;
                    break;
                case 'pamplemousse':
                    objectOfFruits.pamplemousse += 1;
                    break;
            }
        }
    }
    console.log(objectOfFruits);
}