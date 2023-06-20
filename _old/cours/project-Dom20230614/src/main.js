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
/*
let dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';
console.log(dateControl.value); // affiche "2017-06-01"
console.log(dateControl.valueAsNumber); // affiche 1496275200000, un timestamp JavaScript (exprimé en ms)
*/
const div3 = document.querySelector('.text-to-display-4');
const dates3 = document.querySelectorAll('.input-4');


for (let i = 0; i < dates3.length; i++) {
    //const input = dates3[i];
    dates3[i].addEventListener('input', DateInput3Change);
}


function DateInput3Change(){
    let Result = getDaysDates(dates3[1].value,dates3[0].value);

    if(Result < 2){
        div3.textContent = `Le séjour durera ${Result} jour`
    }else{
        div3.textContent = `Le séjour durera ${Result} jours`
    }
    
/*
    let dateResult = `2017-06-01`;
    console.log(dateResult);
    dateResult.value = */
    div3.textContent = dateResult.value;
}

function getDaysDates(date2, date1) {
    let date1Ob = new Date(date1);
    let date2Ob = new Date(date2);
    let diffTime = date2Ob -date1Ob;
    //console.log(diffTime )/ (1000 * 60 * 60 * 24)
    let diffTimeDays = diffTime / (1000 * 60 * 60 * 24);
    if(diffTimeDays < 0){
        return 0
    }

    return diffTimeDays;
}
//exo 4 form
const div4 = document.querySelector('.text-to-display-2'); // Result
const input4 = document.querySelector('.input-2');
const form4 = document.querySelector('.form-2')

form4.addEventListener('submit', onForm4Submit); // button

function onForm4Submit(event){ // Maj div // par defaut, submit rafraichit la page
    event.preventDefault(); // pour éviter de rafraichir la page via le summit
    if (!input4.value){
        div4.textContent = OriginText;
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
const SelectValue = document.querySelector('.select-6'); // Result script .text-to-display-6
const div6 = document.querySelector('.text-to-display-6');


SelectValue.addEventListener('change', onSelectOption);

function onSelectOption(event){
    if (!SelectValue.value){
        div6.textContent = "...";
    } else{

       div6.textContent = event.currentTarget.value;
    }
}
// Exo 7
const div7 = document.querySelector('.div-to-color-7');
const inputSetColor = document.querySelector('.input-7');

inputSetColor.addEventListener('input',setColorCircle7)


function setColorCircle7(event){
    div7.style.backgroundColor = event.target.value;
}

// Exo 8

const div8 = document.querySelector('.div-to-color-8');
const btns8 = document.querySelectorAll('.btn-8');

for(let i = 0; i < btns8.length; i++){

    btns8[i].addEventListener('click', exo8Fct);
}

function exo8Fct(event){
    
    div8.style.backgroundColor = event.target.getAttribute("data-color");
}

// Exo 9

const div9 = document.querySelector('.text-to-display-9');
const checkboxes = document.querySelectorAll('.checkbox');

for (let index = 0; index < checkboxes.length; index++) {
    const checkbox = checkboxes[index];
    checkbox.addEventListener('change', onCheckboxChange);    // checkboxes[i].addEventListener();
}
function onCheckboxChange(){
    let concactStr = ''
    if(checkboxes[0].checked){
        //console.log(e.currentTarget)
        concactStr += checkboxes[0].value
    }
    if(checkboxes[1].checked){
        //console.log(e.currentTarget)
        if(concactStr) concactStr += ` - `
        concactStr += checkboxes[1].value
    }
    div9.textContent = concactStr;
}