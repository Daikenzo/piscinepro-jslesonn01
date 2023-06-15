// Exo 4 - DOM

// global const

// exo 1 

const div1 = document.querySelector('.div-to-color-1');
const btns1 = document.querySelectorAll('.btn-1');

for(let i = 0; i < btns1.length; i++){
    btns1[i].addEventListener('click', exo1Fct);
}

function exo1Fct(event){
    div1.style.backgroundColor = event.target.textContent;
}


// Exo 2 
const div2 = document.querySelector('.text-to-display-3'); // Result
const input2 = document.querySelector('.input-3');
const OriginText = div2.textContent;



input2.addEventListener('input', onInteractInput2);
function onInteractInput2(){ // Maj div
    if (!input2.value){
        div2.textContent = OriginText
    } else{

        div2.textContent = input2.value;
    }
}

// exo 3



//exo 4 form
const div4 = document.querySelector('.text-to-display-2'); // Result
const input4 = document.querySelector('.input-2');
const form4 = document.querySelector('.form-2')

form4.addEventListener('submit', onForm4Submit); // button

function onForm4Submit(event){ // Maj div // par defaut, submit rafraichit la page
    event.preventDefault(); // pour éviter de rafraichir la page via le summit
    if (!input4.value){
        
        input4.textContent = OriginText;
    } else{

       div4.textContent = input4.value
    }
}


// exo 5 slider variable
const div5 = document.querySelector('.text-to-display-5');
const input5 = document.querySelector('.input-5');

input5.addEventListener('input', onSlider5Change);

function onSlider5Change(){ // ou (e) pour event
    div5.textContent = input5.value; // ou = e.target.value
    // currentTarget # target
}

// Exo 6
const div6 = document.querySelector('.select-6'); // Result script
const OptionValueTab = document.querySelectorAll('option');
const defaultSelectText = "..."

for (let i; i < div6.length; i++){
    OptionValueTab[i].addEventListener('click', onSelectOption);
}

function onSelectOption(){
    if (!(input4.value) === "Select One …"{
        
        input4.textContent = OriginText;
    } else{

       div4.textContent = input4.value
    }
}
// Exo 7


// Exo 8

const div8 = document.querySelector('.div-to-color-8');
const btns8 = document.querySelectorAll('.btn-8');

for(let i = 0; i < btns8.length; i++){

    btns8[i].addEventListener('click', exo8Fct);
}

function exo8Fct(event){
    
    div8.style.backgroundColor = event.target.getAttribute("Data-color");
}

// Exo 9

