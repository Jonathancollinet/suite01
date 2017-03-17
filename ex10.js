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
/*
function shoppingList(arrayOfFruits) {
    var num = 0;
    for (groupeFruit of arrayOfFruits) {
        console.log(groupeFruit);
        for (fruit of groupeFruit) {
            //console.log(fruit);
        }
    }
}
*/

/*function shoppingList(arrayOfFruits) {
    var table = [];
    var objFruit = new Object;
    var num = 0;
    for (let i = 0; i < arrayOfFruits.length; i++) {
        for (let j = 0; j < arrayOfFruits.length-1; j++) {
           // var property = arrayOfFruits[i][j];
            //objFruit[property] =0;
            objFruit[arrayOfFruits[i][j]] = 0;
            //table.push(property);
            //table.sort();    
            for (var prop in objFruit) {
    
                if (objFruit.hasOwnProperty(prop)) {
                    objFruit[arrayOfFruits[i][j]] +=1;
                } else {
                    objFruit[arrayOfFruits[i][j]] = 1;
                }
            }

        }   
    }
    console.log(table);
    console.log(objFruit);
    console.log(table.length);
    return table;
    
}*/
/*
function shoppingList(arrayOfFruits) {
    var table = [];
    var table2 = [];
    var num = 0;
    var obj = new Object();
    var obj2 = new Object();
    obj2.property = 0;

    for (var i = 0; i < arrayOfFruits.length; i++) {
        for (var j = 0; j < arrayOfFruits.length - 1; j++) {
            table.push(arrayOfFruits[i][j]);
           
           
        }
    }
    console.log(table);
    console.log(obj);
}
*/
function shoppingList(arrayOfFruits) {
    var obj = new Object();
    for (var i = 0; i < arrayOfFruits.length; i++) {
        for (var j = 0; j < arrayOfFruits.length - 1; j++) {
            if (obj[arrayOfFruits[i][j]] != undefined ) {
                obj[arrayOfFruits[i][j]]++;
            } else {
                obj[arrayOfFruits[i][j]] = 1;
            } 
        }
    }
    console.log(obj);
}