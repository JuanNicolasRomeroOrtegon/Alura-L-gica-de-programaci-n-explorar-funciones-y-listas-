let numero_secreto = 0;    
let intentos = 0;
let lista_numeros_sorteados = []; 
let numero_maximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarEvento() {
    let numero_de_usuario = parseInt(document.getElementById('valor_usuario').value);
    
    if (numero_de_usuario === numero_secreto){
        asignarTextoElemento("p", `Acertaste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        //El usuario no acertó
        if (numero_de_usuario > numero_secreto){
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiar_caja();
    }
}

function limpiar_caja(){
    document.querySelector("#valor_usuario").value = '';

}

function generarNumeroSecreto() {
    let numero_generado =  Math.floor(Math.random() * numero_maximo) + 1;
    
    // Si ya sorteamos todos los números
    if (lista_numeros_sorteados.length == numero_maximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el número generado está incluido en la lista
        if (lista_numeros_sorteados.includes(numero_generado)){
            return generarNumeroSecreto();
        } else {
            lista_numeros_sorteados.push(numero_generado);
            return numero_generado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numero_maximo}`);
    numero_secreto = generarNumeroSecreto(); 
    intentos = 1;

} 

function reiniciarJuego() {
    // Limpiar caja
    limpiar_caja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos 
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



for (var i = 1; lista_numeros_sorteados.length; i++){
    console.log(lista_numeros_sorteados[i])
    [lista_numeros_sorteados.length - 1 - i]
}