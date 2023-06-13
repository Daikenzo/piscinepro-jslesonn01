// DOM Body change

// Var
// html action var
const mainBtn = document.querySelector(".main-btn"); // Selection du premier element ayant la classe .main-btn
const mainContainer = document.querySelector(".main-container");


const colors = ['#222354', '#212831', '#414132', '#652304','#2d4059']

let fullOpacity = 1
let nbClick = 0

// equivaut (mais déconseillé) à mainBtn.addEventListener("click", function onClick)
mainBtn.addEventListener("click", onClick);
// le click => si on clique sur l'élément
//addEventListener: fonction pour récupérer l'écoute des event de la page
//classname.addEventListener("type", fct())

function onClick(){
    //console.log("J'ai cliqué sur le bouton");
    //modifie l'opa cité bouton/element
    //event.target.style.opacity = 0.5;
    

    if (nbClick > colors.length ) nbClick =0 // si le nb click est supérieur, restart
    //event.target.style.opacity = fullOpacity - 0.2 * nbClick;

    mainContainer.style.backgroundColor = colors[nbClick];
    nbClick++;

}

// Implementer la fonction onclick pour changer la couleur de mainContainer en comparant le tableau colors, avec une coleur par click