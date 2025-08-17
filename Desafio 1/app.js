let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora de Desafío";

function boton_console(){
    console.log("El botón fue clicado");
}


function boton_prompt(){
    let nombre = prompt("Dime una ciudad de Brasil");
    alert(`Estuve en ${nombre} y me acordé de ti`);
}

function boton_alerta(){
    alert('Yo amo JS');
}

function boton_suma(){
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    alert(`La suma de los dos números es ${num1 + num2}`);

}