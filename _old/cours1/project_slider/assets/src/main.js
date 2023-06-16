// Const and Var

const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]
const 

// Btn & slider
const btns = document.querySelectorAll('.slider-btn');
const sliderPictureContain = document.querySelector('.slide-container');

//IMG List
const pictureList = document.querySelectorAll('.slider-img');
//TXT 
const sliderTitle = document.querySelector('.slider-title');
const sliderLegends = document.querySelector('.slider-legend');

// use, disable + index

// Init
initListener();





//Function
initListener(){
    btns.forEach((btn, index) =>{
        btn.indexBtn = index;
        btn.addEventListener('click', onclickBtn)
    })
}

function onclickBtn(e){
    if(e.currentTarget.indexBtn === 0){
        slideIndex--
    } else{
        slideIndex++
    }
    return slideIndex
}

// btn class : slider-btn - left : slider-btn-left right : slider-btn-right

//container img + elemebt slider-img-container
// pic div container : .slide-container -> list img : .slider-img
// title img display class : slider-title
// describe (legend) : slider-legend-container, txt : slider-legend