var $prenom = document.getElementById("prenom");
var $nom = document.getElementById("nom");
var $numero = document.getElementById("numero");
var $resultatRecherche = document.getElementById("resultatRecherche");

contacts = [ // "contactS" correspond à un tableau
  {
    prenom: "Julien",
    nom: "Grillot",
    numero : "0123456789"
  },
  {
    prenom: "John",
    nom: "Smith",
    numero: "0123456789"
  }
];

/////////////////////////////////////////
//              ETAPE 1
////////////////////////////////////////

function textContact(contact) // "contact" représente une case du tableau Contacts
{
  return contact.prenom +" " + contact.nom + " (" + contact.numero +")";
}
// alert(textContact(contacts[0]));


/////////////////////////////////////////
//              ETAPE 2
////////////////////////////////////////

var $liste = document.getElementById("liste");

function afficher()
{
  $li = "";
  for (var i = 0; i < contacts.length; i++)
  {
    $li += "<li>"+ textContact(contacts[i]) + "</li>";
  }
  $liste.innerHTML = $li;
}

 function ajouterObjet()
{
  contacts.push(
    {
      prenom : $prenom.value,
      nom : $nom.value,
      numero : $numero.value,
    });

afficher();
}

/////////////////////////////////////////
//              ETAPE 3
////////////////////////////////////////
var $bouton = document.getElementById("bouton");
var $search = document.getElementById("search");
// var $resultatRecherche = document.getElementById("resultatRecherche");

function rechercher()
{
  $search = document.getElementById("search").value;
  $li="";
  for (var i = 0; i < contacts.length; i++)
  {
    if (contacts[i].prenom == $search || contacts[i].nom == $search)
    {
        $li += "<li>"+ textContact(contacts[i]) + "</li>";
      }
  }
  $resultatRecherche.innerHTML = $li;
}

afficher();
// var $resultatRecherche = document.getElementById("resultatRecherche");
