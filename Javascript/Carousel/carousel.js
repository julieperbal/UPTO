// CAROUSSEL

var $carousel = document.getElementById("carousel").getElementsByTagName('li');
//on créer un tableau avec tous les "li" getElementsByTagName("li") dedans

$suivant = document.getElementById("suivant");//déclaration de l'ID bouton suivant
var i = 0;//élément du tableau qui déteint la classe active
var h = 1;//élément du tableau qui va prendre la classe active
// var I et H correspondent à un compteur du tableau, on va alterner i et h pour
// que lorsque l'un s'affiche, l'autre se cache

// $carousel.style.borderColor = "#f00";
function suivant() {

  if (i < 3) {//si mon i est inférieur à 3, devient se cache et h s'affiche
    $carousel[i].classList.remove("active");// i - on précise l'élément du tableau avec [i], sinon on appel le tableau entier
    $carousel[h].classList.add("active");// h
    // on déplace la classe, on l'enlève à I et on l'ajoute à H
    i++;// on incrémente les éléments pour passer au suivant
    h++;// on incrémente les éléments pour passer au suivant
  }//sans le ELSE, on reste bloqué sur la dernière case
  else {// ALORS on remet les indicateurs à 0 pour recommencer la fonction
    $carousel[i].classList.remove("active");//on enlève la classe "active" à la dernière case [i] pour revenir à 0
    i = 0;
    $carousel[i].classList.add("active");//on ajoute la classe "active" à la première case [i]
    //=> notre tableau a commencé avec un élément [i], donc on recommence avec lui.
    h = 1;//on indique à notre fonction qu'on refait une boucle.
  }
}
$suivant.onclick = suivant;//on lance la fonction en cliquant sur le bouton suivant
