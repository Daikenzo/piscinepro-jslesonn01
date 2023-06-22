const users = fetchData();

async function fetchData() {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?results=50&nat=fr"
        );

        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Fetch data issue`)
        }
        formatData3(data.results)
    } catch (error) {
        console.log(error);
    }
}


// a. afficher le dernier élément du tableau
function getLastElement(arr) {
    console.log(arr[arr.length - 1])
}
// b. afficher l'age le plus élevé
function getOldestUser(arr) {
    // let oldest = arr[0]

    // arr.forEach((el) => {
    //     if (el.dob.age > oldest.dob.age) oldest = el
    // })

    // console.log(oldest)

    arr.sort((a, b) => {
        return b.dob.age - a.dob.age
    })

    console.log(arr[0])
}
// c. afficher le nombre d'hommes et le nombre de femmes
function getNumbersUsersByGender(arr) {
    let maleCount = 0
    let femaleCount = 0;

    arr.forEach((el) => {
        // Opérateur de comparaison TERNAIRE
        el.gender === "female" ? femaleCount++ : maleCount++;
        // if (el.gender === "female") {
        //     femaleCount++
        // } else {
        //     maleCount++
        // }
    })
    console.log(maleCount, femaleCount)
}

// 1. afficher un tableau d'objet au format {name : Daphne Durand, age: 61}
function formatData(arr) {
    const result = arr.map(el => {
        return { name: `${el.name.first} ${el.name.last}`, age: el.dob.age }
    });

    console.log(result)
}
// 2. afficher un tableau d'objet au format {name : Daphne Durand, ageInferiorThirty: true}
function formatData2(arr) {
    const result = arr.map(el => {
        const res = el.dob.age <= 30
        return { name: `${el.name.first} ${el.name.last}`, ageInferiorThirty: res }
    });

    console.log(result)
}

// 3. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}
function formatData3(arr) {
    const result = arr.map(el => {
        return {
            mail: el.email,
            message: `
             Bonjour ${el.name.first}, votre adresse "${el.location.street.number} ${el.location.street.name}, ${el.location.postcode} ${el.location.city}" est-elle correcte ?
             `
        }
    });

    console.log(result)
}