const biciArray = [{ nome: "Bianchi", peso: 12 },
{ nome: "Atala", peso: 15 },
{ nome: "Coppi", peso: 17 },
{ nome: "Whistle", peso: 9 },
{ nome: "Bottecchia", peso: 11 }];

const result = sortByWeight(biciArray);
document.getElementById("result").innerHTML = "Bici:" + result.nome + " " + result.peso +"Kg";

//FUNCTION

/**
 * Funzione che restituisce la bici con il peso più basso
 * @param {array} array
 * @returns {object}
 */
function sortByWeight( array ) {
    let bike = array[0];
    for( let i = 1; i < array.length; i++)
    {   

        if( bike.peso > array[i].peso)
        {
            bike = array[i];
        }
    }

    return bike;
}
