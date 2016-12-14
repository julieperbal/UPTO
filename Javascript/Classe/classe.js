// ETAPE 1 ET ETAPE 2

$liste = document.getElementById("liste");
$button = document.getElementById("button");

$tableau = $liste.children; //$tableau = 0
                           //$liste.children signifie que tous les enfants de $liste deviennent un tableau
function selectionne (e) {
  //e.target correspond au <li> qui a été cliqué dans le <ul> !
  e.target.classList.toggle("selected");
}
$liste.onclick = selectionne;


function supprimer() {
  // console.log("On est dans la fonction"); => pour verifier que la fonction fonctionne
  for (var i = 0; i < $tableau.length; i++)
  {
    if ($tableau[i].className === "selected")// si les éléments de mon tableau ont pour valeur "selected"
    {// className = indique que les cibles sont les classes
      // console.log("On est dans la condition"); => pour vérifier que l'on rentre dans la condition

      $tableau[i].classList.remove("selected");// on indique qu'il faut supprimer la class "selected"
      $tableau[i].classList.add("masque");// on adique qu'on ajoute la classe "masque" qui cache la sélection
    }
  }
}

$button.onclick = supprimer;//Si on met les (), le code s'excute directement, sans il s'exécute au click du bouton


function restaurer() {
  for (var i = 0; i < $tableau.length; i++)
  {
    if ($tableau[i].className === "masque")
    {
      $tableau[i].classList.remove("masque");
      $tableau[i].classList.add("selected")
    }
  }
}
$button.onclik = restaurer;
