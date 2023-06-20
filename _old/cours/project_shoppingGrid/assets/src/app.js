//Const & var
const fetchUrl = `https://fakestoreapi.com/products/1`



// function
// asyn
async function fetchData() {
    try {   // sorte de if/else avec gestion d'error
        const response = await fetch(`${fetchUrl}`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        displayData(data);
    }
    catch (error) {
        // permet d'executer un code avec delai
        //setTimeout(btnChange, 2000,'reset')
        
    }
}


// Update & Display
function    displayData(data){

}