$jeu = document.getElementById("jeu");
$case = $jeu.children;
$button = document.getElementById("button");

$compteur = 0; //compteur pour avancer les tours de jeu (pair et impairs)

// ETAPE 1 - Création du jeu

// function selectionne (e) {
//   if (e.target.classList.add("selected")) {

// ETAPE 2 - Afficher l'ID de la case qui est cliquée

//    alert(e.target.id); //affiche l'id de la div sélectionnée
//   }

// ETAPE 3 - Alterner player 1 et player 2

function selectionne (e){
  $compteur ++;
  if ($compteur % 2 != 0) {
    e.target.classList.add("player1");
  }
  else {
    e.target.classList.add("player2");
  }
  win();// il va lire la fonction win popur vérifier et l'exécuter
}

// ETAPE 4 - Bouton qui réinitialise la partie
function reset(e){
  for (var i=0; i < $case.length; i++) { // POUR les cases de mon tableaux
    //si les éléments de mon tableau (i) sont inféreiurs au nombre de cases (ils s'incrémentent en fonction au fur et à mesur du jeu)
    if ($case[i].classList.contains("player1")){//SI les cases contiennent la classe "player1"
      $case[i].classList.remove("player1");//Supprime cette classe
    }
    else {
      $case[i].classList.contains("player2");//SINON les classes qui contiennent la classe "player2"
      $case[i].classList.add("remove");//supprimer cette classe
    }
  }
}

// ETAPE 5 - Afficher une alerte de victoire
function win(){
    if (
    //horizontal
    ($case[0].classList.contains("player1") && $case[1].classList.contains("player1") && $case[2].classList.contains("player1")) ||
    ($case[3].classList.contains("player1") && $case[4].classList.contains("player1") && $case[5].classList.contains("player1")) ||
    ($case[6].classList.contains("player1") && $case[7].classList.contains("player1") && $case[8].classList.contains("player1")) ||
    //vertical
    ($case[0].classList.contains("player1") && $case[3].classList.contains("player1") && $case[6].classList.contains("player1")) ||
    ($case[1].classList.contains("player1") && $case[4].classList.contains("player1") && $case[7].classList.contains("player1")) ||
    ($case[2].classList.contains("player1") && $case[5].classList.contains("player1") && $case[8].classList.contains("player1")) ||
    //diagonal
    ($case[0].classList.contains("player1") && $case[4].classList.contains("player1") && $case[8].classList.contains("player1")) ||
    ($case[2].classList.contains("player1") && $case[4].classList.contains("player1") && $case[6].classList.contains("player1")) )
    {
      alert("player1 a gagné!");
      reset();
    }
}
    // else if (
    //   //horizontal
    //   ($case[0].classList.contains("player2") && $case[1].classList.contains("player2") && $case[2].classList.contains("player2")) ||
    //   ($case[3].classList.contains("player2") && $case[4].classList.contains("player2") && $case[5].classList.contains("player2")) ||
    //   ($case[6].classList.contains("player2") && $case[7].classList.contains("player2") && $case[8].classList.contains("player2")) ||
    //   //vertical
    //   ($case[0].classList.contains("player2") && $case[3].classList.contains("player2") && $case[6].classList.contains("player2")) ||
    //   ($case[1].classList.contains("player2") && $case[4].classList.contains("player2") && $case[7].classList.contains("player2")) ||
    //   ($case[2].classList.contains("player2") && $case[5].classList.contains("player2") && $case[8].classList.contains("player2")) ||
    //   //diagonal
    //   ($case[0].classList.contains("player2") && $case[4].classList.contains("player2") && $case[8].classList.contains("player2")) ||
    //   ($case[2].classList.contains("player2") && $case[4].classList.contains("player2") && $case[6].classList.contains("player2")) )
    //   {
    //     alert("player2 a gagné!");
    //     reset();
    //   }
    //
    // }

$button.onclick = reset;
$jeu.onclick = selectionne;
