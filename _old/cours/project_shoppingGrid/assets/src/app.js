//Const & var
const fetchUrl = `https://fakestoreapi.com/products`

const containerRow = document.querySelector('.row')
const container = document.querySelector('.row')
const checks = document.querySelectorAll('.btn-check');
const select = document.querySelector('.form-select');
let data


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
    data = await response.json()
        
        displayData(data);
    }
    catch (error) {
        console.log(error);
    }
}




// Update & Display Data
function    displayData(data, categories = []){
    //const data_view = data
    console.log(data)

    
    containerRow.textContent = ''
    container.textContent = ''
    // Next step declare listener checkboxes
    // console à chaque click
    orderList();

    data.forEach((product) => {
        if (categories.length !== 0) {
            if (!categories.includes(product.category)) return;
        }
        const listItem = document.createElement("div");

        // generation rating note
        let rateStars = buildStars(product.rating.rate)

        listItem.className = "col-md-4";
        // add div elements
        listItem.innerHTML = `
        <div class="card p-3 m-1">
            <div class="d-flex flex-row mb-3"><img class="" src="${product.image}" width="70">
                <div class="d-flex flex-column ml-2"><div class="custom-margin"><h5>${product.title}</h5><span class="text-black-50">${product.category}</span><div class="ratings mt-1">${rateStars}</div></div></div>
            </div>
            <div>${product.description.slice(0, 80)}...</div>
            <div class="d-flex justify-content-between install mt-3"><h6>${product.price}$</h6><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
        </div>
`;// slice : permet de récupérer le nombfre de caractère voulu dans un tableau/texte
        
        containerRow.appendChild(listItem);
    })
}

// star generate
function buildStars(rate) {
    let result = ''                                 //ratingHTML = ''
    //generate star base
    for (let i = 0; i < Math.round(rate); i++) {
        result += `<i class="fa-solid fa-star"></i>`
    }
    // complete rating value for element
    for (let i = 0; i < 5 - Math.round(rate); i++) {
        result += `<i class="fa-regular fa-star"></i>`
    }
//alias
/*
 for (let i = 0; i < Math.round(product.rating.rate); i++) {
            ratingHTML += '<i class="fa-solid fa-star"></i>'
        }
        // complete rating value for element
        for (let i = 0; i < (5 - Math.round(product.rating.rate)); i++) {
            ratingHTML += '<i class="fa-regular fa-star"></i>'
        }
        // add rating value content
        ratingHTML += ` <span class='rate'>${product.rating.rate}</span>`
*/
        // add rating value content
        result += ` <span class='rate'>${rate}</span>`
    return result
}

// Update
function onListChange(e) {
    console.log(e)

    let categories = []
    checks.forEach((check) => {
        if (check.checked) {
            categories.push(check.value)
        }
    })

    displayData(data, categories)
}

// ordered
function orderList() {
    
    let selectName = ''
    if (!(select[select.value])){
        return selectName = 'Trier par'
    } else selectName = select[select.value].textContent
    console.log(select[select.value].textContent)

    if (selectName === 'Trier par') return

    let asc = selectName.includes('dec') //asc // select.value.
    let criteria = selectName.split(' ')[0]

    let result = 1
    if (!asc) {
        result = -1
    }

    if (criteria === 'prix') {
        data.sort((a, b) => {
            if (a.price < b.price) {
                return -result;
            } else if (a.price > b.price) {
                return result;
            } else {
                return 0;
            }
        });
    } else {
        data.sort((a, b) => {
            if (a.price < b.price) {
                return -result;
            } else if (a.price > b.price) {
                return result;
            } else {
                return 0;
            }
        });
    }
}
// btn order
function onSelect(e) {
    console.log(e.currentTarget.value)
    onListChange(e)
}



function init(){
    // init Listener
    checks.forEach((check) => {
        check.addEventListener('change', onListChange)
    })
    
    select.addEventListener('change', onSelect)
}