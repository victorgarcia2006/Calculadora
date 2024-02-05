//Valor de teclas de la calculadora
let valorPantalla = "";
let resultado = 0;
let operacionActual = "";
let valores = [];
let operaciones = [];

//Funcion para mostrar el valor de las teclas en el display
function mostrar(numero) {
    valorPantalla += numero;
    document.getElementById('display').value = valorPantalla;
}

//Funcion para limpiar el display
function limpiar() {
    document.getElementById("display").value = "";
    valorPantalla = "";
}

//Funcion para borrar solo un numero
function borrar() {
    let valor = document.getElementById("display").value;
    document.getElementById("display").value = valor.substring(0, valor.length - 1);
    valorPantalla = valor.substring(0, valor.length - 1);
}

//Funcion para realizar las operaciones
function operar(operacion){
    operacionActual = operacion;
    valores.push(parseFloat(valorPantalla));
    operaciones.push(operacionActual);
    valorPantalla = "";
}

//Funcion para mostrar el resultado
function mostrarResultado(){
    valores.push(parseFloat(valorPantalla));
    let resultado = valores[0];
    console.log(valores);
    for(let i = 0; i < operaciones.length; i++){
        if(operaciones[i] === "+"){
            resultado += valores[i + 1];
        }
        else if(operaciones[i] === "-"){
            resultado -= valores[i + 1];
        }
        else if(operaciones[i] === "*"){
            resultado *= valores[i + 1];
        }
        else if(operaciones[i] === "/"){
            resultado /= valores[i + 1];
        }
        else if(operaciones[i] === "^"){
            resultado = Math.pow(resultado, valores[i + 1]);
        }
        else if(operaciones[i] === "√"){
            resultado = Math.sqrt(resultado);
        }
    }
    document.getElementById('display').value = resultado;
    valorPantalla = resultado;
    valores = [];
    operaciones = [];
}


document.querySelectorAll(".tecla").forEach((tecla => {
    tecla.addEventListener("click", () => {
        if(tecla.id === "igual"){
            mostrarResultado();
        }
        else if(["sumar", "restar", "multiplicar", "dividir", "elevar", "raiz"].includes(tecla.id)){
            operar(tecla.textContent);
        }
        else if(tecla.id === "borrar"){
            borrar();
        }
        else if(tecla.id === "reiniciar"){
            limpiar();
        }
        else{
            mostrar(tecla.textContent);
        }
    })
}))


