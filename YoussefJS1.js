var unNombre = parseInt(prompt("Choisis un nombre, n'importe quel nombre"));
if(isNaN(unNombre) == true){
    location.reload();
}
document.write(`Le premier nombre est: ${unNombre}<br><br>`);
for(let i = 0;i<10;i++){
    document.write(`${unNombre+i}<br>`);
}
