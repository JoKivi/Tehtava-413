const images = document.querySelectorAll(".slotti");

function arvonta() {
    let num = Math.floor(Math.random() * 5);
    let image = images[num];
    return image;
}

function pelaa() {
}