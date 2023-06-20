//Constant & Var
// Btn
const refreshBtn = 0

//Dataset


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
        // errorMsg.textContent = `${error}`
    }
}


// Init
function init(à{


})