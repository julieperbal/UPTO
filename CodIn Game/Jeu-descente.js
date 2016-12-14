// game loop
var index = 0;//représente le numéro de la montagne la plus grande - de la montagne la plus grande
var max = 0;//représente la hauteur maximum des montagnes

while (true) {
    max = 0;//hauteur max des montagnes - Initialise la hauteur max a chasque tour de vaisseau
    for (var i = 0; i < 8; i++) {// i représente le numéro des montagnes
        var mountainH = parseInt(readline()); //représente la hauteur d'UNE montagne
                        //parseInt transforme le type de la donnée
    if(mountainH > max){//si la hauteur de la montagne est supérieur à la hauteur maximum
        max = mountainH;//alors la hauteur max prend la valeur de la hauteur de la plus haute montagne
        index = i;//index=i permet de passer d'une montagne à l'autre par la plus grande valeur
    }

    }

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(index); // The index of the mountain to fire on.
}
