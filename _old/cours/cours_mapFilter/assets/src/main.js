// Lib & Import
import movies from  "../json/movies.json" assert {type:'json'};
// Var & Const

// Fct global const

init();
RunExo();

function RunExo(){
    let ExoResult;
// a. Logger le premier element du tableau movies
displayResult(`0a`, movies[0]);
// b. Logger l'annee du 4eme element du tableau movies
displayResult(`0a`, movies[3].year);
// c. Logger le titre du dernier element du tableau movies
displayResult(`0a`, movies[movies.length-1]);
// d. Logger le titre du film qui a la meilleure note

// e. Logger le titre du film le plus ancien
// f. Logger tous les titres de film qui ont au moins 3 acteurs


// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee
// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur

}
// display log
function displayResult(ExoNumber, element){
    console.log(`Result Exo N°${ExoNumber} :`)
    console.log(element);
}

function init(){

}