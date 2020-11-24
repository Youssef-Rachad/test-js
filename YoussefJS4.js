var cafes = parseInt(prompt("Alors, combien de tasse de cafe aviez-vous consommé?"));

document.write(`<section id="carte">\
Cartes MonCafé<br><br>\
Nombre de tasses de café: ${cafes}<br><br>\
Nombre de tasses gratuites: ${parseInt(cafes/7)}<br>\
</section>`);
    document.getElementById("carte").style.width="50%";
    document.getElementById("carte").style.margin="auto";
    document.getElementById("carte").style.padding="0.5em";


if(cafes>21){
    document.getElementById("carte").style.backgroundColor="red";
    document.getElementById("carte").innerText += "Bravo! Vous êtes maintenant un membre élite du club MonCafé !"
    document.write("<button id='aide'>Considérez aussi ceci</button>");
}else{
    document.getElementById("carte").style.backgroundColor="lightblue";

}
document.getElementById("aide").addEventListener("click",()=>{
    location.assign("https://www.healthline.com/nutrition/caffeine-side-effects");
});
