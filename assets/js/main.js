// Variable Constante et Globale
let Number1 = 20;
let Number2 = 10;

// Main Program
logMessage(`Le résultat de la somme de ${Number1} et de ${Number2} est de:`);
sum2args(Number1, Number2);

//Old etape conservée
/*

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
    const result = `${arg1 + arg2}`;
    console.log (result);
}