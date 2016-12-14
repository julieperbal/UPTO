var $liste = document.getElementById("liste");
var $bouton = document.getElementById("bouton");
var $texte = document.getElementById("texte");

var $li = ""; //var $li qui sera un string et initialisé a vide

var $tableau = ['Bob', 'Julien', 'Roger']; // déclaration du tableau

function afficherliste() //fonction afficher liste tableau
{
  $li=""; //la fonction se lit en boucle depuis "afficherliste()", il faut donc lui dire de s'arrêter en déclarant $li=""
  for (var numCase=0; /*var numCase qui sera la case du tableau (un tableau commence tjs par se lire par 0)*/
  numCase < $tableau.length; /* condition d'arret de la boucle, tableau.length = 3 (nombre de case dans tableau)*/
  numCase++ /*numCase = numCase + 1*/)
  {
    $li += "<li>" + $tableau[numCase] + "</li>"; // dan $li ça va mettre "<li>Bob</li><li>Julien</li>..."
  }
  $liste.innerHTML = $li;//pour afficher les $li dans l'ID liste
}; //il est préférable de mettre tous les élements qui concernent la fonction dans les balises de la fonction


function ajouterElement() //fonction ajouter element en dessous de la liste tableau
{
  $text = document.getElementById("texte").value;// $text = entrée utilisateur, .value signifie qu'on prend chaque nouvelle valeur entrée dans input
  $tableau.push($text); // on ajoute la variable $text au tableau
  $liste.innerHTML = $li += "<li>" + $text + "</li>" ; // on ajoute la nouvelle variable créée $text dans un li de l'ID liste
};

function supprimerelement() //fonction pour annuler le dernier element ajouté
{
  $tableau.pop(); //supprimer la dernière entrée du tableau
  afficherliste(); //appel de la fonction afficher liste
}

//document.getElementById("liste").innerHTML = $li; // pour rajouter dans l'html dans l'id liste
