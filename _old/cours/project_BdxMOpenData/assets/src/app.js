/*NB: npx serve => ouvre open server dans cmfd*/

//Constant & Var
// Btn
let timeout
const   btn = document.querySelector('.places-container button')
//Txt & Message
const   errorMsg =  document.querySelector('.errorMsg')
const   placeNames =   document.querySelectorAll('.place-name')
const   placeInfos =  document.querySelectorAll('.place-infos')
const   visitors =  document.querySelectorAll('.visitors')


// Color : [3] : --red; [4] --dark-red, [5]: --fetch-red, [6]:--blue4
const colors =  ["white", "black", "#fc7472", "#c64c4a", "#8c1f1d", "#98a9bb"]
//Img & diagram
const   diagramPict =   document.querySelectorAll('.diagram-container')

//Dataset
const   dataset = 'bor_frequentation_piscine_tr'

// datasetid : "bor_frequentation_piscine_tr"
/*Info: dataset value: base: dataset.nhits = dataset.length / dataset.reccords => value records
// dataset.records.fields : table value
nom de la piscine => .etablissement_etalib
// zone: .fmizonlib
nb max : .fmizonmax
nb current: .fmicourante

id tab: .recordid
*/

// Init EventListener
init();
// EventListener function
btn.addEventListener('click',() =>{     
    // associer un element directement dans une fonction fleché (permet de faire plusieurs fonctions en un click)
    btnChange('fetching')
    fetchData()
}) // pareil à btn.addEventListener('click',onBtnClick) puis fct onBtnClick

// RunProg

//Function
// async & Update BDD data
async function fetchData() {
    try {   // sorte de if/else avec gestion d'error
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=${dataset}`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        btnChange('reset')
        displayData(data);
    }
    catch (error) {
        btnChange('reset')
        errorMsg.textContent = `${error}`
        // permet d'executer un code avec delai
        //setTimeout(btnChange, 2000,'reset')
        
    }
}
// fct 


// Update & Display data
function    btnChange(stateBtn){ // value definie permet de montrer qu'on cherche
    if(stateBtn === 'fetching'){ // statue : en cours de reception
    btn.textContent = '...'
    btn.classList.add('searching')
    }   else if(stateBtn === 'reset'){  // reset state / search finish  
        btn.textContent = 'Refresh'
        btn.classList.remove('searching')
        btn.classList.remove('error')
    }   else if(stateBtn === 'error'){
        btn.textContent = 'Error'
        btn.classList.add('errorBtn')
    }
}

function    changeColorBtn(color){
    btn.style.backgroundColor = `${color}`
}
function    displayData(data){
    //triage by sort
    data.records.sort((a,b) => {
        newOrder = ((a.fields.fmicourante / a.fields.fmizonmax) - (b.fields.fmicourante / b.fields.fmizonmax)) * -1 // -1 : a>b 0 : normal a<b
        return newOrder
    })

    placeNames.forEach((el, index)=>{
        const etab = data.records[index].fields.etablissement_etalib
        const zone = data.records[index].fields.fmizonlib
        placeNames[index].textContent = `${etab} (${zone})`

        const current = data.records[index].fields.fmicourante
        const max = data.records[index].fields.fmizonmax
        placeInfos[index].textContent = `${current} / ${max}`

        visitors[index].style.transform = `scaleX(${current / max})`
    })
}

// EventListener Classic Event
function    eventListenerInit(){

}

// Init
function    init(){
    eventListenerInit();
    
}