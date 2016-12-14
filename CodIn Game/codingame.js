/**
 * Grab Snaffles and try to throw them through the opponent's goal!
 * Move towards a Snaffle and use your team id to determine where you need to throw it.
 **/

var lock_clear = null;
                    /***********************************
                     *                                 *
                     *               Side              *
                     *                                 *
                     ***********************************/
//positionnement (gauche = 0 - droite = 1)
var myTeamId = parseInt(readline()); // if 0 you need to score on the right of the map, if 1 you need to score on the left
if(myTeamId === 0){//si le positionnement est gauche
    x_score = 16000;//but axe x
    y_score = 3750;//but axe y
    x_cage = 400;//position pour la défense axe x
    y_cage = 3750;//position pour la défense axe y
}
else {// memes données mais à l'inverse car a droite
    x_score = 0;
    y_score = 3750;
    x_cage = 15600;
    y_cage = 3750;
}
                    /***********************************
                     *                                 *
                     *             Function            *
                     *                                 *
                     ***********************************/
// Pythagore
function sqare(x,x1,y,y1) {
    x_axe = Math.abs(x-x1)*Math.abs(x-x1);
    y_axe = Math.abs(y-y1)*Math.abs(y-y1);
    var sqrt = Math.sqrt(x_axe + y_axe);
    return sqrt;
}
// Interception
function bestLine(y1,y2,x1,x2)  {
    for(i=0;i < i_we; i++){
        var y0 = enemy[i].posy;
        var x0 = enemy[i].posx;
        var testLine = Math.abs((y2-y1)*x0-(x2,x1)*y0 + x2*y1 - y2*x1)/Math.sqrt(Math.pow(y2-y1,2)+Math.pow(x2-x1,2));
        if(testLine <= 600) {
            printErr(testLine);
        }
    }
}
                    /***********************************
                     *                                 *
                     *             Game Loop           *
                     *                                 *
                     ***********************************/
while (true) {
    // Init
    var snaffle = [{}];
    var enemy = [{}];
    var team = [{}];
    var dist_def = 999999;
    var dist_score = 999999;
    var lock = 999;
    var i_w=0;
    var i_we=0;
    var i_s=0;
    snaffle.pop();
    enemy.pop();
    team.pop();
    // Position Side
    if(myTeamId === 0){
        var x_att = 2500;
        var y_att = 3750;
        var x_def = 1000;
        var y_def = 3750;
    }
    else{
        var x_att = 13000;
        var y_att = 3750;
        var x_def = 15000;
        var y_def = 3750;
    }
                    /***********************************
                     *                                 *
                     *               DATA              *
                     *                                 *
                     ***********************************/
    var entities = parseInt(readline()); // number of entities still in game
    for (var i = 0; i < entities; i++) {
        var inputs = readline().split(' ');
        var entityId = parseInt(inputs[0]); // entity identifier
        var entityType = inputs[1]; // "WIZARD", "OPPONENT_WIZARD" or "SNAFFLE" (or "BLUDGER" after first league)
        var x = parseInt(inputs[2]); // position
        var y = parseInt(inputs[3]); // position
        var vx = parseInt(inputs[4]); // velocity Wizards Only
        var vy = parseInt(inputs[5]); // velocity Wizards Only
        var state = parseInt(inputs[6]); // 1 if the wizard is holding a Snaffle, 0 otherwise
        if(entityType == "WIZARD") {
            team.push({
                id:entityId,
                posx:x,
                posy:y,
                velx:vx,
                vely:vy,
                state:state,
            });
            i_w+=1;
        }
        if(entityType == "SNAFFLE") {
            snaffle.push({
                id:entityId,
                posx:x,
                posy:y
            });
            i_s+=1;
        }
        if(entityType == "OPPONENT_WIZARD") {
            enemy.push({
                id:entityId,
                posx:x,
                posy:y,
                velx:vx,
                vely:vy,
                state:state,
            });
            i_we+=1;
        }
    }
    bestLine(team[1].posy,y_score,team[1].posx,x_score);
    printErr(lock_clear)
    for (var i = 0; i < i_s; i++) {
        if ((dist_score > sqare(snaffle[i].posx,x_score,snaffle[i].posy,y_score) && (lock_clear != i))){
            dist_score = sqare(snaffle[i].posx,x_score,snaffle[i].posy,y_score);
            lock = i;
            x_att = snaffle[lock].posx;
            y_att = snaffle[lock].posy;
        }
        if (dist_def > sqare(snaffle[i].posx,x_cage,snaffle[i].posy,y_cage)){
            dist_def = sqare(snaffle[i].posx,x_cage,snaffle[i].posy,y_cage);
            x_def = snaffle[i].posx;
            y_def = snaffle[i].posy;
        }
    }
    printErr(lock);
    if(team[0].state === 0) {
        print("MOVE",x_att,y_att,"150");/*printErr(enemy[0].velx + " " +snaffle[lock].vely)*/
    }
    else if(sqare(snaffle[lock].posy,y_score,snaffle[lock].posx,x_score) <= 4000) {
        print("THROW",x_score,y_score,"500");
        lock_clear = lock;
        printErr("blabla")
    }
    else {
        print("THROW",x_score,y_score,"325");
    }
    if(team[1].state === 0) {
        print("MOVE",x_def,y_def,"150");
    }
    else {
        print("THROW",team[0].posx,team[0].posy,"500");
    }
}






while (true) {
    var entities = parseInt(readline()); // number of entities still in game
    for (var i = 0; i < entities; i++) {
        var inputs = readline().split(' ');
        var entityId = parseInt(inputs[0]); // entity identifier
        var entityType = inputs[1]; // "WIZARD", "OPPONENT_WIZARD" or "SNAFFLE" (or "BLUDGER" after first league)
        var x = parseInt(inputs[2]); // position
        var y = parseInt(inputs[3]); // position
        var vx = parseInt(inputs[4]); // velocity
        var vy = parseInt(inputs[5]); // velocity
        var state = parseInt(inputs[6]); // 1 if the wizard is holding a Snaffle, 0 otherwise
        if (entityType == "WIZARD") {// entityType récupère le type de l'objet
            team.push({//push les infos entityType dans la team
                id:entityId,//identité
                posX:x,//variable position x
                posY:y,//variable position y
                tien: state//variable si la balle est tenue ou non
            });
