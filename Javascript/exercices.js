// <!--~~~~~~~~ EXERCICE 1 ~~~~~~~~-->
// alert (" Hello Word ! " );

// <!--~~~~~~~~ EXERCICE 2 ~~~~~~~~-->
// function afficher()
// {
// alert (" Hello Word ! " );
// }

// <!--~~~~~~~~ EXERCICE 3 ~~~~~~~~-->
// var text= prompt ('Ecrire votre nom')
// var texconfirm =prompt ('Ecrire à nouveau votre nom')
// if (text == texconfirm)
// {
//   alert (text)
// }

// <!--~~~~~~~~ EXERCICE 4 ~~~~~~~~-->
// var age = prompt('Ecrire votre age')
//
// if (age <= 17)
// {
//   alert('Vous n\'êtes pas encore majeur')
// }
// if (age >= 18 && age <= 49)
// {
//   alert('Vous êtes majeur mais pas encore senior')
// }
// if (age >= 50 && age <= 59)
// {
//   alert('Vous êtes senior mais pas encore retraité')
// }
// if (age >= 60 && age <= 120)
// {
//   alert('Vous êtes retraité, profitez de votre temps libre')
// }

// <!--~~~~~~~~ EXERCICE 5 ~~~~~~~~-->
// function background()
// {
//   document.bgColor= '#FFFggF';
// }

// <!--~~~~~~~~ EXERCICE 6 ~~~~~~~~-->
// function Verifier_formulaire(formulaire){
//   if (formulaire.champs_obligatoire.value==""){
//     alert ("Vous avez oublié de remplir le champs obligatoire");
//   }else{
//     alert ("Le champs obligatoire est bien rempli, on soumet le formulaire");
//     formulaire.submit();
//   }
// }


// <!--~~~~~~~~~~~~~~~~-->
// <!--~~~~~~~~ JEU DU PLUS OU MOINS ~~~~~~~~-->
// $proposition = document.getElementById("proposition");
// $bouton = document.getElementById("bouton");
// $resultat = document.getElementById("resultat");
// reponse = Math.ceil(Math.random() * 100)
//
// var compteur=0;
// function verifier() {
//     if ($proposition.value < reponse) {
//         $resultat.innerHTML = "Insuffisant !";
//         compteur+=1;
//     }
//     if ($proposition.value == reponse) {
//         $resultat.innerHTML = "Juste ce qu'il faut";
//         {
//           alert (compteur)
//         }
//     }
//     if ($proposition.value > reponse) {
//         $resultat.innerHTML = "Trop !";
//         compteur+=1;
//     }
// }
//
// $bouton.onclick = verifier;


// <!--~~~~~~~~~~~~~~~~-->
// <!--~~~~~~~~ JEU DES BATONNETS ~~~~~~~~-->
// $affichage = document.getElementById("affichage");
// $combien = document.getElementById("combien");
// $bouton = document.getElementById("bouton");

// Nombre de bâtons actuellement sur le jeu
// nb = 25;

// Affiche les 'nb' bâtons dans la <div id="affichage"></div>
// function afficher() {
//     batons = "";
//     for (i = 0; i < nb; i++) {
//         batons += "| ";
//     }
//     $affichage.innerHTML = batons;
// }

// Affiche les bâtons de départ
// afficher();

// Retire autant de bâtons que la valeur du champ texte
// function retirer() {
//     nb -= parseInt($combien.value);
//
//     // Met à jour les bâtons affichés
//     afficher();
//
//     if (nb==1)
//       alert ('Le jeu est terminé');

}

// On appelle la fonction de retrait quand on click sur le bouton
// $bouton.onclick = retirer;
