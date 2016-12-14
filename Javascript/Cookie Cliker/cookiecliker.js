// $affichage = document.getElementById("affichage");
// $combien = document.getElementById("combien");
// $bouton = document.getElementById("bouton");

//
var $score = 0;
var $multiplicateur = 1;
var $affichage = document.getElementById("affichage");
var $bouton = document.getElementById("bouton");
var $bouton_multi = document.getElementById("multi");

function click() {
  $score+=$multiplicateur;
  $affichage.innerHTML = $score;

};

function multi()
{
  if ($score >= $multiplicateur*20)
  {
    $score -= $multiplicateur*20;
    $multiplicateur+=1;
    $affichage.innerHTML = $score;
    $multi.innerHTML = $multiplicateur;
  }

}
$bouton.onclick = click;
$bouton_multi.onclick = multi;
$affichage.innerHTML = $score;
