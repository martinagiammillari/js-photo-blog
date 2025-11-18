
// SELEZIONARE GLI ELEMENTI DEL DOM
const container = document.getElementById("container");

// FARE CHIAMATA API PER PRENDERE I DATI
const API = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(API).then(function (resp) {

    // CREARE DINAMICAMENTE LE CARD
    const cardArray = resp.data;

    let cardStr = "";

    cardArray.forEach(function (curCard) {
        cardStr += `
            <div class="card rotate">
                <img class="pin" src="./img/pin.svg" alt="">
                <img src="${curCard.url}" alt="${curCard.title}">
                <div class="card-text">
                    <p class="date">${curCard.date}</p>
                    <span>${curCard.title.toUpperCase()}</span>
                </div>
            </div>
        `;
    });

    // STAMPARE IN PAGINA
    container.innerHTML = cardStr;
});






// REFACTORING DEL CODICE

