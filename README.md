# Exercices Javascript

**!!! PREMIERE ETAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**

-----------------------------------
* Forkez le projet "suite01"
* Clonez le fork sur votre machine
* Créer une branche "development", qui va contenir votre avancée

-----------------------------------
A chaque fois que vous complétez un exercice:
* Faire un commit avec un message EXPLICITE sur votre branche "development"
* Faire un merge de cette branche vers la branche "master"

-----------------------------------
L'idée est d'avoir une branche master propre,
contenant uniquement les exercices originels ou fonctionnels;

Consignes de rendu:
* Lorsque vous avez terminé la suite entière d'exercices, faites une pull-request.
* S'il y a un problème de sujet ou autre conceptions: faites une issue.

-----------------------------------

# Tests

*Des tests sont disponibles afin de valider vos exercices une fois complétés.*

La 1ère fois que vous aurez cloné le projet, lancez la commande suivante afin d'installer Karma :

`npm install`

Une fois Karma installé, différentes commandes seront disponibles pour lancer différents tests :

* `npm run test` : lance tous les tests unitaires sur tous les exercices

* `npm run testbasics` : lance les tests unitaires pour les exercices du dossier **"basics"**

* `npm run testarrays` : lance les tests unitaires pour les exercices du dossier **"arrays"**

* `npm run testes6` : lance les tests unitaires pour les exercices du dossier **"es6"**

* `npm run testfundamentals` : lance les tests unitaires pour les exercices du dossier **"fundamentals"**

** Explication de l'arborescence du dossier de tests :**

Chaque dossier d'exercice a son fichier de test associé :

* Les exercices **"basics"** sont testés dans le fichier **"basics.spec.js"**

* Les exercices **"arrays"** sont testés dans le fichier **"arrays.spec.js"**

* Les exercices **"es6"** sont testés dans le fichier **"es6.spec.js"**

Par défaut, tous les tests sont désactivés. Une fois que vous pensez avoir réussi un exercice, effectuez les actions suivantes pour activer les tests associés :

* Se rendre dans le fichier des tests concernés (arrays.spec.js par exemple)
* Activer la suite de tests (remplacer le _xdescribe_ par _describe_)
* Décommenter l'exercice réalisé (_const exo1 = require('../arrays/exo1')_ par exemple)
* Activer les tests associés à cet exercice (remplacer le _xdescribe('Arrays - Exo 1'..._ par _describe('Arrays - Exo 1'..._)
* Lancer les tests (`npm run testarrays` par exemple)


_Bonne continuation_
