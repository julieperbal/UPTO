/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Fonctions
function afficherOptions(){
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");
	console.log("");
}

function voirContacts(){
	for( var i = 0; i < contacts.length; i++ ){
		console.log("Nom : " + contacts[i].nom + ", prénom : " + contacts[i].prenom );
	}
}

function ajouterContact(nom, prenom){
	var nouveau_contact = Object.create(Contact);
	nouveau_contact.init(nom, prenom);
	contacts.push(nouveau_contact);
}

// Prototypes
var Contact = {
    nom: "",
    prenom: "",
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
};

// Instancier les variables
var option, nom, prenom, contacts = [];
ajouterContact("Lévisse", "Carole");
ajouterContact("Nelsonne", "Mélodie");

// Afficher un message de bienvenue
console.log("Bienvenue dans le gestionnaire des contacts !");
while( option != 0 ){
	afficherOptions();
	option = prompt("Choisissez une option");
	switch( option ){
		case "1":
			console.log("Voici la liste de tous vos contacts :");
			voirContacts();
			console.log("");
			break;
		case "2":
			nom = prompt("Entrez le nom du nouveau contact :");
			prenom = prompt("Entrez le prénom du nouveau contact :");
			ajouterContact(nom, prenom);
			console.log("Le nouveau contact a bien été ajouté");
			console.log("");
			break;
		default:
			console.log("Vous devez choisir une des options suivantes :");
	}
}
console.log("Au revoir !");
