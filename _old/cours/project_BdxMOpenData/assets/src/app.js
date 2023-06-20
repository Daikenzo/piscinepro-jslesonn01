//Constant & Var
// Btn
const   btn = document.querySelector('.places-container button')
//Txt & Message
const   errorMsg = document.querySelector('.errorMsg')

//Dataset
const   dataset = 'bor_frequentation_piscine_tr'

// Init EventListener
init();

// RunProg
console.log(errorMsg)

//Function
async function fetchData() {
    try {
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=${dataset}`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        // btnChange()
        // displayData(data);
    }
    catch (error) {
        // btnChange()
        errorMsg.textContent = `${error}`
        console.log("e")
        
    }
}
// EventListener Event
function    eventListenerInit(){
    btn.addEventListener('click',fetchData)
}

// Init
function    init(){
    eventListenerInit();
}