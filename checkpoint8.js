// 1.- Ejerccio

var miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (var i=0; i< miLista.length; i++) {
    console.log(miLista[i]);
}

// 2.- Ejercicio

var miLista = ["velma", "exploradora", "jane", "john", "harry"];
var contador = 0;

while(contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}

// 3.- Ejercicio

const holaMundo = () => {
    return "Hola Mundo";
};

console.log(holaMundo());