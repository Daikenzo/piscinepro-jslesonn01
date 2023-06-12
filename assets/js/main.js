// Variable Constante et Globale
let _Result = 0;
let displayConsigne, displayMessage= "";

let Number1 = 23;
let Number2 = 20;
let Number3 = 60;


// Main Program
    //
    displayConsigne = ``;



// Display 

logMessage(`Le Résultat du process de ${displayConsigne} est égale à ${_Result}`)

//Old etape conservée
/*

    //Sum
_Result = sum2args(Number1, Number2);
logMessage(`Le résultat de la somme de ${Number1} et de ${Number2} est de: ${_Result}`);
/* 3 function
1 - return sum 2 args
2 - return de 2args (dont 1 lié au result du 1)
3 log message //
_Result = sum2args(Number1, Number2);
_Result = sub2args(_Result, Number3);
logMessage(`La somme du process de ${Number1} + ${Number2} - ${Number3} est égale à ${_Result}`);
*/

//Function
function logMessageTest(){ // Test
    console.log("Hey, I'm Stuck !");
}

function logMessage(message){
    console.log(message);
}

function sum2args(arg1 = 0, arg2 = 0){
    // écriture une foncion qui affiche "La somme de .. avec est égale à "

    // display
    const result = arg1 + arg2;
    return result; // Retourne la valeur - Equivaut à console.log(Result) mais stock la valeur en dehors
}
function sub2args(arg1 = 0, arg2 =0){
    // subtraction
    const result = arg1 - arg2;
    return result;
}