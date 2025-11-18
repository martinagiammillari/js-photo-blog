
// SELEZIONARE GLI ELEMENTI DEL DOM
const container = document.getElementById("container");

// FARE CHIAMATA API PER PRENDERE I DATI
const API = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(API).then(function (resp) {
    const cardArray = resp.data;
    // CREARE DINAMICAMENTE LE CARD

    let cardStr = "";

    cardArray.forEach(function (curCard) {
        cardStr += `
            <div class="card">
                <img class="pin" src="./img/pin.svg" alt="">
                <img src="${curCard.url}" alt="${curCard.title}">
                <div class="card-text">
                    <p>${curCard.date}<br>
                    <span>${curCard.title}</span></p>
                </div>
            </div>
        `;
    });

    // STAMPARE IN PAGINA
    container.innerHTML = cardStr;
});






// REFACTORING DEL CODICE

