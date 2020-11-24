var jour = prompt("Quelle est le meilleur jour de la semaine?").toLowerCase();
joursTravail = ['lundi','mardi','mercredi','jeudi','vendredi'];
joursRepos = ['samedi','dimanche'];
if(joursTravail.includes(jour)){
    let index = joursTravail.indexOf(jour);
    document.write(`Jours de la semaine<br>\
    Jour choisi: ${joursTravail[index]}<br>\
    C'est un jour de travail<br>\
    `);
    if(jour !== "vendredi"){
        //je compte le jour actuel, mais pas vendredi
        //alors vendredi vient 4 jours après lundi dans ces exemples
document.write(`Ne t'en fais pas, vendredi est dans ${5-index-1} jours<br>\
`);
    }else{document.write("C'EST VENDREDI!")}
}else if(joursRepos.includes(jour)){
    let index = joursRepos.indexOf(jour);
    document.write(`Jours de la semaine<br>\
    Jour choisi: ${joursRepos[index]}<br>\
    C'est un jour de fin de semaine<br>\
    Attention, lundi vient dans ${2-index} jours<br>\
    `);
}else{
    alert("hmm... Tu n'as pas bien écrit ton jour préféré");
    location.reload();
}
