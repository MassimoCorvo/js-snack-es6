const arraySquadre = [
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Brescia",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Como",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Genoa",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Monza",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Palermo",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Pescara",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Sampdoria",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Salernitana",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Torino",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Verona",
        puntiFatti: 0,
        falliSubiti: 0
    }

];

generatePointsFouls ( arraySquadre );
console.log( arraySquadre );
console.log( createNewArray(arraySquadre) );

//FUNCTIONS

/** 
 * Funzione che genera punti e falli subiti per ogni squadra
 * @param {array} array
 */
function generatePointsFouls ( array ){

    for( let i = 0; i < array.length; i++){

        array[i].puntiFatti = getRndInteger(1, 100);
        array[i].falliSubiti = getRndInteger(1, 300);

    }

}

/**
* Genera un numero intero random compreso tra min e max intrambi inclusi
* @param {number} min
* @param {number} max
* @returns {number}
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Crea un nuovo array di oggetti, con proprietà Nome e Falli subiti. Restituisce l'array generato
 * @param {array} array
 * @returns {array}
 */
function createNewArray ( array ) {

    let newArray = [];

    for(let i = 0; i < array.length; i++)
    {
        const nomeTemp = array[i].nome;
        const falliTemp = array[i].falliSubiti;

        newArray.push({nome: nomeTemp, falliSubiti: falliTemp});
    }

    return newArray;
}