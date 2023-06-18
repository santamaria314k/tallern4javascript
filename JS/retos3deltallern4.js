

/*
-----------------------------------------------Reto 5

La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
 Los ingredientes para cada tipo de pizza aparecen a continuación.
  Ingredientes vegetarianos: Pimiento y tofu.

Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.

Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
 y en función de su respuesta le muestre un menú con losingredientes disponibles para que elija.

 Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están en todas las pizzas.

Al final se debe mostrar por pantalla si la pizza elegida es vegetariana o no y todos los ingredientes que lleva.

 */


function pizzeria() {
  var vegetariana1 = ["mozarella", "tomate"];
  var novegetariana2 = ["mozarella", "tomate"];
  var vag = ["pindento", "tofu"];
  var noveg = ["pepperoni", "jamón", "salmón"];
  
  var mipizza = parseInt(prompt("Ingresa el tipo de pizza que deseas: 1 - Vegetariana, 2 - No vegetariana"));
  
  if (mipizza === 1) {
    var eleccion = parseInt(prompt("Elige un ingrediente para la pizza vegetariana: 1 - Pindento, 2 - Tofu"));
    
    if (eleccion === 1) {
      vegetariana1.push(vag[0]);
    } else if (eleccion === 2) {
      vegetariana1.push(vag[1]);
    } else {
      alert("Has digitado un valor que no corresponde");
    }
    
    alert("Has elegido una pizza vegetariana con los siguientes ingredientes: " + vegetariana1);
  } else if (mipizza === 2) {
    var eleccion = parseInt(prompt("Elige un ingrediente para la pizza no vegetariana: 1 - Pepperoni, 2 - Jamón, 3 - Salmón"));
    
    if (eleccion === 1) {
      novegetariana2.push(noveg[0]);
    } else if (eleccion === 2) {
      novegetariana2.push(noveg[1]);
    } else if (eleccion === 3) {
      novegetariana2.push(noveg[2]);
    } else {
      alert("Has digitado un valor que no corresponde");
    }
    
    alert("Has elegido una pizza no vegetariana con los siguientes ingredientes: " + novegetariana2);
  } else {
    alert("Opción inválida.");
  }
}














/*
--------------------------------------------------------------Reto 6

Confeccionar una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno. Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla: 4 5 6 7 8 9 10

 */
function rangonumeros() { }
const almacen1 = [];
const almacen2 = [];
alert("Ingresa dos números. El PRIMERO debe ser MENOR que el SEGUNDO.");
let menor = parseInt(prompt("Ingresa un número entero INICIAL"));
almaceni.push(menor);
let mayor = parseInt(prompt("Ingresa un número entero FINAL"));
 almacen2.push(mayor);
for (var i = menor; i <= mayor; i++) {
alert(i);


}







/*
---------------------------------------------------------------Reto 7

Crear un vector para almacenar los sueldos de 5 operarios y luego mostrar el total de gastos en sueldos
 (cada actividad en una función)
*/



function sueldos(){ 
  let almacenar=[];
  let salario ; 
  let suma =0;
  for (let k = 0; k < 5; k++) {
  salario =parseInt(prompt("ingresa el salario de los operarios"));
  almacenar.push(salario);

  suma += almacenar [k];
  
  alert(suma);
  }
  }














/*






*/