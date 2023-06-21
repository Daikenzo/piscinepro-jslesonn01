// Lib & Import
import movies from  "../json/movies.json" assert {type:'json'};
// Var & Const
let resultExample;
let ExoResult;

// Fct global const

init();
FilterExample();
mapExample();
RunExo();

function RunExo(){
// a. Logger le premier element du tableau movies
displayResult(`0a`, movies[0]);
// b. Logger l'annee du 4eme element du tableau movies
displayResult(`0b`, movies[3].year);
// c. Logger le titre du dernier element du tableau movies
displayResult(`0c`, movies[movies.length-1].title);
// d. Logger le titre du film qui a la meilleure note/*
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
const bestFilmNoteWithSort = (arr) =>{
    let arr_compare = arr
    const bestMovie = arr_compare[0]
    // warning: sort modifie l'odre du tableau en interne
    arr_compare.sort((a,b) =>{

        return b.rate - a.rate;
    })
    return arr_compare[0]

}
ExoResult = bestFilmNoteWithSort(movies)
displayResult(`0d`, ExoResult);
// e. Logger le titre du film le plus ancien
const titleOldFilm = (arr)  =>{
    let oldMovie = arr[0]

    arr.forEach((movie) => {
        if( movie.year < oldMovie.year){
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
    arr.forEach((el) => { // 
        if(el.actors.length >= 3){
            filmList.push(el.title) // renvoie element courant
        }
    })

    return filmList; // retourner tableau compléter
}
ExoResult = filmWith3Actor(movies);
displayResult(`0f-a`, ExoResult);
// with map
const filmWith3Actor2 = (arr)  =>{
    const filteredMovies = arr.filter((el)=>{
        if(el.actors.length >= 3){
            return true
        } else { return false}
    })
    /*
    const filmList = arr.map((movie) =>{
        return movie.title + ` with 3 actor`
    })*/
    const filmList = filteredMovies.map((currentElement)=>{
        return currentElement.year
    })

    return filmList; // retourner tableau compléter
}
ExoResult = filmWith3Actor2(movies);
displayResult(`0f-b`, ExoResult);
// with filter & map
const filmWith3Actor3 = (arr)  =>{
    const filmList = arr.filter((el)=>{
        return el.actors.length >= 3
    })

    return filmList; // retourner tableau compléter
}

ExoResult = filmWith3Actor3(movies);
displayResult(`0f-c`, ExoResult);


// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

const titleFilmList = movies.map((currenteEl)=>{
    return currenteEl.title
})

ExoResult = titleFilmList
displayResult(`1`, ExoResult);
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee

const getMoviesFromYear = ((year, arr)=>{
    const yearFilter = arr.filter((el)=>{
        if (el.year == year){ return true}else{return false}
         // alias return  el.year === year
    })
    const moviesList = yearFilter.map((currentElement)=>{
        return currentElement.title
    })
    return  moviesList
})
ExoResult = getMoviesFromYear('1994', movies)
displayResult(`2`, ExoResult);
// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur
const   getMovieTitleByAuthor = ((director, arr)=>{
    const   authorFilter =  arr.filter((el)=>{
        return el.director === director
    })
    const   moviesList  =   authorFilter.map((currentEl)=>{
        return  currentEl.title
    })
    return moviesList
})
ExoResult =getMovieTitleByAuthor('Christopher Nolan', movies)
displayResult(`3`, ExoResult);

}

// display log
function displayResult(ExoNumber, element){
    if(element !== resultExample){
        console.log(`Result Exo N°${ExoNumber} :`)
    } else{console.log(`Example => ${ExoNumber} :`)}
    console.log(element);
}

function init(){
}

/*map exemple*/
function mapExample(){
    const arr= [3,2,4]
    const newarr = arr.map((currentElement) =>{
        return currentElement * 4
    })
    resultExample = newarr
    displayResult('MapExample (newArr)', resultExample)
}
/*filter example*/
function FilterExample(){
    const   arr = ['hello --english', 'salut -- français', 'bye -- english', 'au revoir -- français', 'Gutten tag -- dutch']

    function filterByLangage(lang, array){
        const filteredArr = array.filter((el) =>{
            return el.includes(lang)
        })

        return filteredArr
    }

    resultExample = filterByLangage('français', arr)
    displayResult('Result from filter', resultExample)
    // example 2
    const words = ['fenetre', 'velux', 'porte', 'cheminée']
    const users = [{name:'Paul' , role: 'user'}, {name:'Rihab' , role: 'admin'},{name:'Laurian' , role: 'admin'}, {name:'Celine' , role: 'client'}]

    const filterWords = words.filter((word) =>{
        return word.length > 6
        // return word.include('nee) => result = cheminee
    })
    const filteredUsers = users.filter((user) => {
        return user.role === 'admin'
    })
    resultExample = filterWords
    displayResult('Result from filter', resultExample)
    resultExample = filteredUsers
    displayResult('Result from filter', resultExample)
}