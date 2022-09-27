const imagesPath = 'images/'
const images = [
    '7.png',
    'apple.png',
    'melon.png',
    'pear.png',
    'cherry.png'
]
const taulukkoPanos = [
    '10',
    '5',
    '5',
    '4',
    '3',
    '8'
]
var value1 = document.getElementById("lukitse1").value;
var value2 = document.getElementById("lukitse2").value;
var value3 = document.getElementById("lukitse3").value;
var value4 = document.getElementById("lukitse4").value;
var raha = 50; 
var panosNyt = 1;

document.getElementById("raha").innerHTML = raha;
document.getElementById("panos").innerHTML = panosNyt;
var e= document.querySelectorAll(".arvo");

var html = "<table><tr>";
for (let i = 0; i < taulukkoPanos.length; i++) {
    html = `<td>${taulukkoPanos[i]}</td>` ;
}
html += "</tr></table>";

document.getElementById("voittoruutu1").innerHTML = html;

vaihdaKuva();

function arvonta() {
    let num = Math.floor(Math.random() * 5);
    let image = imagesPath + images[num];
    return image;
}

function pelaa() {
    if (raha <= 0) {
        document.getElementById("raha").innerHTML = "rahat loppu!";
    } else if (raha < panosNyt) {
        document.getElementById("raha").innerHTML = "pienennä panosta!";
    } else if (raha > 0) {
        rahaaPois();
        vaihdaKuva();
    } 
}

function rahaaPois() {
    raha -= panosNyt;
    document.getElementById("raha").innerHTML = raha;
}

function vaihdaKuva() {
    var kuva1 = document.querySelectorAll('.ruutu img')[0];
        if (value1 == 0) {
            kuva1.src = arvonta();
        }
    var kuva2 = document.querySelectorAll('.ruutu img')[1];
        if (value2 == 0) {
            kuva2.src = arvonta();
        }
    var kuva3 = document.querySelectorAll('.ruutu img')[2];
        if (value3 == 0) {
            kuva3.src = arvonta();
        }    
    var kuva4 = document.querySelectorAll('.ruutu img')[3];
        if (value4 == 0) {
            kuva4.src = arvonta();
        }
}

function lukitse1() {
    value1 = 1-value1;
    if (value1 === 1) {
        document.getElementById("lukitse1").style.color = "white";
    } else {
        document.getElementById("lukitse1").style.color = "black";
    }
    return value1;
}
function lukitse2() {
    value2 = 1-value2;
    if (value2 === 1) {
        document.getElementById("lukitse2").style.color = "white";
    } else {
        document.getElementById("lukitse2").style.color = "black";
    }
    return value2;
}
function lukitse3() {
    value3 = 1-value3;
    if (value3 === 1) {
        document.getElementById("lukitse3").style.color = "white";
    } else {
        document.getElementById("lukitse3").style.color = "black";
    }
    return value3;
}
function lukitse4() {
    value4 = 1-value4;
    if (value4 === 1) {
        document.getElementById("lukitse4").style.color = "white";
    } else {
        document.getElementById("lukitse4").style.color = "black";
    }
    return value4;
}

function panos() {
    if (panosNyt >= 5) {
        panosNyt = 0;
    }
    panosNyt += 1;
    document.getElementById("panos").innerHTML = panosNyt;
}

