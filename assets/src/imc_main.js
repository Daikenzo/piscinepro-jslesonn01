// Project - IMC

// Global Variable & Const
// BDD
const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
  ];

const mainContainer = document.querySelector(".main-container");
const BtnList= document.querySelectorAll(".btn"); // créer selecteur de tout les .main-btn
const BtnIMCForm = document.querySelector(".btn-form");


//const formInput = document.querySelectorAll(".input-group"); // inutile ici
const bmiDescribe = document.querySelector(".description");
const bmiValue = document.querySelector('.bmi-value')

const weigth = document.querySelector('#Weight');
const heigth = document.querySelector('#Height');
const DescribeDefault = bmiDescribe.textContent; // Recup default text

//Test
console.log(bmiValue);
console.log(BMIData);

console.log(DescribeDefault);


BtnIMCForm.addEventListener('click',onBtnClick)

function onBtnClick(){
  const wValue = weigth.value;
  const hValue = heigth.value;

  if(!wValue || !hValue || wValue <= 0 || hValue <=0){
    
    return handleError()
  }
  //console.log('Valeur autorisée');
  const bmi = (wValue / (Math.pow((hValue)/100),2)).toFixed(1);
  bmiResult(bmi)

}

function handleError(){
    bmiValue.textContent ="Echec";
    bmiDescribe.textContent = "Remplissez correctement le formulaire"
    //alert
}

function bmiResult(val){
  let rank
  // 

  // rank txt calc
  for(let i=0; i < BMIData.length; i++){
    if(val >= BMIData[i].range[0] && val < BMIData[i].range[1]){
      rank = BMIData[i];
      break;
    }else if(typeof BMIData[i].range === 'number' && val > BMIData[i].range){
      rank = BMIData[i];
    }
    
  }

  bmiValue.textContent = val;
  bmiValue.style.color = rank.color;
  bmiDescribe.textContent = rank.name;
}
