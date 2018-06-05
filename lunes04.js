// ARRAY

// se puede declarar un arreglo vacío
let names = [];
// Forma antigua --> let names = new Array();

// puedo pasarle datos a mi arreglo vacío indicando la posición y el valor
names[0] = 'Ale';
names[0] = 'Marcia'; // sobreescribe a 'Ale'
names[1] = 'Paula';
names[2] = 'Majo';
// console.log de names --> ["Marcia", "Paula", "Majo"]


/*
  1- PUSH: agrega un elemento al final del arreglo
*/

let namesPush = [];
namesPush.push('Ale', 'Marcia', 'Paula', 'Majo');
// console.log de namesPush --> ["Ale", "Marcia", "Paula", "Majo"]


/*
  2- POP: elimina último elemento al final del arreglo
*/

namesPush.pop();
// el arreglo queda así --> ["Ale", "Marcia", "Paula"]

/*
  3- SLICE: crea una copia del arreglo en relación a los parámetros que le indicamos de inicio y fin
  El primer parámetro es obliglatorio, el segundo es opcional

  sintaxis --> array.slice(indice inicio, indice siguiente al útlimo)
*/

const names =  ['Ale', 'Marcia', 'Paula', 'Majo', 'Bambi', 'Teresita'];

names.slice(3); // ["Majo", "Bambi", "Teresita"]
names.slice(0, 2); // ["Ale", "Marcia"]

/*
  4- INDEXOF: Le paso por parámetro el elemento que busco en el arreglo y me devuelve el índice, si no encuentra el elemento devuelve -1
*/

const cats = ['Chica', 'Jaspe', 'Nena', 'Morri'];

cats.indexOf('Nena'); // 2
cats.indexOf('Negro'); // -1

/*
  5- CONCAT: Genera una copia del arreglo original con los nuevos elementos concatenados.
*/

const cats = ['Chica', 'Jaspe', 'Rubio', 'Nena', 'Morri'];

cats.concat('Negro', 'Garfield', 'Doraemon');
// console.log --> ["Chica", "Jaspe", "Rubio", "Nena", "Morri", "Negro", "Garfield", "Doraemon"]



/*
  Arreglo de Objetos
*/

const students = [
  {
    name: 'Violeta',
    track: 'common core',
    status: true
  },
  {
    name: 'Alejandra',
    track: 'common core',
    status: true
  },
  {
    name: 'Vanessa',
    track: 'common core',
    status: true
  },
  {
    name: 'Nataly',
    track: 'common core',
    status: true
  }
];

students[2].status // true
students[1].name // "Alejandra"

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name)
  // Violeta
  // Alejandra
  // Vanessa
  // Nataly
}


// Que pasa si quiero sumar 5 números
const addition = (n1, n2, n3, n4, n5) => {
  return n1 + n2 + n3 + n4 + n5;
}

// llamo a mi función y le paso los argumentos
addition(1, 2, 3, 4, 5);

// console --> 15


// BONUS
// El mismo ejemplo pero utilizando 'Spread Operator'

const addition = (...numbers) => {
  console.log(numbers)
}
addition(1, 2, 3, 4, 5);
// console --> numbers = [1, 2, 3, 4, 5]

const phrase = [ 'Hola', 'soy', 'una', 'linda', 'frase'];
console.log(...phrase)

// Hola soy una linda frase


// SUMAR NÚMEROS QUE ESTÁN DENTRO DE UN ARRAY

const addition = (arr) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
    // suma = suma + arr[i]
    // suma = 0 + 1
    // suma = 1 + 2
    // suma = 3 + 3
    // suma = 6 + 4
    // suma = 10 + 5
    // suma = 15
  }
  return suma;
}

// llamo a la función
addition([1, 2, 3, 4, 5])


// LO MISMO PERO CON REDUCE

const addition = (arr) => {
  const newNumbers = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
    // previosValue corresponde a lo que retornó reduce anteriormente
  });
  return newNumbers;
}

// llamo a la función y le pago el arreglo como argumento
addition([1, 2, 3, 4, 5]);



// LO MISMO QUE EL EJEMPLO ANTERIOR PERO CON STRINGS

const additionLetters = (arr) => {
  const newPhrase = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
    // previosValue corresponde a lo que retornó reduce anteriormente
  });
  return newPhrase;
}

// llamo a la función y le pago el arreglo como argumento
additionLetters(["g", "a", "r", "y"]);


// MAP: devuelve un nuevo arreglo con los resultados de lo que le indicamos en su interior

// MULTIPLICAMOS * 2 LOS ELEMENTOS DE UN ARRAY

// VERSIÓN ---> FOR
const multiply = (arr) => {
  let newArr = []; // arreglo vacío
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]*2); // pusheo el resultado de la multiplicación en cada elemento
  }
  return newArr;
}
multiply([1, 2, 3, 4]);
// newArr = [2, 4, 6, 8];



// VERSIÓN ---> MAP

const multiply = (arr) => {
  const result = arr.map(element => {
    return element * 2;
  })
  return result;
}
multiply([1, 2, 3, 4]);
// console --> [2, 4, 6, 8];


// refactorización
const multiply = (arr) => {
  const result = arr.map(element => element * 2);
return result;
}
multiply([1, 2, 3, 4]);
// console --> [2, 4, 6, 8];


// FILTER

// Filtramos números pares de un arreglo

// VERSIÓN --> FOR
const even = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

even([1, 2, 3, 4, 5, 6, 7, 8]);
// console --> [2, 4, 6, 8]



// VERSIÓN --> FITLER
const even = (arr) => {
  const evenNumbers = arr.filter(element => {
    return element % 2 === 0;
  })
  return evenNumbers
}
even([1, 2, 3, 4, 5, 6, 7, 8]);
// console --> [2, 4, 6, 8]



// refactorizando
const even = (arr) => {
  const evenNumbers = arr.filter(element => element % 2 === 0);
  return evenNumbers;
}
even([1, 2, 3, 4, 5, 6, 7, 8]);
// console --> [2, 4, 6, 8]


// SORT

const arr = ['Marcia', 'Belén', 'Alexandra', 'Nadia', 'Allison'];
arr.sort(); // ["Alexandra", "Allison", "Belén", "Marcia", "Nadia"]

const numbers = [1, 2, 15, 11, 100, 20];

const compareNumeric = (a, b) => {
  return a - b // a: previo b: siguiente
};
numbers.sort(compareNumeric);
// [1, 2, 11, 15, 20, 100]