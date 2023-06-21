//Const & var
const fetchUrl = `https://fakestoreapi.com/products`

const containerRow = document.querySelector('.row')
const checks = document.querySelectorAll('.btn-check');
const select = document.querySelector('.form-select');
let data;


init()
fetchData()
// function
// asyn
async function fetchData() {
    try {   // sorte de if/else avec gestion d'error
        const response = await fetch(`${fetchUrl}`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
            // throw : 
        }
        const data = await response.json()
        
        displayData(data);
    }
    catch (error) {
        console.log(error);
    }
}




// Update & Display Data
function    displayData(data, category = []){
    const data_view = data
    console.log(data_view)
}

// ordered
function orderList(data){
    if (select.value === 'Trier par') return
    
}

function init(){
    // init Listener
    checks.forEach((check) => {
        check.addEventListener('change', displayData)
    })
    select.addEventListener('change', displayData)
}