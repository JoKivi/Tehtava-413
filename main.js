const imagesPath = 'images/';
const images = [
    'seiska.png',
    'apple.png',
    'melon.png',
    'pear.png',
    'cherry.png'
];

var kuva1 = document.querySelectorAll('.ruutu img')[0];
var kuva2 = document.querySelectorAll('.ruutu img')[1];
var kuva3 = document.querySelectorAll('.ruutu img')[2];
var kuva4 = document.querySelectorAll('.ruutu img')[3];

const taulukko1Panos = [
    '10',
    '6',
    '5'
];
const taulukko2Panos =[
    '4',
    '3',
    '8'
];

const voittolinjat = new Map([
    ["0,0,0,0",10],
    ["1,1,1,1",6],
    ["2,2,2,2",5],
    ["3,3,3,3",4],
    ["4,4,4,4",3],
]);

let slots = [0,0,0,0];
const locks = [0,0,0,0];
let saaLukita = true;
var raha = 50; 
var panosNyt = 1;

document.getElementById("raha").innerHTML = raha;
document.getElementById("panos").innerHTML = panosNyt;

vaihdaKuva();
console.table(voittolinjat);

function arvonta(index) {
    let num = Math.floor(Math.random() * 5);
    let image = imagesPath + images[num];
    slots[index] = num;
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
        voitto();
    }
}

function rahaaPois() {
    // raha -= panosNyt;
    document.getElementById("raha").innerHTML = raha;
}

function vaihdaKuva() {
    if (locks[0]==0) {kuva1.src = arvonta(0);}
    if (locks[1]==0) {kuva2.src = arvonta(1);}
    if (locks[2]==0) {kuva3.src = arvonta(2);}
    if (locks[3]==0) {kuva4.src = arvonta(3);}
}

function voitto() {
    let line = slots.toString();
    console.log(line)

    if (voittolinjat.has(line)) {
        

    } else if (kuva2.isEqualNode(kuva3)&&kuva2.isEqualNode(kuva4)) {
        if (kuva2.src.lastIndexOf("seiska") >0) {
            console.log(raha);
            raha += taulukko2Panos[2]*panosNyt;
            console.log(raha);
            document.getElementById("raha").innerHTML = raha;

        }
    } else {
        console.log("EI Voittoa")
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