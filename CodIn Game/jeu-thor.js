/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

var TX = initialTX//pour incrémenter la position de Thor
var TY = initialTY

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

if ((TX < lightX) && (TY < lightY))//diagonale
{
    TX++;
    TY++;
    print("SE");
}
else if ((TX > lightX) && (TY > lightY))
{
    TX--;
    TY--;
    print("NW");
}
else if ((TX < lightX) && (TY > lightY))
{
    TX++;
    TY--;
    print("NE");
}
else if ((TX > lightX) && (TY < lightY))
{
    TX--;
    TY++;
    print("SW");
}


else if (initialTX < lightX)
{
    print("E");
}
else if (initialTY > lightY)
{
    print("N")
}
else if (TX > lightX)
{
    TX--
    print("W");
}
else if (TX == lightX)
{
    print("S")
}

    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    //print('SE');
}
