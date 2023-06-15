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
const OriginText2 = div2.textContent;



input2.addEventListener('input', onInteractInput2);
function onInteractInput2(){ // Maj div
    if (!input2.value){
        div2.textContent = OriginText2
    } else{

        div2.textContent = input2.value;
    }
}

