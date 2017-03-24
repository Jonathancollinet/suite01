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

function shoppingList(list) {
  var fruit = {
    orange: 0,
    kiwi: 0,
    ananas: 0,
    prune: 0,
    banane: 0,
    pamplemousse: 0
  }

  for (var i = 0; i<list.length; i++) {
    for (var j in list[i]){
      if ( list[i][j] == "orange"){
        fruit.orange += 1;
      }
      else if ( list[i][j] == "kiwi"){
        fruit.kiwi += 1;
      }
      else if ( list[i][j] == "ananas"){
        fruit.ananas += 1;
      }
      else if ( list[i][j] == "prune"){
        fruit.prune += 1;
      }
      else if ( list[i][j] == "banane"){
        fruit.banane += 1;
      }
      else if ( list[i][j] == "pamplemousse"){
        fruit.pamplemousse += 1;
      }
    }
  }
  return(fruit);
}




console.log(shoppingList([
  ["orange", "orange", "kiwi", "ananas"],
  ["kiwi", "ananas", "banane", "prune"],
  ["orange", "orange", "orange", "orange"],
  ["orange", "orange", "kiwi", "kiwi"],
  ["prune", "banane", "pamplemousse", "ananas"]
]));
