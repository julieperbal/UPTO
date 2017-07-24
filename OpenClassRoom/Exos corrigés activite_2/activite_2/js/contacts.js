/*
    Activité : Gestion des contacts
*/

//----------------------------------------
//-- L'objet Contact
//----------------------------------------
var Contact = {
    //-- Initialiser l'objet
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    
    //-- retourne le nom et le prénom du contact
    decrire: function() {
        return "Nom : " + this.nom + ", prénom : " + this.prenom;
    }
};

//----------------------------------------
//-- Le tableau pour stocker les contacts 
//----------------------------------------
var lesContacts  = [];

//-- Les deux premiers contacts
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
lesContacts.push(contact1);

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");
lesContacts.push(contact2);

//-----------------------------------
//-- La fonction d'affichage du menu
//-----------------------------------
function afficherMenu() {
    console.log("1 : Lister les contacts")
    console.log("2 : Ajouter un contact")
    console.log("0 : Quitter")
}

//-------------------------------------
//-- La fonction "lister les contacts"
//-------------------------------------
function listerLesContacts() {
    console.log("voici la liste de tous vos contacts :");
    
    if (lesContacts.length === 0) {
        console.log("*** La liste est vide !!!");
    }
    else {
        lesContacts.forEach (
            function(contact) {
                console.log(contact.decrire());
            }
        );
        console.log("\n");
        afficherMenu();
    }
}

//------------------------------------
//-- La fonction "Ajouter un contact"
//------------------------------------
function ajouterUnContact() {
    var nom = saisie = prompt ("Veuillez entrer le nom du nouveau contact : ");
    var prenom = saisie = prompt ("Veuillez entrer le prénom du nouveau contact : ");
    unContact = Object.create(Contact);
    unContact.init(nom, prenom);
    lesContacts.push(unContact);
    console.log("Le nouveau contact a été ajouté");
    console.log("\n");
    afficherMenu();
}
    
//--------------------------
//-- Le programme principal
//--------------------------
    
//-- Au lancement de l'application, afficher le menu des options
console.log("Bienvenue dans le gestionnaire des contacts !")
afficherMenu();
    
//-- Interagir avec l'utilisateur   
var saisie = "";
while (saisie !== "0") { 
    
    saisie = prompt("Choisissez une option :");
    
    switch (saisie) {
        case "0": break; //-- Quitter
        case "1": listerLesContacts(); break;
        case "2": ajouterUnContact(); break;
        default: console.log("Option inconnue"); //-- Option non disponible...
    }

}

