// DOM Body change

// Var
// html action var
//const mainBtn = document.querySelector(".main-btn"); // Selection du premier element ayant la classe .main-btn
const mainBtns = document.querySelectorAll(".main-btn"); // créer selecteur de tout les .main-btn
const mainContainer = document.querySelector(".main-container");


const colors = ['#222354', '#212831', '#414132', '#652304','#2d4059']

//let fullOpacity = 1
//let nbClick = 0

/*cours
mouseover : suvol souris
mouseup: souris

querySelector récupo element html, on peut metrre .class, element, etc


*/
//Exo consigne
    // Implementer la fonction onclick pour changer la couleur de mainContainer en comparant le tableau colors, avec une coleur par click

    // ajouter 3 boutons: red, green, blue, ajouter eventlistener necessaire pour changer ciouleur du background en fonction du textcontent de chaque bouton

    // Implementer fonction changer couleur du main-containe en fonction de la valeur texte

//End exo



// equivaut (mais déconseillé) à mainBtn.addEventListener("click", function onClick)
//mainBtn.addEventListener("mouseover", onClick1);
// le click => si on clique sur l'élément
//addEventListener: fonction pour récupérer l'écoute des event de la page
//classname.addEventListener("type", fct())

function onClick1(){
    //console.log("J'ai cliqué sur le bouton");
    //modifie l'opa cité bouton/element
    //event.target.style.opacity = 0.5;
    
    
    if (nbClick >= colors.length ) nbClick =0 // si le nb click est supérieur, restart
    //event.target.style.opacity = fullOpacity - 0.2 * nbClick;

    mainContainer.style.backgroundColor = colors[nbClick];
    
    nbClick++;

}



// Implementer la fonction onclick pour changer la couleur de mainContainer en comparant le tableau colors, avec une coleur par click

// ajouter 3 boutons: red, green, blue, ajouter eventlistener necessaire pour changer ciouleur du background en fonction du textcontent de chaque bouton 
// => Target method

//init target:
// onst mainBtn = document.querySelector(".main-btn");

console.log(mainBtns);
//target 
for(let i = 0; i<mainBtns.length;i++){
    mainBtns[i].addEventListener("click", onClickTarget);
}

function onClickTarget(event){

    console.log(event.target.textContent);

    mainContainer.style.backgroundColor = event.target.getAttribute("Data-color")
    // mainContainer.style.backgroundColor =
}

// Change with imput value
const   input = document.querySelector('input')
const formBtn = document.querySelector(".btn-form");
formBtn.addEventListener("click", onClickInput1)

function onClickInput1(){
    mainContainer.style.backgroundColor = input.value;
}