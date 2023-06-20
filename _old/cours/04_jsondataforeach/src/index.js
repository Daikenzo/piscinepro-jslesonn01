import games from "./games.json" assert { type: "json" }; /* assert permet de spécifier le type de fichier (json)*/
// import doit avoir un export dans l'autre ficher


init();



// Function
function init() {

//console.log("init");
console.log(games)
console.log("");
// start current example
RunExo();
}

// function declaration: version old school
function nomDeFunctionExample(arg1, arg2){
    return arg1 + arg2
}
// version 2015
//let myExempleFunctionArg = [5,6];
const myExampleFunction = (arg1, arg2) => { 
    //  => fonction annonyme : permet de stocker la fonction dans une variable
    return arg1 + arg2
}/* // pour l'utiliser on l'utilise (après declaration) comme dans
console.log(myExampleFunction(myExempleFunctionArg[0], myExempleFunctionArg[1]))*/

// foreach // ne peut être fait que sur les tableau
// on ne peut pas faire de break / continue et autre fonction de boucle) 
// const myArray1 = [2,5,6,7];
// myArray1.forEach((el) => {
//     console.log('hello')
// });

// display log
function displayResult(ExoNumber, element){
    console.log(`Result Exo N°${ExoNumber} :`)
    console.log(element);
}

function RunExo(){
    let ExoResult;
    // a. Logger le premier element du tableau games
    displayResult(`0a`, games[0]);
    // b. Logger l'annee du 3eme element du tableau games
    displayResult(`0b`, games[2].year);
    // c. Logger le titre du dernier element du tableau
    displayResult(`0c`, games[games.length-1].title);


// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)
const getAllTitles = (arr) => {
    let titles = []
    arr.forEach(game => { // gameTitleList.push(game.title)
    titles.push(game.title)}
    )     // accolade inutile si une seule ligne
    return titles 
}
        
    ExoResult = getAllTitles(games);
    displayResult(1, ExoResult);
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee
const   getGameNamesYears = (getYear, arr) => {
    let result = [];

    arr.forEach((el) => {
        if(getYear === el.year){
            result.push(el.title)
        }
    })
    return result;
}
ExoResult = getGameNamesYears(2021, games);
displayResult(2, ExoResult);

// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8
const getGameNameByRate = (rating, arr) => {
    let titles =    []; // variable de récup tableau final
    
    //
    arr.forEach((el) => {
        if( rating <= el.rate){
            titles.push(el.title)
        }
    })

    return titles; // retourner tableau compléter
}

ExoResult = getGameNameByRate(7, games);
displayResult(3, ExoResult);
// 4. Ecrire une fonction qui prend en parametre une appareil/ console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console

const   getGameListbyDevices = (checkDevice, arr) => {
    let gameLists = []

    // version normal
    /*
    arr.forEach( (el) => {
        // 
        if(el.devices.includes(checkDevice)){
            gameLists.push(el.title)
            // includes:  est ce que la valeur de checkdevice est contenu dans le texte ?
        }
    })
    
    //Fin version  normal*/
    // Version Avancée
    //*

    // correct
    //1
    arr.forEach((game) => {
        // 
    for (let i = 0; i < game.devices.length; i++) {
        const element = game.devices[i];
        if(element.includes(checkDevice)){
            gameLists.push(game.title);
            break;
            }
        }
    
    })
    
    //Fin version Avancée*/
    return  gameLists; 
}

ExoResult = getGameListbyDevices("Nintendo Switch", games);
displayResult(4, ExoResult);
}