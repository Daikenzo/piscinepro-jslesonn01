// Library Object
const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
];
// DOM select / Const & Var
// on récupère les éléments du DOM pour interagir avec la page web
// Btn & Bullet
const btns = document.querySelectorAll(".slider-btn");
const dots = document.querySelectorAll(".dot"); // bullet btn
 // PictureList
const imgs = document.querySelectorAll(".slider-img"); // PictureList
// Slider Legends TXT
const title = document.querySelector('.slider-title') // SliderTitle
const legend = document.querySelector('.slider-legend') // sliderLegends
// on initialise la variable globale qui permettra de modifier l'interface
let slideIndex = 0
let transition = { // transition 
    time:   3,      // time value (s)
    type:   "transform"
}


// Init-Listener
// on déclare les clicks sur les boutons gauche droite
btns.forEach((el, index) => {
    // el.maNouvellePropriete = 'nouvellePropriete_' + index + '!'
    el.leftOrRight = index; // btn.indexBtn = index
    el.addEventListener("click", onClickBtn);
});

// on déclare les clicks sur les "puces" 
dots.forEach((dot, ind) => {
    dot.style.opacity = 0.5
    dot.indexPosition = ind
    dot.addEventListener('click', onClickDot)
})

// main Program
// on initialise la page web au chargement du site
//Init
init();


// function
// Btn & Bullet action
function onClickDot(e) {    // Bullet
    slideIndex = e.currentTarget.indexPosition
    updateCurrentImage(slideIndex)
}
function onClickBtn(e) {    // Btn
    if (e.currentTarget.leftOrRight === 0) {
        slideIndex--;
    } else {
        slideIndex++;
    }
    updateCurrentImage(slideIndex)
}
// toggle btn
/*
function onDownBtn(e){
    if((slideIndex <= 0 && e.currentTarget.leftOrRight < slidesData.length+1)){
        console.log('right 2- down')
    }
    else if(((slideIndex >= slidesData.length -1) && e.currentTarget.leftOrRight < 0)){
        console.log('LEFT 2- down')
    }
}
function onUpBtn(e){

    if((!(slideIndex <= 0 && btns[0] === e.currentTarget.leftOrRight)) && (!((slideIndex >= slidesData.length -1) && btns[1] === e.currentTarget.leftOrRight))){
        if (btns[1] === e.currentTarget.leftOrRight){
            console.log('right - up')
        }
        else{
            console.log('left - up')
        }
    }
}*/

// Update & Display
// on déplace l'image et on met à jours les éléments cliquables : puces + boutons
function updateCurrentImage(slideI) {
    btns[0].style.opacity = btns[1].style.opacity = 1
    btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

    dots.forEach((dot) => {
        dot.style.opacity = 0.5
    })

    if (slideI <= 0) {
        slideI = 0;
        btns[0].style.opacity = 0.3
        btns[0].style.pointerEvents = 'none'
    } else if (slideI >= imgs.length - 1) { 
        //(slideI >= slidesData.length -1)
        slideI = imgs.length - 1; // pictureList
        btns[1].style.opacity = 0.3
        btns[1].style.pointerEvents = 'none'
    }

    dots[slideI].style.opacity = 1

    displayImages(slideI)
}
// mise à jour des différents composants
function displayImages(slideI) { // displayImage()
    title.textContent = slidesData[slideI].title
    legend.textContent = slidesData[slideI].description

    imgs.forEach((img, indexImg) => { // picture list
        img.style.zIndex = `-${indexImg}`
        img.style.transition = `${transition.time} ${transition.time}s`;
        img.style.transform = `translateX(${(indexImg - slideI) * 100}%)`
    })
}


// déclaration des valeurs par défaut de nos composants
function init() {
    slideIndex = 0;
    // init btn
    dots[0].style.opacity = 1
    btns[0].style.opacity = 0.5
    btns[0].style.pointerEvents = 'none'
    // init txt
    title.textContent = slidesData[slideIndex].title
    legend.textContent = slidesData[slideIndex].description
    // init slider transition
    imgs.forEach((img, indexImg) => {
        img.style.transform = `translateX(${(indexImg - slideIndex) * 100}%)`
    })
}