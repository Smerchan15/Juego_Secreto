let numeroSecreto = 0;
let intentos = 1;
let lista_numeros_sorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`, `Acertaste el número en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor")
        } else {
            asignarTextoElemento("p","El numero secreto es mayor")     
        } 
        intentos ++;
        limpiarCaja();

    return;
}
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(lista_numeros_sorteados);
    //Si ya sorteamos todos los numeros
    if (lista_numeros_sorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numero posibles")
    } else {
        //Si el numero generado esta incluido en la listo
        if(lista_numeros_sorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            lista_numeros_sorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";

}
function condicioneIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento(`p`,`Indica un numero del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
}
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicioneIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true")
    
}
condicioneIniciales();


