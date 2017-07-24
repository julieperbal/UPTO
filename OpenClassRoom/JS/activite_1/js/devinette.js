/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

//TODO: complétez le programme

var $compteur = 0;
var $nombre = 0;

while ($compteur<6 && $nombre!=solution) //Tant que le nombre ets inférieur à la solution et que le compteur est inférieur à 6
{// Boucle WHILE car on ne sait pas en combien de coups on va réussir
  $nombre = prompt('Entrez un nombre');

  if ($nombre < solution)
    {
        console.log($nombre + " est trop petit!");
    }
  else
    {
      console.log($nombre + " est trop grand!");
    }
  $compteur++;
}// FIN WHILE

  if ($nombre == solution) {
    console.log("Bravo! La solution était " + solution);
    console.log("Vous avez trouvé en " + $compteur + " essais!");
  }
  else{
  console.log("Perdu... La solution était "+solution)
  }
