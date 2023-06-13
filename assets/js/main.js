// Variable Constante et Globale
let _result;
let displayConsigne = "", displayMessage= "";

// Run Main
main();

/*lesson:
boucle For:
argument --> 
    Return : retour (fonction)
    break : quitter la boucle
    continue: skip l'étape de la boucle actuel
odd : impair / even: pair

push : rajoute élément en dernier dans un tableau (ex: words.push(`bueono`) )
pop: retire le dernier zéléments du tableau
shift: retire le premier éléments
unshift: ajoute élément au début
ex:
words.push();
words.unshift();

// Tableau d'objet

*/


// Main Program
function main(){
// Objet Lesson and Exo : Object (Pizza)
    // pizza var
    const pizzas = [
        {
            name: 'Margherita',
            price: 11.50,
            ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
            baseTomate: true
        },
        {
            name: 'Regina',
            price: 12,
            ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
            baseTomate: true
        },
        {
            name: '4 saisons',
            price: 15,
            ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
            baseTomate: true
        },
        {
            name: 'Napolitaine',
            price: 14,
            ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
            baseTomate: true
        },
        {
            name: '4 fromages',
            price: 16,
            ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
            baseTomate: true
        },
        {
            name: 'Montagnarde',
            price: 19,
            ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
            baseTomate: false
        },
        {
            name: 'Chèvre-miel',
            price: 18,
            ingredients: ['mozzarella', 'chèvre', 'miel'],
            baseTomate: false
        },
        {
            name: 'Hawaïenne',
            price: 17,
            ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
            baseTomate: true
        }
    ]
    // End pizza  




    // Exo Consign
    /*
    1.ecrire function avec  param 1 tab, => fct return all .name elementstab in var names[]
    2. write fct with param pizza tab & return prix moyen pizzas
    3. write function With param pizza name => return ingredients from pizza.this
    4. write fct , param tab  = pizzaq & return ingredients list without duplicate elements
    5. fct with param : ingredient param et in tableau de pizzas, return tab string with pizza name whith this ingredient
    */
// Exo 1
// call function object
console.log("Nom des Pizzas:", getPizzaNameElements(pizzas));

function getPizzaNameElements(pizzasList){
    let pizzaNames = [];
    for(let i = 0; i < pizzasList.length; i++){
        pizzaNames.push(pizzasList[i].name)
    }
    return pizzaNames;
}
// Exo 2
console.log("Prix Moyen", pizzaPrixMoyen(pizzas));

function pizzaPrixMoyen(pizzasList){
    let prixMoyen = 0;
    //
    for(let i = 0; i < pizzasList.length; i++){
        prixMoyen += pizzasList[i].price;
    }
    return (prixMoyen / pizzasList.length).toFixed(2)
}
// exo 3 : write function With param pizza name from pizza tab=> return ingredients from pizza.this
console.log("ingredients", getIngredientByPizzaName('Montagnarde',pizzas));

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

function getIngredientByPizzaName(name, arr){ // arr = array = tableau
    let ingredients = [];

    // what is the Pizza Id
    let pizzaList = arr.name;


    let pizzaID = pizzas.indexOf(name);
    return pizzaList;

    // 
    for(let i = 0; i < arr.length; i++){
        ingredients.push(arr[i].ingredients[i])
    }
    

    return  ingredients;
}

// Exo 4 :

console.log("pizzas List Ingredient", pizzaListAllIngredient(pizzas));
// Array.includes() :  comparaison de valeur dabs un objet

function pizzaListAllIngredient(pizzaList){ //GetAllIngredients
    let pizzasIngredients = [];


    for(let i = 0; i < pizzaList.length; i++){
        const currentPizza = pizzaList[i];
        for(let j = 0; j < currentPizza.ingredients.length; j++){
            if(!pizzasIngredients.includes(currentPizza.ingredients[j])){
                pizzasIngredients.push(currentPizza.ingredients[j]);
            }
        }
    }

    return pizzasIngredients;
}

// Exo 5
const exo5result = getPizzaByIngredientName(pizzas, 'tomate');
console.log(`Liste des pizzas contenant de la tomate`, exo5result);

function getPizzaByIngredientName(arr, ingredientName){
    let pizzaNames = []

    for (let i = 0; i < arr.length; i++){
        const currentPizza = arr[i]
        if(currentPizza.ingredients.includes(ingredientName)){
            pizzaNames.push(currentPizza.name)
        }
    }
    return pizzaNames;
}


//Run Exo
/*
// afficher le name de la pizza
console.log(pizzas[1].name);
// afficher premier ingredient
console.log(pizzas[1].ingredients[1]);*/


    // Display 
/*logMessage(`Le résultat du process de ${displayConsigne} est égale à:`);
logMessage(`${_result}`);*/

// end program
}

//Old etape conservée
/*
// tableau
    // Main Variable    
const myNumbers = [4, 6, 3, 2];
    // Exo Consign
displayConsigne = `le min, le max de ${myNumbers}`;   // Consigne Exo Var

//Run Exo
_result = minmaxElements(myNumbers);


    // Display 
logMessage(`Le résultat du process de ${displayConsigne} est égale à:`);
logMessage(`${_result}`)

// end program

let Number1 = 23;
let Number2 = 20;
let Number3 = 60;
    //Sum
_result = sum2args(Number1, Number2);
logMessage(`Le résultat de la somme de ${Number1} et de ${Number2} est de: ${_result}`);
/* 3 function
1 - return sum 2 args
2 - return de 2args (dont 1 lié au result du 1)
3 log message //
_result = sum2args(Number1, Number2);
_result = sub2args(_result, Number3);
logMessage(`La somme du process de ${Number1} + ${Number2} - ${Number3} est égale à ${_result}`);
*/

//Function
    // test Function
function logMessageTest(){ // test
    console.log("Hey, I'm Stuck !");
}
function TestFor(){     // Verif Tableau
    for(let i = 0; i < 10; i++){
        console.log(`mon indice de boucle: ${i}`)
    }
    console.log(`boucle terminé !`);
}
// fonction push example


    // Messages function
function logMessage(message){
    console.log(message);
}
// Math fct (classic)
function sum2args(arg1 = 0, arg2 = 0){
    // écriture une foncion qui affiche "La somme de .. avec est égale à "
    const result = arg1 + arg2;
    return result; // Retourne la valeur - Equivaut à console.log(Result) mais stock la valeur en dehors
}
function sub2args(arg1 = 0, arg2 =0){
    // subtraction
    const result = arg1 - arg2;
    return result;
}

// Tab function
function displayElements(myArray){ // Display
    for(let i = 0; i < myArray.length; i++){
        console.log(myArray[i]);
    }
}
function sumElements(myArray){ // Sum
    let sumResult = 0; // Init sum
    for(let i = 0; i < myArray.length; i++){
        sumResult += myArray[i];
    }
    return sumResult;
}
function sumEvenElements(myArray){ // Sum (with parity = Even (pair))
    let sumResult = 0; // Init sum
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] % 2 === 0){
            sumResult += myArray[i];
        }
    }
    return sumResult;
}
function sumElements(myArray){ // Sub
    let subResult = 0; // Init subResult
    for(let i = 0; i < myArray.length; i++){
        subResult -= myArray[i];
    }
    return subResult;
}
function strangeSumElements(myArray){ // Sub without %3 position Elements  from Tab
    let subResult = 0; // Init subResult
    for(let i = 0; i < myArray.length; i++){
        if(i % 3 !== 0){ continue}
        subResult += myArray[i];
    }
    return subResult;
}
//Min / Max Elements
function minElements(myArray){ // Return Min and Max from Tabs
    let minResult = 0; // Init subResult
    for(let i = 0; i < myArray.length; i++){
        if(i !=0){
            for(let j = 1; (myArray[j] > myArray[i]) && j < myArray.length; j++){
                continue
            }
        }
        minResult = myArray[i]
    }
    return minResult
}
function maxElements(myArray){ // Return Min and Max from Tabs
    let maxResult = myArray[0]; // Init subResult
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] > maxResult){maxResult = myArray[i]}

        }
    return maxResult;
}
function moyValueElements(myArray){ // Return Min and Max from Tabs
    let moyResult = 0; // Init subResult
    for(let i = 0; i < myArray.length; i++){
        moyResult += myArray[i]
    }
    moyResult = moyResult / myArray.length;
    return moyResult;
}
// Display MinMaxMoy
function minmaxElements(myArray){
    minmaxTab = [
        `Min: ${minElements(myArray)}`, 
        `Max: ${maxElements(myArray)}`,
        `Moy: ${moyValueElements(myArray)}`];
    return minmaxTab;
}
// Ecrire fonction retournant un tableau de nombre , tous supérieur à la moyenne des éléments du tableau
function getNumSupertiorTag(arr){
    // Cacul moyenne
    let moyenneVal = moyValueElements(myArray); 
    // création nouveau tableau with condition
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > moyenneVal){
            newArr.push(arr[i])
        }
    }
    return newArr

}

// Textual fct
// give fullname
function fullName(firstName = "", lastName = ""){
    fullName = `${firstName} ${lastName}`;
    return fullName;
}

