//Global Variables from project
const container = document.querySelector('.container');
const mainContainer = document.querySelector('.main-container');
const btn = document.querySelector('.btn');
const bodyContainer = document.querySelector('#body');
const DefaultBG = bodyContainer.style.backgroundColor;

// création de div en javascript
// const newDiv = document.createElement("div")
// newDiv.classList.add('new-div')
// mainContainer.appendChild(newDiv)

//btn.addEventListener('click', onBtnClick);
//btn.addEventListener('mouseenter', onBtnClick);
//btn.addEventListener('mouseleave', onBtnClick);

btn.addEventListener('click', moizaiCreate);

function onBtnClick(color){

    // exo 2
    if(container.style.backgroundColor == 'black'){
        container.style.backgroundColor = DefaultBG;
    } else{
        container.style.backgroundColor = 'black'
    }
}

// quand je clique qur le bouton, j'alterne la couleur du container entre 2 couleurs prédifinies



//target 

// implemener function pour créer mozaique de div qui remplit tout le main container, 10 colonnes et 10 lignes, couleurs au choix 

function moizaiCreate(){
    const mozaikColor = ['#5139406', '#641346', '#643108'];

    for(let i = 0; i < 10; i++){ // row
        for(let j = 0;  j < 10; j++){
            const newDiv= document.createElement('div')
            mainContainer.appendChild(newDiv);
            newDiv.classList.add('new-div');
            newDiv.style.top = `${i}0vh`;
            // if(i != 0){newDivID.style.top = "0vh"}
            newDiv.style.left = `${j}0vw`;
            newDiv.style.backgroundColor = mozaikColor[(i+j)%(mozaikColor.length)];
        }
    }

    
    


}