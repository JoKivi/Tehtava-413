const imagesPath = 'images/'
const images = [
    '7.png',
    'apple.png',
    'melon.png',
    'pear.png',
    'cherry.png'
]

var kuva1 = document.querySelectorAll('.ruutu img')[0];
var kuva2 = document.querySelectorAll('.ruutu img')[1];
var kuva3 = document.querySelectorAll('.ruutu img')[2];
var kuva4 = document.querySelectorAll('.ruutu img')[3];

const taulukko1Panos = [
    '10',
    '6',
    '5'
]
const taulukko2Panos =[
    '4',
    '3',
    '8'
]

const locks = [0,0,0,0]
let saaLukita = true
var raha = 50; 
var panosNyt = 1;

document.getElementById("raha").innerHTML = raha;
document.getElementById("panos").innerHTML = panosNyt;

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
        lukituksenTarkistus();
        voitto4();
    }
}

function rahaaPois() {
    raha -= panosNyt;
    document.getElementById("raha").innerHTML = raha;
}

function vaihdaKuva() {
    if (locks[0]==0) {kuva1.src = arvonta();}
    if (locks[1]==0) {kuva2.src = arvonta();}
    if (locks[2]==0) {kuva3.src = arvonta();}
    if (locks[3]==0) {kuva4.src = arvonta();}
}

function voitto4() {
    if (kuva1.isEqualNode(kuva2, kuva3, kuva4)) {
        if (kuva1) {
            
        }
    } else {
        console.log("EI")
    }


}

function lukituksenTarkistus() {
    if (locks[0]+locks[1]+locks[2]+locks[3] > 0){
            
        for (let i=0; i < locks.length; i++) {
            if (locks[i] == 1){
                lukitse(i)
            }
        }

        saaLukita = false
    } else {
        saaLukita = true
    }
} 

function lukitse(index){
    
    if (!saaLukita) {
        return
    }

    const lockButtons = document.querySelectorAll('.lukitse');

    if (locks[index] == 0) {
        locks[index] = 1
        lockButtons[index].style.color = "white";
        lockButtons[index].innerHTML = "LUKITTU";
    } else {
        locks[index] = 0
        lockButtons[index].style.color = "black";
        lockButtons[index].innerHTML = "LUKITSE";
    }

}

function panos() {
    if (panosNyt >= 5) {
        panosNyt = 0;
    }
    panosNyt += 1;
    document.getElementById("panos").innerHTML = panosNyt;
    taulukonKerroin(panosNyt);
}

function taulukonKerroin(panosNyt) {
    for (let i = 0; i < 3; i++) {
        var tauluPanos1 = taulukko1Panos[i];
        tauluPanos1 *= panosNyt;
        document.getElementById("voittotaulu1").rows[i].cells.item(1).innerHTML = tauluPanos1;

        var tauluPanos2 = taulukko2Panos[i];
        tauluPanos2 *= panosNyt;
        document.getElementById("voittotaulu2").rows[i].cells.item(1).innerHTML = tauluPanos2;
    }
}