// FRONT DE NOTRE APPLICATION 
//  l'aide des queryselector on cible des éléments du DOM
const lastname = document.querySelector('#lastname');
const firstname = document.querySelector('#firstname');
//  modification de la couleur des messages d'erreur à l'aide des queryselector et de l'attribut style
const lastnameErrorMessage = document.querySelector('.lastnameErrorMessage');
lastnameErrorMessage.style.color = 'red';
const firstnameErrorMessage = document.querySelector('.firstnameErrorMessage');
firstnameErrorMessage.style.color = 'red';
document.querySelector('.formulaire').addEventListener('submit', handleSubmit);
let fullName = {};

// fonction asynchrone et utilisation try/catch et surtotu asyn/await
async function submitDataToDB() {
    try {
        console.log("fullName", fullName)
        const response = await fetch('http://localhost:3001/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fullName)
            // body: { salut: "yo", toto: "tata" }
        });
        const content = await response.json();
        console.log("content", content);
    } catch (err) {
        console.log('Failed to submit data', err);
    }
}

function handleSubmit(event) {
    // empeche la page de se recharger et la perte des données rentrées pas l'utilisateur
    event.preventDefault();
    fullName = { "lastname": lastname.value, "firstname": firstname.value }
    console.log("lastnameLength", lastname.value.length);
    console.log("lastnameValue", lastname.value);
    console.log("firstnamelength", firstname.value.length);
    console.log("firstnameValue", firstname.value);
    // gestion des erreurs si l'utilisateur ne rentre aucune donnée
    if (lastname.value.length === 0) {
        lastnameErrorMessage.textContent = 'un nom est nécessaire';

    }
    else { lastnameErrorMessage.textContent = ''; }
    if (firstname.value.length === 0) {
        firstnameErrorMessage.textContent = "un prénom est nécessaire";

    }
    else { firstnameErrorMessage.textContent = ''; }
    // si l'input firstname et lastname comporte du contenu alors lancement de fonction qui pour mission de faire la requête au serveur
    if (firstname.value.length >= 1 && lastname.value.length >= 1) {
        submitDataToDB();
    }
}