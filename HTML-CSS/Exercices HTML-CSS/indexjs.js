$modal = document.getElementById("modal");
$open = document.getElementById("open");
$close = document.getElementById("close");

$open.onclick = function () {
    $modal.classList.remove("closed");
    $modal.classList.add("opened");
}

$close.onclick = function () {
    $modal.classList.remove("opened");
    $modal.classList.add("closed");
}
