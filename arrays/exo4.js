/*
  Ecrire une fonction "searchOcc"
  qui nous renvoie l'index d'une occurrence dans un tableau.
  Si l'occurrence est introuvable dans le tableau, renvoyer -1;
  Prototype:
      nbr searchOcc(arr, occurence);

  Fonctions interdites:
      - Array.indexOf
*/

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : 2
*/
searchOcc(["Salut", "ça", "va", "?"], "va");

/*
  Test 2
  Résultat attendu : -1
*/
searchOcc(["Salut", "ça", "va", "?"], "Ahahahah");
