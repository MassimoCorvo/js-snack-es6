// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const array1 = ["Marco", "Massimo", "Giovanni", "Claudia", "Davide", "Daniela", "Sonia", "Francesco", "Paola"];

console.log(array1);

let input1 = prompt("Inserisci a");
let input2 = prompt("Inserisci b");

while ( input1 < 0 || input2 < 1 || input1 > array1.length || input2 > array1.length || input1 > input2 || isNaN(input1) || isNaN(input2))
{
    input1 = prompt("Inserisci a");
    input2 = prompt("Inserisci b");
}

console.log( "a: ", input1);
console.log("b: ", input2);
console.log( arrayFromAToB( array1, input1 , input2) );


//FUNCTIONS

/**
 * Dato un array e due indici, la funzione restituisce un nuovo array che ha gli elementi del vecchio array nelle posizioni comprese tra i due indici
 * @param {array} array
 * @param {number} a
 * @param {number} b
 * @returns {array}
 */
function arrayFromAToB ( array, a, b ){

    const newArray = [];
    
    for(let i=a; i <= b; i++)
    {
        newArray.push( array[i] );
    }

    return newArray;
}

