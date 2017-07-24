/*
Activité : gestion des contacts
*/

//  : complétez le programme

// console.log("Bienvenue dans le gestionnaire des contacts");
// console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
// var $text = prompt("Choisissez une option");
/*
var $myTable = {//Initialisation du tableau
  init: function(nom,prenom){
  this.nom : nom,
  this.prenom: prenom
  },
*/
//myTable = new Object();//création d'un nouvel objet
// var myTable = {nom : "", prenom : ""}// autre méthode de créer un objet et ses variables
// myTable.nom = ""; // affiche la variable nom de l'objet mytable
// console.log(myTable.nom);
  //myTable.nom = "test";//appeler dans l'objet table son nom
//  myTable.prenom = "dgsfgfs";

//    lister: function(liste)//renvoie la liste des contacts
//   {
//     var $liste = ("Nom : "+this.nom+", prénom : "+this.prenom);
//     return liste;
//   }
//
//   ajouter: function(nom,prenom)//Permet d'ajouter un nouveau contact
//   {
//     var $nom = Object.create($myTable);
//     nom.init(nom,prenom);
//   }
// // };// FIN var $myTable
//
// //Detail des contacts
// var contact1 = Object.create($myTable);
// contact1.nom("Lévisse");
// contact1.prenom("Carole");
//
// var contact2 = Object.create($myTable);
// contact2.nom("Nelsonne");
// contact2.prenom("Mélodie");
//
// var $contacts = [contact1, contact2];
//
//
// var $text = prompt("Choisissez une option");
// {
// while ($text != 0)//Boucle Tant Que ma donnée utilisateur est différente de 0
// {
//   if ($text == 1)//Si ma donnée utilisateur correspond à 1
//   {
//     console.log($myTable.contacts)//affiche la liste des contacts
//   }
//   else//Sinon voulant dire: $text=2
//     var $nouveauNom = prompt('Saisissez le nom du nouveau contact');
//     var $nouveauPrenom = prompt("Saisissez le prénom du nouveau contact");
//
//     contacts.push(contact.ajouter(nouveauNom, nouveauPrenom));
//   }
//     $text = prompt("Choisissez une option");
// }//FIN While

// if ($text == 0) {
//   console.log()
// }

var contact = {
    // initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

decrire: function () {
        var contacts = this.nom + " " + this.prenom;
        return contacts;
    }
};


var contact1 = Object.create(contact);
contact1.init("Carole", "Lévisse");

var contact2 = Object.create(contact);
contact2.init("Mélodie", "Nelsonne");

// Création du tableau contenant les contacts
var contacts=[];
contacts.push(contact1);
contacts.push(contact2);



// Création du tableau contenant les options
var option = ["1 : Liste des contacts", "2 : Ajouter un contact", "0 : Quitter"];

console.log ("Bienvenue dans le gestionnaire de contacts !");

while (choixUtilisateur !== 0) {
    for (var i = 0; i < option.length; i++) {
        console.log(option[i]);
    };
    var choixUtilisateur = Number(prompt("Choisisser une option :"));
    switch (choixUtilisateur) {

        case 1:
            for (var i = 0; i < contacts.length; i++) {
            console.log("Nom : " + contacts[i].nom +" Prénom : " + contacts[i].prenom);
            };
            break;
        case 2:
            var nom = prompt("Entrer le nom de la personne");
            var prenom = prompt("Entrer le prenom de la personne");
            var nomContact = "contact" + contacts.length;
            nomContact = Object.create(contact);
            nomContact.init(nom, prenom);
            contacts.push(nomContact);
            console.log("Le contact a bien était ajouté !");
            break;
        case 0:
            console.log("Au revoir !");
        }
}
