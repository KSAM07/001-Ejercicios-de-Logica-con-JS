horas=prompt("Ingresa el numero de horas: ")
if(horas<=.5){
    console.log("No se te cobra tus horas amigo")
}else if(horas>.5 && horas<2){
    console.log("Se te cobrara 10 pesos amigo")
}else if(horas = 2 && horas <= 3){
    console.log("Se te cobraran 25 pesos amigo")
}else {
    console.log("Se te cobraran 30 pesos amigo")
}
