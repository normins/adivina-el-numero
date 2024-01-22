//DESAFIO


/*
1. Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = [];


/*
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];


/*
3. Agrega a la lista "lenguajesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
*/
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');


/*
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion.
*/
function mostrarLista(lista){
    console.log(lista);
}

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  

/*
5.Crea una función que muestre en la consola todos los elementos 
de la lista "lenguajesDeProgramacion en orden inverso.
*/
function mostrarLenguagesSeparadamenteInverso() {
    for (let i = lenguajesDeProgramacion.length - 1; i >=0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }


/*
6. Crea una función que calcule el promedio de los elementos en una lista de números.
*/
function promedioLista(lista){
    let sumatoria = 0;
    for (let i = 0; i < lista.length; i++) {
       sumatoria = sumatoria + lista[i];
      }
    return sumatoria / lista.length
}

/*
7.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/
function minMaxLista(lista){
    let minimo = lista[0];
    let maximo = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i];
        }
        if (lista[i] < minimo) {
            minimo = lista[i];
        }
      }
    
      console.log('Mayor:', maximo);
      console.log('Menor:', minimo);
    
    return;
}


/*
8. Crea una función que devuelva la suma de todos los elementos en una lista.
*/
function sumatoriaLista(lista){
    let sumatoria = 0;
    for (let i = 0; i < lista.length; i++) {
       sumatoria = sumatoria + lista[i];
      }
    return sumatoria;
}


/*
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro,
 o -1 si no existe en la lista.
*/
function posicionEnLista(lista, elemento){
    for (let i = 0; i < lista.length; i++) {
       if (lista[i] == elemento){
        return i; // devuelve el índice dle elemento
       };
      }
    return -1; // indica que no contiene al elemento solicitado
}

/*
10. Crea una función que reciba dos listas de números del mismo tamaño y
 devuelva una nueva lista con la suma de los elementos uno a uno.
*/
function concatenarListas(lista1, lista2){
    let listaConcatenada = lista1;

    for (let i = 0; i < lista2.length; i++) {
        listaConcatenada.push(lista2[i]);
       }
     return listaConcatenada;
   
}


/*
11.Crea una función que reciba una lista de números y 
devuelva una nueva lista con el cuadrado de cada número.
*/
function cuadradoListas(lista){
    let listaCuadrado = [];

    for (let i = 0; i < lista.length; i++) {
        listaCuadrado.push(lista[i] ** 2);
       }
     return listaCuadrado;
     ;
   
}




//1
console.log(listaGenerica);

//2
console.log(lenguajesDeProgramacion);

//3
console.log(lenguajesDeProgramacion);

//4
mostrarLista(lenguajesDeProgramacion);
mostrarLenguagesSeparadamente();

//5
mostrarLenguagesSeparadamenteInverso();

//6
let numeros = [10, 20, 30, 40, 50];
let media = promedioLista(numeros);
console.log('Promedio:', media);

//7
let listaNumeros = [15, 8, 25, 5, 12];
minMaxLista(listaNumeros);

//8
let listaNumeros2 = [15, 8, 25, 5, 12];
let sumatoria = sumatoriaLista(listaNumeros2);
console.log('Sumatoria:', sumatoria);

//9
let listaNumeros9 = [15, 8, 25, 5, 12];
let posicion = posicionEnLista(listaNumeros9, 25);
if (posicion == -1) {
    console.log('No contiene al elemento');
}else{
    console.log('La posicion donde está el elemento es ', posicion);
}


//10
let listaNumeros10 = [15, 8, 25, 5, 12];
let listaNumeros11 = [1, 2, 3, 4, 5];
console.log(concatenarListas(listaNumeros10, listaNumeros11));

//11
let listaNumeros12 = [1, 2, 3, 4, 5];
console.log(cuadradoListas(listaNumeros12));

