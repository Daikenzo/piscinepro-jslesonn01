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
displayResult(`0b`, movies[3].year);
// c. Logger le titre du dernier element du tableau movies
displayResult(`0c`, movies[movies.length-1].title);
// d. Logger le titre du film qui a la meilleure note
const bestMoviesSearch = (arr)  =>{
    let bestMovie = arr[0]

    arr.forEach((movie) => {
        if( movie.rate > bestMovie.rate){
            bestMovie = movie
        }
    })

    return bestMovie.title; // retourner tableau compléter
}
ExoResult = bestMoviesSearch(movies);
displayResult(`0d`, ExoResult)
// sort ver
const bestFilmNoteWithSort = (rating, arr){

}
displayResult(`0d`, ExoResult);
// e. Logger le titre du film le plus ancien
const titleOldFilm = (arr)  =>{
    let oldMovie = arr[0]

    arr.forEach((movie) => {
        if( movie.year < bestMovie.year){
            oldMovie = movie
        }
    })

    return oldMovie.title; // retourner tableau compléter
}
ExoResult = titleOldFilm(movies);
displayResult(`0e`, ExoResult);
// f. Logger tous les titres de film qui ont au moins 3 acteurs
const filmWith3Actor = (arr)  =>{
    let filmList = []

    arr.forEach(() => {
        if(arr.actors.length){
            filmList.push(arr.title)
        }
    })

    return filmList; // retourner tableau compléter
}
ExoResult = filmWith3Actor(movies);
displayResult(`0f`, ExoResult);

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films
displayResult(`1`, ExoResult);
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee
displayResult(`2`, ExoResult);
// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur
displayResult(`3`, ExoResult);

}
// display log
function displayResult(ExoNumber, element){
    console.log(`Result Exo N°${ExoNumber} :`)
    console.log(element);
}

function init(){

}