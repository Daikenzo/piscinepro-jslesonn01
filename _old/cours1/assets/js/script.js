/* const & global Variable*/
const mainContainerTag = document.querySelector(".main-container");

let firstName = 'paul\'o';
let  firstpart = "je m'appelle";
const _pierrename ="Pierre";
let result = firstpart + ' ' + firstName;
let result2 = `bonjour, ${firstpart} ${firstName} ` ;
const age = 15;
const broAge =45;

let bolean = false;

//function
/*
if(broAge > age){
    result = `Mon frere est plus agé de ${broAge - age} ans.`
}{

}else{
    result = `Mon frere est moins agé de ${age - broAge} ans.`
}*/
if (broAge == age){
    result = `mon frere a le même age que moi: ${age}`;
}

// operator co ndition: = != >= <= < > %*
//math: % - + * /
// ** 2 : exposant 2
// round
// stricte : == !==
if((broAge % 2) === 0){
    result = `l'age de mon frère est pair. il est de ${broAge}.`
}else{
    result = `l'age de mon frère est impair. il est de ${broAge}.`
}

//operator : || &&
if( broAge > 30 || age > 32){
    result ="au moins une des condition est vrai"
}else{
    result = "aucune condition est vrai"
}

//Tableau
const myArray = ['Paul', 'Jacque', 'Nathalie', 'Mathilde']
/*
myArray[2] : Natalie
myArray.length: longueur du tableau
myArray[myArray.length-1] : recupére la derniere valeur du tableau
*/
//object : permet de créer plusieurs variables lié à un objet définis 
const myIdentity_1 = {
    firstName:  'Paul',
    lastName:   'Ducan',
    age:        35,
    size:       1.88,
    weight:     80,
    townn:      'Paris',
    // un objet dans un objet
    town:       {name: 'Paris', Population: '20000', superficy: 50}
}

const myIdentity_2 = {
    firstName:  'Marc',
    lastName:   'Evan',
    age:        12,
    size:       1.20,
    weight:     80,
    townn:      'Japon',
    // un objet dans un objet
    town:       {name: 'Japon', Population: '30000', superficy:30}
}

const myIdentity_3 = {
    firstName:  'Paul',
    lastName:   'Defess',
    size:       1.78,
    weight:     80,
    age:        20,
    townn:      'Japon',
    town:       {name: 'Japon', Population: '30000', superficy:30}
}

//comparaison object
let comparaObject = false;

/*phrase let*/
let objectphrase = ``;


/*objectphrase = `Bonjour, je suis ${myIdentity_1.firstName} ${myIdentity_1.lastName}, j'ai ${myIdentity_1.age} et j'habite à ${myIdentity_1.townn}.`*/

if (myIdentity_2.age > myIdentity_3.age){
    objectphrase =  `${myIdentity_2.firstName} ${myIdentity_2.lastName} est plus agé que ${myIdentity_3.firstName} ${myIdentity_3.lastName}, un écart de ${myIdentity_2.age-myIdentity_3.age}`
} else{
    objectphrase =  `${myIdentity_2.firstName} ${myIdentity_2.lastName} est un enfant comparé à ${myIdentity_3.firstName} ${myIdentity_3.lastName}, avec cet écart de ${myIdentity_3.age-myIdentity_2.age}!`
}

const meterValue =1;
if(myIdentity_1.size > myIdentity_2.size){
    objectphrase =  `${myIdentity_1.firstName} ${myIdentity_1.lastName} est plus grand que ${myIdentity_2.firstName} ${myIdentity_2.lastName}, avec ses ${myIdentity_1.size - myIdentity_2.size}cm de différence.`
    
}else{
    objectphrase =  `${myIdentity_1.firstName} ${myIdentity_1.lastName} est plus petit avec ${myIdentity_2.firstName} ${myIdentity_2.lastName}, avec ses ${myIdentity_2.size - myIdentity_1.size}cm de différence`
    
}

// object dans un objet
let bigTown, smallTown;

if(myIdentity_1.town.Population > myIdentity_2.town.Population){
    bigTown = {
        resident: myIdentity_1.firstName,
        name : myIdentity_1.town.name,
        population: myIdentity_1.town.Population
    }
    smallTown = {
        resident: myIdentity_2.firstName,
        name : myIdentity_2.town.name,
        population: myIdentity_2.town.Population
    }

objectphrase 
}else{
    bigTown = {
        resident: myIdentity_2.firstName,
        name : myIdentity_2.town.name,
        population: myIdentity_2.town.Population
    }
    smallTown = {
        resident: myIdentity_1.firstName,
        name : myIdentity_1.town.name,
        population: myIdentity_1.town.Population
    }
}

if(myIdentity_1.firstName === bigTown.resident){
    objectphrase = `${bigTown.resident} habite dans ${bigTown.name}, qui est plus grande que celle de ${smallTown.resident} qui est ${smallTown.name}.`
}
else{
    objectphrase = `${smallTown.resident} habite dans ${smallTown.name}, qui est plus petite que celle de ${bigTown.resident} qui est ${bigTown.name}.`
}

// Calcul IMC (masse corporel)
// formule IMC : weigth / (size ** 2)
let bigIMC, smallimc, imc1, imc2;
/*
imc1 = myIdentity_1.weight / myIdentity_1.size **2;
imc2 =  myIdentity_2.weight / myIdentity_2.size **2;*/

myIdentity_1.imc = myIdentity_1.weight / myIdentity_1.size **2;
myIdentity_2.imc =  myIdentity_2.weight / myIdentity_2.size **2;

if (imc1 > imc2){
    bigIMC = myIdentity_1
    smallimc = myIdentity_2
}else{
    bigIMC =myIdentity_2
    smallimc = myIdentity_1
}


// function
function calculIMC(pers){
    const imc =pers.weight /pers.size **2
    return imc;
}

objectphrase = `c'est ${bigIMC.firstName} ${bigIMC.lastName} qui a le plus grand imc, il est de ${bigIMC.imc}`
//

//supercify : Nombre d’habitants ÷ superficie (en km²) = nombre d’hab./km²
function calculDensity(identityObject){

    identityObject.town.peopledensity = identityObject.town.Population / identityObject.town.superficy
}

calculDensity(myIdentity_1);
calculDensity(myIdentity_2);
objectphrase = `La ville de ${myIdentity_1.town.name} a une densité de ${myIdentity_1.town.peopledensity} pers/Km² et celle de ${myIdentity_2.town.name} est de ${myIdentity_2.town.peopledensity}.`;
if(myIdentity_1.town.peopledensity > myIdentity_2.town.peopledensity){
    objectphrase += ` c'est donc la ville de ${myIdentity_1.firstName} ${myIdentity_2.lastName} qui habite dans la ville avec la plus grande densité.`
} else{
    objectphrase += ` c'est donc la ville de ${myIdentity_2.firstName} ${myIdentity_2.lastName} qui habite dans la ville avec la plus grande densité.`
}


/*display*/
mainContainerTag.textContent = objectphrase;

