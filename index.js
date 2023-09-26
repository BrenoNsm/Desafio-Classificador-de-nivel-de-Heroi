let heroi = {
    nome: "Devinho Jr",
    xp: 900
}

if(heroi.xp < 1000){
    console.log("O herói de nome: " + heroi.nome + " está no nível de Ferro ");
}if (heroi.xp >= 1001 && heroi.xp <= 2000 ) {
    console.log("O herói de nome: " + heroi.nome + " está no nível de Bronze");
}if (heroi.xp >= 2001 && heroi.xp <= 5000 ){
    console.log("O herói de nome: " + heroi.nome + " está no nível de Prata");
}if (heroi.xp >= 6001 && heroi.xp <= 7000 ){
    console.log("O herói de nome: " + heroi.nome + " está no nível de Platina");
}if (heroi.xp >= 7001 && heroi.xp <= 8000 ){
    console.log("O herói de nome: " + heroi.nome + " está no nível de Ascendente");
}if (heroi.xp >= 9000 && heroi.xp <= 10000 ){
    console.log("O herói de nome: " + heroi.nome + " está no nível de Imortal");
}if (heroi.xp >= 10001){
    console.log("O herói de nome: " + heroi.nome + " está no nível de Radiante");
}

