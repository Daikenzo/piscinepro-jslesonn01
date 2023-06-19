// Const and Var

const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]

// Btn & slider
const btns = document.querySelectorAll('.slider-btn');
const sliderPictureContain = document.querySelector('.slide-container');
const dots = document.querySelectorAll('.dots-containers');
let slideIndex = 0;

//IMG List
const pictureList = document.querySelectorAll('.slider-img');
//TXT 
const sliderTitle = document.querySelector('.slider-title');
const sliderLegends = document.querySelector('.slider-legend');



// use, disable + index

dots.forEach((dot, index) =>{
    dot.indexPosition = index
    dot.indexPosition = dot.addEventListener('click', onClickDot)
})



// Init
init();





//Function

let waitingTime = (time) =>{
    time.forEach((value) =>{

    })
}



function init(){
    slideIndex = 0;
    
    
    sliderTitle.textContent = slidesData[slideIndex].title
    sliderLegends.textContent = slidesData[slideIndex].description

    dots[0].style.opacity = 1;
    btns[0].style.opacity = 0.5;
    btns[0].style.pointEvents = 'none'

    displayImage(slideIndex);
    
    initListener(); 
}
function initListener(){
    btns.forEach((btn, index) =>{
        btn.indexBtn = index; // création de boléen via index
        btn.addEventListener('click', onclickBtn)
        btn.addEventListener('mousedown', onDownBtn)
        btn.addEventListener('mouseup', onUpBtn)
        btn.addEventListener('onChange', disableToggle)   
    })
    
}
function disableToggle(e){
  // Select the billing text fields
  const billingItems = document.querySelectorAll('#billing input[type="text"]');
  // Toggle the billing text fields
  billingItems.forEach((item) => {
    item.disabled = !item.disabled;
  });

}




function onDownBtn(e){

    if((slideIndex <= 0 && e.currentTarget.indexBtn < slidesData.length+1)){
        console.log('right 2- down')
    }
    else if(((slideIndex >= slidesData.length -1) && e.currentTarget.indexBtn < 0)){
        console.log('LEFT 2- down')
    }
}
function onUpBtn(e){

    if((!(slideIndex <= 0 && btns[0] === e.currentTarget)) && (!((slideIndex >= slidesData.length -1) && btns[1] === e.currentTarget))){
        if (btns[1] === e.currentTarget){
            console.log('right - up')
        }
        else{
            console.log('left - up')
        }
    }
}

function onclickBtn(e){
    /*let disableStatus = e.disabled;
    
    if(pictureList < 0 || pictureList > pictureList.length){
        disableStatus = e.disabled
    } else{ disableStatus = !e.disabled}
*/
        if(e.currentTarget.indexBtn === 0){
            slideIndex--
        } else{
            slideIndex++
        }
        
        updateCurrentImage(slideIndex)


    console.log(slideIndex)
    return slideIndex
}
function onClickDot(e){
    /*console.log(e.currentTarget.indexPosition)*/
    slideIndex = e.currentTarget.indexPosition
    updateCurrentImage(slideIndex)
}

// Update & Display
function updateCurrentImage(slideI){
    btns[0].style.opacity = btns[1].style.opacity = 1
    btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

    dots.forEach((dot) => {
        dot.style.opacity = 0.5;
    })

    if(slideI <= 0){
        slideI = 0;
        btns[0].style.opacity =0.5;
        btns[0].style.pointEvents = 'none'
    } else if (slideI >= slidesData.length -1){
        slideI = pictureList.length -1
        btns[1].style.opacity =0.5; 
        btns[1].style.pointEvents = 'none'
    }
    dots[slideI].style.opacity = 1;

    displayImage(slideI);
}
function displayImage(slideI){
    // pictureList.forEach((img, indexImg) =>{
        
    //     img.style.zIndex = `-${indexImg}`
    //     img.style.transform = `translateX(${(indexImg - slideI) * 100}%)` // on part vers la droite
    // })
    sliderTitle.textContent = slidesData[slideI].title;
    sliderLegends.textContent = slidesData[slideI].description 

    pictureList.forEach((img, indexImg) => {
        img.style.zIndex = `-${indexImg}`
        img.style.transition = 'transform 3s';
        img.style.transform = `translateX(${(indexImg - slideI) * 100}%)`
    })
}
// btn class : slider-btn - left : slider-btn-left right : slider-btn-right

//container img + elemebt slider-img-container
// pic div container : .slide-container -> list img : .slider-img
// title img display class : slider-title
// describe (legend) : slider-legend-container, txt : slider-legend

