// définition de l'objet contact (nom, prenom) et de sa méthode decrire pour les lister
var contact = 
{
    init: function (nom, prenom) 
        {
        this.nom = nom;
        this.prenom = prenom;
        },
    decrire: function () 
    {
    var description = "Nom : " + this.nom + ", Prénom : " + this.prenom; 
    return description;
    }
 };

// définition des variables du programmes
var entree = 0; // entree par l'utilisateur définie par défaut à 0
var nouveauContact; // Nouveau contact à ajouter à la liste
var nouveauNom = ""; // Nom du nouveau contact entré par l'utilisateur 
var nouveauPrenom = ""; // Prénom du nouveau contact entré par l'utilisateur
var contacts = []; // Dictionnaire des contacteurs
var iterateur;
var dejaExistant; // Booleen pour tester si le contact est déjà dans la base

// On crée manuellement les 2 premiers contacts du gestionnaire
contacts[0] = Object.create(contact);
contacts[1] = Object.create(contact);

contacts[0].init("Lévisse", "Carole");
contacts[1].init("Nelsonne", "Mélodie");

// Et on lance le programme
console.log("Bienvenue dans le gestionnaire de contacts : ");

while (entree != 3) {
    dejaExistant = false; // On initialise le test
    console.log("\n Options:\n 1 : Lister les contacts \n 2 : Ajouter un contact \n 3 : Quitter"); // Tant que l'utilisateur ne quitte pas le programme
    entree = Number(prompt("Choisissez une option: ")); // On lui demande ce qu'il veut faire
    
    switch (entree) {
        
        case (1): // Il liste les contacts
            console.log("");
            console.log("Voici la liste de tous vos contacts: ")
            iterateur = 1;
            contacts.forEach(function (contact)
                {
                console.log(iterateur + " " + contact.decrire()) // On parcourt le dictionnaire des contacts, et on l'affiche avec un numéro
                iterateur++; 
                });
            break;
      
        case (2):
            nouveauNom = prompt("Veuillez entrer le nom du nouveau contact:");
            nouveauPrenom = prompt("Veuillez entrer le prénom du nouveau contact:"); // On demande les Nom et Prenom du nouveau contact
            nouveauContact = Object.create(contact);
            nouveauContact.init(nouveauNom, nouveauPrenom); // On crée un nouveau contact en fonction des entrées de l'utilisateur
            contacts.forEach(function (contact)
                { if ((contact.prenom.toUpperCase() === nouveauContact.prenom.toUpperCase()) && (contact.prenom.toUpperCase() === nouveauContact.prenom.toUpperCase())) // on parcourt le dictionnaire et on vérifie que le contact n'existe pas encore, mais on ne teste pas les accents.
                      dejaExistant = true;            
                });
            
            if (dejaExistant) console.log("Ce contact existe déjà dans la liste")
            else 
                {
                    contacts.push(nouveauContact);
                    console.log("Le nouveau contact a été ajouté"); // S'il n'existe pas encore, on l'ajoute dans le dictionnaire
                };
            break;
        
        case (3):
            console.log("Au revoir !"); // On quitte le programme
            break;
            
        default: console.log("Merci de saisir une option valide"); // Message si l'utilisateur choisit autre chose que 1, 2 ou 3
        };
    };