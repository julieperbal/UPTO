// <!--~~~~~~~~ Lien avec les ID de la feuille HTML ~~~~~~~~-->
var $bouton = document.getElementById("bouton");
var $affichage = document.getElementById('affichage');
var $print = document.getElementById('print');
var $puts = document.getElementById('puts');
var $multiplicateur = document.getElementById('multiplicateur');
var $autoclicker = document.getElementById('autoclicker');
var $aff = document.getElementById('aff');

$print.innerHTML = "Multiplicateur x " + $compteur;
$affichage.innerHTML = $score + " paires";

var $score = 0;
var $compteur = 1;
var $clique = 1;
var $autoclick = 1;

// <!--~~~~~~~~ Augmentation du Score ~~~~~~~~-->
function click()
{
  $score += $compteur;
  $affichage.innerHTML = $score + " paires";
}

// <!--~~~~~~~~ Bouton Multiplicateur ~~~~~~~~-->
function incrementer()
{
  if ($score >= 20) {
    $score -= 20;
    $compteur *= 9;
    $clique += 1;
    $print.innerHTML = "Multiplicateur x " + $clique;
    $puts.innerHTML = "Prix de la prochaine paire: " + $compteur;
    $affichage.innerHTML = $score + " paires";
  }
}

// <!--~~~~~~~~ Autoclicker  FONCTION = ACTION ~~~~~~~~-->
function auto()
{
 if ($score >= 50) {
   $score -= 50;
   $autoclick += 1;
   setInterval(click, 1000);

   $aff.innerHTML = $autoclick;
   $affichage.innerHTML = $score + " paires";
 }
}



$bouton.onclick = click;
$multiplicateur.onclick = incrementer;
$autoclicker.onclick = auto;
