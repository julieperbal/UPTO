var $cadeau2 = document.getElementById("cadeau2");
var $pouet;

// function decalage() {
//   if ($cadeau2.classList.contains("decalage")) {
//     // $cadeau2 = setTimeout("décaler l'animation du cadeau", 10000);
//     alert ("on est dans la fonction");
//   }
// }

function rotate() {
  if ($cadeau2.classList.contains("cadeau2")) {
    $cadeau2.classList.add("cadeaurotate");

  }
}
function pouet(){
  $pouet = setTimeout(rotate, 5000);
}
pouet();
