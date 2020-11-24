var rayon = Number(prompt("Je peux mesurer tout sur les cercles.\nDis moi, ton cercle, combien mesure son rayon"));
function Circonferencier(rayon){
    if(isNaN(rayon)==true){
        location.reload();
    }
    alert("Les maths sont un rayon de soleil :)");
    return (2*rayon*Math.PI).toFixed(3);
}

document.write(`Rayon (cm): ${rayon}<br>\
Circonférence (cm): ${Circonferencier(rayon)}`)
